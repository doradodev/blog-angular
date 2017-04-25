import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { Router } from '@angular/router';

import { Article } from '../../models/article.model';
import { BlogService } from '../../services/blog.service';
import { DataListModule } from 'primeng/primeng';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePage implements OnInit{
    title='Mini Blog';
    articles:Article[];


    constructor(private router:Router, private blogService:BlogService){}
    ngOnInit(){

    console.log("entre a homepage");
   this.blogService.getBlogs()
                         .subscribe(
                               articles => this.articles = articles, 
                                err => {                                    
                                   console.log(err);
                                });
    }

    createArticle(){
        this.router.navigate(['/create']);
    }


}