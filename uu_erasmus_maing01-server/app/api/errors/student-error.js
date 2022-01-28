"use strict";

const ErasmusMainUseCaseError = require("./erasmus-main-use-case-error.js");
const STUDENT_ERROR_PREFIX = `${ErasmusMainUseCaseError.ERROR_PREFIX}student/`;

const Update = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}update/`,
  InvalidDtoIn: class extends ErasmusMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  StudentDaoUpdateFailed: class extends ErasmusMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}studentDaoUpdateFailed`;
      this.message = "Update student by gateway Dao update failed.";
    }
  }
};

const Create = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}create/`,
  InvalidDtoIn: class extends ErasmusMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  StudentDaoCreateFailed: class extends ErasmusMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}studentDaoCreateFailed`;
      this.message = "Create student by gateway Dao update failed.";
    }
  }
};

const Get = {
  UC_CODE: `${STUDENT_ERROR_PREFIX}get/`,
  InvalidDtoIn: class extends ErasmusMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },
  StudentDaoGetFailed: class extends ErasmusMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}studentDaoGetFailed`;
      this.message = "Get student by id Dao get failed.";
    }
  }
};

module.exports = {
  Get,
  Create,
  Update
};
