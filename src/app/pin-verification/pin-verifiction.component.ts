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
  set pinCount(count: number) {
    for (let i = 0; i < count; i++) {
      this.pinArray.push(i);
    }
  }

  @ViewChildren('pin')
  pins: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngAfterViewInit() {
    console.log(this.pins);

    // this.renderer.selectRootElement(this.pins.first.nativeElement).focus();

    // this.pins.changes.subscribe(data => console.log(data));
  }

  onKeyUp(event, index) {
    console.log(event.target, index);
  }
}
