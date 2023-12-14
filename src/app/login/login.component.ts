import { AuthFacebookService } from './../auth-facebook.service';
import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../auth-google.service';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  constructor(private authGoogleService: AuthGoogleService, private authService: SocialAuthService) { }

  login() {
    this.authGoogleService.login();
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data =>{
        console.log(data);
      }
    );
  }

}
