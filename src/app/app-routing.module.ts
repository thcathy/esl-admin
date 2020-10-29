import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VocabImageSelectorComponent} from './vocab-image-selector/vocab-image-selector.component';
import {AddVocabImageComponent} from './add-vocab-image/add-vocab-image.component';

const routes: Routes = [
  { path: 'vocab-image-selector', component: VocabImageSelectorComponent },
  { path: 'add-vocab-image', component: AddVocabImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
