import { Flight} from './flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { Component} from '@angular/core';
import { FlightCardComponent} from './flight-card.component';
import { FlightService} from './flight.service';

@Component({
    selector: 'flight-list', 
    templateUrl: 'app/flight-list.component.html',
    directives: [FlightCardComponent]
})
export class FlightListComponent {
    
    public from: string;
    public to: string;
    public flights: Array<Flight> = [];
    
    public selectedFlight: Flight;
    
    /*
    private http: Http;
    
    constructor(http: Http) {
        this.http = http;
    }
    */
    constructor(private flightService: FlightService) {
    }
    
    public search(): void {
            
            this
                .flightService
                .find(this.from, this.to)
                .subscribe(
                    (flights) => {
                        this.flights = flights;
                    },
                    (err) => {
                        console.debug(err);
                    }
                );
                
        
        
    }
    
    public select(flight: Flight): void {
        this.selectedFlight = flight;
    }
    
    
    
    
}
