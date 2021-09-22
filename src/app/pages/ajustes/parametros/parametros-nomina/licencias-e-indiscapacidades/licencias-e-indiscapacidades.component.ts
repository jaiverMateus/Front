import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licencias-e-indiscapacidades',
  templateUrl: './licencias-e-indiscapacidades.component.html',
  styleUrls: ['./licencias-e-indiscapacidades.component.scss']
})
export class LicenciasEIndiscapacidadesComponent implements OnInit {

  public Licencias_e_Indiscapacidades:any[]=[
    {
      Concepto:'INCAPACIDAD LABORAL',
      Cuenta_Contable:'0524',
      Estado:'ACTIVO',
    },
    {
      Concepto:'INCAPACIDAD GENERAL',
      Cuenta_Contable:'0524',
      Estado:'ACTIVO',
    },
    {
      Concepto:'LICIENCIA DE MATERNIDAD',
      Cuenta_Contable:'0524',
      Estado:'ACTIVO',
    },
    {
      Concepto:'LICENCIA DE PATERNIDAD',
      Cuenta_Contable:'0524',
      Estado:'ACTIVO',
    },
    {
      Concepto:'ABANDONO DEL PUESTO DE TRABAJO',
      Cuenta_Contable:'0506',
      Estado:'ACTIVO',
    },
    
      ]
  constructor() { }

  ngOnInit(): void {
  }

}
