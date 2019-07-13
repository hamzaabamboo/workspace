import { Component, OnInit } from "@angular/core";
import {
  GetCardsGQL,
  Card,
  CardContentFragment
} from "src/app/generated/graphql";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { CardDialogComponent } from "./card-dialog/card-dialog.component";

export interface CardDialogData {
  card: Card;
}
@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"]
})
export class CardsComponent implements OnInit {
  $cards: Observable<CardContentFragment[]>;

  constructor(private getCards: GetCardsGQL, private dialog: MatDialog) {
    this.$cards = getCards
      .watch()
      .valueChanges.pipe(map(res => res.data.getCards));
  }

  openDialog(card: Card) {
    this.dialog.open(CardDialogComponent, {
      width: "250px",
      data: { card }
    });
  }

  ngOnInit() {}
}