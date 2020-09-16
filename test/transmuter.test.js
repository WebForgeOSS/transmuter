const obfuscator = require("../.");
const transmuter = require("../.");
 const deepMapWithKey = require("deep-map-with-key");

const faker = require("faker");
const applyRules = require("../applyRules");

describe("transmuter tests", () => {
  test("if key is a password then the content should be replace by xxxxx #1", () => {
    const rulesForUsers = [
      {
        key: "(.*)",
        val: "(token)(=|:)[a-zA-Z0-9-_.]+",
        replacement: "$1=xxxxx"
      },
      {
        key: "(.*)",
        val: "(password)(=|:)[a-zA-Z0-9-_.]+",
        replacement: "$1=xxxxx"
      },
      { key: "password", val: "(.*)", replacement: "xxxxx" },
      { key: "token", val: "(.*)", replacement: "xxxxx" },
      { key: "phone(number)?", val: "(.*)", replacement: "xxxxx" },
    ];

    const account = {
      email: "john.doe@gmail.com",
      password: "T%dt4e5x;2!",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp"
    }

    const result = transmuter(rulesForUsers, account);

    expect(result).toEqual({
      email: 'john.doe@gmail.com',
      password: 'xxxxxxxxxx',
      token: 'xxxxxxxxxx'
    });
  });
});
