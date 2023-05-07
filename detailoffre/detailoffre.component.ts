import { Component } from '@angular/core';

@Component({
  selector: 'app-detailoffre',
  templateUrl: './detailoffre.component.html',
  styleUrls: ['./detailoffre.component.css']
})
export class DetailoffreComponent {
  showNotifications: boolean = false;
  
 toggleNotifications() {
   this.showNotifications = !this.showNotifications;
  }
  // ...


  showform=false;
showForm(){
    this.showform=true;
  }
}
