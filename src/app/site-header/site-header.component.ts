import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit, DoCheck {

  APPLICATION_TITLE = 'University of Farmington'; // TODO: import this from app.component.ts.
  activeTab = 'courses';

  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit() {
  }

  ngDoCheck() {
    // Set the navbar to be active based on the current route.
    // Occurs when the user refreshes the page, or opens a specific URL.
    this.activeTab = this.router.url.substring(1);

  }

  search(activeTab) {
    this.activeTab = activeTab;
    // this.log(activeTab);
  }

  private log(message: string) {
    this.messageService.add(`SiteHeader: ${message}`);
  }
}
