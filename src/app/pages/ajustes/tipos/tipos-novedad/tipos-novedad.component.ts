import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tipos-novedad',
  templateUrl: './tipos-novedad.component.html',
  styleUrls: ['./tipos-novedad.component.scss']
})
export class TiposNovedadComponent implements OnInit {
  pagination = {
    pageSize: 12,
    page: 1,
    collectionSize: 0,
  }

  public Tipos_Novedad: any[] = [
    {
      Tipo_Novedad: 'Vacaciones',
      Modalidad_Novedad: 'Dia',
      Novedad_Novedad: 'Vacaciones',

    },
    {
      Tipo_Novedad: 'Incapacidad',
      Modalidad_Novedad: 'Dia',
      Novedad_Novedad: 'Incapacidad Laboral',

    },
    {
      Tipo_Novedad: 'Incapacidad',
      Modalidad_Novedad: 'Dia',
      Novedad_Novedad: 'Incapacidad General',

    },
    {
      Tipo_Novedad: 'Licencia',
      Modalidad_Novedad: 'Dia',
      Novedad_Novedad: 'Licencia de Maternidad',

    },
    {
      Tipo_Novedad: 'Licencia',
      Modalidad_Novedad: 'Dia',
      Novedad_Novedad: 'Licencia de Paternidad',

    },

  ];

  public Cargando = true;
  public Hoja = {
    Tipo_Novedad: '',
    Modalidad_Novedad: '',
    Novedad_Novedad: '',

  };
  public Puntos: any[];

  @ViewChild('modalNuevaHojaNovedad') modalNuevaHojaNovedad: any;

  constructor(private http: HttpClient) { }

  ListarDocumentos() {
    this.http.get(environment.base_url + 'php/recursos_humanos/lista_novedades.php').subscribe((data: any) => {
      this.Tipos_Novedad = data.Lista;

      this.Cargando = false;

    })

  }
  cargarPuntos(id_dep) {
    if (id_dep != "") {
      this.http.get(environment.base_url + 'php/reportes/puntos.php', { params: { id_dep: id_dep } }).subscribe((data: any) => {
        this.Puntos = data;
      })
    }
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
  ngOnInit(): void {
  }

  GuardarHoja() {

    let hoja = this.normalize(JSON.stringify(this.Hoja));

    let datos = new FormData();
    datos.append("datos", hoja);

    this.http.post(environment.base_url + 'php/ajustes/guardar_novedad-php', datos).subscribe((data: any) => {

      this.modalNuevaHojaNovedad.hide();

      this.Hoja = {
        Tipo_Novedad: '',
        Modalidad_Novedad: '',
        Novedad_Novedad: '',

      };
      this.ListarDocumentos();
    })



  }

  EditarNovedad(pos) {


    this.Hoja.Tipo_Novedad = this.Tipos_Novedad[pos].Tipo_Novedad;
    this.Hoja.Modalidad_Novedad = this.Tipos_Novedad[pos].Modalidad_Novedad;
    this.Hoja.Novedad_Novedad = this.Tipos_Novedad[pos].Novedad_Novedad;
    this.modalNuevaHojaNovedad.show();
  }
}
