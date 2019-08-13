import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PhotoCreateComponent} from "./modules/photo/components/photo-create/photo-create.component";
import {PhotoViewComponent} from "./modules/photo/components/photo-view/photo-view.component";
import {FeedViewComponent} from "./modules/feed/components/feed-view/feed-view.component";

const routes: Routes = [
  {path: 'upload', component: PhotoCreateComponent},
  {path: 'photos/:id', component: PhotoViewComponent},
  {path: 'feed', component: FeedViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

