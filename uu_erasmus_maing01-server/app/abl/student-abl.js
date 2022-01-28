"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/student-error.js");

const WARNINGS = {
    updateUnsupportedKeys: {
      code: `${Errors.Update.UC_CODE}unsupportedKeys`,
    },
    createUnsupportedKeys: {
      code: `${Errors.Update.UC_CODE}unsupportedKeys`,
    },
    getUnsupportedKeys: {
      code: `${Errors.Update.UC_CODE}unsupportedKeys`,
    },
};

class StudentAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("student");
  }

  async get(awid, dtoIn) {
    let validationResult = this.validator.validate("studentGetDtoInType", dtoIn);
    // hds 2.2, 2.3, A4, A5
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );
    //dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    // hds 3
    let student = await this.dao.get(awid, dtoIn.id);
    if (!student) {
      throw new Errors.Get.StudentDaoGetFailed(uuAppErrorMap, { dataId: dtoIn.id });
    }
    // hds 4
    student.uuAppErrorMap = uuAppErrorMap;
    return student;
  }

  async create(awid, dtoIn) {
    let validationResult = this.validator.validate("studentCreateDtoInType", dtoIn);
    // hds 2.2, 2.3, A3, A4
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );
    //dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    dtoIn.awid = awid;
    let student;
    try {
      student = await this.dao.create(dtoIn);
    } catch (e) {
      // A8
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.StudentDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    // hds 4
    student.uuAppErrorMap = uuAppErrorMap;
    return student;
  }


  async update(awid, dtoIn) {
    let validationResult = this.validator.validate("studentUpdateDtoInType", dtoIn);
    // hds 2.2, 2.3, A3, A4
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.updateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );
    // hds 3
    let student = await this.dao.get(awid, dtoIn.id);
    // A5
    if (!student) {
      throw new Errors.Update.StudentDoesNotExist({ uuAppErrorMap }, { studentId: dtoIn.id });
    }
    // hds 4
   // dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    // hds 7rs
    try {
      dtoIn.awid = awid;
      student = await this.dao.update(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A10
        throw new Errors.Update.StudentDaoUpdateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    // hds 8
    student.uuAppErrorMap = uuAppErrorMap;
    return student;
  }

}

module.exports = new StudentAbl();
