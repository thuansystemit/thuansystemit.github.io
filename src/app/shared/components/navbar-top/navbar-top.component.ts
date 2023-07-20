import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent {
  @Output() public sidenavToggle = new EventEmitter();
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
