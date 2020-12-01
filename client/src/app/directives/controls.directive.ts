import { Keys, ControlAction } from './../interfaces/keys.enum';
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appControls]',
})
export class ControlsDirective {
  @Output() pageAction: EventEmitter<ControlAction> = new EventEmitter<
    ControlAction
  >();
  @Output() videoAction: EventEmitter<ControlAction> = new EventEmitter<
    ControlAction
  >();

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.code === Keys.RIGHT) {
      console.log('right');
      this.pageAction.emit(ControlAction.NEXT);
    }
    if (event.code === Keys.LEFT) {
      this.pageAction.emit(ControlAction.PREVIOUS);
    }
    if (event.code === Keys.SPACE) {
      this.videoAction.emit(ControlAction.PLAY);
    }
  }
}
