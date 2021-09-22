import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-caja',
  templateUrl: './crear-caja.component.html',
  styleUrls: ['./crear-caja.component.scss']
})
export class CrearCajaComponent implements OnInit {

  dataForm: FormGroup;
  constructor(private http: HttpClient, private frmbuilder: FormBuilder) {this.createForm(); }

  ngOnInit(): void {
  }

  createForm(){
    this.dataForm = this.frmbuilder.group({
      id:['',null],
      name:['', Validators.required],
      description:['', Validators.required],
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

  GuardarCaja(dataForm:NgForm){

    this.http.post('http://core-back-main.test/api/cashes', dataForm.value).subscribe(data => {
      console.log(data);
      dataForm.reset();
      swal.fire('Caja creada correctamente', 'success');

    }, error => console.error(error));
  }
}
