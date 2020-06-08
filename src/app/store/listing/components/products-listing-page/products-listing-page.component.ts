import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from '@angular/material/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatStepper } from '@angular/material/stepper';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export interface ServiceOptionItem {
  label: string;
  price: number;
  value: string;
}
export interface Leads {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
export interface Booking {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
@Component({
  selector: "app-products-listing-page",
  templateUrl: "./products-listing-page.component.html",
  styleUrls: ["./styles/products-listing-page.styles.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsListingPageComponent implements OnInit {
  serviceOptions: Observable<any[]>;
  category_slug: any;
  tag_slug: any;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  // controlers
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  firstNameFormCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  lastNameFormCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  phoneFormCtrl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^-?(0|[1-9]\d*)?$/)
  ]);
  addressFormCtrl = new FormControl('', [
    Validators.required
  ]);
  aptFormCtrl = new FormControl('', [
  ]);
  cityFormCtrl = new FormControl('', [
    Validators.required
  ]);
  stateFormCtrl = new FormControl('', [

  ]);
  zipFormCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5)
  ]);
  serviceFormCtrl = new FormControl('', [
    Validators.required
  ]);
  serviceSizeFormCtrl = new FormControl('', [
    Validators.required
  ]);
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
  cardNoFormCtrl = new FormControl('', [
    Validators.required
  ]);
  cardDateFormCtrl = new FormControl('', [
    Validators.required
  ]);
  cvvFormCtrl = new FormControl('', [
    Validators.required
  ]);
  acceptPayment = new FormControl('', [
    Validators.required
  ]);



  matcher = new MyErrorStateMatcher();
  selectedService: any;
  private bookingCollection: AngularFirestoreCollection<Booking>

  serviceSizeOptions: Observable<unknown[]>;
  quote: number;
  leadsCollection: AngularFirestoreCollection<Leads>;
  formId: string;
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
  ) {
    this.serviceOptions = firestore.collection('/serviceOptions').valueChanges();
    this.serviceSizeOptions = firestore.collection('/serviceSizeOptions').valueChanges()
    this.leadsCollection = firestore.collection<Leads>('leads');
    this.bookingCollection = firestore.collection<Booking>('booking');
  }

  public mat3Step: boolean = false;
  public loading: boolean = true;

  ngOnInit(): void {

    setTimeout(() => {
      this.loading = false;
    }, 1500);

    this.firstFormGroup = this.formBuilder.group({
      'firstNameFormCtrl': this.firstNameFormCtrl,
      'lastNameFormCtrl': this.lastNameFormCtrl,
      'emailFormControl': this.emailFormControl,
      'phoneFormCtrl': this.phoneFormCtrl

    });
    this.secondFormGroup = this.formBuilder.group({
      'addressFormCtrl': this.addressFormCtrl,
      'cityFormCtrl': this.cityFormCtrl,
      'stateFormCtrl': this.stateFormCtrl,
      'aptFormCtrl': this.aptFormCtrl,
      'zipFormCtrl': this.zipFormCtrl
    });
    this.thirdFormGroup = this.formBuilder.group({
      'serviceFormCtrl': this.serviceFormCtrl,
      'serviceSizeFormCtrl': this.serviceSizeFormCtrl,
      'dateFormCtrl': this.dateFormCtrl,
      'accessTimeFormCtrl': this.accessTimeFormCtrl,
      'instructionFormCtrl': this.instructionFormCtrl
    });
    this.fourthFormGroup = this.formBuilder.group({
      'discountFormCtrl': this.discountFormCtrl,
      'acceptPayment': this.acceptPayment
    });
    this.fifthFormGroup = this.formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }
  updateServiceOption(service) {
    this.selectedService = service;
  }
  firstFormSubmit(stepper: MatStepper) {
    var obj = {
      user: {
        id: this.firestore.createId(),
        firstName: this.firstNameFormCtrl.value,
        lastName: this.lastNameFormCtrl.value,
        phone: this.phoneFormCtrl.value,
        email: this.emailFormControl.value,
      },
      createdAt: Date(),
      createdBy: 'Online Booking',
      status: 'User Info Submitted',
      serviceSize: '',
      basePrice: '',
      service: {
        estimate: '',
        serviceType: '',
        instructions: '',
        accessTime: '',
        bookingDate: '',
        extras: []
      }
    }
    this.formId = obj.user.id;
    if (this.firstNameFormCtrl.valid && this.lastNameFormCtrl.valid && this.phoneFormCtrl.valid && this.emailFormControl.valid) {
      stepper.next();
      this.leadsCollection.doc(obj.user.id).set(obj.user);
      this.bookingCollection.doc(obj.user.id).set(obj);
    }

  }

  secondFormSubmit(stepper: MatStepper) {

    this.secondFormGroup.valid
    if (this.addressFormCtrl.valid && this.aptFormCtrl.valid && this.cityFormCtrl.valid && this.stateFormCtrl.valid && this.zipFormCtrl.valid) {
      stepper.next();
    }
  }
  thirdFormSubmit(stepper: MatStepper) {
    switch (this.serviceSizeFormCtrl.value) {
      case '500 - 900': {
        this.quote = this.serviceFormCtrl.value.price
        break;
      }
      case '999 - 1,499': {
        this.quote = this.serviceFormCtrl.value.multiplier * this.serviceFormCtrl.value.price
        break;
      }
      case '1,500 - 1,999': {
        this.quote = (this.serviceFormCtrl.value.multiplier + .5) * this.serviceFormCtrl.value.price
        break;
      }
      case '2,000 - 2,499': {
        this.quote = (this.serviceFormCtrl.value.multiplier + 1) * this.serviceFormCtrl.value.price
        break;
      }
      case '2,999 - 3,499': {
        this.quote = (this.serviceFormCtrl.value.multiplier + 2) * this.serviceFormCtrl.value.price
        break;
      }
      case '3,500 - 3,999': {
        this.quote = (this.serviceFormCtrl.value.multiplier + 2.5) * this.serviceFormCtrl.value.price
        break;
      }
      case '4,000 - 4,999': {
        this.quote = (this.serviceFormCtrl.value.multiplier + 3) * this.serviceFormCtrl.value.price
        break;
      }
      case '5,000 - 5,999': {
        this.quote = (this.serviceFormCtrl.value.multiplier + 4) * this.serviceFormCtrl.value.price
        break;
      }
      case '6,000 - 6,999': {
        this.quote = (this.serviceFormCtrl.value.multiplier + 5) * this.serviceFormCtrl.value.price
        break;
      }
      case '7,000 - 7,999': {
        this.quote = (this.serviceFormCtrl.value.multiplier + 5) * this.serviceFormCtrl.value.price
        break;
      }
      case '8,000 - 8,999': {
        this.quote = (this.serviceFormCtrl.value.multiplier + 9) * this.serviceFormCtrl.value.price
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
    console.log(this.quote)
    // this.quote = (this.serviceFormCtrl.value.multiplier + this.serviceSizeFormCtrl.value / 2) * this.serviceFormCtrl.value.price
    var obj = {
      user: {
        id: this.firestore.createId(),
        firstName: this.firstNameFormCtrl.value,
        lastName: this.lastNameFormCtrl.value,
        phone: this.phoneFormCtrl.value,
        email: this.emailFormControl.value,
      },
      createdAt: Date(),
      createdBy: 'Online Booking',
      status: 'User Info Submitted',
      serviceSize: '',
      basePrice: '',
      service: {
        estimate: '',
        serviceType: '',
        instructions: '',
        accessTime: '',
        bookingDate: '',
        extras: []
      }
    }
    this.bookingCollection.doc(this.formId).set(obj);
    this.leadsCollection.doc(this.formId).set(obj);

    if (this.thirdFormGroup.valid) {
      stepper.next();

    }

  }

  fourthFormSubmit(stepper: MatStepper) {
    this.fourthFormGroup.controls['acceptPayment'].setValue('true')
    if (this.fourthFormGroup.valid) {
      stepper.next();
    }
  }



  paymentSubmit() {
    var obj = {
      user: {
        id: this.firestore.createId(),
        firstName: this.firstNameFormCtrl.value,
        lastName: this.lastNameFormCtrl.value,
        phone: this.phoneFormCtrl.value,
        email: this.emailFormControl.value,
      },
      createdAt: Date(),
      createdBy: 'Online Booking',
      status: 'User Info Submitted',
      serviceSize: '',
      basePrice: '',
      service: {
        estimate: '',
        serviceType: '',
        instructions: '',
        accessTime: '',
        bookingDate: '',
        extras: []
      }
    }
    this.bookingCollection.doc(this.formId).set(obj);
  }
}
