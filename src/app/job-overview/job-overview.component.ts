import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { JobService } from 'src/dataModel/job.service';

@Component({
  selector: 'app-job-overview',
  templateUrl: './job-overview.component.html',
  styleUrls: ['./job-overview.component.css']
})
export class JobOverviewComponent {
  
  errorMessage = '';

  constructor(private jobService: JobService) { }

  job$ = this.jobService.selectedJob$.pipe(
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    })
  )

}
