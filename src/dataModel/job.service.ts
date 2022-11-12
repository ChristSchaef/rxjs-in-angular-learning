import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, combineLatest, map, Observable, shareReplay, tap, throwError } from "rxjs";
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

    private jobSelectedSubject = new BehaviorSubject<number>(0);
    jobSelectedAction$ = this.jobSelectedSubject.asObservable();

    selectedJobChange(jobId: number) {
        this.jobSelectedSubject.next(+jobId);
      }

    selectedJob$ = combineLatest([this.jobs$, this.jobSelectedAction$])
        .pipe
        (
            map(([products, selectedProductId]) =>
                products.find(product => product.id === selectedProductId)
            ),
            tap(product => console.log('selectedProduct', product)),
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