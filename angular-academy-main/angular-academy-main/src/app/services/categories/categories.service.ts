import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  getCategories(): Observable<any>{
    return this.http.get('http://localhost:3000/categories');
  }
  getCategory(categoryId: number): Observable<any>{
    return this.http.get(`http://localhost:3000/categories/${categoryId}`)
  }
  addCategory(category: Category){
    return this.http.post(`http://localhost:3000/categories`, category)
  }
}
