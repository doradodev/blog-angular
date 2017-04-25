import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomePage } from '../pages/home/home.component';
import { CreatePage } from '../pages/create/create.component'


export const APPROUTER:Routes= [
  
    {path:'', component: HomePage},
    {path:'create', component:CreatePage}    
    
]