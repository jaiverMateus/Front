import { NgModule } from "@angular/core";
import { ParametrosRoutingModule } from "./parametros-routing.module";
import { PerfilesComponent } from './perfiles/perfiles.component';
import { RgpComponent } from './rgp/rgp.component';
import { NotasTecnicasComponent } from './notas-tecnicas/notas-tecnicas.component';
import { PrestacionesSocialesComponent } from "./prestaciones-sociales/prestaciones-sociales.component";
import { ParametrosNominaComponent } from "./parametros-nomina/parametros-nomina.component";
import { SalarioYSubsidioComponent } from "./parametros-nomina/salario-y-subsidio/salario-y-subsidio.component";
import { IngresosConstitutivosComponent } from "./parametros-nomina/ingresos-constitutivos/ingresos-constitutivos.component";
import { IngresosNoConstitutivosComponent } from "./parametros-nomina/ingresos-no-constitutivos/ingresos-no-constitutivos.component";
import { LicenciasEIndiscapacidadesComponent } from "./parametros-nomina/licencias-e-indiscapacidades/licencias-e-indiscapacidades.component";
import { PrestacionesSocialesNominaComponent } from "./parametros-nomina/prestaciones-sociales-nomina/prestaciones-sociales-nomina.component";
import { SeguridadSocialComponent } from "./parametros-nomina/seguridad-social/seguridad-social.component";
import { LiquidacionComponent } from "./parametros-nomina/liquidacion/liquidacion.component";
import { BancosYCajaComponent } from "./parametros-nomina/bancos-y-caja/bancos-y-caja.component";
import { DeduccionesComponent } from "./parametros-nomina/deducciones/deducciones.component";
import { CommonModule } from "@angular/common";
import { NgbAccordionModule, NgbCollapseModule, NgbDropdownModule, NgbNavModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { PipesModule } from "src/app/core/pipes/pipes.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { ComponentsModule } from "src/app/components/components.module";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";



@NgModule({
    declarations : [PerfilesComponent, RgpComponent, NotasTecnicasComponent, PrestacionesSocialesComponent,ParametrosNominaComponent,
    SalarioYSubsidioComponent,IngresosConstitutivosComponent,IngresosNoConstitutivosComponent,LicenciasEIndiscapacidadesComponent,DeduccionesComponent,
PrestacionesSocialesNominaComponent,SeguridadSocialComponent,LiquidacionComponent,BancosYCajaComponent] , 
    imports: [ ParametrosRoutingModule,
    CommonModule,NgbPaginationModule, NgbDropdownModule, ChartsModule,NgbAccordionModule,
    ComponentsModule,
    FormsModule,
    NgSelectModule,
    NgbDropdownModule,
    NgbCollapseModule,
    PipesModule,
    NgbNavModule, ],
    exports: []
})

export class ParametrosModule {}