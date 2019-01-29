import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  APPLICATION_TITLE = "Coddaire University"; //TODO: import this from app.component.ts.

  constructor() { }

  ngOnInit() {
  }

}
