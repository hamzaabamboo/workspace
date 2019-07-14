import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeModule } from "./home/home.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./common/services/auth.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloModule, Apollo } from "apollo-angular";
import { NgxStronglyTypedFormsModule } from "ngx-strongly-typed-forms";
import links from "./links";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { NavigationComponent } from "./common/components/navigation/navigation.component";
import { LoginModule } from "./login/login.module";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxStronglyTypedFormsModule,
    ApolloModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule,
    LoginModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [/*ErrorService*/ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, authService: AuthService) {
    apollo.create({
      link: links({ authService }),
      cache: new InMemoryCache({
        dataIdFromObject: o => o.id
      })
    });
  }
}
