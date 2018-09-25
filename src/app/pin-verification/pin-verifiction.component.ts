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

  onKeyUp(event, index) {
    const nextIndex = index === this.pinCount - 1 ? 0 : index + 1;
    const nextPin = this.pins.find((item, i) => i === nextIndex);
    if (nextPin) {
      this.renderer.selectRootElement(nextPin.nativeElement).focus();
    }
  }
}
