import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
albums=[]
photos=[]
  constructor(private http:HttpClient) {
    this.getPhotos() }


  ngOnInit() {
  }
  getPhotos(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data => {
       
        this.photos.push(data)
        console.log(this.photos)
        for(var i=0;i<this.photos.length;i++) {
  
        }
        for (var i=0;i<this.photos.length;i++){

        }
      })
  }
  }
  


