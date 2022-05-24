import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //news Api Url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=ie&apiKey=9ccdf2f30c24425a90a821d04eb5ef38";

  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9ccdf2f30c24425a90a821d04eb5ef38"

  //topheading()
  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl)
  }

  technology():Observable<any>{
    return this._http.get(this.techApiUrl)
  }
}
