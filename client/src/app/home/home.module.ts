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
import { CardDialogComponent } from "./cards/card-dialog/card-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [HomeComponent, CardsComponent, CardDialogComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [CardDialogComponent]
})
export class HomeModule {}
