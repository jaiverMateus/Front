import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TiposAgendaComponent } from './tipos-agenda/tipos-agenda.component';
import { TiposConsultaComponent } from './tipos-consulta/tipos-consulta.component';
import { TiposServiciosComponent } from "./tipos-servicio/tipos-servicios.component";
import { TiposNovedadComponent } from "./tipos-novedad/tipos-novedad.component";
import { TiposContratoComponent } from "./tipos-contrato/tipos-contrato.component";
import { TiposDocumentoComponent } from "./tipos-documento/tipos-documento.component";
const routes : Routes = [
    { path: 'tipos-agenda' , component: TiposAgendaComponent },
    { path: 'tipos-consulta' , component: TiposConsultaComponent },
    {path:'tipos-servicio', component:TiposServiciosComponent},
    {path:'tipos-novedad', component:TiposNovedadComponent},
    {path:'tipos-contrato', component:TiposContratoComponent},
    {path:'tipos-documento', component:TiposDocumentoComponent}
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class TiposRoutingModule{}