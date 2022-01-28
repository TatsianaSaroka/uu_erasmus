"use strict";
const StudentAbl = require("../../abl/student-abl.js");

class StudentController {

  get(ucEnv) {
    return StudentAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return StudentAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  update(ucEnv) {
    return StudentAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

}

module.exports = new StudentController();
