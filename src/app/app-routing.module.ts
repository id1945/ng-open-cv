import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleListComponent } from './example-list/example-list.component';
import { FaceDetectionComponent } from './face-detection/face-detection.component';


const routes: Routes = [
  { path: 'face-detection', component: FaceDetectionComponent },
  { path: 'example-list', component: ExampleListComponent },
  { path: '', redirectTo: '/example-list', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }