import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InitComponent } from './init.component';
import { HomePage } from './pages/home/home.component'
import { CreatePage } from './pages/create/create.component'

//service
import { BlogService } from './services/blog.service';
import { AppComponent } from './app.component';

//routes 
import { RouterModule, Routes } from '@angular/router';
import { APPROUTER } from './routes/blog.routes';

//prime
import {InputTextModule,
        EditorModule,
        SharedModule, 
        ButtonModule,
        DropdownModule,
        InputTextareaModule,
        GrowlModule,
        DataListModule} from 'primeng/primeng';

//pipe
import { SlugPipe } from './pipes/slug.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    HomePage,
    CreatePage,
    SlugPipe

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(APPROUTER),
    InputTextModule,
    ButtonModule,
    EditorModule,
    SharedModule,
    InputTextareaModule,
    DropdownModule,
    BrowserAnimationsModule,
    GrowlModule,
    DataListModule  
    
  ],
  providers: [BlogService],
  bootstrap: [InitComponent]
})
export class AppModule { }
