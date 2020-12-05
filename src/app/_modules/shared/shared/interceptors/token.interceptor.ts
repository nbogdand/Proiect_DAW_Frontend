import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(
        req: import("@angular/common/http").HttpRequest<any>,
        next: import("@angular/common/http").HttpHandler
    ): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {

        req = req.clone({
            setHeaders: {
                Autorization: `${this.getToken()}`
            }
        });
        return next.handle(req);
    }

    getToken() {
        return localStorage.getItem('token');
    }
}

export const TokenInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
};