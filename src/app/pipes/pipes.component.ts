import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
 
 name = "Bhagyashri Vijaya";
 today = new Date();

 constructor() { }

 public Institute =
 {
   "Name" : "Bhagyashri",
   "Location" : "Pune",
   "password" : "123"
 }
 
 
 
  ngOnInit(){
  }

}
