import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, shareReplay, throwError } from "rxjs";
import { Job } from "./job";

@Injectable({
    providedIn: 'root'
})
export class JobService {
    private jobsUrl = 'api/jobs';

    constructor(private http: HttpClient) { }

    jobs$ = this.http.get<Job[]>(this.jobsUrl)
    .pipe(
        catchError(this.handleError),
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
}