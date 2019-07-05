import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { stringify } from "@angular/compiler/src/util";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HelloGQL } from "generated/graphql";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  message: Observable<string>;
  constructor(private hello: HelloGQL) {}

  ngOnInit() {
    this.message = this.hello.watch().valueChanges.pipe(map(r => r.data.hello));
  }
}
