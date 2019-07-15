import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { AppRoutingModule } from "../app-routing.module";
import { NavigationComponent } from "../common/components/navigation/navigation.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CardsComponent } from "./cards/cards.component";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { CardDialogComponent } from "./cards/card-dialog/card-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { CreateCardDialogComponent } from "./cards/create-card-dialog/create-card-dialog.component";
import { CardFormComponent } from "./cards/card-form/card-form.component";
import { ClipboardsComponent } from "./clipboards/clipboards.component";
import { ClipboardDialogComponent } from "./clipboards/clipboard-dialog/clipboard-dialog.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CreateClipboardDialogComponent } from "./clipboards/create-clipboard-dialog/create-clipboard-dialog.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    CardDialogComponent,
    CreateCardDialogComponent,
    CardFormComponent,
    ClipboardsComponent,
    ClipboardDialogComponent,
    CreateClipboardDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatSnackBarModule
  ],
  entryComponents: [
    CardDialogComponent,
    ClipboardDialogComponent,
    CreateCardDialogComponent,
    CreateClipboardDialogComponent
  ]
})
export class HomeModule {}
