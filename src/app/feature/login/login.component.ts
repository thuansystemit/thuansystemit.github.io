import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_FORM_FIELD, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup;
  constructor (private fb: FormBuilder) { 
    this.form = new FormGroup({name: new FormControl(null)});
  }
  ngOnInit (): void {
  }
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'userName',
      type: 'input',
      templateOptions: {
        label: 'UserName',
        placeholder: 'Your username',
        required: true
      },
      validation: {
        messages: {
          required: 'This field is required'
        }
      }
    }, {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        placeholder: 'Your Password',
        required: true,
        type: 'password',
        minLength: 8
      },
      validation: {
        messages: {
          required: 'This field is required',
          minlength: 'Should have atleast 8 characters'
        }
      }
    }
  ];
}
