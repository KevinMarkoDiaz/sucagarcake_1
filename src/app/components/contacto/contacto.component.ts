import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public instagram: string;
  public email: string;
  public whatsapp: number;
  
  


  constructor() { 
    this.instagram = "sugarcake.ar"
    this.email = "deyeurrieta@gmail.com"
    this.whatsapp = +541158556544
    
  }

  ngOnInit(): void {
  }

}
