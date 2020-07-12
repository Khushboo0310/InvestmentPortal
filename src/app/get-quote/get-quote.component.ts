import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConditionalExpr } from '@angular/compiler';
import { GetQuoteServiceService } from '../Services/get-quote-service.service';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent implements OnInit {

  product : string
  zipcode : number
  fetchedZip : Array<any>
  data : any
  selectedProduct = "auto"
  Quotes:Array<any>
  constructor(private quotes : GetQuoteServiceService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    
    this.product = form.value["products"];
    this.zipcode = form.value["zip"];
    
    if(this.zipcode.toString() == "111111" || this.zipcode.toString() == "222222" || this.zipcode.toString() == "333333"){
    this.data = this.quotes.getQuotes();
  
    this.fetchedZip = this.data[this.product];
    const matchedValue = this.fetchedZip.filter(item => {
      return item[this.zipcode.toString()]
    })

    this.Quotes = matchedValue[0][this.zipcode]
  }
  else{
    alert("Invalid Zip Code!!")
  }
  }
  
}
