import { BookItem } from "./../../models/book-item";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BooksApiService {
  url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  getBooks(): Observable<any> {
    return this.http.get(`${this.url}/books`);
  }

  getBook(id: number): Observable<any> {
    return this.http.get(`${this.url}/books/${id}`);
  }

  addBook(book: BookItem): Observable<any> {
    return this.http.post(`${this.url}/books`, book);
  }

  removeBook(id: number) {
    return this.http.delete(`${this.url}/books/${id}`);
  }
}
