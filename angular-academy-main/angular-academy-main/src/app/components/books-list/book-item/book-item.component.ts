import { BookItem } from "./../../../models/book-item";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-book-item",
  templateUrl: "./book-item.component.html",
  styleUrls: ["./book-item.component.scss"],
})
export class BookItemComponent implements OnInit {
  @Input() book: BookItem;
  constructor() {}

  ngOnInit() {}
}
