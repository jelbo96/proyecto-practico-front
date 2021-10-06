import { Injectable } from '@angular/core'; // imports the class that provides local storage for token
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Interception In Progress'); // Interception Stage
    /* localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyZjlmNDE2MC01YjlmLTQ2ZDktOTg2Mi0xMjhiZTA1NjQ1NWUiLCJzdWIiOiIyMDIxLTEwLTA2VDExOjE5OjQyLjA4MTAxMDkwMCIsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiJdLCJpYXQiOjE2MzM1Mjk5ODIsImV4cCI6MTYzMzU3MzE4Mn0.hCixMMNKmGEiIjz7SjSS7CY-I8jQ0tAwLAYCv6f0IIAWQc7bGtqD60nyMv5CoaHfRiBfyyHrDzEE_izHO9_mHA'
    );  */ // sets the token in local storage

    const token: any = localStorage.getItem('token'); // This retrieves a token from local storage

    console.log('TOKEN DESDE INTERCEPTOR', token);

    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', token),
      }); // This clones HttpRequest and Authorization header with Bearer token added
    }

    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });
    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Catching Error Stage
        if (error && error.status === 401) {
          console.log('ERROR 401 UNAUTHORIZED'); // in case of an error response the error message is displayed
        }
        const err = error.error.message || error.statusText;
        return throwError(error); // any further errors are returned to frontend
      })
    );
  }
}
