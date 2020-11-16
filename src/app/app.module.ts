import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankDashboardComponent } from './bank-dashboard/bank-dashboard.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { SendAmountComponent } from './send-amount/send-amount.component';

@NgModule({
  declarations: [
    AppComponent,
    BankDashboardComponent,
    CustomerDetailsComponent,
    SendAmountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
