const express = require("express");
const userModel = require("../models/UserModel");
const router = express.Router();
const jwt = require("../JWT");

router.post("/register", (request, response) => {
  var record = request.body;
  userModel.registerStudents(record, (status, id) => {
    if (status) {
      record._id = id;
      response.json({ status: true, data: record });
    } else {
      response.json({ status: false, msg: "Record Not Save !" });
    }
  });
});
router.get("/studentsList", (request, response) => {
  userModel.studentsList((data) => {
    response.json(data);
  });
});
router.get("/gender/:key", (request, response) => {
  let searchParam = request.params.key;
  if (searchParam === "male") {
    userModel.genderM((data) => {
      response.json(data);
    });
  } else {
    userModel.genderF((data) => {
      response.json(data);
    });
  }
});
router.get("/age/:key/:key2", (request, response) => {
  let k1 = request.params.key;
  let k2 = request.params.key2;
  k2 = parseInt(k2);
  // console.log(request.query);
  // console.log(request.params.key);

  if (k1 === "gte") {
    userModel.ageGt(k2, (data) => {
      response.json(data);
    });
  } else {
    userModel.ageLt(k2, (data) => {
      response.json(data);
    });
  }
});
router.get("/city/:key", (request, response) => {
  let searchParam = request.params.key;
  if (searchParam === "indore") {
    userModel.cityIndore((data) => {
      response.json(data);
    });
  } else if (searchParam === "mhow") {
    userModel.cityMhow((data) => {
      response.json(data);
    });
  } else {
    userModel.cityRau((data) => {
      response.json(data);
    });
  }
});
router.get("/branch/:key", (request, response) => {
  let searchParam = request.params.key;
  if (searchParam === "cs") {
    userModel.branchCs((data) => {
      response.json(data);
    });
  } else {
    userModel.branchIt((data) => {
      response.json(data);
    });
  }
});
router.post("/login", (request, response) => {
  userModel.loginUser(request.body, (result) => {
    if (result.status) {
      var token = jwt.generateAccessToken(result.data._id);
      response.json({ status: true, token: token, name: result.data.name });
    } else response.json({ status: false });
  });
});

module.exports = router;
