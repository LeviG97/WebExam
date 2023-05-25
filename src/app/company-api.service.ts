import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { Data } from 'src/dataResponse';

@Injectable({
  providedIn: 'root'
})
export class CompanyApiService {

  private _siteURL='https://646f8e3209ff19b120877813.mockapi.io/api/CompanyDetails'


  constructor(private http: HttpClient) { }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this._siteURL).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError('Error occurred while fetching data.');
      })
    );
  }
}
