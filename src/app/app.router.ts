import { Routes, RouterModule } from '@angular/router'
import {HomeComponent} from './home/home.component';
import {GraficosComponent} from './home/graficos/graficos.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'graficos', component: GraficosComponent}
];
export const RoutingModule = RouterModule.forRoot(routes);
