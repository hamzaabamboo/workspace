import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeModule } from "./home/home.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloModule, Apollo } from "apollo-angular";
import { NgxStronglyTypedFormsModule } from "ngx-strongly-typed-forms";
import links from "./links";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxStronglyTypedFormsModule,
    ApolloModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [/*ErrorService*/ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo) {
    apollo.create({
      link: links,
      cache: new InMemoryCache({
        dataIdFromObject: o => o.id
      })
    });
  }
}
