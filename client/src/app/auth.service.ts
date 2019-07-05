import { Injectable, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { ShortUserInfo } from "./models/ShortUserInfo";
import gql from "graphql-tag";
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
  info: Observable<ShortUserInfo>;
  constructor(private apollo: Apollo, private router: Router) {}

  setToken(token: string) {
    this.isAuthenticated$.next(true);
    localStorage.token = token;
  }

  setRole(role: string) {
    localStorage.role = role;
  }

  async getInfo() {
    if (this.isAuthenticated$.value) {
      try {
        this.info = this.apollo
          .watchQuery<any>({
            query: gql`
              query currentUser {
                currentUser {
                  id
                  role
                }
              }
            `
          })
          .valueChanges.pipe(
            map(({ data }) => {
              const {
                currentUser: { id }
              } = data;
              return {
                id
              };
            })
          );
      } catch (e) {}
    }
  }

  logout() {
    this.isAuthenticated$.next(false);
    this.info = undefined;
    this.router.navigateByUrl("/");
    localStorage.removeItem("token");
  }
  getToken() {
    return localStorage.getItem("token");
  }
}
