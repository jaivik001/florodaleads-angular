import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// // 
declare let Email: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    subject: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.contactForm.value;
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "7774devansh@gmail.com",
      Password : "0246575FACD99D483F7A651691C307816DB2",
      To : this.contactForm.value.email,
      From : "7774devansh@gmail.com",
      Subject : this.contactForm.value.subject,
      Body : this.contactForm.value.message}
      ).then( (message:any) => {
        this,this.contactForm.reset(); } );
    }
}
