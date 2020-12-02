import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'apresentaslide',
    loadChildren: () => import('./apresentaslide/apresentaslide.module').then( m => m.ApresentaslidePageModule)
  },
  {
    path: 'cad-usu001',
    loadChildren: () => import('./cad-usu001/cad-usu001.module').then( m => m.CadUsu001PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }/*,
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  }*/,
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  }/*,
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
  }*/,
  {
    path: 'detalhes',
    loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  {
    path: 'detalhes/:codigo',
    loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  {
    path: 'frutas',
    loadChildren: () => import('./frutas/frutas.module').then( m => m.FrutasPageModule)
  },
  {
    path: 'legumes',
    loadChildren: () => import('./legumes/legumes.module').then( m => m.LegumesPageModule)
  },
  {
    path: 'detalhes1',
    loadChildren: () => import('./detalhes1/detalhes1.module').then( m => m.Detalhes1PageModule)
  },
  {
    path: 'detalhes2',
    loadChildren: () => import('./detalhes2/detalhes2.module').then( m => m.Detalhes2PageModule)
  },
  {
    path: 'detalhesmamao',
    loadChildren: () => import('./detalhesmamao/detalhesmamao.module').then( m => m.DetalhesmamaoPageModule)
  },
  {
    path: 'detalhesabacate',
    loadChildren: () => import('./detalhesabacate/detalhesabacate.module').then( m => m.DetalhesabacatePageModule)
  },
  {
    path: 'verduras',
    loadChildren: () => import('./verduras/verduras.module').then( m => m.VerdurasPageModule)
  },
  {
    path: 'detalhesverdura',
    loadChildren: () => import('./detalhesverdura/detalhesverdura.module').then( m => m.DetalhesverduraPageModule)
  },
  {
    path: 'carrinhocompras',
    loadChildren: () => import('./carrinhocompras/carrinhocompras.module').then( m => m.CarrinhocomprasPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'graos',
    loadChildren: () => import('./graos/graos.module').then( m => m.GraosPageModule)
  },
  {
    path: 'tempero',
    loadChildren: () => import('./tempero/tempero.module').then( m => m.TemperoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
