import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {id: 1, value: 'Management Posts', tooltip: "Track your progress with the free 'My Learning' program here at W3Schools.\nLog in to your account, and start earning points!\nThis is an optional feature. You can study W3Schools without using My Learning."},
    {id: 2, value: 'Management document system', tooltip: ""},
    {id: 3, value: 'Design a TinyURL services', tooltip: ""},
    {id: 4, value: 'Bookstore Management', tooltip: ""},
    {id: 5, value: 'A chat system', tooltip: ""},
  ];
  projectInfo = 'I already implementation a lot of projects as below and you can click on a item in list to see more detail or you can hover on this and it\'s give a lot of info about that project';
}
