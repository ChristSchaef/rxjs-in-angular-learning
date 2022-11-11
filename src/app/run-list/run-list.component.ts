import { Component } from '@angular/core';
import { catchError, EMPTY, Subject } from 'rxjs';
import { RunService } from 'src/dataModel/run.service';

@Component({
  selector: 'app-run-list',
  templateUrl: './run-list.component.html',
  styleUrls: ['./run-list.component.css']
})
export class RunListComponent{
  pageTitle = 'Run List';

  constructor(private runService: RunService) { }
  
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  runs$ = this.runService.runsWithJobs$.pipe(
    catchError(err => 
      { 
        this.errorMessageSubject.next(err);
        return EMPTY; 
      })
  );
}
