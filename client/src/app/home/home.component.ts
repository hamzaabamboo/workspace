import { Component, OnInit } from "@angular/core";
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
