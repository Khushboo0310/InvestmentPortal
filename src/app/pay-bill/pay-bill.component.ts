import { Component, OnInit,  ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.css']
})
export class PayBillComponent implements OnInit {
    @ViewChild('modal_1', {static: false}) modal_1: TemplateRef<any>;
    @ViewChild('vc', {read: ViewContainerRef, static: false}) vc: ViewContainerRef;
    backdrop: any
    selectedValue = 'phoneNumber'
  constructor() { }

  ngOnInit() {
  }

 open(){
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
}

}
