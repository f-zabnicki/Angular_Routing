import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyBooksComponent } from "./components/additional-components/my-books/my-books.component";
import { BeersListComponent } from "./components/beers-list/beers-list.component";
import { BookCategoriesComponent } from "./components/book-categories/book-categories.component";
import { BookDetailsComponent } from "./components/books-list/book-details/book-details.component";
import { BooksListComponent } from "./components/books-list/books-list.component";
import { FavouritesBooksComponent } from "./components/favourites-books/favourites-books.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { UserPanelComponent } from "./components/user-panel/user-panel.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

const routes: Routes = [
  {
    path: "books",
    component: BooksListComponent,
    children: [{ path: ":id", component: BookDetailsComponent }],
  },
  { path: "categories", component: BookCategoriesComponent },
  { path: "beers", component: BeersListComponent },
  { path: "user", component: UserPanelComponent },
  { path: "favourites", component: FavouritesBooksComponent },
  { path: "my-books", component: MyBooksComponent },
  { path: "", component: WelcomeComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
