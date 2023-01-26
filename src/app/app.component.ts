import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'DailyChallenge';
  @ViewChild("myDiv", { static: true }) divMy!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {

    fromEvent(this.divMy.nativeElement, 'focus')
        .subscribe(res => console.log("Focus event"));

        fromEvent(this.divMy.nativeElement, 'blur')
        .subscribe(res => console.log("Blur event"));

  }


    

}
