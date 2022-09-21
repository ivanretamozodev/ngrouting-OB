import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`ha ocurrido un error ${error.error}`);
    } else {
      console.error(
        `error en el backend ${error.status},el error es: ${error.error}`
      );
    }
    return throwError(() => 'error en la petición de contacto aleatorio');
  }
  getRandomContact(): Observable<any> {
    return this.http
      .get(`https://randomuser.me/api`)
      .pipe(retry(2), catchError(this.handleError));
  }
  getRandomContacts(n: number): Observable<any> {
    const params: HttpParams = new HttpParams().set('results', n);
    return this.http
      .get(`https://randomuser.me/api`, { params })
      .pipe(retry(2), catchError(this.handleError));
  }

  getRandomContactsByGenre(genre: string) {
    const params: HttpParams = new HttpParams().set('results', genre);
    return this.http
      .get(`https://randomuser.me/api/`, { params })
      .pipe(retry(2), catchError(this.handleError));
  }
}
