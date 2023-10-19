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
    path: 'logincliente',
    loadChildren: () => import('./logincliente/logincliente.module').then( m => m.LoginclientePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'sobrenos',
    loadChildren: () => import('./sobrenos/sobrenos.module').then( m => m.SobrenosPageModule)
  },
  {
    path: 'anuncio',
    loadChildren: () => import('./anuncio/anuncio.module').then( m => m.AnuncioPageModule)
  },
  {
    path: 'dadosfunc',
    loadChildren: () => import('./dadosfunc/dadosfunc.module').then( m => m.DadosfuncPageModule)
  },
  {
    path: 'perfileditar',
    loadChildren: () => import('./perfileditar/perfileditar.module').then( m => m.PerfileditarPageModule)
  },
  {
    path: 'recupere',
    loadChildren: () => import('./recupere/recupere.module').then( m => m.RecuperePageModule)
  },
  {
    path: 'plano',
    loadChildren: () => import('./plano/plano.module').then( m => m.PlanoPageModule)
  },
  {
    path: 'meu',
    loadChildren: () => import('./meu/meu.module').then( m => m.MeuPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
