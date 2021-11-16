import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Adopta Un Árbol',  icon: 'emoticons_satisfied', class: '' },
    // { path: '/icons', title: 'Stats',  icon:'education_atom', class: '' },
    { path: '/maps', title: ' Mapa Interactivo',  icon:'location_map-big', class: '' },
    { path: '/notifications', title: 'Crear Usuario',  icon:'users_circle-08', class: '' },
    { path: '/user-profile', title: 'Login',  icon:'users_single-02', class: '' }
    // { path: '/create-user', title: 'Create User',  icon:'users_single-02', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
