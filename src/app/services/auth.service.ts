import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService{
  constructor(private router: Router,
              private http: HttpClient) {
  }
  isLoggedIn = false;

  cach(){
    this.isLoggedIn = true;
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string | undefined;

  login(password: string, login: string): Observable<any> {
    return this.http.get<any>("http://localhost:3000/User?login="+login+"&password="+password)
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
