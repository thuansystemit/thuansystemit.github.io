import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  articles = [
    { title: 'PMI Learning', url: 'https://github.com/thuansystemit/PMI-Learning' },
    { title: 'System Design Interview', url: 'https://github.com/thuansystemit/SystemDesignInterview' },
    { title: 'HR Portal', url: 'https://github.com/thuansystemit/HR_Portal' },
    { title: 'CV Builder', url: 'https://github.com/thuansystemit/cv_builder' }
  ];
}
