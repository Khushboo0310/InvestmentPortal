import { Injectable } from '@angular/core';
import { Agent } from '../find-agent/agent';


@Injectable({
  providedIn: 'root'
})
export class FindAgentServiceService {

  agent1 = new Agent("Khushboo Bhasne",8817959666,"Bhopal","khushboobhasne@gmail.com");
  agent2 = new Agent("Ashi Pal",9977885566,"Pune","ashipal@gmail.com");
  agent3 = new Agent("Aikansh Tiwari",5566441122,"Bhopal","aikanshtiwariji@gmail.com");
  agent4 = new Agent("Karan Bhasne",9644496032,"Mumbai","kbhasne@gmail.com");
  agent5 = new Agent("Himani Prajapati",1123456789,"Pune","himsroack11@gmail.com");
  agent6 = new Agent("Adarsh Aggarwal",9665345634,"Mumbai","adarshg@gmail.com");
  agent7 = new Agent("Rajul Shrivastava",9988332255,"Pune","rajuls@gmail.com");
  agent8 = new Agent("Yash Maheshwari",9922556688,"Mumbai","yashm@gmail.com");
  
  constructor() { }

  agents = {
    "111111" : [this.agent1,this.agent3],
    "222222" : [this.agent2,this.agent5,this.agent7],
    "333333" : [this.agent4,this.agent6,this.agent8]
  } 

  getAgents(){
    return this.agents;
  }
}
