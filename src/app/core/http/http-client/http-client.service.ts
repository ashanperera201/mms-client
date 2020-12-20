import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { gateway } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  baseUrl: string = gateway.server;

  constructor(private httpClient: HttpClient) { }

  get = <T>(endpointPath: string): Observable<T> => {
    const url: string = `${this.baseUrl}/${endpointPath}`;
    return this.httpClient.get<T>(url)
      .pipe(catchError(this.errorHandler));
  }

  post = <T>(endpointPath: string, payload: T): Observable<T> => {
    const url: string = `${this.baseUrl}/${endpointPath}`;
    return this.httpClient.post<T>(url, payload)
      .pipe(catchError(this.errorHandler));
  }

  put = <T>(endpointPath: string, payload: T) => {
    const url: string = `${this.baseUrl}/${endpointPath}`;
    return this.httpClient.put<T>(url, payload)
      .pipe(catchError(this.errorHandler));
  }

  delete = <T>(endpointPath: string) => {
    const url: string = `${this.baseUrl}/${endpointPath}`;
    return this.httpClient.delete<T>(url)
      .pipe(catchError(this.errorHandler));
  }

  patch = <T>(endpointPath: string, payload: T) => {
    const url: string = `${this.baseUrl}/${endpointPath}`;
    return this.httpClient.patch<T>(url, payload)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler = (error: HttpErrorResponse) => {
    return throwError(error);
  }
}
