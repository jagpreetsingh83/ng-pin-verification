import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ViewChildren,
  QueryList,
  ElementRef,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-pin-verifiction',
  templateUrl: './pin-verifiction.component.html',
  styleUrls: ['./pin-verifiction.component.scss']
})
export class PinVerifictionComponent implements OnInit, AfterViewInit {
  pinArray: number[] = [];

  @Input()
  pinCount: number;

  @ViewChildren('pin')
  pins: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    for (let i = 0; i < this.pinCount; i++) {
      this.pinArray.push(i);
    }
  }

  ngAfterViewInit() {
    this.renderer.selectRootElement(this.pins.first.nativeElement).focus();
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    console.log(event);

    event.preventDefault();
    event.stopPropagation();

    let targetIndex = index;
    const inputField = event.target as HTMLInputElement;

    if (event.code.indexOf('Digit') > -1) {
      // Number
      inputField.value = event.key;
      // Move Forward
      targetIndex++;
    } else if (event.key === 'Backspace') {
      if (!inputField.value) {
        // Move Backward
        targetIndex--;
      } else {
        inputField.value = '';
      }
    }
    const nextPin = this.pins.find((item, i) => i === targetIndex);
    if (nextPin) {
      this.renderer.selectRootElement(nextPin.nativeElement).focus();
    }
  }
}
