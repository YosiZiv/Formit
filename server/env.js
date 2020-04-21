const {
  env: { MongoURI },
} = process;
console.log(MongoURI);

module.exports = {
  //  MongoDB MLab Credentials
  MongoURI,
};
