import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
declare var toggleBacktotop:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    require('../../../../assets/js/main.js');
  }
  
  ngAfterViewInit(): void {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
    } 
  }

}
