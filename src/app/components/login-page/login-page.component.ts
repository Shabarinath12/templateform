import { Component, OnInit } from "@angular/core";
import { Contact } from "../../entities/contact";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent {
  contact: Contact;
  hide: boolean =true;
  constructor() {
    this.contact = new Contact();
  }

  ngOnInit() {
   }
}
