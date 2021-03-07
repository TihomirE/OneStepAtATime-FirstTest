import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
// import { TranslateModule } from '@ngx-translate/core';
// import { IonicModule } from 'ionic/angular';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AuthComponent, LogoutComponent, LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // TranslateModule,
    IonicModule
  ]
})
export class AuthModule { }
