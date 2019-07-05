import { Injectable } from "@angular/core";
import { GraphQLError } from "graphql";

@Injectable({
  providedIn: "root"
})
export class ErrorService {
  isOn: boolean = false;
  error: Error | GraphQLError;

  handleError(error: Error | GraphQLError) {
    this.error = error;
    this.isOn = true;
  }

  closeError() {
    this.isOn = false;
    this.error = null;
  }
  constructor() {}
}
