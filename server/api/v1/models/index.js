const mongoose = require("mongoose");
const { MongoURI } = require("../../../env");
console.log("server", MongoURI);
// DB Config key (credentials)

mongoose.set("debug", false);
mongoose.set("useFindAndModify", false);
// DB Connection settings
const connectionSettings = {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
// Connect to MongoDB
mongoose
  .connect(MongoURI, connectionSettings)
  .then(
    () => console.log("DB cluster connected..."),
    (err) => {
      console.error(`${new Date()} -> Failed to connect to MongoDB!`, err);
      // Close Server
      process.exit(0);
    }
  )
  .catch((err) => console.log(err));
// Exports
// module.exports.User = require("./userModel");
