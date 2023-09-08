const userModel = require("../../models/users");
const { validateCreateUser } = require("../../validation/validation");
exports.createUserAccountSocket = async function (data) {
  try {
    var user = await userModel.findOne({ name: req.body.name }, { _id: 1 });
    if (user != undefined && user != null) {
      return res.status(200).json({
        status: 200,
        success: false,
        data: "Name is already exists",
        obj: null,
      });
    }
    var create = await new userModel({
      name: req.body.name,
    }).save();

    if (create._id != undefined) {
    } else {
      return false;
    }
  } catch (e) {
    console.log("error createUserAccount ");
  }
};
exports.createUserAccount = async function (req, res) {
  try {
    const { error } = await validateCreateUser(req.body);

    if (error) {
      return res.status(422).json({
        status: 422,
        success: false,
        data: error.details[0].message,
      });
    }

    var user = await userModel.findOne({ name: req.body.name }, { _id: 1 });
    if (user != undefined && user != null) {
      return res.status(200).json({
        status: 200,
        success: false,
        data: "Name is already exists",
        obj: null,
      });
    }
    var create = await new userModel({
      name: req.body.name,
    }).save();

    if (create._id != undefined) {
      return res.status(200).json({
        status: 200,
        success: true,
        data: "Create account success",
        obj: null,
      });
    } else {
      return res.status(200).json({
        status: 200,
        success: false,
        data: "Create account failed",
        obj: null,
      });
    }
  } catch (e) {
    console.log("error createUserAccount ");
  }
};

exports.createUserAccountTest = async function (data) {
  try {
    return data;
  } catch (e) {
    console.log("error createUserAccountTest ");
  }
};
