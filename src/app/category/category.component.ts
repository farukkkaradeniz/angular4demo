import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  selectedCategory : Category;
  categories : Category[];

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((categories:Category[])=>this.categories = categories);
  }

  onSelect(category?:Category){
    if(category){
      this.selectedCategory = category;
    }else {
      this.selectedCategory = null;
    }
  }

}
