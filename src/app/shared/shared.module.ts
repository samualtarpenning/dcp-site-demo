import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { BackgroundImageComponent } from './background-image/background-image.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BreadcrumbsDirective } from './breadcrumbs/breadcrumbs.directive';
import { ColorRadioButtonDirective } from './color-radio-button/color-radio-button.directive';
import { FillContainerComponent } from './fill-container/fill-container.component';

import { PreloadImageComponent } from './preload-image/preload-image.component';
import { LoadingComponent } from './loading/loading.component';
import { ContactComponent } from '../store/contact/contact.component';

// import {MyTelInput} from './../store/listing/components/products-listing-page/products-listing-page.component'
@NgModule({
  declarations: [
    // Shared components
    BackgroundImageComponent,
    BreadcrumbsComponent,
    BreadcrumbsDirective,
    ColorRadioButtonDirective,
    FillContainerComponent,
    PreloadImageComponent,
    LoadingComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CarouselModule.forRoot()
  ],
  exports: [
    // Shared components
    BackgroundImageComponent,
    // MyTelInput,
    BreadcrumbsComponent,
    BreadcrumbsDirective,
    ColorRadioButtonDirective,
    FillContainerComponent,
    PreloadImageComponent,

    // Re-export these modules to prevent repeated imports (see: https://angular.io/guide/ngmodule#re-exporting-other-modules)
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    LoadingComponent,
    ContactComponent,
  ]
})
export class SharedModule { }
