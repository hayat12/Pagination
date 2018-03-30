import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pagination Demo';
  p: number = 2;
  collection: any[] = []; 

  constructor(){ 

  }
  ngOnInit(){
    for (let i = 0; i <50; i++) {
      this.collection.push("line no "+i)
    }
  }
}