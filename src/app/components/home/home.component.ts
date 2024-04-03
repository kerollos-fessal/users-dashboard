import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(200%)', opacity: 0 }),
        animate('900ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-200%)', opacity: 0 }),
        animate('900ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {

}
