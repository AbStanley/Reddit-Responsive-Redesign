import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.sass']
})
export class DynamicComponent implements OnInit {


  dlogs = [
    {
      img: '../../assets/imgs/log/1.jpg',
      description: `Lorem ipsum dolor sit amet <a href="###"><span class="link">consectetur adipiscing elit</span></a> Lorem ipsum dolor sit amet <a href="###"><span class="link">adipiscing elit</span></a>`,
      daysAgo: '2 days ago',      
    },
    {
      img: '../../assets/imgs/log/2.jpg',
      description: 'Lorem ipsum <a href="###"><span class="link">dolor sit amet, consectetur adipiscing elit</span></a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      daysAgo: '3 days ago',
    },
    {
      img: '../../assets/imgs/log/3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  <a href="###"><span class="link">ipsum dolor sit amet</span></a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      daysAgo: '4 days ago',
    },
    {
      img: '../../assets/imgs/log/4.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="###"><span class="link">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span></a>. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      daysAgo: '4 days ago',
    },
    {
      img: '../../assets/imgs/log/2.jpg',
      description: 'Lorem <a href="###"><span class="link">ipsum dolor sit amet, consectetur adipiscing elit</span></a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      daysAgo: '4 days ago',
    },
    {
      img: '../../assets/imgs/log/4.jpg',
      description: 'Lorem ipsum  <a href="###"><span class="link">ipsum dolor sit amet</span></a>, dolor sit amet, consectetur adipiscing <a href="###"><span class="link">adipiscing elit</span></a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      daysAgo: '4 days ago',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
