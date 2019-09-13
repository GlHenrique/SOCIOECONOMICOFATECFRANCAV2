import {Component, OnInit} from '@angular/core';
import {UiCookie} from 'ng-smn-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title;
  menuOpen: boolean;
  itemModel: any;
  list: Array<any>;

  constructor() {
    this.itemModel = {
      name: 'name'
    };
    this.list = [
      {
        id: 'home',
        parentId: null,
        name: 'Home',
        url: '/',
        icon: {
          material: 'home'
        }
      },
      {
        id: 'autor',
        parentId: null,
        name: 'Autor',
        url: 'http://github.com/GlHenrique',
        icon: {
          material: 'people_alt'
        }
      }
    ];
  }

  ngOnInit(): void {
    this.title = 'Home';

    this.menuOpen = false;

    const isNavDrawerPersistent = UiCookie.get('NavDrawerPersistent') === 'true';

    if (isNavDrawerPersistent) {
      this.menuOpen = true;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


}
