import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/common/services/auth.service";
import { Observable } from "apollo-link";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { Apollo } from "apollo-angular";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  isLoggedIn = false;
  $loginStatus: BehaviorSubject<boolean>;
  constructor(
    private apollo: Apollo,
    private authService: AuthService,
    private router: Router
  ) {
    this.$loginStatus = authService.isAuthenticated$;
    this.isLoggedIn = this.$loginStatus.value;
  }

  ngOnInit() {
    this.$loginStatus.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  goTo(route: any[]) {
    this.router.navigate(route);
  }

  logout() {
    this.authService.logout();
    this.router.navigate([""]);
    this.apollo.getClient().cache.reset();
  }
}
