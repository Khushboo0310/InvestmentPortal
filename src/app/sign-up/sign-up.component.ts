import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @ViewChild('modal_1', {static: false}) modal_1: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef, static: false}) vc: ViewContainerRef;
  backdrop: any
  selectedValue = 'phoneNumber'
constructor(public router: Router) { }

ngOnInit() {
}

onSubmit(){
let view = this.modal_1.createEmbeddedView(null);
this.vc.insert(view);
this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove('fade');
this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add('modal-open'); 
this.modal_1.elementRef.nativeElement.previousElementSibling.style.display = 'block';
this.backdrop = document.createElement('DIV')
this.backdrop.className = 'modal-backdrop';
document.body.appendChild(this.backdrop)
}
closeDialog() {
this.vc.clear()
document.body.removeChild(this.backdrop)
this.router.navigate(['/login'])
}


}
