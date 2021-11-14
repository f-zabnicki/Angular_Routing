import { CategoriesService } from "./../../../services/additional/categories/categories.service";
import { BooksApiService } from "./../../../services/books-api/books-api.service";
import { BooksService } from "./../../../services/books/books.service";
import { BookItem } from "./../../../models/book-item";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { concatMap } from "rxjs/operators";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"]
})
export class BookDetailsComponent implements OnInit {
  selectedBook: BookItem;
  category: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: BooksService,
    private booksApiService: BooksApiService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    // this.getInitialBookId();
    this.bookListener();
  }

  private getInitialBookId() {
    const id = this.route.snapshot.params.id;
    this.selectedBook = this.booksService.getBook(Number(id));
  }

  private bookListener() {
    // avoid subscription in subscription
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.selectedBook = this.booksService.getBook(Number(params.get("id")));
    //   this.categoriesService.getCategory(this.selectedBook.category).subscribe(category => {
    //     this.category = category.name;
    //   });
    // });


    this.route.paramMap
      .pipe(
        concatMap((params: ParamMap) => {
          if (!params.get("id")) {
            return;
          }
          return this.booksApiService.getBook(Number(params.get("id")));
        }),
        concatMap(book => {
          this.selectedBook = book;
          return this.categoriesService.getCategory(book.category);
        })
      )
      .subscribe(category => {
        this.category = category.name;
      });
  }
}
