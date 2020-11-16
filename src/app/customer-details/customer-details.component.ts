import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {


  customerDetails$:any;
  custDetails:any;
  clickedStatus: boolean=false;
  dataSharing:any;
  messageSource: any;

  constructor(
    private customerService:CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomerDetails()
  }

  getData(){
    this.customerService.custdata().subscribe(data => {
      this.dataSharing=data

    })
  }

  getCustomerDetails(){
    debugger
    this.customerDetails$=this.customerService.getAllDetails().subscribe(data => {
      this.custDetails=data;
    },
    (err: HttpErrorResponse) => {
      console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
    });
  }

  sendAccNo(details){
    debugger
    let data={
      "accNo":details.accountNumber,
      "name": details.name
    }
    
    this.messageSource=data
    localStorage.clear()
    localStorage.setItem("data",JSON.stringify(this.messageSource))
    this.customerService.getCustDetails(this.messageSource);
  }

}
