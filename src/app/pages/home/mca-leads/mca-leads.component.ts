import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mca-leads',
  templateUrl: './mca-leads.component.html',
  styleUrls: ['./mca-leads.component.css']
})
export class McaLeadsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("header")?.classList.add("header-inner-pages");
    require('../../../../assets/js/main.js');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
