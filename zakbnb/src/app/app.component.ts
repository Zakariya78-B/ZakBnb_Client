import { Component, OnInit } from '@angular/core';
import { BungalowService } from './services/bungalow.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public categories :any; 

  constructor( private bungalowService: BungalowService){ }

  ngOnInit(): void {
    this.getCategories()
  }

  private getCategories(){
    this.bungalowService.getCategories().subscribe(data=>{
      this.categories = data;
    }, err=>{
      console.log("zazazaz",err)
  })
}
}
