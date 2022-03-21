declare const ejs: any;
declare const moment: any;
declare const getInitials: any;
declare const HOURS: any;
/**@type {import('../models/map-marker-design').MapMarkerDesign} */
declare let _design: any;
declare const jitter: (num: any) => any;
/**
 * @param {UserModel} user
 * @returns last modified timestamp
 */
declare const getLastModified: (user: any) => any;
/**
 * @param {UserModel} user
 * @returns hours for pilot
 */
declare const getHours: (user: any) => {
    total: any;
    jet: any;
    multi: any;
    pic: any;
};
/**
 * @param {UserModel} user
 * @returns ?get location for user
 */
declare const getLocation: (user: any) => string | null;
/**
 * @param {UserModel} user
 * @returns ?get address for user
 */
declare const getAddress: (user: any) => any;
/**
 * @param {UserModel} user
 * @returns ?address for user
 */
declare const getZipCode: (user: any) => any;
/**
 * @param {UserModel} user
 * @param {[Category]} categories
 * @returns {string} category string that represents type ratings
 */
declare const getCategory: (user: any, categories: any) => any;
/**
 * @typedef MapMarkerOptions
 * @type {object}
 * @property {number} index
 * @property {string} iconUrl
 * @property {string} contactLink
 * @property {string} buttonImageUrl
 * @property {string} htmlTemplate
 */
declare class MapMarker {
    /**
     *
     * @param {import('../models/user').User} user
     * @param {import('../models/map').Map} map
     * @param {import('../models/place').Place} places
     * @param {import('../models/category').Category} categories
     * @param {import('../models/map-marker-design').MapMarkerDesign} design
     * @param {MapMarkerOptions} options
     */
    constructor(user: any, map: any, places: any, categories: any, design: any, index?: number);
    /**
     *
     * @param {RenderOptions} options
     */
    render({ id, map_id, address, pic, link, icon, lat, // gets populated by handler based on "place" by zip or address
    lng, // gets populated by handler based on "place" by zip or address
    anim, title, infoopen, category, approved, retina, type, did, other_data, sticky, htmlTemplate, debug, escape, }?: {
        id?: any;
        map_id?: any;
        address?: string | undefined;
        pic?: string | undefined;
        link?: string | undefined;
        icon?: any;
        lat?: any;
        lng?: any;
        anim?: string | undefined;
        title?: string | undefined;
        infoopen?: string | undefined;
        category?: any;
        approved?: string | undefined;
        retina?: string | undefined;
        type?: string | undefined;
        did?: string | undefined;
        other_data?: string | undefined;
        sticky?: string | undefined;
        htmlTemplate?: any;
        debug?: boolean | undefined;
        escape?: boolean | undefined;
    }): {
        description: any;
        id: any;
        map_id: any;
        address: string;
        pic: string;
        link: string;
        icon: any;
        lat: any;
        lng: any;
        anim: string;
        title: string;
        infoopen: string;
        category: any;
        approved: string;
        retina: string;
        type: string;
        did: string;
        other_data: string;
        sticky: string;
    };
}
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
