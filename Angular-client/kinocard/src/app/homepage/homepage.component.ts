import { Component } from '@angular/core';
import { Subscription, Observer, of } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {


  run(){

    let promise = new Promise (function(resolve, reject) {
      
    }).then(
      ()=>{},
      ()=>{}
    )
      

  }

  
}
