import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, combineLatest, map, Observable, shareReplay, throwError } from "rxjs";
import { JobService } from "./job.service";
import { Run } from "./run";

@Injectable({
    providedIn: 'root'
})
export class RunService {
    private runsUrl = 'api/runs';

    constructor(private http: HttpClient, private jobService: JobService) { }

    runs$ = this.http.get<Run[]>(this.runsUrl)
        .pipe(
            catchError(this.handleError)
        );

    jobs$ = this.jobService.jobs$
        .pipe(
            catchError(this.handleError)
        );

    runsWithJobs$ = combineLatest([this.runs$, this.jobs$])
        .pipe(
            map(([runs, jobs]) =>
                runs.map(run => (
                    {
                        ...run,
                        job: jobs.find(j => run.jobId === j.id),
                        runStateName: this.mapRunState(run.runState)
                    } as Run))),
            shareReplay(1)
        );


    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.message}`;
        }
        console.error(err);
        return throwError(() => errorMessage);
    }

    private mapRunState(runState: number): string | undefined {
        switch (runState) {
            case 1: {
                return 'Upcoming';
            }
            case 2: {
                return 'Running';
            }
            case 3: {
                return 'Failed';
            }
            case 4: {
                return 'Finished';
            }
            default: {
                return 'Unknown';
            }
        }
    }
}


