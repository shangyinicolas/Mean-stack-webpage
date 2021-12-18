import {
  Pipe,
  PipeTransform
} from '@angular/core';
@Pipe({
  name: 'w10strsub'
})
export class W10strsubPipe implements PipeTransform {
  
  transform(value: number, ...args: number[]): string {
    let transformedStr = 'Older';
    let b ='Middel Aged'
    let c = "Young"
    // return(2021-value)
    if(value<1980){
     return transformedStr
    }
    else if(value>2000){
return c
    }
    else{
return b
    }
     
  }
}