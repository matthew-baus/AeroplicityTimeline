import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Product } from "../shared/models/product";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-Timeline',
  templateUrl: './Timeline.component.html'
})
export class TimelineComponent implements OnInit {
  title = 'AeroplicityTimeline';
  products: any;

  constructor(private httpClient: HttpClient){
  }

  ngOnInit(){
    this.httpClient.get<any>("assets/products.json").subscribe((data)=>
    this.products = data
    )
  }
}