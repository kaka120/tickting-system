const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const login_model = require("../model/login_model");
const LoginAuthentication = async (userParam) => {
  return new Promise(async (resolve, reject) => {
    if (!userParam.userName || !userParam.passWord)
      reject({ status: 401, message: " please upload validate data " });
    await login_model.findOne(
      { userName: userParam.userName },
      function (err, login_model) {
        if (err) {
          reject({ status: 500, message: err });
        } else {
          if (login_model) {
            var isPasswordValid = bcrypt.compareSync(
              userParam.passWord,
              login_model.hash
            );
            if (!isPasswordValid) {
              reject({ status: 401, message: " Not Authorised User " });
            } else {
              let payload = {
                userId: login_model.userId,
                userName: login_model.userName,
              };
              let token;
              token = jwt.sign(payload, "config.secrets.session", {
                expiresIn: "1000s",
              });
              resolve({
                status: 200,
                message: {
                  auth: true,
                  token: token,
                  message: "User Logged In Successfully",
                },
              });
            }
          } else {
            reject({ status: 401, message: " Not Authorised User " });
          }
        }
      }
    );
  });
};

module.exports = LoginAuthentication;
