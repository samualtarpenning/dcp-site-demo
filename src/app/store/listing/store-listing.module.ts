import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SharedModule } from '../../shared';
import { StoreSharedModule } from '../';

import { ProductsListingPageComponent } from './components/products-listing-page/products-listing-page.component';
import { ProductsListingPageResolver } from './resolvers/products-listing-page.resolver';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatCheckboxModule, MatSelectModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AngularFireDatabase } from '@angular/fire/database';
export const storeListingRoutes = [
  {
    path: '',
    component: ProductsListingPageComponent,
    resolve: {
      data: ProductsListingPageResolver
    }
  },
  {
    path: 'category/:slug',
    component: ProductsListingPageComponent,
    resolve: {
      data: ProductsListingPageResolver
    }
  },
  {
    path: 'tag/:slug',
    component: ProductsListingPageComponent,
    resolve: {
      data: ProductsListingPageResolver
    }
  }
];

@NgModule({
  declarations: [
    ProductsListingPageComponent
  ],
  imports: [
    RouterModule.forChild(storeListingRoutes),
    CommonModule,
    SharedModule,
    StoreSharedModule,
    BsDropdownModule.forRoot(),
    ButtonsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [
    ProductsListingPageResolver
  ]
})
export class StoreListingModule { }
