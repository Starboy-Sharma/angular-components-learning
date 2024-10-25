import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'expiryDateFormatter',
    standalone: true
})
export class ExpiryDateFormatter implements PipeTransform {

    transform(value: string): string {
        // Remove all non-digit characters
        const digits = value.replace(/\D/g, '');

        // Format as MM/YY
        if (digits.length > 2) {
            return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
        }
        if (digits.length > 0) {
            return digits;
        }
        return '';
    }
}