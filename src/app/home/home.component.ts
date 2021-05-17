import { Component, OnInit } from '@angular/core';
import {Router, UrlTree} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // logOut(): true | UrlTree {
  //   this.authService.redirectUrl = url;
  //   // Redirect to the login page
  //   return this.router.parseUrl('ProductsComponent');
  // }


}
