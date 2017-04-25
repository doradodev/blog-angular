import { Component, OnInit, ViewContainerRef } from '@angular/core';

import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { BlogService } from '../../services/blog.service';

import { Article } from '../../models/article.model';

import { Router } from '@angular/router';



import {InputTextModule, 
        ButtonModule,
        EditorModule,
        SharedModule,
        DropdownModule,
        SelectItem,
        InputTextareaModule,
        Message,
        GrowlModule} from 'primeng/primeng';

@Component({
  selector: 'page-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreatePage implements OnInit{

    homeTitle = "Crear Articulo";

    msgs: Message[] = [];

    titleSlug="";    

    blogform: FormGroup;
    
    submitted: boolean;
    
    categories: SelectItem[];

    category:string;
        
    description: string;

    constructor(private fb: FormBuilder, private blogService:BlogService,private router:Router) {}

    ngOnInit(){

        this.blogform = this.fb.group({
            'title': new FormControl('', Validators.required),
            'description': new FormControl(''),
            'shortDescription': new FormControl('', Validators.required),
            'category': new FormControl('')
        });
        this.categories = [];
        this.categories.push({label:'Categorias', value:null});
        this.categories.push({label:'Noticias', value:'Noticias'});
        this.categories.push({label:'Diversion', value:'Diversion'}); 
        
    }

   onSubmit(value: Article) {

        
        this.submitted = true;
        console.log(value);
        console.log(value.category);       
        this.msgs = [];
        this.blogService.createBlog(value)
                         .subscribe(
                                      result => console.log(value),
                                      err => {                                    
                                      console.log(err);                                      
                                }
                            );
        this.msgs.push({severity:'success', summary:'Success', detail:'Articulo guardado'});
    }
    volver(){
        this.router.navigate(['']);
    }       
        
        
    }

 
    

