import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  id:string;
  constructor( private router:ActivatedRoute) {
    this.router.parent.params.subscribe( parametro =>{
      console.log("Ruta hija")
      console.log(parametro);
      this.id = parametro.id;
    })
   }

  ngOnInit() {
  }

}
