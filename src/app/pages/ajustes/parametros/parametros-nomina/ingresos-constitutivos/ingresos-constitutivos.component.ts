import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-ingresos-constitutivos',
  templateUrl: './ingresos-constitutivos.component.html',
  styleUrls: ['./ingresos-constitutivos.component.scss']
})
export class IngresosConstitutivosComponent implements OnInit {


  public Ingresos_Constitutivos:any[]=[
{
  Concepto:'COMISIONES',
  Cuenta_Contable:'0512',
  Estado:'ACTIVO',
},
{
  Concepto:'BONIFICACION PRESTACIONAL',
  Cuenta_Contable:'0548',
  Estado:'ACTIVO',
},
{
  Concepto:'OTROS INGRESOS',
  Cuenta_Contable:'0548',
  Estado:'ACTIVO',
}

  ]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

}
