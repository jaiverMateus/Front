import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-lista-precios',
  templateUrl: './crear-lista-precios.component.html',
  styleUrls: ['./crear-lista-precios.component.scss']
})
export class CrearListaPreciosComponent implements OnInit {

  dataForm: FormGroup;
  numberRegEx = /^(0|\-?[1-9][0-9]*)$/;

  constructor(private http: HttpClient, private frmbuilder: FormBuilder) {this.createForm(); }

  ngOnInit(): void {
  }

  createForm(){
    this.dataForm = this.frmbuilder.group({
      id:['',null],
      cup_id:['', [Validators.required,Validators.pattern(this.numberRegEx)]],
      cum:['', [Validators.required,Validators.pattern(this.numberRegEx)]],
      price:['', [Validators.required,Validators.pattern(this.numberRegEx)]],
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

  GuardarListaPrecio(dataForm:NgForm){

    this.http.post('http://core-back-main.test/api/price_lists', dataForm.value).subscribe(data => {
      console.log(data);
      dataForm.reset();
      swal.fire('Lista de Precio creada correctamente', 'success');

    }, error => console.error(error));
  }
}
