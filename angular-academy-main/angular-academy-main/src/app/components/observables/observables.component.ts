import { ActivatedRoute, ParamMap } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { fromEvent, interval, Observable, of, Subject } from "rxjs";
import { filter, map, take, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.scss"],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  url = "https://api.punkapi.com/v2/beers";
  unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("--------------------Observable logs-------------------------");

    const numbersFromOf$: Observable<number[]> = of([1, 2, 3]);

    const interval$: Observable<number> = interval(1000).pipe(take(5));

    const click$: Observable<Event> = fromEvent(document, "click");

    const clickString$: Observable<string> = click$.pipe(
      map((event) => `Event time: ${event.timeStamp}`)
    );

    const urlParams$: Observable<ParamMap> = this.route.paramMap;

    const observable$ = new Observable((subscriber) => {
      subscriber.next([1, 2, 3]);
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 5000);

    });

    const pipes$: Observable<number> = of(1, 2, 3).pipe(
      map((value) => value * 2),
      filter((value) => value > 5)
    );

    // interval$.subscribe((value: number) => console.log("interval$", value));

    // click$
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((value: Event) => console.log("click$", value));

    // clickString$
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((value: string) => console.log("clickString$", value));


    // const apiResponse$: Observable<any> = this.http.get(`${this.url}/3`);

    // apiResponse$.subscribe(
    //   (value) => {
    //     console.log("Received value: beers: ", value);
    //   },
    //   (error) => {
    //     console.log("Error!!", error);
    //   },
    //   () => {
    //     console.log("Completes! End of values");
    //   }
    // );

    // numbersFromOf$.subscribe((data: number[]) => console.log("numbersFromOf$", data));

    // urlParams$.subscribe((data: ParamMap) => console.log("urlParams$", data));

    // observable$.subscribe((data: number[]) => console.log("observable$", data));

    // pipes$.subscribe((num: number) => console.log("pipes$", num));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
