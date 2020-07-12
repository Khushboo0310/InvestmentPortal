import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindAgentComponent } from './find-agent/find-agent.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path:'', redirectTo: '/home',pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'findAgent', component:FindAgentComponent},
  {path:'payBill', component:PayBillComponent},
  {path:'getQuote', component:GetQuoteComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignUpComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
