import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {color: darkgreen;}
        .offline {color: darkred;}
    `]
})

export class ServerComponent {
    serverId = 1;
    serverStatus = 'offline';
    @Input('serverItem') server = [];

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(): string {
        return this.serverStatus;
    }

    getColor(): string {
        return this.serverStatus === 'online' ? 'lightgreen' : 'lightsalmon';
    }

    getServerId(): number {
        return this.serverId;
    }
}
