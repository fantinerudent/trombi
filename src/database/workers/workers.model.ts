import { model } from "mongoose";
import { IWorkerDocument } from "./workers.types";
import WorkerSchema from "./workers.schema";

export const WorkerModel = model<IWorkerDocument>("worker", WorkerSchema);
