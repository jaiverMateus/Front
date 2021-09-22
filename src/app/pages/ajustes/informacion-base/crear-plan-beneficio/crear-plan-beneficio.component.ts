import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-plan-beneficio',
  templateUrl: './crear-plan-beneficio.component.html',
  styleUrls: ['./crear-plan-beneficio.component.scss']
})
export class CrearPlanBeneficioComponent implements OnInit {

  dataForm: FormGroup;

  constructor(private http: HttpClient, private frmbuilder: FormBuilder) { 
    this.createForm();
  }

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

  GuardarPlanBeneficio(dataForm:NgForm){

    this.http.post('http://core-back-main.test/api/benefits_plans', dataForm.value).subscribe(data => {
      console.log(data);
      dataForm.reset();
      swal.fire('Plan de Beneficios creado correctamente', 'success');

    }, error => console.error(error));
  }

}
