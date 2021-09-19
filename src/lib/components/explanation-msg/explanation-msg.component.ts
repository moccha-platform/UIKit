import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explanation-msg',
  templateUrl: './explanation-msg.component.html',
  styleUrls: ['./explanation-msg.component.css']
})
export class ExplanationMsgComponent implements OnInit {

  @Input() message = '';

  constructor() { }

  ngOnInit(): void {
  }

}
