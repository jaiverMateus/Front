import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tipos-servicios',
  templateUrl: './tipos-servicios.component.html',
  styles: ['./tipos-servicios.component.scss']

})
export class TiposServiciosComponent implements OnInit {
  pagination = {
    pageSize: 12,
    page: 1,
    collectionSize: 0,
  }


  public Tipos_Servicio: any[] = [
    {
      Codigo: 'C.C',
      Nombre: 'Cedula de Ciudadania',

    },
    {
      Codigo: 'TI',
      Nombre: 'Tarjeta de identidad',

    },
    {
      Codigo: 'NIT',
      Nombre: 'Numero de Identificacion Tributaria',

    }

  ];
  public Cargando = true;
  public Hoja = {
    Codigo: '',
    Nombre: '',

  };

  public filtro_Codigo: any = '';
  public filtro_Nombre: any = '';

  @ViewChild('modalNuevaHojaDocumento') modalNuevaHojaDocumento: any;
  constructor(private http: HttpClient) { }

  ListarDocumentos() {
    this.http.get(environment.base_url + 'php/recursos_humanos/lista_servicios.php').subscribe((data: any) => {
      this.Tipos_Servicio = data.Lista;

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

    this.http.post(environment.base_url + 'php/ajustes/guardar_documento-php', datos).subscribe((data: any) => {

      this.modalNuevaHojaDocumento.hide();

      this.Hoja = {
        Codigo: '',
        Nombre: '',

      };
      this.ListarDocumentos();
    })



  }
  ngOnInit(): void {
  }

  EditarDocumento(pos){


    this.Hoja.Codigo=this.Tipos_Servicio[pos].Codigo;
    this.Hoja.Nombre=this.Tipos_Servicio[pos].Nombre;
    this.modalNuevaHojaDocumento.show();
  }


}
