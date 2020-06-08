import { Component, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-home-storefront-page",
  templateUrl: "./storefront-page.component.html",
  styleUrls: ["./styles/storefront-page.styles.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeStorefrontPageComponent {
  newCollectionProducts = [{}];
  summerSaleProducts = [];
  highlightedProducts = [];

  serviceFormCtrl = new FormControl('', [
    Validators.required
  ]);
  serviceSizeFormCtrl = new FormControl('', [
    Validators.required
  ]);
  recurringServiceFormCtrl = new FormControl(false, [])
  accessTimeFormCtrl = new FormControl('', [
    Validators.required
  ]);
  dateFormCtrl = new FormControl('', [
    Validators.required
  ]);
  instructionFormCtrl = new FormControl('', [
  ]);
  discountFormCtrl = new FormControl('', [
  ]);
  serviceOptions: any;
  quote: any;
  recurring: boolean;
  constructor( private route: ActivatedRoute, private firestore: AngularFirestore, ) {
    this.serviceOptions = firestore.collection('/serviceOptions').valueChanges();
  }
  public loading : boolean = true;

  ngOnInit() {

    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
  getQuote() {
    switch (this.serviceSizeFormCtrl.value) {
      case '500 - 900': {
        if (this.recurringServiceFormCtrl.value == true) {
          this.quote = this.serviceFormCtrl.value.price * .12
        }
        if (this.recurringServiceFormCtrl.value == false) {
          this.quote = this.serviceFormCtrl.value.price
        }

        return this.quote
      }
      case '999 - 1,499': {
        if (this.recurringServiceFormCtrl.value === true) {
          this.quote = (this.serviceFormCtrl.value.multiplier * this.serviceFormCtrl.value.price)

        }
        if (this.recurringServiceFormCtrl.value === false) {
          this.quote = this.serviceFormCtrl.value.multiplier * this.serviceFormCtrl.value.price
        }

        return this.quote;
      }
      case '1,500 - 1,999': {
        if (this.recurringServiceFormCtrl.value === true) {
          this.quote = (this.serviceFormCtrl.value.multiplier + .8) * this.serviceFormCtrl.value.price * .13
        }
        if (this.recurringServiceFormCtrl.value === false) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 1) * this.serviceFormCtrl.value.price
        }
        break;
      }
      case '2,000 - 2,499': {
        if (this.recurringServiceFormCtrl.value === true) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 1.2) * this.serviceFormCtrl.value.price * .13
        }
        if (this.recurringServiceFormCtrl.value === false) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 1.2) * this.serviceFormCtrl.value.price
        }
        break;
      }
      case '2,500 - 2,999': {
        if (this.recurringServiceFormCtrl.value === true) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 1.4) * this.serviceFormCtrl.value.price * .13
        }
        if (this.recurringServiceFormCtrl.value === false) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 1.5) * this.serviceFormCtrl.value.price
        }
        break;
      }
      case '3,500 - 3,999': {
        if (this.recurringServiceFormCtrl.value === true) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 1.8) * this.serviceFormCtrl.value.price * .13
        }
        if (this.recurringServiceFormCtrl.value === false) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 1.9) * this.serviceFormCtrl.value.price
        }
        break;
      }
      case '4,000 - 4,999': {
        if (this.recurringServiceFormCtrl.value === true) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 2.3) * this.serviceFormCtrl.value.price * .13
        }
        if (this.recurringServiceFormCtrl.value === false) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 2.5) * this.serviceFormCtrl.value.price
        }
        break;
      }
      case '5,000 - 5,999': {
        if (this.recurringServiceFormCtrl.value === true) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 2.8) * this.serviceFormCtrl.value.price * .13
        }
        if (this.recurringServiceFormCtrl.value === false) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 2.9) * this.serviceFormCtrl.value.price
        }
        break;
      }
      case '6,000 - 6,999': {
        if (this.recurringServiceFormCtrl.value === true) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 3.1) * this.serviceFormCtrl.value.price * .13
        }
        if (this.recurringServiceFormCtrl.value === false) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 3.3) * this.serviceFormCtrl.value.price
        }
        break;
      }
      case '7,000 - 7,999': {
        if (this.recurringServiceFormCtrl.value === true) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 3.6) * this.serviceFormCtrl.value.price * .15
        }
        if (this.recurringServiceFormCtrl.value === false) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 3.7) * this.serviceFormCtrl.value.price
        }
        break;
      }
      case '8,000 - 8,999': {
        if (this.recurringServiceFormCtrl.value === true) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 3.9) * this.serviceFormCtrl.value.price * .15
        }
        if (this.recurringServiceFormCtrl.value === false) {
          this.quote = (this.serviceFormCtrl.value.multiplier + 4.0) * this.serviceFormCtrl.value.price
        }
        break;
      }
      default: {
        //statements; 
        break;
      } 
    }
  }
}
