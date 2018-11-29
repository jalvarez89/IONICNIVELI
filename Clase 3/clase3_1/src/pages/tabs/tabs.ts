import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  alCambiar(){
    this.toast.create({
      message:"Cambio de Pagina",
      duration:2500,
      position:"top"

    }).present()
  }
  constructor(private toast:ToastController) {

  }
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PerfilPage;
}
