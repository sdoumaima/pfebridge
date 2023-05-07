import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';





@Component({
  selector: 'app-candidatures-r',
  templateUrl: './candidatures-r.component.html',
  styleUrls: ['./candidatures-r.component.css']
})
export class CandidaturesRComponent {
  
  showform=false;
showForm(){
    this.showform=true;
  }

  constructor(public dialog: MatDialog) {}




  showNotifications: boolean = false;
  
  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
   }
   // ...



   displayedColumns: string[] = ['mail','nom', 'cv', 'lettre','lien','weight' ,'button','btn',];

   dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
   
   onCancel(element: Element): void {
 
     // Do something when cancel button is clicked for this element
   }
   
   
 }
 
 export interface Element {
  mail: string;
  nom:string;
  cv: string;
  lettre:string;
  lien:string;
   weight: string;
 
 
 }
 
 const ELEMENT_DATA: Element[] = [
   {mail: 'sarra@gmail.com',nom:'Ayari Sarra', cv: 'pdf', lettre: 'pdf',lien: 'http', weight: 'En attente', },
   {mail:'marwa@gmail.com', nom:'Ayari marwa',cv: 'pdf', lettre: 'pdf',lien: 'http', weight: 'En attente',},
   {mail:'eya@gmail.com', nom:'Mansouri Eya',cv: 'pdf', lettre: 'pdf',lien: 'http', weight: 'En attente', },
   {mail: 'yassine@gmail.com', nom:'Mansouri Yassine',cv: 'pdf',  lettre: 'pdf',lien: 'http',weight: 'En attente', },
   {mail: 'ahmed@gmail.com', nom:'Ayari ahmed',cv: 'pdf',  lettre: 'pdf',lien: 'http',weight: 'En attente', },
];
