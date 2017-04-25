import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { Article } from '../models/article.model';


@Injectable()
export class BlogService{

    private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
    private apiUrl = "http://54.233.177.58:8080/api/blogs/";
    private options = new RequestOptions({ headers: this.headers });

    constructor(private _http:Http  ){

    }

    getBlogs() : Observable<Article[]> {        
         
         return this._http.post(this.apiUrl + 'findAll', this.headers)                        
                         .map((res:Response) => res.json())                        
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     createBlog(_article: Article) : Observable<Article[]> {        
         
         return this._http.post(`${this.apiUrl}${null}`, _article, this.options)                        
                         .map((res:Response) => res.json())                        
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

}
