import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-br',
  templateUrl: './search-br.component.html',
  styleUrls: ['./search-br.component.css']
})
export class SearchBrComponent implements OnInit {
@Output()sidenavClose =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
