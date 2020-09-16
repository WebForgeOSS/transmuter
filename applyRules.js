const R = require("ramda");

/** Transform string into regex
 *
 * @param {Object[]} rules - describe the  and changes to apply
 * @return {Object[]} Returns rules with setted RegExp
 */
const regexRules = rules => {
  return rules.map(o =>
    Object.assign(o, {
      val_matcher: new RegExp(o.val, "gi"),
      key_matcher: new RegExp(o.key, "gi")
    })
  );
};

/** Transform a value based on a serie of rules
 *
 * @curriable
 * @param {Object[]} rules - describe changes to apply depanding on filters
 * @param {String} key - key associated to the value
 * @param {Any} value - value associated to the key
 * @return {Any} Returns a new value after applying rules
 */
const applyRules = R.curry((rules, val, key) => {
  const regexedRules = regexRules(rules);
  let newVal = val;

  regexedRules.forEach(regexedRule => {
    if (key.match(regexedRule.key_matcher)) {
      if (typeof newVal === "string") {
        newVal = newVal.replace(
          regexedRule.val_matcher,
          regexedRule.replacement
        );
      } else if (regexedRule.replace_non_string) {
        newVal = regexedRule.replacement;
      }
    }
  });

  return newVal;
});

module.exports = applyRules;
