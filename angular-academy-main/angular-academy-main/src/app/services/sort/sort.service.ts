import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SortService {
  constructor() {}

  sortByString(items: any, descending: boolean, property: string) {
    return items.sort((a, b) => {
      let comparison = 0;
      if (a[property].toUpperCase() > b[property].toUpperCase()) {
        comparison = 1;
      } else if (a[property].toUpperCase() < b[property].toUpperCase()) {
        comparison = -1;
      }

      return descending ? comparison * -1 : comparison;
    });
  }
}
