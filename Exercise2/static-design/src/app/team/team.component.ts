import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  teamsList = [
    {
      img: '../../assets/imgs/projects/angular.png',
      category: 'The whole group is Wu Yahgn the Great 1',
         
    },
    {
      img: '../../assets/imgs/projects/bootstrap.png',
      category: 'High-force design team',
    },
    {
      img: '../../assets/imgs/projects/react.png',
      category: 'Lying you to learn computer',
    },
    {
      img: '../../assets/imgs/projects/antDesign.png',
      category: 'Programmer everyday',
    },
    {
      img: '../../assets/imgs/projects/antDesignPro.png',
      category: 'Programmer everyday',
    },
    {
      img: '../../assets/imgs/projects/alipay.png',
      category: 'Science moving Bricks 3',
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
