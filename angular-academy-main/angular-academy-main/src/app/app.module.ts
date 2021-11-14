import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { BookCategoriesComponent } from "./components/book-categories/book-categories.component";
import { HttpClientModule } from "@angular/common/http";
import { ObservablesComponent } from "./components/observables/observables.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from "./components/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BooksListComponent } from "./components/books-list/books-list.component";
import { BookItemComponent } from "./components/books-list/book-item/book-item.component";
import { BookDetailsComponent } from "./components/books-list/book-details/book-details.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserPanelComponent } from "./components/user-panel/user-panel.component";
import { BeersListComponent } from "./components/beers-list/beers-list.component";
import { MyBooksComponent } from "./components/additional-components/my-books/my-books.component";
import { FavouritesBooksComponent } from './components/favourites-books/favourites-books.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RandomComponent } from './components/random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookItemComponent,
    BookDetailsComponent,
    NavigationComponent,
    NotFoundComponent,
    WelcomeComponent,
    BookCategoriesComponent,
    BeersListComponent,
    ObservablesComponent,
    UserPanelComponent,
    FooterComponent,
    MyBooksComponent,
    FavouritesBooksComponent,
    CategoriesComponent,
    RandomComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
