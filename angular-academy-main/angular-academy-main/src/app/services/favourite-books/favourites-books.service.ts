import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookItem } from 'src/app/models/book-item';

@Injectable({
  providedIn: 'root'
})
export class FavouritesBooksService {

  constructor(private http: HttpClient) { }
  getMyFavouritesBooks(): Observable<any> {
    return this.http.get(`http://localhost:3000/books`);
  }

  addBook(book: BookItem) {
    return this.http.post(`http://localhost:3000/books`, book);
  }

  removeBook(bookId: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/books/${bookId}`);
  }
}
