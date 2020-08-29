import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BungalowService {
  host = "http://localhost:8080";

  constructor(private http :HttpClient) { }
  // get Categorie
  public getCategories(){
    return this.http.get("http://localhost:8080/categories")
  }

  // get Resources
  public getResources(url){
    return this.http.get(this.host+url)
  }
}
