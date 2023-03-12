import { Component, OnInit, OnDestroy } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'kinocard';
  a = 1;
  
  constructor(){

  }

  ngOnInit(): void {
  
    class User implements Iint {
      name:string = "asd"
      age:number =123
      email:string ="asd"
      data =123
    }

  }

  ngOnDestroy(): void {
    
  }

  


}



interface Iint {
  name:string,
  age:number,
  email:string
}