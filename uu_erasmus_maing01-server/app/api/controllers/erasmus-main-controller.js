"use strict";
const ErasmusMainAbl = require("../../abl/erasmus-main-abl.js");

class ErasmusMainController {
  init(ucEnv) {
    return ErasmusMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new ErasmusMainController();
