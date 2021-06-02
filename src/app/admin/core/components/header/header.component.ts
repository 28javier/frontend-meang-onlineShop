import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggledValue: boolean = true;
  @Output() menuDespegable = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  toggled(){
    if(this.toggledValue === undefined){
      this.toggledValue = true;
    }
    this.toggledValue = !this.toggledValue;
    // console.log(this.toggledValue);
    this.menuDespegable.emit(this.toggledValue);
    
  }

}
