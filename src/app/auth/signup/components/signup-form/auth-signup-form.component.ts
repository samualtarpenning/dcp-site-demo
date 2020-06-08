import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth-signup-form',
  templateUrl: './auth-signup-form.component.html',
  styleUrls: [
    './styles/auth-signup-form.styles.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuthSignupFormComponent {
  signupForm: FormGroup;
  // Where to redirect the user after successful login
  @Input() redirectUrl: string;
  @Output() success = new EventEmitter();

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService
  ) {
    this.signupForm = formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),
      password: new FormControl('', Validators.required),
      newsletter: new FormControl(false),
      terms: new FormControl(false, Validators.pattern('true'))
    });
  }

  onSubmit(): void {
    this.doSignup(this.signupForm.value.name, this.signupForm.value.email,
      this.signupForm.value.password);
  }

  doSignup(name: string, email: string, password: string): void {
    this.authService.signup(name, email, password)
      .subscribe(
        res => {
          this.success.emit(true);
          this.signupForm.reset();

          if (this.redirectUrl) {
            setTimeout(() => {
              return this.router.navigate([this.redirectUrl]);
            }, 500);
          }
        },
        err => {
          console.log('There was an ERROR while creating the account');
        }
      );
  }
}
