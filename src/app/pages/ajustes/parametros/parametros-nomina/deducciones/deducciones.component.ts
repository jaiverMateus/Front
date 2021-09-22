import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deducciones',
  templateUrl: './deducciones.component.html',
  styleUrls: ['./deducciones.component.scss']
})
export class DeduccionesComponent implements OnInit {

  public Deducciones:any[]=[
    {
      Concepto:'PRESTAMO',
      Cuenta_Contable:'425050',
      Estado:'ACTIVO',
    },
    {
      Concepto:'CELULAR',
      Cuenta_Contable:'425050',
      Estado:'ACTIVO',
    },
    {
      Concepto:'OTRAS DEDUCCIONES',
      Cuenta_Contable:'425050',
      Estado:'ACTIVO',
    },
    {
      Concepto:'CREDITO LIBRANZA',
      Cuenta_Contable:'237030',
      Estado:'ACTIVO',
    },
    {
      Concepto:'APORTES VOLUNTARIOS A PENSION',
      Cuenta_Contable:'238030',
      Estado:'ACTIVO',
    },
    
      ]
  constructor() { }

  ngOnInit(): void {
  }

}
