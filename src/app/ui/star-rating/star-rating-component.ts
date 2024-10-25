import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating-component.html',
    styles: `
        
        .star-rating {
            pointer-events: none;
        }

        .edit {
            cursor: pointer;
            border: 1px solid yellow;
            pointer-events: auto;
        }
    `,
    standalone: true,
    imports: [CommonModule],
})
export class StarRatingComponent { 
    isEditMode: boolean = false
    filledStarClass = 'fa-solid fa-star'
    emptyStarClass = 'fa-regular fa-star'
    stars = [
        1, 2, 3, 4, 5
    ]
    @Input() rating: number = 0;

    toggleEditMode() {
        this.isEditMode = !this.isEditMode
    }

    updateRating(rating: number) {
        this.rating = rating
    }
}