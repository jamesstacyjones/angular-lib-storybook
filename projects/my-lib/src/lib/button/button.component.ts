import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { test } from '@my-lib/library/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Output() click: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onclick() {
    console.log(test());
    this.click.emit();
  }
}
