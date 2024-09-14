import mongoose from "mongoose";
import dontenv from "dotenv";
dontenv.config();

const URL =
  process.env.MONGODB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const dbConnection = mongoose
  .connect(URL, options)
  .then((result) => console.log("Database connection is success."))
  .catch((err) => console.log(err));

export default dbConnection;
