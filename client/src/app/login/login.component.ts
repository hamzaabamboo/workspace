import { Component, OnInit } from "@angular/core";
import {
  LoginGQL,
  LoginMutationVariables,
  LoginMutation
} from "../generated/graphql";
import { FormGroup, FormBuilder } from "ngx-strongly-typed-forms";
import { Validators } from "@angular/forms";
import { AuthService } from "../common/services/auth.service";
import { map } from "rxjs/operators";
import { pipe } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<LoginMutationVariables>;
  constructor(
    private loginGQL: LoginGQL,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = formBuilder.group<LoginMutationVariables>({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  async login() {
    if (this.loginForm.valid) {
      const { token, user } = await this.loginGQL
        .mutate(this.loginForm.value)
        .pipe(map(r => r.data.login))
        .toPromise();
      this.authService.setToken(token);
      this.router.navigate([""]);
    }
  }

  ngOnInit() {}
}
