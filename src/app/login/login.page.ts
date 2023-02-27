import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredential } from 'firebase/auth';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  hasNetworkError: boolean;
  isPasswordVisible: boolean = false
  constructor(
    private readonly spinner: NgxSpinnerService,
    private readonly router: Router,
    private readonly loginService: LoginService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.spinner.hide('appSpinner')
  }

  onLoginWithEmail(): any {
    /*this.spinner.show("appSpinner")
    this.loginService.signInEmail(this.loginForm.value)
      .then(() => {
        this.router.navigateByUrl('/home', { replaceUrl: true })
      })
      .catch(error => {
        const errorKeyTrad = error.message.split('/')[1];
        if (errorKeyTrad == "network-request-failed") {
          this.hasNetworkError = true;
        } else {
          this.hasNetworkError = false;
          this.loginForm.setErrors({ invalid: errorKeyTrad })
        }
        this.spinner.hide("appSpinner")
      })*/
  }

  onLoginWithProvider(provider: string) {
    this.spinner.show("appSpinner")
    this.loginService.handleProvider(provider).then((result: UserCredential) => {
      this.router.navigateByUrl('/home', { replaceUrl: true })
    })
      .catch((error) => {
        this.spinner.hide("appSpinner")
        const errorKeyTrad = error.message.split('/')[1]?.replace(').', '');
        console.log(errorKeyTrad);
      });
  }

  onRedirectToRegister() {
    this.router.navigateByUrl('/home', { replaceUrl: true })
  }

}