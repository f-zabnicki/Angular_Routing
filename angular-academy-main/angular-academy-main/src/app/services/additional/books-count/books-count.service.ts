import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BooksCountService {
  booksCount$: Subject<number> = new Subject<number>();
  constructor() {}

  updateCountOfBooks(count: number) {
    this.booksCount$.next(count);
  }
}
