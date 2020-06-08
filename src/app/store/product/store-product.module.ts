import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SharedModule } from '../../shared';
import { AuthSharedModule } from '../../auth';
import { StoreSharedModule } from '../';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatSelectModule } from '@angular/material/select';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

export const productRoutes = [

];

@NgModule({
  declarations: [
  ],
  imports: [
    // Angular Modules
    RouterModule.forChild(productRoutes),
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    // ngx Modules
    CarouselModule,
    ButtonsModule,
    ModalModule.forRoot(),
    // Material Design Modules
    SharedModule,
    AuthSharedModule,
    StoreSharedModule,
    MatButtonModule,
    MatFormFieldModule,
    MatStepperModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    // firebase
    AngularFirestoreModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class StoreProductModule { }
