import { Flight} from './flight';
import { Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'flight-card',
    templateUrl: 'app/flight-card.component.html'
})
// <flight-card 
//    [flight]="flight" [selectedFlight]="selectedFlight"
//    (selectedFlightChange)="select(...)"
export class FlightCardComponent {
    
    @Input() flight: Flight;
    @Input() selectedFlight: Flight;
    
    @Output() selectedFlightChange = new EventEmitter();
    
    selected() {
        this.selectedFlightChange.emit(this.flight);
    }
    
}