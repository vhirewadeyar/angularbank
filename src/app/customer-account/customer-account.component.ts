import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit {
  dataSharing: any;
  accNo:any;
  customerDetails$: any;
  customer: any;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {

    this.getData()
  }

  getData(){
    debugger
    this.dataSharing=JSON.parse(localStorage.getItem('data'))
    this.accNo=this.dataSharing.accNo
    this.getCustomer()
  }


  getCustomer(){
    this.customerDetails$=this.customerService.getByaccNo(this.accNo).subscribe(data => {
      this.customer=data;
    },
    (err: HttpErrorResponse) => {
      console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
    });
  }

}
