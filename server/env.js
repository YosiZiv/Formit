const {
  env: { MongoURI, SECRET, TOKEN_EXPIRES },
} = process;
console.log(MongoURI);

module.exports = {
  //  MongoDB MLab Credentials
  TOKEN_EXPIRES,
  SECRET,
  MongoURI,
};
