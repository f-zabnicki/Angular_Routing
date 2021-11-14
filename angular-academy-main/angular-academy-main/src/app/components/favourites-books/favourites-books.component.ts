import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookItem } from 'src/app/models/book-item';
import { FavouritesBooksService } from 'src/app/services/favourite-books/favourites-books.service';

@Component({
  selector: 'app-favourites-books',
  templateUrl: './favourites-books.component.html',
  styleUrls: ['./favourites-books.component.scss']
})
export class FavouritesBooksComponent implements OnInit {

  books: BookItem[];
  form = new FormGroup({
    title: new FormControl("", Validators.required),
    author: new FormControl(""),
  });

  constructor(private favouritesBooksService: FavouritesBooksService) {
  }

  ngOnInit() {
    this.getAllBooks();
  }

  public onSubmit() {
    this.favouritesBooksService.addBook(this.form.value).subscribe(
      (book: BookItem) => {
      this.books.push(book);
    },
      (error) => {
        console.error(error, "Sth went wrong")
      })

  }

  public remove(bookId: number){
    this.favouritesBooksService.removeBook(bookId).subscribe(() => {
      this.books = this.books.filter(b => b.id !== bookId)
    })
  }

  private getAllBooks() {
    this.favouritesBooksService.getMyFavouritesBooks().subscribe(books => { this.books = books })
  }

  


}
