import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bancos-y-caja',
  templateUrl: './bancos-y-caja.component.html',
  styleUrls: ['./bancos-y-caja.component.scss']
})
export class BancosYCajaComponent implements OnInit {

  public Bancos_y_Caja: any[] = [

    {
      Concepto: 'BANCOS',
      Cuenta_Contable: '1110',      
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'CAJA',
      Cuenta_Contable: '1105',     
      Estado: 'ACTIVO',

    },
    


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
