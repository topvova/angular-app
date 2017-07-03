import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

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
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];
  @ViewChild('serverNameInput') serverNameInput: ElementRef;

  constructor() {
      setTimeout(() => {
          this.allowNewServer = true;
      }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(srvNameInput: HTMLInputElement) {
      // console.log(this.serverNameInput);
      // console.log(srvNameInput.value);
      this.serverCreated = true;
      // this.servers.push(this.serverName);
      // this.servers.push(srvNameInput.value);
      this.servers.push(this.serverNameInput.nativeElement.value);
      this.serverCreationStatus = 'Server has just created! Its name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
      // console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  onRemoveServer(id: number) {
      const position = id;
      this.servers.splice(position, 1);
  }

}
