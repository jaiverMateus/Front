import { NgModule } from "@angular/core";
import { TiposRoutingModule } from "./tipos-routing.module";
import { TiposAgendaComponent } from './tipos-agenda/tipos-agenda.component';
import { TiposConsultaComponent } from './tipos-consulta/tipos-consulta.component';
import { TiposServiciosComponent } from "./tipos-servicio/tipos-servicios.component";
import { TiposNovedadComponent } from "./tipos-novedad/tipos-novedad.component";
import { TiposContratoComponent } from "./tipos-contrato/tipos-contrato.component";
import { TiposDocumentoComponent } from "./tipos-documento/tipos-documento.component";
import { CommonModule } from "@angular/common";
import { NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { ComponentsModule } from "src/app/components/components.module";
import { PipesModule } from "src/app/core/pipes/pipes.module";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
    declarations : [TiposAgendaComponent, TiposConsultaComponent, TiposServiciosComponent, TiposNovedadComponent, TiposContratoComponent,TiposDocumentoComponent],
    imports : [TiposRoutingModule, CommonModule, NgbCollapseModule, NgbDropdownModule,NgbNavModule,NgbPaginationModule,
    FormsModule, ChartsModule,ComponentsModule,PipesModule,NgSelectModule
    
    ]
})

export class TiposModule{}