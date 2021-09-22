import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.scss']
})
export class LiquidacionComponent implements OnInit {

  public Liquidacion: any[] = [

    {
      Concepto: 'INDEMNIZACION POR RETIRO',
      Cuenta_Contable: '0560',      
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'OTROS INGRESOS LIQUIDACION',
      Cuenta_Contable: '0548',     
      Estado: 'ACTIVO',

    },
    


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
