import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mortgage-leades',
  templateUrl: './mortgage-leades.component.html',
  styleUrls: ['./mortgage-leades.component.css']
})
export class MortgageLeadesComponent implements OnInit {

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
