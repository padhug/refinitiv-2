import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories = [];
  @Input() searchTerm: String = '';
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories()
      .subscribe((data: any) => {
        this.categories = data 
      })
  }

  isCategoryCanBeVisible(category: string) {
    return category.toLowerCase().indexOf(this.searchTerm.toLowerCase()) != -1
  }

}
