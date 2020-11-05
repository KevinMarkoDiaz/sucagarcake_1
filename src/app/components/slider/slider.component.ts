import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
 
  tortas:any[]=[
    {name:'SugarCake',
    img:'assets/img/imagensc/tresleches.jpg',
    desc:''},
    {
      name:'SugarCake',
      img:'assets/img/imagensc/selvanegra.jpg',
      desc:''}
      
  ]
  constructor (private _config:NgbCarouselConfig) {

  }
  ngOnInit(): void {
  }

 
 }
 
 
 
