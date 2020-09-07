import { Document, Model } from "mongoose";

export interface IWorker {
  name: String;
  job: String;
  department: String;
  img?: String;
  isFav: Boolean;
  isGone: Boolean;
  lastUpdated?: Date;
}
export interface IWorkerDocument extends IWorker, Document {
  setLastUpdated: (this: IWorkerDocument) => Promise<void>;
}

export interface IWorkerModel extends Model<IWorkerDocument> {
  findOneOrCreate: (
    this: IWorkerModel,
    {
      name,
      job,
      department,
      img,
      isFav,
      isGone,
    }: {
      name: string;
      job: string;
      department: string;
      img?: string;
      isFav: boolean;
      isGone: boolean;
    }
  ) => Promise<IWorkerDocument>;
}
