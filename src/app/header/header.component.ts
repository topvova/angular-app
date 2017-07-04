import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() chapterSelected = new EventEmitter<string>();

    onSelect(chapter: string){
        this.chapterSelected.emit(chapter);
    }
}
