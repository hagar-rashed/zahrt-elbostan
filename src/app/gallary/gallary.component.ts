// import { images } from '..';
import { Component, OnInit } from '@angular/core';
import allpreviousWork from "../../assets/allpreviousWork.json"



@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  products=[
    {
      "image":'/assets/previousImages/287193979_1274848109927473_5635576306372518185_n.jpeg'
    },
    {
      "image":"/assets/previousImages/305296366_571668218035072_8625047908403677009_n.jpeg"
    },
    {
      "image":"/assets/previousImages/305296366_571668218035072_8625047908403677009_n.jpeg"
    },
    {
      "image":"/assets/previousImages/302182791_1958459494352567_8084021165377389187_n.jpeg"
    },
    {
      "image":"/assets/previousImages/302471990_1283928399083526_5829482535445113539_n.jpeg"
    }

  ]
  ;
// produts=['/assets/previousImages/287193979_1274848109927473_5635576306372518185_n.jpeg','/assets/previousImages/305296366_571668218035072_8625047908403677009_n.jpeg']
  constructor() {
    // this.products =allpreviousWork;
    console.log(this.products[0])
   }

  ngOnInit(): void {
  }

}
