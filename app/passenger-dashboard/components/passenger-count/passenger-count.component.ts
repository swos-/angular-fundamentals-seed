import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-count',
    template: `
    <div>
        <h3>Airline Passengers!</h3>
        <div>
            <!-- ? = 'safe navigation' -- waits for property to be available 
            Wait for property to be available.  Once available, change detection fires,
            input gets rebound, and properties display in browser
            -->
            Total checked in: {{ checkedInCount() }} / {{ items?.length }}
        </div>
    </div>
    `
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];
    checkedInCount(): number {
        if(!this.items) return;
        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}