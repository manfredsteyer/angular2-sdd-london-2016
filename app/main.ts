import {bootstrap}    from '@angular/platform-browser-dynamic';
import {FlightListComponent} from './flight-list.component';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';
import {FlightService} from './flight.service';


var appProviders = [ // <-- Global Config
    FlightService
];

var providers = [ // DI-Config
  HTTP_PROVIDERS,
  appProviders  
];

bootstrap(FlightListComponent, providers);
