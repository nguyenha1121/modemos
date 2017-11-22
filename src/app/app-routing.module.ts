import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TextEmotionsComponent } from './text-emotions/text-emotions.component';
import { HateComponent } from './hate/hate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NeighborsComponent } from './neighbors/neighbors.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterImageComponent } from './filter-image/filter-image.component';
import { ViolenceComponent } from './violence/violence.component';
//  Test
import { EmbeddingsComponent } from './embeddings/embeddings.component';

const routes: Routes = [{
  path : 'text-emotions',
  component : TextEmotionsComponent
},
{
  path: 'hate',
  component: HateComponent
},
{
  path: '',
  component: DashboardComponent
},
{
  path: 'neighbors',
  component: NeighborsComponent
},
{
  path: 'emotions',
  component: EmotionsComponent
},
{
  path: 'test',
  component: EmbeddingsComponent
},
{
  path: 'text-filter',
  component: FilterTextComponent
},
{
  path: 'image-filter',
  component: FilterImageComponent
},
{
  path: 'violence',
  component: ViolenceComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
