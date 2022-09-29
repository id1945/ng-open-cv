import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgOpenCVModule, OpenCVOptions } from 'ng-open-cv';
import { FaceDetectionComponent } from './face-detection/face-detection.component';
import { ExampleListComponent } from './example-list/example-list.component';
import { RouterModule } from '@angular/router';

const openCVConfig: OpenCVOptions = {
  scriptUrl: `assets/opencv/opencv.js`,
  wasmBinaryFile: 'wasm/opencv_js.wasm',
  usingWasm: true
};

@NgModule({
  declarations: [
    AppComponent,
    FaceDetectionComponent,
    ExampleListComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgOpenCVModule.forRoot(openCVConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
