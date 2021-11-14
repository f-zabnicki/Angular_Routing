import { BookItem } from "./../../models/book-item";
import { UserService } from "./../../services/user/user.service";
import { BooksService } from "./../../services/books/books.service";
import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"],
})
export class BooksListComponent implements OnInit {
  books: BookItem[];
  books$: Observable<BookItem[]>;
  selectedId: number;
  // userName$: Subject<string> = new Subject<string>();
  constructor(
    private booksService: BooksService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getBooksList();
    this.userNameListener();
  }

  private getBooksList() {
    this.books = this.booksService.getRawBooksList();

    // this.booksService
    //   .getObservableOfBooksList()
    //   .subscribe((books: BookItem[]) => {
    //     this.books = books;
    //   });
  }

  private userNameListener() {
    // this.userName$ = this.userService.userName$;
  }

  bookSelected(book: BookItem) {
    this.selectedId = book.id;
  }
}
