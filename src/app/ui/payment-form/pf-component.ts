import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, FormGroup, Validators, AbstractControl, ValidationErrors } from "@angular/forms";
import { ExpiryDateFormatter } from "../../filters/expiryDateFormatter";

@Component({
    selector: 'app-payment-form',
    templateUrl: './pf-component.html',
    styles: ``,
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    providers: [ExpiryDateFormatter]
})
export class PaymentFormComponent {

    paymentForm: FormGroup;

    constructor(private expiryDateFormatter: ExpiryDateFormatter) {
        this.paymentForm = new FormGroup({
            cardHolderName: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50)
            ]),
            cardNumber: new FormControl('', [
                Validators.required,
                CardNumberValidator
            ]),
            expiry: new FormControl('', [
                Validators.required,
                Validators.pattern('[0-9]{2}/[0-9]{2}')
            ]),
            cvv: new FormControl('', [
                Validators.required,
                Validators.pattern('[0-9]{3}')
            ]),
            zipCode: new FormControl('', [
                Validators.required,
                Validators.pattern('[0-9]{5}')
            ])
        });

        this.formatCardNumber();
    }

    formatCardNumber() {
        this.paymentForm.get('cardNumber')?.valueChanges.subscribe((value: string) => {
            const formattedValue = this.formatCard(value);
            this.paymentForm.get('cardNumber')?.setValue(formattedValue, { emitEvent: false });
        })
    }

    formatCard(value: string) {
        return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    onExpiryInput(event: Event) {
        const input = (event.target as HTMLInputElement)?.value as string;

        const formattedValue = this.expiryDateFormatter.transform(input);
        this.paymentForm.get('expiry')?.setValue(formattedValue, { emitEvent: false });
    }

    onSubmit() {
        console.log(this.paymentForm.value);
    }
}


// Custom validator to check if card number has exactly 16 digits (ignores spaces)
export function CardNumberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const cleanValue = value.replace(/\s+/g, ''); // Remove spaces
    const isValid = /^[0-9]{16}$/.test(cleanValue); // Check if exactly 16 digits

    return isValid ? null : { invalidCardNumber: true };
}