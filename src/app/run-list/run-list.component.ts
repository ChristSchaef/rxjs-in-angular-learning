import { Component } from '@angular/core';
import { catchError, EMPTY, Subject } from 'rxjs';
import { JobService } from 'src/dataModel/job.service';
import { Run } from 'src/dataModel/run';
import { RunService } from 'src/dataModel/run.service';
import { JobOverviewComponent } from '../job-overview/job-overview.component';

@Component({
  selector: 'run-list',
  templateUrl: './run-list.component.html',
  styleUrls: ['./run-list.component.css']
})
export class RunListComponent{
  pageTitle = 'Run List';

  constructor(private runService: RunService, private jobService: JobService) { }
  
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  runs$ = this.runService.runsWithJobs$.pipe(
    catchError(err => 
      { 
        this.errorMessageSubject.next(err);
        return EMPTY; 
      })
  );

  getRunEntryClass(runState: number): string{
    var className = 'runs-table-row'
    switch (runState) {
        case 1: {
            return className + ' upcoming-row';
        }
        case 2: {
          return className + ' running-row';
        }
        case 3: {
          return className + ' failed-row';
        }
        case 4: {
          return className + ' finished-row';
        }
        default: {
          return className + ' unkown-row';
        }
    }
  }

  onRunEntryClick(event: any, jobId: number | undefined): void {
    if (jobId) {
      this.jobService.selectedRunChange(jobId);
    }
    var target = event.target.parentElement;
    target.parentElement.childNodes.forEach(
      (elm: any) => {
        if (elm?.classList?.contains('active') > -1) {
          elm?.classList.remove("active");
        }
      }
    );

    
    target?.classList.toggle("active")

  }

  onRunRerunClick(run: Run | undefined): void {
    if(!run){
      return;
    }
    this.runService.runRetriggered(run);
  }

}
