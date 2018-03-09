import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foundData: Array<any> = [];
  selectedUser: any;
  onFoundData(data:any){
    this.foundData = data;
  }
  userSelected(item:any){
    this.selectedUser = item;
  }
}
