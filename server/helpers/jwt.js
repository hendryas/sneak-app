const jwt = require("jsonwebtoken");
const secretCode = process.env.SECRET_CODE;

const encodeToken = (user) => {
  const { id, username, email, avatar } = user;
  let token = jwt.sign(
    {
      id,
      username,
      email,
      avatar,
    },
    secretCode
  );
  return token;
};

const decodeToken = (token) => {
  let result = jwt.verify(token, secretCode);
  return result;
};

module.exports = {
  encodeToken,
  decodeToken,
};
