import { BooksCountService } from "../../services/additional/books-count/books-count.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { BeerService } from "../../services/beer-api/beer.service";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit, OnDestroy {
  userName: string;
  count: number;
  beersLength: number;
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private booksCountService: BooksCountService,
    private beerService: BeerService
  ) {}

  ngOnInit() {
    this.userNameListener();
    this.getBeers();
  }

  private userNameListener() {
    //approach with subscription
    this.userService.userName$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((name) => {
        this.userName = name;
      });

    //approach with asyncPipe
    // this.userName$ = this.userService.userName$;
  }

  private getBeers() {
    this.beerService
      .getBeers()
      .pipe(filter((beers) => beers.length))
      .subscribe((beers) => {
        this.beersLength = beers.length;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
