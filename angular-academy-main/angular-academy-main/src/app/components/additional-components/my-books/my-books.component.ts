import { BooksCountService } from "./../../../services/additional/books-count/books-count.service";
import { BooksApiService } from "./../../../services/books-api/books-api.service";
import { BookItem } from "./../../../models/book-item";

import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-my-books",
  templateUrl: "./my-books.component.html",
  styleUrls: ["./my-books.component.scss"],
})
export class MyBooksComponent implements OnInit, OnDestroy {
  books: BookItem[];
  booksCount$: Subject<number> = new Subject<number>();
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private bookApiService: BooksApiService,
    private booksCountService: BooksCountService
  ) {}

  form = new FormGroup({
    title: new FormControl("", Validators.required),
    author: new FormControl(""),
  });

  ngOnInit() {
    this.getAllBooks();
    this.formListener();
  }

  onSubmit() {
    this.bookApiService.addBook(this.form.value).subscribe(() => {
      // First approach
      // this.books.push(book);

      //Second, make a call for all books
      this.getAllBooks();
       // mehod
    });


  }

  formListener() {
    this.form.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        // console.log(value);
      });
  }

  private getAllBooks() {
    this.bookApiService.getBooks().subscribe((books) => {
      this.books = books;
      this.updateCountOfBooks();
    });
  }

  remove(id: number) {
    this.bookApiService.removeBook(id).subscribe((books) => {
      this.books = this.books.filter((book) => book.id !== id);
      this.updateCountOfBooks();
    });
  }

  updateCountOfBooks() {
    const count = this.books.length;
    this.booksCountService.updateCountOfBooks(count);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
