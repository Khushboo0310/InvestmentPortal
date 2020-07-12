import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass:string;
  email:string;
  constructor(public router: Router) { }

  ngOnInit() {
    
  }

  onSubmit(form : NgForm){
      if(form.value.email == "admin@123" && form.value.password == "admin"){
        this.router.navigate(['/getQuote']);
      }
      else{
        alert("Invalid Credentials!!");
        this.pass=""
        this.email=""
      }
   }
 
}
