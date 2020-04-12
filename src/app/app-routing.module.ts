import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'towns/:id',
    loadChildren: () => import('./pages/towns/towns.module').then( m => m.TownsPageModule)
  },
  {
    path: 'towns/creatures/:id',
    loadChildren: () => import('./pages/creatures/creatures.module').then( m => m.CreaturesPageModule)
  },
  {
    path: 'towns/heroes/:id',
    loadChildren: () => import('./pages/heroes/heroes.module').then( m => m.HeroesPageModule)
  },
  {
    path: 'magic-schools',
    loadChildren: () => import('./pages/magic-schools/magic-schools.module').then( m => m.MagicSchoolsPageModule)
  },
  {
    path: 'spells',
    loadChildren: () => import('./pages/spells/spells.module').then( m => m.SpellsPageModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./pages/skills/skills.module').then( m => m.SkillsPageModule)
  },
  {
    path: 'towns/buildings/:id',
    loadChildren: () => import('./pages/buildings/buildings.module').then( m => m.BuildingsPageModule)
  },
  {
    path: 'artifacts',
    loadChildren: () => import('./pages/artifacts/artifacts.module').then( m => m.ArtifactsPageModule)
  },
  {
    path: 'mechanics',
    loadChildren: () => import('./pages/mechanics/mechanics.module').then( m => m.MechanicsPageModule)
  },
  {
    path: 'calculators',
    loadChildren: () => import('./pages/calculators/calculators.module').then( m => m.CalculatorsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
