import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';


@Component({
  selector: 'app-crear-contratos',
  templateUrl: './crear-contratos.component.html',
  styleUrls: ['./crear-contratos.component.scss']
})
export class CrearContratosComponent implements OnInit {

  dataForm: FormGroup;
  numberRegEx = /^(0|\-?[1-9][0-9]*)$/;
  regexp=/^\d+\.\d{0,2}$/;

  public start_date: any;
  public end_date: any;
 

  @ViewChild('confirmacionSwal') confirmacionSwal: any;

  constructor(private http: HttpClient, private frmbuilder: FormBuilder,) {
   this.createForm();
    }

   createForm(){
   this.dataForm = this.frmbuilder.group({

      id: ['',null],
      name: ['', Validators.required],
      code: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      administrator_id: ['',[Validators.required, Validators.pattern(this.numberRegEx)]],
      contract_type: ['', Validators.required],
      payment_method_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      benefits_plan_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      start_date: ['', [Validators.required, this.dateRangeValidator]],
      end_date: ['', [Validators.required,this.dateRangeValidator]],
      policy: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      price_list_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      variation: ['', [Validators.required, Validators.pattern(this.regexp)]],
      company_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      department_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      regimen_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      location_id: ['', [Validators.required, Validators.pattern(this.numberRegEx)]],
      
      
    });
}



  
  ngOnInit() {


  }


  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {
    let invalid = false;
    const from = this.dataForm && this.dataForm.get("start_date").value;
    const to = this.dataForm && this.dataForm.get("end_date").value;
    if (from && to) {
      invalid = new Date(from).valueOf() > new Date(to).valueOf();
    }
    return invalid ? { invalidRange: { from, to } } : null;
  };

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

 
  
  GuardarContrato(dataForm: NgForm) {
    
    this.http.post('http://core-back-main.test/api/contracts', dataForm.value).subscribe(data => {
      console.log(data);
      dataForm.reset();
      swal.fire('Contrato creado correctamente', 'success');

    }, error => console.error(error));
  }

 
}







