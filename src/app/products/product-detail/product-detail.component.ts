import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";
import { Employee } from "../products";
import { Router } from "@angular/router";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productDetail:any=[];

  constructor(private api: AppService ,    
    private router: Router) { }

  ngOnInit() {
    this.productDetail = this.api.getProduct();
    console.log(this.productDetail)
  }
/*   deleteProduct = item => {
    this.api.getAPI(`delete_proditem?prod_id=${item}`).subscribe(data => {
      this.router.navigate(["/product-list/"]).then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
    });
  }; */


}
