
import { IWorkerDocument } from "./workers.types";
export async function setLastUpdated(this: IWorkerDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
