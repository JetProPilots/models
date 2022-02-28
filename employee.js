/**
 * @typedef Employee
 * @type {object}
 *
 * @property {number} id
 * @property {string} employee_id
 * @property {string} username
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} photo_href
 * @property {string} status
 * @property {string} primary_email
 * @property {string} secondary_email
 * @property {string} timezone
 * @property {boolean} locked
 * @property {boolean} force_change_password
 * @property {boolean} add_to_new_hire_export
 * @property {boolean} managed_cost_centers_enabled
 * @property {boolean} use_separate_mailing_address
 * @property {Links} _links
 * @property {FirstScreen} first_screen
 * @property {Address} address
 * @property {Dates} dates
 * @property {Ein} ein
 * @property {[NationalIDNumber]} national_id_numbers
 * @property {boolean} showOnMap
 * @property {string} typeRatings
 * @property {string} initials
 */

/**
 * @typedef Links
 * @type {object}
 *
 * @property {string} self
 * @property {string} demographics
 * @property {string} badges
 * @property {string} pay-info
 * @property {string} profiles
 */

/**
 * @typedef Address
 * @type {object}
 *
 * @property {string} country
 * @property {string} city
 * @property {string} state
 */

/**
 * @typedef Dates
 * @type {object}
 *
 * @property {Date} hired
 * @property {Date} started
 */

/**
 * @typedef Ein
 * @type {object}
 *
 * @property {number} id
 */

/**
 * @typedef FirstScreen
 * @type {object}
 *
 * @property {string} id
 */

/**
 * @typedef NationalIDNumber
 * @type {object}
 *
 * @property {string} type
 * @property {boolean} primary
 */

/**
 * @typedef UserModel
 * @type {object}
 * @property {?string} gid
 * @property {?string} token
 * @property {!string} email
 * @property {?string} name
 * @property {!*} profile
 * @property {!string} role
 * @property {!string} type
 * @property {!string} client
 * @property {?Date} lastLogin
 * @property {?string} lastDevice
 * @property {?string} phone
 * @property {?string} textEmail
 * @property {?string} prefEmail
 * @property {?number} rate
 * @property {?number} billerRate
 * @property {?number} travelRate
 * @property {?number} travelBillRate
 * @property {?Date} medicalDate
 * @property {?number} medicalClass
 * @property {!Boolean} hasLoggedIn
 * @property {?[*]} payStubs
 * @property {?*} defaults
 * @property {?string} employeeId
 * @property {?number} kronosKey
 * @property {?Employee} employee
 */

/**
 * @typedef MapMarker
 * @type {object}
 * @property {?string} iconUrl
 * @property {?string} pilotInitials
 * @property {?string} location
 * @property {?string} typeRatings
 * @property {?number} totalHours
 * @property {?number} picHours
 * @property {?number} multiHours
 * @property {?number} jetHours
 * @property {?string} contactLink
 * @property {?string} buttonImageUrl
 * @property {?string} lastModified
 */

module.exports = undefined;
