import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
  Name: {
    type: String,
    require: true,
    unique: true,
  },
  Course: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
  },
  Contact: {
    type: Number,
    require: true,
  },
  Fees: {
    type: Number,
    require: true,
  },
});

export default mongoose.model("student", StudentSchema);
