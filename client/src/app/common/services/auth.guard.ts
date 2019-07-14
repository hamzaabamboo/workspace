import { Injectable } from "@angular/core";
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivateChild {
  constructor(public auth: AuthService, public router: Router) {}

  canActivateChild(): boolean {
    if (!this.auth.isAuthenticated$.value) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
