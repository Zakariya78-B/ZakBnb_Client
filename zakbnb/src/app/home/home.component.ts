import { Component, OnInit } from '@angular/core';
import { BungalowService } from '../services/bungalow.service';
import { Bungalow } from '../models/bungalow.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public bungalows;
  constructor(public bungalowService:BungalowService, private router : Router) { }

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

  DetailBungalow(b : Bungalow){
    let url = btoa(b._links.bungalow.href)
    this.router.navigateByUrl("booking/"+url)
  }
}
