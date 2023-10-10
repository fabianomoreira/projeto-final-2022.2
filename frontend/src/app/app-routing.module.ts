import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-um',
    loadChildren: () => import('./cadastro-um/cadastro-um.module').then( m => m.CadastroUmPageModule)
  },
  {
    path: 'cadastro-dois',
    loadChildren: () => import('./cadastro-dois/cadastro-dois.module').then( m => m.CadastroDoisPageModule)
  },
  {
    path: 'trabalhos',
    loadChildren: () => import('./trabalhos/trabalhos.module').then( m => m.TrabalhosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'logincliente',
    loadChildren: () => import('./logincliente/logincliente.module').then( m => m.LoginclientePageModule)
  },
  {
    path: 'logintrabalho',
    loadChildren: () => import('./logintrabalho/logintrabalho.module').then( m => m.LogintrabalhoPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
