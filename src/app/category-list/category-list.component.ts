import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from '../models/category.repository';
import { Category } from '../models/category';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category | null | undefined;
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }
  ngOnInit(): void {
    
  }
  displayAll = true;
  selectCategory(category?: Category) {
    if(category){
      this.selectedCategory = null;
      this.displayAll = false;
    }
    else{
      this.selectedCategory = category;
      this.displayAll = true;
    }
  }

}
