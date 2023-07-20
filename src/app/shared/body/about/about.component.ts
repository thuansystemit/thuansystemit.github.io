import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  highlights = [
    {id: 1, value: '7+ years of experience in enterprise software application development.'},
    {id: 2, value: '7+ years of experience in developing enterprise applications using Java, JavaScript.'},
    {id: 3, value: 'Have experience in software designer like OOP, design pattern, microservice architecture.'},
    {id: 4, value: 'Good experience with Agile/Scrum project.'},
    {id: 5, value: 'Ability to work on multiple projects.'},
    {id: 6, value: 'Experience with domain knowledge: networking, healthcare.'},
    {id: 7, value: 'Fast learner, ability handle multi-tasking, high responsible and friendly with an outgoing personality with the ability to work with all team members.'}
  ];
  technicalSkills = [
    {id: 1, value: 'Good knowledge on Object-Oriented Analysis and Design, Object-Oriented software engineering methodologies and design Microservice architecture.'},
    {id: 2, value: 'Database Management Systems: Mysql, MongoDB'},
    {id: 3, value: 'Java, Spring, Spring boot, Spring security, spring JPA/Hibernate, JDBC'},
    {id: 4, value: 'Kafka, Redis'},
    {id: 5, value: 'Unit/integration test: Junit, Robot framework'},
    {id: 6, value: 'EJB, JMS, JMX, Jersey, Rest API, Websocket.'},
    {id: 7, value: 'Javascript: AngularJS, Angular 8, jQuery'},
    {id: 8, value: 'Script: Shell script, batch script.'},
    {id: 9, value: 'Platforms: Windows, Linux'},
    {id: 10, value: 'WebServer: Tomcat, Apache, Nginx (Configuration load balancing)'},
    {id: 11, value: 'Have knowledge about jBPMN'},
    {id: 12, value: 'Have knowledge about integration with ADFS'},
    {id: 13, value: 'Have knowledge about Linux System'},
    {id: 14, value: 'CD/CI: Docker, docker compose, Jenkins'},
  ];
}
