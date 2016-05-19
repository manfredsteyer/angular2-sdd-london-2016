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
var FlightCardComponent = (function () {
    function FlightCardComponent() {
        this.selectedFlightChange = new core_1.EventEmitter();
    }
    FlightCardComponent.prototype.selected = function () {
        this.selectedFlightChange.emit(this.flight);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlightCardComponent.prototype, "flight", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlightCardComponent.prototype, "selectedFlight", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FlightCardComponent.prototype, "selectedFlightChange", void 0);
    FlightCardComponent = __decorate([
        core_1.Component({
            selector: 'flight-card',
            templateUrl: 'app/flight-card.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FlightCardComponent);
    return FlightCardComponent;
}());
exports.FlightCardComponent = FlightCardComponent;
//# sourceMappingURL=flight-card.component.js.map