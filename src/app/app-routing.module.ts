import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankDashboardComponent } from './bank-dashboard/bank-dashboard.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { SendAmountComponent } from './send-amount/send-amount.component';


const routes: Routes = [
  {path:'',component:BankDashboardComponent},
  {path:'customerdetails',component:CustomerDetailsComponent},
  {path:'customerAccount',component:CustomerAccountComponent},
  {path:'amount',component:SendAmountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
