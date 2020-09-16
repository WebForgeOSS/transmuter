const transmuter = require("../.");

const faker = require("faker");
const applyRules = require("../applyRules");

faker.locale = "fr";

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
  {
    key: "birthday",
    val: "(.*)",
    replacement: "XXX",
    replace_non_string: true
  },
  { key: "(.*)", val: "Bearer:? [a-zA-Z0-9-_.]+", replacement: "Bearer jwttoken" }
];

describe("rules tests", () => {
  const applyRulesForUser = applyRules(rulesForUsers);

  test("if key is a password then the content should be replace by xxxxx #1", () => {
    expect(applyRulesForUser(faker.internet.password(), "password")).toBe(
      "xxxxxxxxxx"
    );
  });

  test("if key is a password then the content should be replace by xxxxx #2", () => {
    expect(applyRulesForUser(faker.internet.password(), "PasSWord")).toBe(
      "xxxxxxxxxx"
    );
  });

  test("if key is a containt 'phone' then the content should be replace by xxxxx #1", () => {
    expect(applyRulesForUser(faker.phone.phoneNumber(), "phone")).toBe(
      "xxxxxxxxxx"
    );
  });

  test("if key is a containt 'phone' then the content should be replace by xxxxx #2", () => {
    expect(applyRulesForUser(faker.phone.phoneNumber(), "phoneNumber")).toBe(
      "xxxxxxxxxx"
    );
  });

  test("if key is a containt 'token' then the content should be replace by xxxxx", () => {
    expect(applyRulesForUser("9d4fe3560925d9fac707cf0cf593f435", "token")).toBe(
      "xxxxxxxxxx"
    );
  });

  test("if key doesn't match with any rules then the content should not be modified #1", () => {
    expect(applyRulesForUser("hokutoken@gmail.com", "email")).toBe(
      "hokutoken@gmail.com"
    );
  });

  test("if key doesn't match with any rules then the content should not be modified #2", () => {
    expect(applyRulesForUser("token@gmail.com", "email")).toBe(
      "token@gmail.com"
    );
  });
});
