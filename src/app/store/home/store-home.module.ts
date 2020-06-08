import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SharedModule } from '../../shared';
import { StoreSharedModule } from '../';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatCheckboxModule, MatSelectModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HomeStorefrontPageComponent } from './components/storefront-page/storefront-page.component';
import { HomeStorefrontPageResolver } from './resolvers/storefront-page.resolver';
export const homeRoutes = [
  {
    path: '',
    component: HomeStorefrontPageComponent,
    resolve: {
      data: HomeStorefrontPageResolver
    }
  }
];

@NgModule({
  declarations: [
    HomeStorefrontPageComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes),
    CarouselModule,
    CommonModule,
    SharedModule,
    StoreSharedModule,
    MatCardModule,
    MatDatepickerModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    HomeStorefrontPageResolver
  ]
})
export class StoreHomeModule { }
