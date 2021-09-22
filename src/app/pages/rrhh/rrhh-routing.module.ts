import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { VacantesComponent } from './vacantes/vacantes.component';
import { PostulantesComponent } from './postulantes/postulantes.component';
import { VacantesCrearComponent } from "./vacantes/vacantes-crear/vacantes-crear.component";
import { LlegadasTardesComponent } from "./llegadas-tardes/llegadas-tardes.component";
import { CrearContratosComponent } from "./crear-contratos/crear-contratos.component";



const routes: Routes = [
    { path: 'vacantes', component: VacantesComponent },
    { path: 'postulantes', component: PostulantesComponent },
    { path: 'vacantescrear', component: VacantesCrearComponent },
    { path: 'llegadas-tarde', component: LlegadasTardesComponent },
    {path:'crear-contratos', component: CrearContratosComponent},
]


@NgModule({
    imports: [RouterModule.forChild(routes),

    ],
    exports: [RouterModule],
})

export class RrhhRouterModule { }