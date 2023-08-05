import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmationComponent} from '../../../../../src/app/booking/components/confirmation/confirmation.component';
import {FormsModule, NgForm, Validators} from '@angular/forms';
import {ConfirmationService} from 'primeng/api';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;
  let confirmationServiceMock = jasmine.createSpyObj(ConfirmationService, ['confirm']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationComponent],
      imports: [
        FormsModule,
      ],
      providers: [
        {provide: ConfirmationService, useValue: confirmationServiceMock},
      ],
    })
        .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component.confirmed, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not confirm on invalid form', () => {

    // Given I have some form with errors
    const form = new NgForm([Validators.required, Validators.email], []);

    // When I submit
    component.submit(form);

    // Then no event should emit
    expect(component.confirmed.emit).not.toHaveBeenCalled();
  });

  it('should confirm on valid form', () => {

    // Given I have valid form
    const form = {
      valid: true,
      value: {
        email: 'sample@asd.pl',
        firstName: 'Sebastian',
        lastName: 'Rocks',
        phoneNumber: '500355031',
      }
    } as NgForm;

    // When I submit
    component.submit(form);

    // Then event should emit
    expect(component.confirmed.emit).toHaveBeenCalled();
  });

  it('should show confirmation alert on clear form attempt', () => {

    // Given I have valid form
    component.form = {
      email: 'sample@asd.pl',
      firstName: 'Sebastian',
      lastName: 'Rocks',
      phoneNumber: '500355031',
    }

    // When I clear the data
    let e = jasmine.createSpyObj(Event, ['target']);
    component.clear(e);

    // Then Confirmation service should be called
    expect(confirmationServiceMock.confirm.calls.count()).toBe(1);
  });
});
