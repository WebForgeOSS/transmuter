# **Transmuter**

> Transform an object content based on defined criteria

[![Build Status](https://travis-ci.org/saxjst/transmuter.svg?branch=master)](https://travis-ci.org/saxjst/transmuter)
[![Coverage Status](https://coveralls.io/repos/github/saxjst/transmuter/badge.svg?branch=master)](https://coveralls.io/github/saxjst/transmuter?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/841af7743a474bb61775/maintainability)](https://codeclimate.com/github/saxjst/transmuter/maintainability)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/saxjst/transmuter.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/saxjst/transmuter/context:javascript)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)

## Install

```
$ npm install transmuter
```

## Usage

```js
const transmuter = require('transmuter');

const alterations = [
  { key: "password", val: "(.*)", replacement: "xxxxx" },
  { key: "token", val: "(.*)", replacement: "xxxxx" },
];

const account = {
  email: "john.doe@gmail.com",
  password: "T%dt4e5x;2!",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp"
}

transmuter(alterations, account);
//=> { email: john.doe@gmail.com", password: "xxxxx", token: "xxxxx" }
```

## API

### transmuter ⇒ `Object`
Transform an object content based on defined criteria


**Returns**: `Object` - new object with alterations  
**Curriable**:   


| Param | Type | Description |
| --- | --- | --- |
| alterations | `Object[]` | describe changes to apply depanding on filters |
| object | `Object` | object to apply alterations on |


## License

MIT © [saxjst](https://saxjst.com)
