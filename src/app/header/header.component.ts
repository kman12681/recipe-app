import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigation = new EventEmitter<string>();

  collapsed = true;

  constructor() {}

  ngOnInit() {}

  onNavigate(pathName: string) {
    this.navigation.emit(pathName);
  }
}
