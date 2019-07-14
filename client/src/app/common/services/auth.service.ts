import { Injectable, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!localStorage.getItem("token")
  );
  constructor(private apollo: Apollo, private router: Router) {}

  setToken(token: string) {
    this.isAuthenticated$.next(true);
    localStorage.token = token;
  }

  setRole(role: string) {
    localStorage.role = role;
  }

  logout() {
    this.isAuthenticated$.next(false);
    this.router.navigateByUrl("/login");
    localStorage.removeItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
