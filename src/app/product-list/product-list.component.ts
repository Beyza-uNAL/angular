import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductRepository } from '../models/product.repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Product[];
  productRepository: ProductRepository;

  constructor(private route: ActivatedRoute) { 
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params["categoryId"]) {
        this.products = this.productRepository.getProductsByCategoryId(params["categoryId"]);
      }else {
        this.products = this.productRepository.getProducts();

      }
    });
  }
  
 

  

}
