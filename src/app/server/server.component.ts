import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    OnDestroy,
    ViewChild,
    ElementRef,
    ContentChild
} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {color: darkgreen;}
        .offline {color: darkred;}
    `]
})

export class ServerComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
    serverId = 1;
    serverStatus = 'offline';
    @Input('serverItem') server = [];
    @ViewChild('paragraph') srvStatus: ElementRef;
    @ContentChild('em') srvName: ElementRef;

    constructor() {
        console.log('constructor was called!');
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges was called!');
        console.log(changes);
    }

    ngOnInit() {
        console.log('ngOnInit was called!');
        console.log(this.srvStatus.nativeElement.textContent);
        console.log(this.srvName.nativeElement.textContent);
    }

    ngDoCheck() {
        console.log('ngDoCheck was called!');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit was called!');
        console.log(this.srvName.nativeElement.textContent);
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked was called!');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit was called!');
        console.log(this.srvStatus.nativeElement.textContent);
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked was called!');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy was called!');
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
