import { Component, OnInit } from '@angular/core';
import { AppService } from "../../app.service";
import { Employee } from "../products";
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  emp: Employee[] = [];

  constructor(private api: AppService ,    
    private router: Router) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.api.getAPI("employee/").subscribe(data => {
      console.log(data)
      for (const d of data as any) {
        this.emp.push({        
age: d.age,
departmentId: d.departmentId,
id: d.id,
name: d.name,
organizationId:d.organizationId,
position:d.position
        });
      }
      console.log(this.emp);
    });
  }
 /*  getProductDetail(id:any)
  {
    this.api.setProduct(id);
    this.router.navigateByUrl('/product-detail/'+id.prod_id);

  } */
  getProductDetail = (id:any) => {
    this.api.setProduct(id);
    this.router.navigate(["/product-detail/", id.id]).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  };
}
