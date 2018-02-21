import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'jem-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  sections: any[] = [
    {
      title: 'Basic operators',
      links: []
    },

    {
      title: 'Advanced operators',
      links: [
        {title: 'switchMap', route : 'switchMap'}
      ]
    },
  ];

  constructor(private _router: Router) { }



  ngOnInit() {
  }

  goto(routeName: string): void {
    this._router.navigate([routeName]);
  }
}
