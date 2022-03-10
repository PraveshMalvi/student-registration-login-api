const dbConn = require("./DB");
const { ObjectId } = require("mongodb");
// const webRouter = require("../routers/WebRouter");

class UserModel {
  registerStudents(data, callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails").insertMany(data, (err, result) => {
          // console.log(result);
          if (err) callback(false);
          else callback(true, result.insertedId);
        });
      }
    });
  }
  studentsList(callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails")
          .find()
          .toArray((err, data) => {
            if (err) callback([]);
            else callback(data);
          });
      }
    });
  }
  genderM(callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails")
          .find({ gender: "M" })
          .toArray((err, data) => {
            if (err) callback([]);
            else callback(data);
          });
      }
    });
  }
  genderF(callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails")
          .find({ gender: "F" })
          .toArray((err, data) => {
            if (err) callback([]);
            else callback(data);
          });
      }
    });
  }
  ageGt(age, callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails")
          .find({ age: { $gte: age } })
          .toArray((err, data) => {
            if (err) callback([]);
            else callback(data);
          });
      }
    });
  }
  ageLt(age, callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails")
          .find({ age: { $lte: age } })
          .toArray((err, data) => {
            if (err) callback([]);
            else callback(data);
          });
      }
    });
  }
  cityIndore(callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails")
          .find({ city: "Indore" })
          .toArray((err, data) => {
            if (err) callback([]);
            else callback(data);
          });
      }
    });
  }
  cityMhow(callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails")
          .find({ city: "Mhow" })
          .toArray((err, data) => {
            if (err) callback([]);
            else callback(data);
          });
      }
    });
  }
  cityRau(callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails")
          .find({ city: "Rau" })
          .toArray((err, data) => {
            if (err) callback([]);
            else callback(data);
          });
      }
    });
  }
  branchCs(callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails")
          .find({ branch: "CS" })
          .toArray((err, data) => {
            if (err) callback([]);
            else callback(data);
          });
      }
    });
  }
  branchIt(callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails")
          .find({ branch: "IT" })
          .toArray((err, data) => {
            if (err) callback([]);
            else callback(data);
          });
      }
    });
  }
  loginUser(data, callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails").findOne(data, (err, data) => {
          if (err || data == null) callback({ status: false });
          else callback({ status: true, data: data });
        });
      }
    });
  }
  getUser(userid, callback) {
    dbConn((status, db) => {
      if (status) {
        db.collection("studentDetails").findOne(
          { _id: ObjectId(userid) },
          (err, data) => {
            if (err || data == null) callback({ status: false });
            else callback({ status: true, data: data });
          }
        );
      }
    });
  }
}

module.exports = new UserModel();
