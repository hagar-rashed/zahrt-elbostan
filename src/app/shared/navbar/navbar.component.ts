import { parseHostBindings } from '@angular/compiler';
import { Component, EventEmitter, HostListener,HostBinding, OnInit, Output } from '@angular/core';
// 🐌 Named

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
@HostBinding('class.new-nav')newnav:boolean=false;
constructor() { }
@HostListener('window:scroll')onScroll(){
  // console.log(window.scrollY)
  if(window.scrollY > 100){
    this.newnav=true;
  }else{
    this.newnav=false;

  }
}

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();

  }
}
function HostBindings() {
  throw new Error('Function not implemented.');
}

