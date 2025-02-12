import { Component } from '@angular/core';

@Component({
  selector: 'app-competences',
  imports: [],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.scss',
  standalone: true
})

export class CompetencesComponent {
  techs = [
    { icon: 'devicon-java-plain-wordmark', name: 'Java' },
    { icon: 'devicon-spring-original-wordmark', name: 'Spring' },
    { icon: 'devicon-hibernate-plain-wordmark', name: 'Hibernate' },
    { icon: 'devicon-postgresql-plain-wordmark', name: 'PostgreSQL' },
    { icon: 'devicon-sqlite-plain-wordmark', name: 'SQLite' },
    { icon: 'devicon-angular-plain', name: 'Angular' },
    { icon: 'devicon-typescript-plain', name: 'TypeScript' },
    { icon: 'devicon-javascript-plain', name: 'JavaScript' },
    { icon: 'devicon-html5-plain', name: 'HTML5' },
    { icon: 'devicon-css3-plain', name: 'CSS3' },
    { icon: 'devicon-bootstrap-plain', name: 'Bootstrap' },
    { icon: 'devicon-python-plain', name: 'Python' },
    { icon: 'devicon-selenium-original', name: 'Selenium' },
    { icon: 'devicon-docker-plain-wordmark', name: 'Docker' },
    { icon: 'devicon-git-plain-wordmark', name: 'Git' },
    { icon: 'devicon-github-original', name: 'GitHub' },
    { icon: 'devicon-jira-plain-wordmark', name: 'Jira' }
  ];
}
