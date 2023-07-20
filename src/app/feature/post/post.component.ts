import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  public form: FormGroup;
  constructor (private fb: FormBuilder) { 
    this.form = new FormGroup({name: new FormControl(null)});
  }
  model: any = {};
  options: FormlyFormOptions = {};
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'userName',
  //     type: 'input',
  //     templateOptions: {
  //       placeholder: 'What\'s on your mind',
  //       required: true
  //     },
  //     validation: {
  //       messages: {
  //         required: 'This field is required'
  //       }
  //     }
  //   }
  // ];
}
