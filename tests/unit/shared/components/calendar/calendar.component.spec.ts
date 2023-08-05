import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CalendarComponent} from '../../../../../src/app/shared/components/calendar/calendar.component';
import {StatusEnum} from '../../../../../src/app/shared/values/status.enum';
import {CommonModule} from '@angular/common';
import {FullCalendarModule} from '@fullcalendar/angular';
import {SkeletonModule} from 'primeng/skeleton';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarComponent ],
      imports: [
        CommonModule,
        FullCalendarModule,
        SkeletonModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.status).toBe(StatusEnum.INITIAL);
    expect(component.events).toEqual([]);
  });
});
