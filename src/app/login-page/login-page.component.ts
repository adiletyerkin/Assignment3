import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  message: string | undefined;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  form = new FormGroup({
    password: new FormControl(""),
    login: new FormControl("")
  })

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  ngOnInit(): void {
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login(this.form.getRawValue().password, this.form.getRawValue().login).subscribe((res) => {
      this.setMessage();
      if (res.length !=0) {
        this.authService.cach();

        const redirectUrl = '/home';

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
