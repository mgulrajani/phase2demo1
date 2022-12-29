import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[getValidator]',
  providers:[
    {provide:NG_VALIDATORS,useExisting:GetValidatorDirective,multi:true}
  ]
})
export class GetValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
     //all are string
     //parseInt or + one and the same thing
    let num1:number  = +control.value;

       if(isNaN(num1)){

        return {'gve':true,'requiredValue':10}
       }
       if(num1 <= +10){

        return {'gve':true,'requiredValue':10}
       }
       return null;

  }

}
