import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/events.service";

@Component({
  selector: "events-list",
  template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail [event]="event">
                </event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
  events: any[]

  constructor(private eventService: EventService) {
  }
}