const ejs = require('ejs');
const moment = require('moment');
const getInitials = require('../modules/get-initials');
const HOURS = require('../modules/kronos/hr-custom-field-map');

/**@type {import('../models/map-marker-design').MapMarkerDesign} */
let _design = null;

// randomize pins within an approx 30 mi square area
const jitter = (num) => {
  const direction = Math.random() * 10 > 5 ? 1 : -1; // randomly -1 or 1
  const delta = 0.01; // 1 degree lat = 69 miles / 1 degree of long = 54.66 miles
  return num + direction * delta; // plus or minus 1/10 of 1 degree
};

/**
 * @param {UserModel} user
 * @returns last modified timestamp
 */
const getLastModified = (user) => {
  const lastLogin = user.lastLogin ? user.lastLogin : new Date();
  return new moment(lastLogin, 'dd MMM YYYY').format('DD MMM YYYY');
};

/**
 * @param {UserModel} user
 * @returns hours for pilot
 */
const getHours = (user) => {
  const fields = user
    ? user.employee
      ? user.employee.customFields
        ? user.employee.customFields
        : []
      : []
    : [];

  return {
    total: HOURS.get(fields, HOURS.TOTAL),
    jet: HOURS.get(fields, HOURS.JET),
    multi: HOURS.get(fields, HOURS.MULTI_ENGINE),
    pic: HOURS.get(fields, HOURS.PIC),
  };
};

/**
 * @param {UserModel} user
 * @returns ?get location for user
 */
const getLocation = (user) => {
  const address = getAddress(user);
  address.state = !address.state ? '' : address.state;
  if (!address || !address.zip || !address.state) return null;
  return `${address.city}, ${address.state.toUpperCase()}`;
};

/**
 * @param {UserModel} user
 * @returns ?get address for user
 */
const getAddress = (user) => {
  if (!user || !user.employee || !user.employee.address) return null;
  return user.employee.address;
};

/**
 * @param {UserModel} user
 * @returns ?address for user
 */
const getZipCode = (user) => {
  const address = getAddress(user);
  if (!address || !address.zip) return null;
  return address.zip;
};

/**
 * @param {UserModel} user
 * @param {[Category]} categories
 * @returns {string} category string that represents type ratings
 */
const getCategory = (user, categories) => {
  if (!user || !user.employee || !user.employee.skills) return '';
  const names = user.employee.skills
    .map((s) => (s.name ? s.name.toLowerCase() : null))
    .filter((n) => !!n);
  const ids = categories
    .filter((c) => names.includes(c.category_name.toLowerCase()))
    .map((c) => c.id);
  const category = ids.length > 0 ? ids.join(',') : '83'; // if no other categories found default to "ID: 83 = Unavailable"
  return category;
};

/**
 * @typedef MapMarkerOptions
 * @type {object}
 * @property {number} index
 * @property {string} iconUrl
 * @property {string} contactLink
 * @property {string} buttonImageUrl
 * @property {string} htmlTemplate
 */

class MapMarker {
  /**
   *
   * @param {import('../models/user').User} user
   * @param {import('../models/map').Map} map
   * @param {import('../models/place').Place} places
   * @param {import('../models/category').Category} categories
   * @param {import('../models/map-marker-design').MapMarkerDesign} design
   * @param {MapMarkerOptions} options
   */
  constructor(user, map, places, categories, design, index = 0) {
    _design = design;
    this.debug = false;
    this.htmlTemplate = design.html;
    this.iconUrl = design.icons.card;
    this.contactLink = design.contactLink;
    this.buttonImageUrl = design.buttonImageUrl;
    this.index = index;
    this.map_id = map.id;
    this.pilotInitials = user.employee.initials
      ? user.employee.initials
      : getInitials(user.employee);
    this.typeRatings = user.employee.typeRatings;
    this.category = getCategory(user, categories);
    this.lastModified = getLastModified(user);
    this.zipCode = getZipCode(user);
    this.address = getAddress(user);
    this.location = getLocation(user);
    const hours = getHours(user);
    this.totalHours = hours.total;
    this.picHours = hours.pic;
    this.multiHours = hours.multi;
    this.jetHours = hours.jet;
    this.job = user.employee.job.name;
    this.status = user.employee.status;
    this.employeeId = user.employee.employee_id;

    const place = places
      .filter((p) => {
        if (this.zipCode && p.zip) {
          return this.zipCode === p.zip;
        }
        if (this.address && this.address.city && this.address.state) {
          return (
            this.address.city.toLowerCase() === p.city.toLowerCase() &&
            this.address.state.toLowerCase() === p.state.toLowerCase()
          );
        }
        return false;
      })
      .reduce((p, c) => c, null);
    if (place) {
      this.lng = place.location[0];
      this.lat = place.location[1];
    } else {
      console.log(
        `failed to get long/lat for ${this.address.city} ${this.address.state} ${this.address.zip}`
      );
      // fallback to NIIC
      this.lat = 41.1199397;
      this.long = -85.1004474;
    }
  }

  /**
   *
   * @param {RenderOptions} options
   */
  render({
    id = this.index,
    map_id = this.map_id,
    address = '',
    pic = '',
    link = '',
    icon = _design.icons.pin,
    lat = jitter(this.lat), // gets populated by handler based on "place" by zip or address
    lng = jitter(this.lng), // gets populated by handler based on "place" by zip or address
    anim = '0',
    title = '',
    infoopen = '0',
    category = this.category,
    approved = '1',
    retina = '0',
    type = '0',
    did = '',
    other_data = '',
    sticky = '0',
    htmlTemplate = this.htmlTemplate,
    debug = false,
    escape = true,
  } = {}) {
    this.debug = !!debug;
    if (!htmlTemplate) {
      throw new Error('Unable to compile html without a htmlTemplate');
    }
    var html = ejs.compile(htmlTemplate)(this, { beautify: false }).replace(/\n/gi, '');
    return {
      description: html,
      id: id,
      map_id: map_id,
      address: address,
      pic: pic,
      link: link,
      icon: icon,
      lat: lat,
      lng: lng, // gets populated by handler based on "place" by zip
      anim: anim,
      title: title,
      infoopen: infoopen,
      category: category && category.length > 0 ? category : '83',
      approved: approved,
      retina: retina,
      type: type,
      did: did,
      other_data: other_data,
      sticky: sticky,
    };
  }
}

module.exports = MapMarker;

/**
 * @typedef RenderOptions
 * @type {object}
 * @property {string=} htmlTemplate
 * @property {string=} id
 * @property {string=} map_id
 * @property {string=} address
 * @property {string=} pic
 * @property {string=} link
 * @property {string=} icon
 * @property {string=} lat
 * @property {string=} lng
 * @property {string=} anim
 * @property {string=} title
 * @property {string=} infoopen
 * @property {string=} category
 * @property {string=} approved
 * @property {string=} retina
 * @property {string=} type
 * @property {string=} did
 * @property {string=} other_data
 * @property {string=} sticky
 */
