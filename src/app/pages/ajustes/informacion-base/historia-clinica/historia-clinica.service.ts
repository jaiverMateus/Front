import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Patients } from './patient';

import { map } from 'rxjs/operators';


@Injectable({
    providedIn:'root'
})

export class HistoriaClinicaService{

     url = 'http://core-back-main.test/api';

    constructor(private http: HttpClient){}

    getPatients(id){
        return this.http.get(`${this.url}/patients/getPatients/${id}`,
        ).pipe(
            map((res:any) =>{
                return res['data'];
            })
        );
    }

    getHistoriaClinica(){

    }
}