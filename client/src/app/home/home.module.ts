import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { AppRoutingModule } from "../app-routing.module";
import { NavigationComponent } from "../components/navigation/navigation.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CardsComponent } from "./cards/cards.component";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [HomeComponent, CardsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule {}
