import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-mat-template';
  constructor(private titleService: Title) {}

  setDocTitle(title: string) {
     console.log('current title:::::' + this.titleService.getTitle());
     this.titleService.setTitle(title);
  }
}
