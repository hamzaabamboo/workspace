import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { AppRoutingModule } from "../app-routing.module";
import { NavigationComponent } from "../common/components/navigation/navigation.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CardsComponent } from "./cards/cards.component";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { CardDialogComponent } from "./cards/card-dialog/card-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { CreateCardDialogComponent } from "./cards/create-card-dialog/create-card-dialog.component";
import { CardFormComponent } from "./cards/card-form/card-form.component";
import { ClipboardsComponent } from "./clipboards/clipboards.component";
import { ClipboardDialogComponent } from "./clipboards/clipboard-dialog/clipboard-dialog.component";

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    CardDialogComponent,
    CreateCardDialogComponent,
    CardFormComponent,
    ClipboardsComponent,
    ClipboardDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule
  ],
  entryComponents: [CardDialogComponent, ClipboardDialogComponent]
})
export class HomeModule {}
