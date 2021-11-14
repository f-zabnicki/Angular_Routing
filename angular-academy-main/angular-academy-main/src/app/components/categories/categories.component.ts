import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl("", Validators.required),
  });
  
  categories: Category[];
  constructor(private categoriesService : CategoriesService) { }

  ngOnInit() {
    console.log(this.categories);
    this.getAllCategories();
  }
  onSubmit(){
    this.categoriesService.addCategory(this.form.value).subscribe(
      (cat : Category) =>{
        this.categories.push(cat)
      },
      (error) => {
        console.error(error, "Sth went wrong")
      });
      console.log(this.form.value);
  }

  private getAllCategories(){
    this.categoriesService.getCategories().subscribe(cat => {this.categories = cat});
  }

}
