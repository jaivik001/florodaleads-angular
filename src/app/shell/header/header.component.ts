import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLeads: boolean = false;
  isMcaLeads: boolean = false;
  isMortageLeads: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.isLeads = false;
      if (this.router.url.indexOf('mortgage-leads') > 1) {
        this.isLeads = true;
        this.isMortageLeads = true;
        this.isMcaLeads = false
        
      }
      if (this.router.url.indexOf('mca-leads') > 1) {
        this.isLeads = true;
        this.isMcaLeads = true;
        this.isMortageLeads = false;

      }
      if (this.router.url.indexOf('contact') > 1) {
        this.isLeads = true;
      }
    });
    if (this.router.url.indexOf('mortgage-leads') > 1) {
      this.isLeads = true;
      this.isMortageLeads = true;
      this.isMcaLeads = false;
      
    }
    if (this.router.url.indexOf('mca-leads') > 1) {
      this.isLeads = true;
      this.isMortageLeads = false;
      this.isMcaLeads = true;
    }
    if (this.router.url.indexOf('contact') > 1) {
      this.isLeads = true;
    }
  }



}
