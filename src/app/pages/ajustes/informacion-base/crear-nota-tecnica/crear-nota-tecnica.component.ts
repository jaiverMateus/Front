import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-nota-tecnica',
  templateUrl: './crear-nota-tecnica.component.html',
  styleUrls: ['./crear-nota-tecnica.component.scss']
})
export class CrearNotaTecnicaComponent implements OnInit {

  dataForm:FormGroup;
  numberRegEx = /^(0|\-?[1-9][0-9]*)$/;
  constructor(private http: HttpClient, private frmbuilder: FormBuilder) {this.createForm(); }

  ngOnInit(): void {
  }

  createForm(){
    this.dataForm = this.frmbuilder.group({
      id:['',null],
      frequency:['', Validators.required],
      alert_percentage:['', Validators.required],
      unit_value:['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      date:['', Validators.required],
      chance:['', Validators.required],
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
  GuardarNotaTecnica(dataForm:NgForm){

    this.http.post('http://core-back-main.test/api/tecnic_notes', dataForm.value).subscribe(data => {
      console.log(data);
      dataForm.reset();
      swal.fire('Nota Tecnica creada correctamente', 'success');

    }, error => console.error(error));
  }
}
