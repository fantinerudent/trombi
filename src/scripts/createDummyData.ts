import { WorkerModel } from "../database/workers/workers.model";
import { connect, disconnect } from "../database/database";

(async () => {
  connect();

  const workers = [
    {
      name: "Emma Bradley",
      job: "Community manager",
      department: "tech",
      isFav: false,
      isGone: false,
    },
    {
      name: "Elise Conner",
      job: "developer iOs",
      department: "tech",
      isFav: false,
      isGone: false,
    },
    {
      name: "Jack Lawson",
      job: "developer android",
      department: "tech",
      isFav: false,
      isGone: false,
    },
    {
      name: "Oliver Moss",
      job: "lead tech frontend",
      department: "tech",
      isFav: false,
      isGone: false,
    },
    {
      name: "Jamie Reid",
      job: "devops",
      department: "tech",
      isFav: false,
      isGone: false,
    },
    {
      name: "Aidan Bradley",
      job: "marketing chief",
      department: "market",
      isFav: false,
      isGone: false,
    },
  ];
  try {
    for (const worker of workers) {
      await WorkerModel.create(worker);
      console.log(`Created worker ${worker.name} ${worker.job}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();
