import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallnews',
  templateUrl: './viewallnews.component.html',
  styleUrls: ['./viewallnews.component.css']
})
export class ViewallnewsComponent implements OnInit {

  constructor(private api:ApiService) {this.dataformApi() }

  dataformApi=()=>{
    this.api.fetchNews().subscribe(
  
      (response:any)=>{
        this.news=response.news
      }
    )
  }

  news:any=[]


  ngOnInit(): void {
  }

}
