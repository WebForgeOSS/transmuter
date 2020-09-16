
const R = require("ramda");
const deepMapWithKey = require("deep-map-with-key");
const applyRules = require("./applyRules");

/** Transform an object content based on defined criteria
 *
 * @curriable
 * @param {Object[]} alterations - describe changes to apply depanding on filters
 * @param {Object} object - object to apply alterations on
 * @return {Object} new object with alterations
 * @api public
 */
const transmuter = (alterations, object) => deepMapWithKey(applyRules(alterations), object);

module.exports = transmuter;
