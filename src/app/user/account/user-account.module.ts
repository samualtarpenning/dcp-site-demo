import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared';
import { UserSharedModule } from '../';

import { AuthService } from '../../auth/services/auth.service';

import { UserAccountPageComponent } from './components/account-page/user-account-page.component';



@NgModule({
  declarations: [
    UserAccountPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserSharedModule
  ],
  providers: [
  ]
})
export class UserAccountModule { }
