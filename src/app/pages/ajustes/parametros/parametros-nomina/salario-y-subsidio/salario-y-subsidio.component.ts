import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-salario-y-subsidio',
  templateUrl: './salario-y-subsidio.component.html',
  styleUrls: ['./salario-y-subsidio.component.scss']
})
export class SalarioYSubsidioComponent implements OnInit {

  public Salario_y_Subsidios: any[] = [

    {
      Concepto: 'SALARIO',
      Cuenta_Contable: '0506',
      ContraPartida: '2505',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'SLARIO INTEGRAL',
      Cuenta_Contable: '0503',
      ContraPartida: '2505',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'HONORARIOS',
      Cuenta_Contable: '1095',
      ContraPartida: '222525',
      Estado: 'ACTIVO',

    },
    {
      Concepto: 'CUOTA DE SOSTENIMIENTO',
      Cuenta_Contable: '0506',
      ContraPartida: '2505',
      Estado: 'ACTIVO',

    },


  ]






  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
