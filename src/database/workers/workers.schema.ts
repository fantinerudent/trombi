import { Schema } from "mongoose";
import { findOneOrCreate } from "./workers.statics";
import { setLastUpdated } from "./workers.methods";

const WorkerSchema = new Schema({
  name: String,
  job: String,
  department: Number,
  img: String || null,
  isFav: Boolean,
  isGone: Boolean,
  lastUpdated: {
    type: Date,
    default: new Date(),
  }
});

WorkerSchema.statics.findOneOrCreate = findOneOrCreate;
WorkerSchema.methods.setLastUpdated = setLastUpdated;

export default WorkerSchema;