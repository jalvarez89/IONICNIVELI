import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  titulo="Bindings y Directivas";
  subtitulo="Listado de Cursos";
  cursos = [];
  cursosObj:Curso[]=[];
  constructor(public navCtrl: NavController) {
    this.cursos.push("Javascript");
    this.cursos.push("Angular");
    this.cursos.push("Ionic");
    
    this.cursosObj.push(new Curso("Javascript",Math.random()*1000+1000,"./assets/imgs/1.jpg",false));
    this.cursosObj.push(new Curso("Bootstrap",Math.random()*1000+1000,"./assets/imgs/2.jpg",false));
  }

}
class Curso{
  constructor(public nombre:string,
  public precio:number,
  public foto:string,
  public disponible:boolean=false){

  }
}