import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Clipboard, GetClipboardsGQL } from "src/app/generated/graphql";
import { ClipboardDialogComponent } from "./clipboard-dialog/clipboard-dialog.component";

export interface ClipboardDialogData {
  clipboard: Clipboard;
}

@Component({
  selector: "app-clipboards",
  templateUrl: "./clipboards.component.html",
  styleUrls: ["./clipboards.component.scss"]
})
export class ClipboardsComponent implements OnInit {
  $clipboards: Observable<Pick<Clipboard, "id" | "content">[]>;

  constructor(
    private getClipboards: GetClipboardsGQL,
    private dialog: MatDialog
  ) {
    this.$clipboards = getClipboards
      .watch()
      .valueChanges.pipe(map(res => res.data.getClipboards));
  }

  openDialog(clipboard: Clipboard) {
    this.dialog.open(ClipboardDialogComponent, {
      data: { clipboard }
    });
  }

  ngOnInit() {}
}
