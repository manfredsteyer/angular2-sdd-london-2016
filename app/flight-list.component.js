"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var flight_card_component_1 = require('./flight-card.component');
var flight_service_1 = require('./flight.service');
var FlightListComponent = (function () {
    /*
    private http: Http;
    
    constructor(http: Http) {
        this.http = http;
    }
    */
    function FlightListComponent(flightService) {
        this.flightService = flightService;
        this.flights = [];
    }
    FlightListComponent.prototype.search = function () {
        var _this = this;
        this
            .flightService
            .find(this.from, this.to)
            .subscribe(function (flights) {
            _this.flights = flights;
        }, function (err) {
            console.debug(err);
        });
    };
    FlightListComponent.prototype.select = function (flight) {
        this.selectedFlight = flight;
    };
    FlightListComponent = __decorate([
        core_1.Component({
            selector: 'flight-list',
            templateUrl: 'app/flight-list.component.html',
            directives: [flight_card_component_1.FlightCardComponent]
        }), 
        __metadata('design:paramtypes', [flight_service_1.FlightService])
    ], FlightListComponent);
    return FlightListComponent;
}());
exports.FlightListComponent = FlightListComponent;
//# sourceMappingURL=flight-list.component.js.map