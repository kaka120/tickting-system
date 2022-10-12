const service_library_support = require('../helpers/service_library_support');

const bcrypt = require('bcryptjs');

const login_model = require('../model/login_model');

const LoginRegsistration = async (userParam) => {
    return new Promise(async (resolve, reject) => {
        await login_model.findOne({ username: userParam.username }).then(function (data) {
            if (data) {
                reject({ status: 409, message: data.username + " already registared " })
            }
            else {
                const user = new login_model(userParam);
                if (userParam.password) {
                    user.hash = bcrypt.hashSync(userParam.password, 10);
                }
                user.save((error, regiterUser) => {
                    if (error) {
                        console.log("error")
                        console.log(error)
                        reject({ status: 500, message: error });
                    }
                    else {
                        resolve({ status: 201, message: regiterUser.username + " sucessfully registared " });
                    }
                });
            }
        })
    });
}

module.exports = LoginRegsistration;

