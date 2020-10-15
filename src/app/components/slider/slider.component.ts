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
    {name:'Tres leches',
    img:'assets/img/imagensc/tresleches.jpg',
    desc:'descripcion de tresleches'},
    {
      name:'Selva negra',
      img:'assets/img/imagensc/selvanegra.jpg',
      desc:'descripcion de selvanegra'}
      
  ]
  constructor (private _config:NgbCarouselConfig) {

  }
  ngOnInit(): void {
  }

 
 }
 
 
 
