import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/products';
import { ActivatedRoute } from '@angular/router';
import { ProductRepository } from '../../models/product.repository';



@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  product: Product | undefined;
  productRepository: ProductRepository;



  constructor(private route: ActivatedRoute) {
    this.productRepository = new ProductRepository();
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params["productId"];
      this.product = this.productRepository.getProductById(id);
    });
  }

  
  


}
