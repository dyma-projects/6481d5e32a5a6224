import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Output() public result: EventEmitter<number> = new EventEmitter();

  @Input() public resultDuplicate :number;

  incrementNumber() {
    this.resultDuplicate++;
    this.result.emit(this.resultDuplicate);
  }

  decrementNumber() {
    this.resultDuplicate--;
    this.result.emit(this.resultDuplicate);
  }
  constructor() { }

  ngOnInit() {
  }

}
