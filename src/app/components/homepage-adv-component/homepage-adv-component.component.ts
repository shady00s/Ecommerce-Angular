import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-adv-component',
  templateUrl: './homepage-adv-component.component.html',
  styleUrls: ['./homepage-adv-component.component.scss']
})
export class HomepageAdvComponentComponent implements OnInit {
  imageUrl:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
