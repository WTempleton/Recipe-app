const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
require("dotenv").config();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log(error));

module.exports = mongoose;
