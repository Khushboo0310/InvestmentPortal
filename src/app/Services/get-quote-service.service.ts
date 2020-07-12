import { Injectable } from '@angular/core';
import { Quote } from '../get-quote/quotes';

@Injectable({
  providedIn: 'root'
})
export class GetQuoteServiceService {

  

  // Auto
  quote1 = new Quote("Ensurance","POS",103,1000,3);
  quote2 = new Quote("Liberty Mutual","NAS",550,5500,2);
  quote3 = new Quote("AllState Auto","POS",300,4300,2);

  //MediCare
  quote4 = new Quote("Aetna","HMO",201,4503,3);
  quote5 = new Quote("United Health Care","APS",540,7000,1);
  quote6 = new Quote("Kaiser Permanente","HMO",55,500,4);
  quote7 = new Quote("Health Net","KHU",350,1000,4);

  //Home
  quote8 = new Quote("Safeco","HMP",222,533,3);
  quote9 = new Quote("Progressive","AIK",801,8000,2);

  constructor() { }

  data = {

    "auto" : [
      {"111111" : [this.quote1,this.quote2]},
      {"222222" : [this.quote3]}
    ],

    "homeOwners" : [
      {"222222" : [this.quote8]},
      {"333333" : [this.quote9]}
    ],

    "mediCare" : [
      {"111111" : [this.quote4, this.quote5]},
      {"222222" : [this.quote6]},
      {"333333" : [this.quote7]}
    ]

  }

  getQuotes(){
    return this.data;
  }

}
