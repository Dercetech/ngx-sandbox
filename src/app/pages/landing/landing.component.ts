import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './services/custom-validators';

@Component({
  selector: 'jem-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  emailForm: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder,
              private _customAsyncValidator: CustomValidators) {

    this.emailForm = fb.group({
      name: [null, Validators.required],
      email: [

        // 1st param is the default value
        null,

        // 2nd: optional param is either the synchronous validators, either an object with both keys: sync and async
        [Validators.required, Validators.email],

        // 3rd: optional param
        [this._customAsyncValidator]    // first approach: the injectable _customAsyncValidator implements Validator
        // [this._customAsyncValidator.getPromiseValidator()]    // second approach: the injectable _customAsyncValidator provides
        // a helper class to return, say, several validator instances
      ]
    });
  }

  ngOnInit() {
  }

}
