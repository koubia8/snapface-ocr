import { Component, OnInit} from '@angular/core';
import {concatMap, delay, exhaustMap, filter, interval, map, mergeMap, Observable, of, take, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    // interval(1000).subscribe(value => console.log(value !== 3 ? 'Tick' : 'BANG'));
  }




}


