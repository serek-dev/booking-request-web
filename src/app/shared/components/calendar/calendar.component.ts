import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {EventDto} from './event.dto';
import plLocale from '@fullcalendar/core/locales/pl';
import {StatusEnum} from '../../values/status.enum';
import {CalendarOptions} from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {
  @Input() events: EventDto[] = [];
  @Output() selectedEvent = new EventEmitter<any>();
  @Input() status = StatusEnum.INITIAL;

  options: CalendarOptions;

  ngOnInit(): void {
    this.options = {
      initialView: 'timeGridWeek',
      allDaySlot: false,
      locale: plLocale,
      slotMinTime: '07:00:00',
      slotMaxTime: '19:00:00',
      weekends: false,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      selectable: true,
      editable: false,
      eventClick: this.onClick.bind(this),
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['events']) {
      const events = changes['events']['currentValue'] as EventDto[];
      this.options = {...this.options, ...{events}};
    }
  }

  private onClick($e: any): void {
    this.selectedEvent.emit($e);
  }
}
