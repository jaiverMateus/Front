import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dependencias',
  templateUrl: './dependencias.component.html',
  styleUrls: ['./dependencias.component.scss']
})
export class DependenciasComponent implements OnInit {
  pagination = {
    pageSize: 12,
    page: 1,
    collectionSize: 0,
  }

public Dependencias: any[]= [

{
Nombre:'TALENTO HUMANO',
Grupo:'ADMINISTRATIVO',

},
{
  Nombre:'MANTENIMIENTO',
  Grupo:'ADMINISTRATIVO',
  
  },
  {
    Nombre:'FACTURACION',
    Grupo:'VENTAS',
    
    },
    {
      Nombre:'AGENDAMIENTO',
      Grupo:'VENTAS',
      
      }         
];

public Cargando = true;
public Hoja = {

  Nombre:'',
  Grupo:'',
};
public filtro_nom: any='';



@ViewChild('modalNuevaHoja') modalNuevaHoja: any;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  ListarDependencias() {
    this.http.get(environment.base_url + 'php/recursos_humanos/lista_dependencias.php').subscribe((data: any) => {
      this.Dependencias = data.Lista;
      

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
  
  this.http.post(environment.base_url + 'php/ajustes/guardar_dependencia-php', datos).subscribe((data:any)=>{

    this.modalNuevaHoja.hide();
    
    this.Hoja ={
Nombre:'',
Grupo:'',

    };
    this.ListarDependencias();
  })



}



}




