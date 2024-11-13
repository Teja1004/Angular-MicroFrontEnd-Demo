import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [{
  path: '',
  component: AppComponent,
  pathMatch: 'full',
},
{ path: 'home', component: HomeComponent },
{ path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
