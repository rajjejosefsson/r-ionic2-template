import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormGroup, FormControl, Validators} from "@angular/forms";

import firebase from 'firebase';
import {FirebaseService} from "../../services/firebase.service";


@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})


export class FormPage implements OnInit {
  value = 1;
  submitAttempt = false;

  formGroup: FormGroup;

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService) {}


  ngOnInit() {
    this.initForm();
  }

  private initForm() {

    let EMAIL_REGEXP = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;

    this.formGroup = new FormGroup({
      'control1': new FormControl(null, [Validators.required, Validators.maxLength(500)]),
      'control2': new FormControl(null, [Validators.required, Validators.pattern(EMAIL_REGEXP)]),
      'control3': new FormControl(null, [Validators.required]),
    });
  }


  onFormSubmit() {
    this.submitAttempt = false;
    console.log(this.formGroup.value);
    console.log(this.formGroup.controls);

    let user = this.firebaseService.currentUser();

    firebase.database().ref('data/' + user.uid).push(this.formGroup.value);
  }


}
