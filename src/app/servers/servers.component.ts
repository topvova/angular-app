import { Component, OnInit } from '@angular/core';

@Component({
  /*selector: '[app-servers]',
  selector: '.app-servers',*/
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*template: `<app-server></app-server><app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server has created yet...';
  serverName = 'Test server';

  constructor() {
      setTimeout(() => {
          this.allowNewServer = true;
      }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
      this.serverCreationStatus = 'Server has just created! Its name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
      // console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
