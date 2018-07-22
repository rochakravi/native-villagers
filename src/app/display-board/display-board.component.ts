import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-display-board',
  templateUrl: './display-board.component.html',
  styleUrls: ['./display-board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayBoardComponent implements OnInit {

	 @Input() childMessage: string = 'child';

  constructor() { }

  ngOnInit() {
  }

}
