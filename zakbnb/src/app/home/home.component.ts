import { Component, OnInit } from '@angular/core';
import { BungalowService } from '../services/bungalow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public bungalows;
  constructor(public bungalowService:BungalowService) { }

  ngOnInit(): void {
    this.getBungalows("/bungalows")
  }
  private getBungalows(url){
      this.bungalowService.getResources(url).subscribe(data=>{
          this.bungalows=data;
      },err=>{
        console.log(err);
      })
  }
}
