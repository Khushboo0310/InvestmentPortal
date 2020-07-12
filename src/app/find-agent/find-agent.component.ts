import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FindAgentServiceService } from '../Services/find-agent-service.service';
import { Agent } from './agent';

@Component({
  selector: 'app-find-agent',
  templateUrl: './find-agent.component.html',
  styleUrls: ['./find-agent.component.css']
})
export class FindAgentComponent implements OnInit {
   
  zipAgents:any;
  agents:Array<Agent>;

  constructor(private findAgents:FindAgentServiceService) { }

  ngOnInit() {
  }

  onSubmit(zipCode:NgForm) {
    // console.log(zipCode.value.zipcode);

    if(zipCode.value.zipcode == "111111" || zipCode.value.zipcode == "222222" || zipCode.value.zipcode == "333333"){  
      this.zipAgents = this.findAgents.getAgents();
      this.agents = this.zipAgents[zipCode.value.zipcode]
    }
    else{
      alert("Invalid ZipCode!!");
    }

  }
}
