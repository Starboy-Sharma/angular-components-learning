import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styles: `
        .accordion-title {
            align-items: center;
        }

        .accordion {
            border: 1px solid white;
            border-radius: 0.25rem;
        }
    `,
    animations: [
        trigger('accordionAnimation', [
            state('collapsed', style({
                height: '0',
                opacity: 0,
                overflow: 'hidden'
            })),
            state('expanded', style({
                height: '*',
                opacity: 1,
            })),
            transition('collapsed <=> expanded', [
                animate('300ms ease-in-out')
            ])
        ])
    ],
    standalone: true,
    imports: [CommonModule]
})

export class AccordionComponent {
    @Input({ required: true }) title: string = ''
    isAccordionOpen = false

    toggleAccordion() {
        console.log('Toggle accordion...')
        this.isAccordionOpen = !this.isAccordionOpen
    }
}