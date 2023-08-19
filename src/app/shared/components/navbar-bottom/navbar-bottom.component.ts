import { Component, ViewEncapsulation } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarBottomComponent {
  links = ['projects', 'about'];
  titles = ['Projects', 'About'];
  activeLink = this.links[1];
  background: ThemePalette = 'primary';
}
