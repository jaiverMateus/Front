import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguridad-social',
  templateUrl: './seguridad-social.component.html',
  styleUrls: ['./seguridad-social.component.scss']
})
export class SeguridadSocialComponent implements OnInit {

  public Seguridad_Social: any[] = [

    {
      Concepto: 'SALUD',
      Cuenta_Contable: '0569',
      ContraPartida: '237005',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'PENSION',
      Cuenta_Contable: '0570',
      ContraPartida: '238030',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'SENA',
      Cuenta_Contable: '0578',
      ContraPartida: '237010',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'ICBF',
      Cuenta_Contable: '0575',
      ContraPartida: '237010',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'CAJA DE COMPENSACION',
      Cuenta_Contable: '0572',
      ContraPartida: '237010',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'ARL-RIESGO 1',
      Cuenta_Contable: '0568',
      ContraPartida: '237006',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'ARL-RIESGO 2',
      Cuenta_Contable: '0568',
      ContraPartida: '237006',
      Estado: 'ACTIVO',

    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
