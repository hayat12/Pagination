import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pagination Demo';
  p: number = 2;
  collection: any = [];
  url: any = 'https://jsonplaceholder.typicode.com/posts'
  constructor(
    private _http: HttpClient
  ){ 
  }
  ngOnInit(){
    this._http.get(this.url).subscribe((params)=>{
      this.collection = params;
    })
    // for (let i = 0; i <100; i++) {
    //   this.collection.push("line no "+i)
    // }
  }
}