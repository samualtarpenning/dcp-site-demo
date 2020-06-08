import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, BehaviorSubject, of } from 'rxjs';

@Injectable()
export class AuthService implements CanActivate {
  loggedInSubject: BehaviorSubject<boolean>;

  // TODO: CHECK IF AUTH STATE VIA FIREBASE
  userAuthenticated = false;

  constructor(private router: Router) {
    this.loggedInSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // TODO: CHECK IF AUTH STATE VIA FIREBASE
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }

    return this.isAuthenticated();
  }

  loggedInObservable(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  isAuthenticated(): boolean {
    // TODO CHECK FIREBASE USER AUTH STATE
    return this.userAuthenticated;
  }

  signup(name: string, email: string, password: string): Observable<any> {
    // TODO FIREBASE USER SIGNUP
    console.log(name, email)
    const signupObservable = of(true);
    return signupObservable;
  }

  signin(email: string, password: string): Observable<any> {
    // TODO FIREBASE USER SIGNIN
    const signinObservable = of(true);
    signinObservable.subscribe(
      res => {
        this.userAuthenticated = res;
        this.loggedInSubject.next(res);
      }
    );

    return signinObservable;
  }

  logout(): Observable<any> {
    // TODO FIREBASE USER LOGOUT
    const logoutObservable = of(false);
    logoutObservable.subscribe(
      res => {
        this.userAuthenticated = res;
        this.loggedInSubject.next(res);
      },
      err => {
        console.log('Logout ERROR', err);
      }
    );

    return logoutObservable;
  }
}
