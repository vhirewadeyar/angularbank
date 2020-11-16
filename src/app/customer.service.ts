import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  customerDet = new BehaviorSubject(null);
  
  custdata(){
  return this.customerDet.asObservable();
  } 
  getCustDetails(customerDets: string[]) {
    debugger
    this.customerDet = new BehaviorSubject(null);
    this.customerDet.next(customerDets);
  }


  getAllDetails(){
    return this.http.get("http://localhost:9091/findAllDetails")
  }
  getByaccNo(accNo){
    return this.http.get("http://localhost:9091/getAccount?accNo="+accNo)
  }
  creditAmt(amt){
    return this.http.post("http://localhost:9091/sendAmt",amt)
  }

}
