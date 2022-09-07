import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allservices :any =[
  {
    image:'../../assets/images/slider/276277694_495140265624530_6663485020338636752_n.jpg',
  },
  {
    image:'../../assets/images/slider/277046517_1005803226697629_5530024798396335601_n.jpg',

  }, {
    image:'../../assets/images/slider/276067016_507834634088445_5176053266400356584_n.jpg',

  }, {
    image:'../../assets/images/slider/276980657_497504648641909_8727868009746585323_n.jpg',

  }, {
    image:'../../assets/images/slider/276983889_955160815202054_1318761396329919060_n.jpg',

  }, {
   image :'../../assets/images/slider/276320871_1676858832659878_847551845027138814_n.jpg',

  }
]
  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      660: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true,
    rtl:true,

  }

  ngOnInit(): void {

  }

}
