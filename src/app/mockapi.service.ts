import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { staffMember } from 'src/interfaceStaff';

@Injectable({
  providedIn: 'root'
})
export class CompanyApiService {
  private _siteURL = 'https://646f8e3209ff19b120877813.mockapi.io/api/staffDetails';
  responseData: any;

  constructor(private _http: HttpClient) { }

  getStaffDetails(): Observable<staffMember[]> {
    return this._http.get<staffMember[]>(this._siteURL).pipe(
      tap(data => console.log('data/error' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(new Error('mockapi service: ' + err.message));
  }
}
