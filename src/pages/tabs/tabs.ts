import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CameraPage } from '../camera/camera';
import { ComprasPage } from '../compras/compras';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = CameraPage;
  tab4Root = ComprasPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
