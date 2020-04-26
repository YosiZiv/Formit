const {
  env: { MONGO_URI, SECRET, TOKEN_EXPIRES },
} = process;
module.exports = {
  //  MongoDB MLab Credentials
  TOKEN_EXPIRES,
  SECRET,
  MONGO_URI,
};
