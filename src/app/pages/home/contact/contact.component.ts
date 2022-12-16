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
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      document.querySelector('.loading')?.classList.add('d-block');
      document.querySelector('.error-message')?.classList.remove('d-block');
      document.querySelector('.sent-message')?.classList.remove('d-block');
      this.contactForm.value;
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "7774devansh@gmail.com",
        Password: "0246575FACD99D483F7A651691C307816DB2",
        To: "jaikpatel2001@gmail.com",
        From: "7774devansh@gmail.com",
        Subject: this.contactForm.value.subject,
        Body: `<h2>Hello Admin,</h2><p>New message from ${this.contactForm.value.name}</p><p><b>Email :</b>${this.contactForm.value.email}</p><p><b>Subject :</b>${this.contactForm.value.subject}</p><p><b>Message :</b>${this.contactForm.value.message}</p>` 
      }
      ).then((message: any) => {
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "7774devansh@gmail.com",
          Password: "0246575FACD99D483F7A651691C307816DB2",
          To: this.contactForm.value.email,
          From: "7774devansh@gmail.com",
          Subject: this.contactForm.value.subject,
          Body: `<p>Hello ${this.contactForm.value.name},</p><p>Thank you for contacting us.</p><p> We appreciate your time and interest for submitting the request.<br> We will review your message and get back to you. </p> <p><br>Best Regards,</p>Florodaleads.` 
        })        
      }).then(() => {
        document.querySelector('.loading')?.classList.remove('d-block');
        document.querySelector('.sent-message')?.classList.add('d-block');
        this, this.contactForm.reset();
      });

    }
  }
}