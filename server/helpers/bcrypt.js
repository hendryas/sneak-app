const bcrypt = require("bcrypt");
const saltRound = +process.env.SALT_ROUND;

const encryptPwd = (pwd) => {
  let result = bcrypt.hashSync(pwd, saltRound);
  return result;
};

const decryptPwd = (pwd, hashPwd) => {
  let result = bcrypt.compareSync(pwd, hashPwd);
  return result;
};

module.exports = {
  encryptPwd, decryptPwd
};
