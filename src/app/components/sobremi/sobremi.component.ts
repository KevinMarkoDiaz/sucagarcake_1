import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  public titulo: string;
  public subtitulo: string;
  public email: string;

  constructor() { 
    this.titulo = "Sugar Cake"
    this.subtitulo = "pasteleria artesanal"
    this.email = "deyeurrieta@gmail.com" 
  }

  ngOnInit(): void {
  }

}
