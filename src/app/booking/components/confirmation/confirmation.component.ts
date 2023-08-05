import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Expert} from '../../expert.model';
import {Availability} from '../../availability.model';
import {Customer} from '../../customer.model';
import {Email} from '../../../shared/values/email';
import {NgForm} from '@angular/forms';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

  constructor(private confirmationService: ConfirmationService) {}

  @Output() confirmed = new EventEmitter<Customer>();
  @Input() selectedExpert: Expert;
  @Input() selectedDate: Availability;

  form = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  }

  clear(event: Event): void
  {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Czy na pewno chcesz wyczyścić formularz?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Tak',
      rejectLabel: 'Nie',
      accept: () => {
        this.form = {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
        }
      },
    });
  }

  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }

    this.confirmed.emit(
        new Customer(
            new Email(form.value.email),
            form.value.firstName,
            form.value.lastName,
            form.value.phoneNumber,
        )
    );
  }
}
