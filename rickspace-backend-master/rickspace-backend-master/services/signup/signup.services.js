const userRepo = require('../../repository/signup/signup.repo');
const Common = require('../../functions/common');
const jwt = require('jsonwebtoken');

const common = new Common();

// functionality
// token generation

exports.registrationServie = async (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      const { name } = req.body;
      userData = req.body;
      userData.password = req.body.password
        ? await common.hashPassword(req.body.password, 11)
        : null;
      let insertResponse = await userRepo.userRegistration(userData);

      if (insertResponse) {
        resolve(insertResponse);
      } else {
        reject(insertResponse);
      }
    } catch (error) {
      console.log('servives error', error);
      reject(error);
    }
  });
};
