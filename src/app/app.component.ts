import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'ang-mat-template';

  constructor(private titleService: Title, private observer: BreakpointObserver) { }

  setDocTitle(title: string) {
    console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.close();
      } else {
        this.sidenav.open();
      }
    });
  }
}
