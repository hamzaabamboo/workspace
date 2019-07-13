import { Component, OnInit } from "@angular/core";
import { LoginGQL } from "../generated/graphql";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private login: LoginGQL) {
    this.login.mutate({ username: "admin", password: "" });
  }
  ngOnInit() {}
}
