import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {
  id:string;
  constructor( private router:ActivatedRoute) {
    this.router.params.subscribe( parametro =>{
      console.log("Ruta padre")
      console.log(parametro);
      this.id = parametro.id;
    })
   }

  ngOnInit() {
  }

}
