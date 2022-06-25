import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPublicapiService {

  URL = "https://api.publicapis.org/entries";
  constructor(private _http : HttpClient) { }

  getAllAPIs(){
    return this._http.get(this.URL);
  }
}
