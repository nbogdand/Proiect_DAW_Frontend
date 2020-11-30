import { HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(
        req: import("@angular/common/http").HttpRequest<any>,
        next: import("@angular/common/http").HttpHandler
    ): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError( (error, _) => {
                if (error instanceof HttpErrorResponse) {
                    
                    const serverError = error.error;
                    let modalStateErrors = '';
                    
                    if (serverError.errors && typeof serverError.errors === 'object') {
                        for (const key in serverError.errors) {
                            if (serverError.errors[key]) {
                                modalStateErrors += serverError.errors[key] + "\r\n";
                            }
                        }
                    }

                    return throwError(modalStateErrors || serverError);
                }

                return throwError(error.statusText);
            })
        ); 
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};