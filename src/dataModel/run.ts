import { Job } from "./job";

export interface Run {
    id: number;
    runState: number;
    runStateName?: string;
    jobId: number;
    started: Date;
    lastUpdate: Date;
    job?:Job;
  }