import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) {

  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter')mouseentro(){
    //this.el.nativeElement.style.backgroundColor = "yellow";
    this.el.nativeElement.style.backgroundColor = this.nuevoColor;
  }
  @HostListener('mouseleave')mousesalio(){
    this.el.nativeElement.style.backgroundColor = null;
  }
}
