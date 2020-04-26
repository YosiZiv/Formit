const {
  env: { MongoURI, SECRET, TOKEN_EXPIRES },
} = process;
module.exports = {
  //  MongoDB MLab Credentials
  TOKEN_EXPIRES,
  SECRET,
  MongoURI,
};
