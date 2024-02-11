import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-messagecomp',
  templateUrl: './messagecomp.component.html',
  styleUrl: './messagecomp.component.css'
})
export class MessagecompComponent {
  
  @Input()//for sending data from parent to child .It's similiar to prop drilling in react
  ListItem:any = {}

  @Input()
  Index:number = -1;
  
  @Output()//used for sending data from child to parent. Which is not seen react
  delete : EventEmitter<number> = new EventEmitter();

  deleteItem(){
    this.delete.emit(this.Index);
  }

}
