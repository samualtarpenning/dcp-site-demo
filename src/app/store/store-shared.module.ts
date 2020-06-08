import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared";

import { ProductsListingComponent } from "./listing/components/products-listing/products-listing.component";

import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MatNativeDateModule, MatIconModule, MatInputModule, MatGridListModule, MatCardModule, MatListModule, MatCheckboxModule, MatSelectModule } from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';


@NgModule({
  declarations: [ProductsListingComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
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
    MatSelectModule, MatFormFieldModule, MatButtonModule],
  providers: [MatDatepickerModule,
    MatNativeDateModule, AngularFireDatabase],
  exports: [ProductsListingComponent],
})
export class StoreSharedModule { }
