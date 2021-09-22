import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestaciones-sociales-nomina',
  templateUrl: './prestaciones-sociales-nomina.component.html',
  styleUrls: ['./prestaciones-sociales-nomina.component.scss']
})
export class PrestacionesSocialesNominaComponent implements OnInit {


  public Prestaciones_Sociales_Nomina: any[] = [

    {
      Concepto: 'CESANTIAS',
      Cuenta_Contable: '0530',
      ContraPartida: '251010',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'INTERESES A LAS CESANTIAS',
      Cuenta_Contable: '0522',
      ContraPartida: '2515',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'PRIMA DE SERVICIOS',
      Cuenta_Contable: '0536',
      ContraPartida: '2520',
      Estado: 'ACTIVO',

    },
    


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
