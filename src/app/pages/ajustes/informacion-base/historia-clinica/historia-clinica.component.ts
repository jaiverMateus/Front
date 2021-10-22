 import { Component, OnInit } from '@angular/core';


import { HistoriaClinicaService } from './historia-clinica.service';

import { Patients } from './patient';

 @Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.scss']
 })
 
 export class HistoriaClinicaComponent implements OnInit {

  filtroId:string;
  

  patient: Patients;
  error= '';
  success = '';

  constructor(private historiaClinicaService : HistoriaClinicaService) {
    }
  ngOnInit() {
    /* this.getPatient(); */
  }

  getPatient(){

    let params = {
      id:this.filtroId
    }
   this.historiaClinicaService.getPatients(this.filtroId).subscribe(
     (data: Patients) =>{
       this.patient = data;
       this.success = 'successful';
       console.log(data);

     },
     (err) =>{
       console.log(err);
       this.error = err;
     }
   );
   
  }

  /* search(){
    if(this.filtroId != ""){
      this.patient = this.patient.filter(res=>{
        return res.id.toLocaleString().match(this.filtroId.toLocaleString());
      });
    }else if(this.filtroId == ""){
      this.ngOnInit();
    }
    
  } */

 }

