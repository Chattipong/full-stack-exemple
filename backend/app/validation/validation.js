const Joi = require("joi");

exports.validateCreateUser = async function (data) {
  try {
    var schema = Joi.object({
      name: Joi.string().required(),
    });
    return schema.validate(data);
  } catch (e) {
    console.log("error validateCreateUserAccount");
    throw e;
  }
};
