import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { RgpComponent } from './rgp/rgp.component';
import { NotasTecnicasComponent } from './notas-tecnicas/notas-tecnicas.component';
import { PrestacionesSocialesComponent } from "./prestaciones-sociales/prestaciones-sociales.component";
import { ParametrosNominaComponent } from "./parametros-nomina/parametros-nomina.component";
import { SalarioYSubsidioComponent } from "./parametros-nomina/salario-y-subsidio/salario-y-subsidio.component";
import { IngresosConstitutivosComponent } from "./parametros-nomina/ingresos-constitutivos/ingresos-constitutivos.component";
import { IngresosNoConstitutivosComponent } from "./parametros-nomina/ingresos-no-constitutivos/ingresos-no-constitutivos.component";
import { LicenciasEIndiscapacidadesComponent } from "./parametros-nomina/licencias-e-indiscapacidades/licencias-e-indiscapacidades.component";
import { DeduccionesComponent } from "./parametros-nomina/deducciones/deducciones.component";
import { PrestacionesSocialesNominaComponent } from "./parametros-nomina/prestaciones-sociales-nomina/prestaciones-sociales-nomina.component";
import { SeguridadSocialComponent } from "./parametros-nomina/seguridad-social/seguridad-social.component";
import { LiquidacionComponent } from "./parametros-nomina/liquidacion/liquidacion.component";
import { BancosYCajaComponent } from "./parametros-nomina/bancos-y-caja/bancos-y-caja.component";

const routes : Routes = [
    { path: 'perfiles', component : PerfilesComponent },
    { path: 'rgp', component : RgpComponent },
    { path: 'notas-tecnicas', component : NotasTecnicasComponent },
    {path: 'prestaciones-sociales', component:PrestacionesSocialesComponent},
    {path:'parametros-nomina', component:ParametrosNominaComponent},
    {path:'salario-y-subsidio',component:SalarioYSubsidioComponent},
    {path:'ingresos-constitutivos', component:IngresosConstitutivosComponent},
    {path:'ingresos-no-constitutivos', component:IngresosNoConstitutivosComponent},
    {path:'licencias-e-indiscapacidades', component:LicenciasEIndiscapacidadesComponent},
    {path:'deducciones', component:DeduccionesComponent},
    {path:'prestaciones-sociales-nomina', component:PrestacionesSocialesNominaComponent},
    {path:'seguridad-social',component:SeguridadSocialComponent},
    {path:'liquidacion',component:LiquidacionComponent},
    {path:'bancos-y-caja',component:BancosYCajaComponent},
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ParametrosRoutingModule {}