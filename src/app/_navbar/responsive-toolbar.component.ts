import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item'

@Component({
  selector: 'app-responsive-toolbar',
  templateUrl: './responsive-toolbar.component.html',
  styleUrls: ['./responsive-toolbar.component.scss']
})
export class ResponsiveToolbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Sign Out',
      icon: 'login',
      show: false,
      showOnDesktop: false, showOnMobile: false, showOnTablet: false
    },
    {
      label: 'Login',
      icon: 'login',
      show: true,
      showOnDesktop: true, showOnMobile: true, showOnTablet: true
    },
    {
      label: 'Pricing',
      icon: 'attach_money',
      show: true,
      showOnDesktop: true, showOnMobile: false, showOnTablet: false
    },
    {
      label: 'Docs',
      icon: 'notes',
      show: true,
      showOnDesktop: true, showOnMobile: false, showOnTablet: true
    },
    {
      label: 'Showcase',
      icon: 'slideshow',
      show: true,
      showOnDesktop: true, showOnMobile: false, showOnTablet: false
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      show: true,
      showOnDesktop: false, showOnMobile: false, showOnTablet: false
    },
    {
      label: 'About',
      icon: 'help',
      show: true,
      showOnDesktop: false, showOnMobile: true, showOnTablet: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
