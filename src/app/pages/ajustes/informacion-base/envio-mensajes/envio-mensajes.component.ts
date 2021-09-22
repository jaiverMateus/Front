import { Component, OnInit, ViewChild } from '@angular/core';
import { IMyDrpOptions } from 'mydaterangepicker';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-envio-mensajes',
  templateUrl: './envio-mensajes.component.html',
  styleUrls: ['./envio-mensajes.component.scss']
})
export class EnvioMensajesComponent implements OnInit {

  pagination = {
    pageSize: 12,
    page: 1,
    collectionSize: 0,
  }
  public Envio_Mensajes: any[] = [
    {
      Funcionario: 'Auditor proh ELIMINAR',
      Fecha_Envio: '2018/12/09',
      Mensaje: 'sdfsdfsdf',
    },
    {
      Funcionario: 'Prueba mensaje',
      Fecha_Envio: '2018/12/22',
      Mensaje: 'Hola buenas tardes',
    },
    {
      Funcionario: 'Practica de mensaje',
      Fecha_Envio: '2019/01/01',
      Mensaje: 'hola hola hola hola',
    },
    {
      Funcionario: 'Mensaje gerente',
      Fecha_Envio: '2019/02/15',
      Mensaje: 'Soy el gerente',
    }


  ];
  public Cargando = true;
  public Hoja = {

    Funcionario: '',
    Mensaje: '',
  };
  public filtro_Fecha: any = '';
  public filtro_Fecha_Inicio: string = '';
  public filtro_funcionario: any = '';

  @ViewChild('modalNuevaHojaMensaje') modalNuevaHojaMensaje: any;

  constructor(private http: HttpClient) { }

  ListarMensajes() {
    this.http.get(environment.base_url + 'php/recursos_humanos/lista_mensajes.php').subscribe((data: any) => {
      this.Envio_Mensajes = data.Lista;

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

  GuardarHoja(){

    let hoja = this.normalize(JSON.stringify(this.Hoja));
  
    let datos = new FormData();
    datos.append("datos", hoja);
    
    this.http.post(environment.base_url + 'php/ajustes/guardar_mensaje-php', datos).subscribe((data:any)=>{
  
      this.modalNuevaHojaMensaje.hide();
      
      this.Hoja ={
  Funcionario:'',
  Mensaje:'',
  
      };
      this.ListarMensajes();
    })
  
  
  
  }
  dateRangeChanged(event) {

    if (event.formatted != "") {
      this.filtro_Fecha = event;
    } else {
      this.filtro_Fecha = '';
    }

    this.filtros();
  }
  filtros() {
    let params: any = {};

    if (this.filtro_Fecha != "" && this.filtro_Fecha != null) {
      params.fecha = this.filtro_Fecha.formatted;
    }
    if (this.filtro_Fecha_Inicio != "" && this.filtro_Fecha_Inicio != "") {
      params.fechainicio = this.filtro_Fecha_Inicio;
    }

  }
  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: '',
    sunHighlight: false,
    showClearDateRangeBtn: false,
    editableDateRangeField: false
  };

  ngOnInit(): void {
  }

}
