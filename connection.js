import mongoose from "mongoose";

export async function dbconnection(uri) {
  mongoose
    .connect(uri)
    .then(() => console.log("Db connected!"))
    .catch((err) => console.log(err));
}
