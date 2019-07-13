import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MatCardModule, MatInputModule, ReactiveFormsModule]
})
export class LoginModule {}
