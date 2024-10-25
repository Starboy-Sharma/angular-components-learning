import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./ui/toolbar/toolbar.component";
import { CardComponent } from "./ui/card/card.component";
import { AccordionComponent } from './ui/accordion/accordion.component';
import { PaymentFormComponent } from './ui/payment-form/pf-component';
import { StarRatingComponent } from './ui/star-rating/star-rating-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, CardComponent, AccordionComponent, PaymentFormComponent, StarRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Components Challenge';

  sayHello() {
    alert('Hello!');
  }
}
