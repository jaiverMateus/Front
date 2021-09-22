import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresos-no-constitutivos',
  templateUrl: './ingresos-no-constitutivos.component.html',
  styleUrls: ['./ingresos-no-constitutivos.component.scss']
})
export class IngresosNoConstitutivosComponent implements OnInit {

  public Ingresos_No_Constitutivos:any[]=[
    {
      Concepto:'AUXILIO DE MOVILIZACION',
      Cuenta_Contable:'0595',
      Estado:'ACTIVO',
    },
    {
      Concepto:'HONORARIOS',
      Cuenta_Contable:'1095',
      Estado:'ACTIVO',
    },
    {
      Concepto:'OTROS INGRESOS NO PRESTACIONALES',
      Cuenta_Contable:'0548',
      Estado:'ACTIVO',
    },
    {
      Concepto:'AUXILIO DE ALIMENTACION',
      Cuenta_Contable:'0545',
      Estado:'ACTIVO',
    },
    {
      Concepto:'BONIFICACION NO PRESTACIONALES',
      Cuenta_Contable:'0548',
      Estado:'ACTIVO',
    },
    
      ]
  constructor() { }

  ngOnInit(): void {
  }

}
