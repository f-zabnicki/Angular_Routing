import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userName$: Subject<string> = new Subject<string>();

  constructor() {}

  setUserName(name: string) {
    this.userName$.next(name);
  }
}
