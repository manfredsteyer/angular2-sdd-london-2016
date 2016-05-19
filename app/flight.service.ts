import { Http, URLSearchParams, Headers } from '@angular/http';
import { Injectable} from '@angular/core';

@Injectable()
export class FlightService {
    
    constructor(private http: Http) {
    }
    
    public find(from: string, to: string) {
        
        let url = "/data/flights.json";
        
        var search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);
        
        var headers = new Headers();
        headers.set('Accept', 'text/json');
        
        return this.http
                    .get(url, { search, headers  })
                    .map(resp => resp.json())

    }
    
}