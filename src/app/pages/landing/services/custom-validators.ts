import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, Validator} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/first';

@Injectable()
export class CustomValidators implements Validator {

  constructor() {}

  // One approach is to use the class as a factory of validators
  getPromiseValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<{[key: string]: any}> | Observable<{[key: string]: any}> => {
      return this.validateUniqueEmailPromise(control.value);
    };
  }

  // Another approach is to implement Validator and return either a Promise or an Observable
  validate(c: AbstractControl): Promise<{[key: string]: any}> | Observable<{[key: string]: any}> {

    let use = null;

    // Flavour 1: Use a promise
    use = 'promise';

    // Flavour 2: Use an observbale
    // Important remark if using an observable for async validation: the observable must complete.
    // In this case, we'll pipe a ".first()" that "completes" the resulting observable upon emitting a value.
    // use = 'observable';

    switch (use) {
      case 'promise': return this.validateUniqueEmailPromise(c.value);
      case 'observable': return this.validateUniqueEmailObservable(c.value).first();
    }
  }

  validateUniqueEmailPromise( email: string ) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('response obtained')
        if (email === 'unavailable@gmail.com') {
          resolve({
            asyncInvalid: true
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }


  validateUniqueEmailObservable(email: string ) {
    return new Observable(observer => {
      if (email === 'unavailable@gmail.com') {
        observer.next({asyncInvalid: true});
      } else {
        observer.next(null);
      }
    });
  }

}
