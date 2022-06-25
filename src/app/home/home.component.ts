import { PublicAPI } from './../public-api';
import { ApiPublicapiService } from './../api-publicapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  PublicAPI = new PublicAPI();
  publicapi : PublicAPI [] = [];
  count = 0;
  i = 0;
  constructor(private _api : ApiPublicapiService) { }
  
  ngOnInit(): void {
    this._api.getAllAPIs().subscribe((response : any)=>{
      response.entries.forEach((temp : PublicAPI)=>{
        if(temp.Auth == ""){
          let a = temp;
          this.publicapi.splice(this.publicapi.indexOf(a),1);
          a.Auth = "no";
          this.publicapi.push(a);
        }
      })
      this.publicapi = response.entries;
      this.count = response.count;
    })
  }
  
}
