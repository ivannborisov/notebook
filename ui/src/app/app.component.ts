import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notebook';

  ngOnInit() {

    $(document).ready(()=> {
      setInterval(()=>{
        let time = new Date();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let minString = minutes > 9 ? `${minutes}`: `0${minutes}`;
        let secString = seconds > 9 ? `${seconds}`: `0${seconds}`;  
        $('#clock').html(`${time.getHours()}:${minString}:${secString}`)
      },1000)
      $('#clock').hover(()=> {
        $('#clock').stop();
        $('#clock').animate({
          fontSize: "25px",
          fontWeight: "bolder"
        },1000)
      },
      ()=> {
        $('#clock').stop();
        $('#clock').animate({
          fontSize: "15px",
          fontWeight: "normal"
        },500)
      }) 
    })
    

  }

}


