import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[jemPadding]'
})
export class PaddingDirective implements OnInit {

  constructor(private _el: ElementRef,
              private _renderer: Renderer2) { }

  ngOnInit(): void {
    this._renderer.setStyle(this._el.nativeElement, 'padding', '16px');
  }
}
