import { Component, OnInit } from "@angular/core";
import {
  GetCardsGQL,
  Card,
  CardContentFragment
} from "src/app/generated/graphql";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"]
})
export class CardsComponent implements OnInit {
  $cards: Observable<CardContentFragment[]>;

  constructor(private getCards: GetCardsGQL) {
    this.$cards = getCards
      .watch()
      .valueChanges.pipe(map(res => res.data.getCards));
  }

  ngOnInit() {}
}
