import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';




@NgModule({
  declarations: [LoginPage],
  imports: [
    LoginRoutingModule,
    TranslateModule,
IonicModule,
CommonModule  ]
})
export class LoginModule { }
