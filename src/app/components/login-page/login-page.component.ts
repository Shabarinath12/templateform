import { Component, OnInit } from "@angular/core";
import { Contact } from "../../entities/contact";
import { NgForm, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent {
  contact: Contact;

  constructor() {
    this.contact= new Contact()

  }

  ngOnInit() {}
}
