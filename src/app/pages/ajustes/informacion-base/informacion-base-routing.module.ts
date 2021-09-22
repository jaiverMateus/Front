import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AseguradorasComponent } from './aseguradoras/aseguradoras.component';
import { RegimenesNivelesComponent } from './regimenes-niveles/regimenes-niveles.component';
import { DetalleFuncionarioComponent } from './funcionarios/detalle-funcionario/detalle-funcionario.component';
import { DependenciasComponent } from './dependencias/dependencias.component';
import { EnvioMensajesComponent } from "./envio-mensajes/envio-mensajes.component";
import { CrearPlanBeneficioComponent } from "./crear-plan-beneficio/crear-plan-beneficio.component";
import { CrearListaPreciosComponent } from "./crear-lista-precios/crear-lista-precios.component";
import { CrearFormaPagoComponent } from "./crear-forma-pago/crear-forma-pago.component";
import { CrearCajaComponent } from "./crear-caja/crear-caja.component";
import { CrearNotaTecnicaComponent } from "./crear-nota-tecnica/crear-nota-tecnica.component";

const routes : Routes = [
    {path:'empresas',component:EmpresasComponent},
    {path:'funcionarios',component:FuncionariosComponent},
    {path:'funcionario/:id',component:DetalleFuncionarioComponent},
    {path:'regimenes-niveles',component:RegimenesNivelesComponent},
    {path:'aseguradoras',component:AseguradorasComponent},
    {path:'dependencias',component:DependenciasComponent},
    {path:'envio-mensajes',component:EnvioMensajesComponent},
    {path:'crear-plan-beneficio', component:CrearPlanBeneficioComponent},
    {path:'crear-lista-precios',component:CrearListaPreciosComponent},
    {path:'crear-forma-pago',component:CrearFormaPagoComponent},
    {path:'crear-caja', component:CrearCajaComponent},
    {path:'crear-nota-tecnica',component:CrearNotaTecnicaComponent},

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class InformacionBaseRoutingModule {}