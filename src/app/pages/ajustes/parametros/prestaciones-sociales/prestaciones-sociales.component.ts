import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-prestaciones-sociales',
  templateUrl: './prestaciones-sociales.component.html',
  styleUrls: ['./prestaciones-sociales.component.scss']
})
export class PrestacionesSocialesComponent implements OnInit {

  pagination = {
    pageSize: 12,
    page: 1,
    collectionSize: 0,
  }
 
  

  public Prestaciones_Sociales: any[]=[
{

Nombre_ARL:'Aseguradora de vida Colseguros',
Codigo_ARL:'14-1',
Nit_ARL:'Sin nit',

Nombre_Caja:'COMFENALCO ANTIOQUIA',
Codigo_Caja:'3',
Nit_Caja:'890900842',

 Nombre_Fondos:'PROTECCION S.A.',
  Codigo_Fondos:'2',
  Nit_Fondos:'800229739',

},


  ];
  public Cargando = true;
  public Hoja = {
  
    Nombre_ARL:'',
    Codigo_ARL:'',
    Nit_ARL:'',

    Nombre_Caja:'',
    Codigo_Caja:'',
    Nit_Caja:'',

    Nombre_Fondos:'',
    Codigo_Fondos:'',
    Nit_Fondos:'',
  };

  @ViewChild('modalNuevaHojaArl') modalNuevaHojaArl: any;
  @ViewChild('modalNuevaHojaCaja') modalNuevaHojaCaja: any;
  @ViewChild('modalNuevaHojaFondos') modalNuevaHojaFondos: any;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  ListarPrestacionesSociales() {
    this.http.get(environment.base_url + 'php/recursos_humanos/lista_postulantes.php').subscribe((data: any) => {
      this.Prestaciones_Sociales = data.Lista;
      

      this.Cargando = false;
    });
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

    this.http.post(environment.base_url + 'php/ajustes/guardar_prestaciones-sociales-php', datos).subscribe((data:any)=>{
    
    this.modalNuevaHojaArl.hide();
    this.modalNuevaHojaCaja.hide();
    this.modalNuevaHojaFondos.hide();
    
      this.Hoja ={
      Nombre_ARL:'',
    Codigo_ARL:'',
    Nit_ARL:'',

    Nombre_Caja:'',
    Codigo_Caja:'',
    Nit_Caja:'',

    Nombre_Fondos:'',
    Codigo_Fondos:'',
    Nit_Fondos:'',
      
          };
          this.ListarPrestacionesSociales();
        })
      
      
      
      }
    }
