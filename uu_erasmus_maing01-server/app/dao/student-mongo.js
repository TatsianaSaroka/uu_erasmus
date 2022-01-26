"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class StudentMongo extends UuObjectDao {

  async createSchema() {
    await super.createIndex({ awid: 1, id: 1 }, { unique: true });
  }

  async get(awid, id) {
    return await super.findOne({ awid, id });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async update(student) {
    let filter = { id: student.id, awid: student.awid };
    return await super.findOneAndUpdate(filter, student, "NONE");
  }

}

module.exports = StudentMongo;
