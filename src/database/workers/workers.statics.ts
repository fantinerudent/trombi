import { IWorkerDocument, IWorkerModel } from "./workers.types";

export async function findOneOrCreate(
  this: IWorkerModel,
  {
    name,
    job,
    department,
    isFav,
    isGone,
    img
  }: {
    name: string;
    job: string;
    department: string;
    isFav: boolean;
    isGone: boolean;
    img?: string;
  }
): Promise<IWorkerDocument> {
  const record = await this.findOne({ name, job, department, isFav, isGone });
  if (record) {
    return record;
  } else {
    return this.create({ name, job, department, isFav, isGone });
  }
}
