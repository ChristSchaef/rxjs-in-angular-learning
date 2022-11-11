import { Job } from "./job";

export interface Run {
    id: number;
    runState?: number;
    jobId?: number;
    started?: Date;
    lastUpdate?: Date;
    job?:Job;
  }