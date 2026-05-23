import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillGroups = [
    {
      label: 'Languages & Frameworks',
      items: [
        'Java, Spring, Spring Boot, Spring Security, Spring JPA/Hibernate, JDBC, R2DBC',
        'JavaScript: AngularJS, Angular, Angular 15, Angular 21, jQuery',
        'EJB, JMS, JMX, Jersey, REST API, WebSocket'
      ]
    },
    {
      label: 'Databases',
      items: ['MySQL, MongoDB, PostgreSQL']
    },
    {
      label: 'Messaging & Caching',
      items: ['Kafka, Redis']
    },
    {
      label: 'DevOps & CI/CD',
      items: ['Docker, Docker Compose, Jenkins']
    },
    {
      label: 'Web Servers',
      items: ['Tomcat, Apache, Nginx (load balancing configuration)']
    },
    {
      label: 'Testing',
      items: ['Unit / integration testing: JUnit, Robot Framework']
    },
    {
      label: 'Architecture & Design',
      items: [
        'OOP, design patterns, microservice architecture',
        'Microservices patterns',
        'jBPMN',
        'ADFS integration'
      ]
    },
    {
      label: 'Scripting & Tooling',
      items: [
        'Shell script, Bash script',
        'Webpack, Node.js, Angular CLI',
        'SVN, Git'
      ]
    },
    {
      label: 'Platforms',
      items: ['Windows, Linux']
    }
  ];
}
