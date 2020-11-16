import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-send-amount',
  templateUrl: './send-amount.component.html',
  styleUrls: ['./send-amount.component.css']
})
export class SendAmountComponent implements OnInit {
  dataSharing: any;
  accNo:any;
  customerDetails$: any;
  customer: any;
  name:any=[];
  custDetails: any;
  accountDet: FormGroup;
  sendAmt:any;

  constructor(private customerService:CustomerService,
    private router:Router) {
    this.accountDet=new FormGroup({
      accountNo:new FormControl(null,null),
      amount:new FormControl(null,null)
    })
   }

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.dataSharing=JSON.parse(localStorage.getItem('data'))
    this.accNo=this.dataSharing.accNo
    this.getCustomer()
    this.getCustomerDetails()
  }


  getCustomer(){
    this.customerDetails$=this.customerService.getByaccNo(this.accNo).subscribe(data => {
      this.customer=data;
    },
    (err: HttpErrorResponse) => {
      console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
    });
  }

  getCustomerDetails(){
    this.customerDetails$=this.customerService.getAllDetails().subscribe(data => {
      this.custDetails=data;
      debugger
      this.custDetails.forEach(element => {
        this.name.push(element.name)
        
      });
    },
    (err: HttpErrorResponse) => {
      console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
    });
  }

  verifiertypeEdit(name){

  }

  sendAmount(){
    debugger
    let data={
      "accountNumber":this.accountDet.value.accountNo,
      "debit":this.accountDet.value.amount,
      "credit":this.accNo
    }
    this.sendAmt=data
    this.customerDetails$=this.customerService.creditAmt(this.sendAmt).subscribe(data => {
      this.customer=data;
      alert("Amount Transfered.. Thank you!!!!!!")
      this.router.navigate(['/customerdetails'])
    },
    (err: HttpErrorResponse) => {
      console.log(`Backend returned code ${err.status}, body was: ${err.message}`);
    });
  }

}
