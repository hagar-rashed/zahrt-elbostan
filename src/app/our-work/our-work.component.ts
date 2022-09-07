// import AOS from "aos";
import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {
  cardImages:any=[
    {
      images:'../../assets/images/288559897_115687217834392_1978887464814918280_n.jpg'
    },
    {
      images:'../../assets/images/305654674_668684517558180_6789622829596105430_n.jpg'
    },
    {
      images:'../../assets/images/289893390_1080162082576374_1926421512501715114_n.jpg'
    },
    {
      images:'../../assets/images/300962952_3404682453148804_8270760042331645181_n.jpg'
    },
    {
      images:'../../assets/images/301116802_367467588919068_2306644682336917303_n.jpg'
    },
    {
      images:'../../assets/images/290054330_161595656429566_563928123007900144_n.jpg'
    },
    {
      images:'../../assets/images/297089613_560393885783580_8610225449470542306_n.jpg'
    },
    {
      images:'../../assets/images/277698243_1030253404577972_557528712946970082_n.jpg'
    },
    {
      images:'../../assets/images/297282060_372435751731807_4176970625305550999_n.jpg'
    },
  ]
  @HostBinding('class.card-animation')card:boolean=false;
  constructor() { }
  @HostListener('window:scroll')onScroll(){
    console.log(window.scrollY)
    if(window.scrollY > 750){
      this.card=true;
    }else{
      this.card=false;

    }
  }
  ngOnInit(): void {
  }
  // AOS.init();
}
