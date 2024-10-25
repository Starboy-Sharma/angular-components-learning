import { AfterContentInit, Component, ContentChild, Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[card-image]',
})

export class CardImageDirective {}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements AfterContentInit {
  @Input() title: string | undefined;

  @ContentChild(CardImageDirective, { static: false }) cardImage!: CardImageDirective;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterContentInit() {

    // Check if cardImage exists and add a class to the host element
    if (this.cardImage) {
      console.log('Card image found, adding class...');
      this.renderer.addClass(this.el.nativeElement, 'has-card-image');
    } else {
      console.log('No card image found');
    }
  }
}
