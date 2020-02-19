import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "../../app.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name = new FormControl("");
  constructor(private api: AppService, private router: Router) { }

  ngOnInit() {
  }
  onClickSubmit = FormValues => {
    this.api
      .addEmployee(FormValues.name,FormValues.id,FormValues.departmentId,FormValues.age,FormValues.organizationId,FormValues.position)
      .subscribe(data => {
        this.router.navigate(["/"]).then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });
      });
  };
  
}
