import { Component } from '@angular/core';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrl: './form-comp.component.css'
})
export class FormCompComponent {
    name:String = '';
    email:String = '';
    message:String = '';
    isSubmitted:boolean = false;
    tableList:Array<any> = [];

    formSubmit(){
     this.isSubmitted = true;
     this.tableList.push({
      'name':this.name,
      'email':this.email,
     'message':this.message
     })
    }

    deleteListitem(index: number){
      this.tableList.splice(index,1);
    }
}
