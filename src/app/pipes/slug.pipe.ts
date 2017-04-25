import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'slugPipe'})
export class SlugPipe implements PipeTransform{
    transform(value: string): string {
     var replace = '-';   
     value = value.replace(/[\s\.]+/g,replace).toLowerCase().replace(new RegExp('[^a-z0-9'+replace+']','g'),replace).replace(new RegExp(replace+'+','g'),replace);
    return value;
    
  }
}

