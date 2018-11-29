import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
datos=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public alert:AlertController) {
  }
  /*Promt Alert*/
  onClickRegistrar(){
    let x=this
    let t=this.alert.create({
      message:"Datos del Curso",
      enableBackdropDismiss:false,
      inputs:[{
        name:"nombre",
        placeholder:"Nombre Del Curso"
      }],
      buttons:[{
        text: "Guardar",
        handler:function(data){
          if (data.nombre=="")
            x.mostrarMensaje("Debe Escribir el Nombre del Curso","Error")
          else{
            let n=data.nombre.toUpperCase()
            if (x.datos.indexOf(n)==-1)
              x.datos.push(n)
            else{
              x.mostrarMensaje("Esta Repetido","Error")
            }
          }
        }
      },{
        text:"Cancelar"
      }]
    })
    t.present()
    
  }
  /*Alert*/
  mostrarMensaje(mensaje:string,titulo:string){
    let t=this.alert.create({
      message:mensaje,
      title:titulo,
      buttons:["Aceptar"]
    })
    t.present()
  }
  /*Eliminar Item*/
  onClickEliminar(dato){
    let pos=this.datos.indexOf(dato);
    this.datos.splice(pos,1)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
