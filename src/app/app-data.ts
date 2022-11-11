import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RunData } from 'src/dataModel/run-data';
import { Run } from 'src/dataModel/run';
import { JobData } from 'src/dataModel/job-data';
import { Job } from 'src/dataModel/job';

export class AppData implements InMemoryDbService {

  createDb(): { runs: Run[], jobs: Job[] } {
    const runs = RunData.runs;
    const jobs = JobData.jobs
    return { runs, jobs };
  }
}
