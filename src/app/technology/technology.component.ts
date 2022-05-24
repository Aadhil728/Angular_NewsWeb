import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor(private _tech:NewsapiservicesService) { }

  technologyDisplay:any = [];

  ngOnInit(): void {

    this._tech.technology().subscribe((result)=>{
      this.technologyDisplay = result.articles;
    })
  }

}
