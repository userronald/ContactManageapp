import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  contacts:any;
  newValue:any={};

  constructor(private cs: ServiceService) { }

  ngOnInit(): void {
    this.contacts = this.cs.contacts;
  }

  add(){
    this.contacts.push({ ...this.newValue }); // Add the new value to the contacts array
    this.newValue = {}; // Clear the form
    }


  edit(value:any){
    this.newValue = value; 
  }

  
  remove(contact: any) {
    alert("Do you really want to remove this table");
    const index = this.contacts.indexOf(contact);
    if (index > -1) {
      this.contacts.splice(index, 1); 
    }
  }

  submit1(){
   
    this.newValue = {}
      }


}
