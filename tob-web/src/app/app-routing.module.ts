import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './util/not-found.component';

import { CredFormComponent } from './cred/form.component';
import { CredModule } from './cred/cred.module';
import { HomeComponent } from './home/home.component';
import { IssuerFormComponent } from './issuer/form.component';
//import { RoadmapComponent } from './roadmap/roadmap.component';
import { SearchComponent } from './search/form.component';
import { SearchModule } from './search/search.module';
import { TopicFormComponent } from './topic/form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    redirectTo: '/search/name',
    pathMatch: 'full'
  },
  {
    path: 'search/:filterType',
    component: SearchComponent,
    data: {
      breadcrumb: 'search.breadcrumb'
    }
  },
  {
    path: 'topic/:topicType/:sourceId',
    data: {
      breadcrumb: 'topic.breadcrumb'
    },
    children: [
      {
        path: '',
        component: TopicFormComponent,
      },
      {
        path: 'cred/:credId',
        component: CredFormComponent,
        data: {
          breadcrumb: 'cred.breadcrumb'
        }
      }
    ]
  },
  {
    path: 'topic/:id',
    redirectTo: 'topic/_/:id'
  },
  {
    path: 'issuer/:issuerId',
    component: IssuerFormComponent,
    data: {
      breadcrumb: 'issuer.breadcrumb',
    }
  },
  /*{
    path: 'recipe',
    redirectTo: 'recipe/start_a_restaurant'
  },
  {
    path: 'recipe/:recipeId',
    component: RoadmapComponent,
    data: {
      breadcrumb: 'recipe.breadcrumb'
    }
  },*/
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      breadcrumb: 'not-found.breadcrumb'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CredModule,
    SearchModule,
  ],
  exports: [
    RouterModule,
    CredModule,
    SearchModule,
  ]
})
export class AppRoutingModule { }
