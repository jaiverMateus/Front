import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-tipos-contrato',
  templateUrl: './tipos-contrato.component.html',
  styleUrls: ['./tipos-contrato.component.scss']
})
export class TiposContratoComponent implements OnInit {

  pagination = {
    pageSize: 12,
    page: 1,
    collectionSize: 0,
  }


  public Tipos_Contrato: any[] = [

    {
      Contrato_Nombre: 'Aprendiz Sena Etapa Lectiva',
    },
    {
      Contrato_Nombre: 'Aprendiz Sena Etapa Productiva',
    },
    {
      Contrato_Nombre: 'Contrato Obra Labor',
    },
    {
      Contrato_Nombre: 'Estuiante (Regimen Especial Ley 789 de 2002)',
    },
    {
      Contrato_Nombre: 'Estudiante Pasantia(Decreto 005 de 2015)',
    },
    {
      Contrato_Nombre: 'Estudiante Universitario(Aprendiz)',
    },
    {
      Contrato_Nombre: 'Pensionado Termino Fijo',
    },
    {
      Contrato_Nombre: 'Pensionado Termino Indefinido',
    }



  ];

  public Cargando = true;
  public Hoja = {
    Contrato_Nombre: '',


  };
  public filtro_contrato: any = '';
  @ViewChild('modalNuevaHojaContrato') modalNuevaHojaContrato: any;

  constructor(private http: HttpClient) { }

  ListarDocumentos() {
    this.http.get(environment.base_url + 'php/recursos_humanos/lista_contratos.php').subscribe((data: any) => {
      this.Tipos_Contrato = data.Lista;

      this.Cargando = false;

    })

  }

  normalize = (function () {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
      to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};

    for (var i = 0, j = from.length; i < j; i++)
      mapping[from.charAt(i)] = to.charAt(i);

    return function (str) {
      var ret = [];
      for (var i = 0, j = str.length; i < j; i++) {
        var c = str.charAt(i);
        if (mapping.hasOwnProperty(str.charAt(i)))
          ret.push(mapping[c]);
        else
          ret.push(c);
      }
      return ret.join('');
    }

  })();

  GuardarHoja() {

    let hoja = this.normalize(JSON.stringify(this.Hoja));

    let datos = new FormData();
    datos.append("datos", hoja);

    this.http.post(environment.base_url + 'php/ajustes/guardar_contrato-php', datos).subscribe((data: any) => {

      this.modalNuevaHojaContrato.hide();

      this.Hoja = {
        Contrato_Nombre: '',

      };
      this.ListarDocumentos();
    })



  }
  ngOnInit(): void {
  }

  EditarContrato(pos) {

    this.Hoja.Contrato_Nombre = this.Tipos_Contrato[pos].Contrato_Nombre;
    this.modalNuevaHojaContrato.show();
  }
}
