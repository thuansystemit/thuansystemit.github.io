import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  experiences = [
    {
      title: 'Software Engineer',
      company: 'TMA Solutions Corp',
      period: '2016 - Now',
      highlights: [
        '10 years of experience in enterprise software application development.',
        '10 years of experience in developing enterprise applications using Java and JavaScript.',
        'Experience in software design: OOP, design patterns, microservice architecture.',
        'Good experience with Agile/Scrum projects.',
        'Ability to work on multiple projects simultaneously.',
        'Domain knowledge: networking, healthcare.',
        'Fast learner, capable of handling multi-tasking, highly responsible, and friendly with an outgoing personality with the ability to work with all team members.',
        'I have hands-on experience building AI agent workflows using LangChain.',
        'I have knowledge of Claude for video coding and can define AI agents using Claude to build a project from scratch.',
        'I have hands-on experience with Claude vibe coding and designing AI agentic workflows to build projects from scratch.'
      ]
    }
  ];
}
