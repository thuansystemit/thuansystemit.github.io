import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations = [
    {
      school: 'Can Tho University',
      location: 'Can Tho, Viet Nam',
      degree: 'The Degree of Engineer — Data Communication and Computer Networks',
      period: '2011 - 2016'
    }
  ];
}
