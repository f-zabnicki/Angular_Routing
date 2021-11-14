import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.url}/categories/${id}`);
  }
}
