import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor() { }
  collapsed = true;
  
  // @Output() selected = new EventEmitter<string>()
  // onClick(event: any) {
  //   // console.log(event.target.textContent);
  //   this.selected.emit(event.target.textContent)
  // }
  
  @Output() featureSelected = new EventEmitter<string>()
  
  onSelect(feature: string){
    this.featureSelected.emit(feature)
  }

}
