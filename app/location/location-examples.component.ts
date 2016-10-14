import { Component, ChangeDetectionStrategy }  from "@angular/core";
import { Link } from "./../link";

var menuLinks = [
    new Link("Location module example", "/locationModuleExampleComponent")
];

@Component({
    selector: 'location-examples-component',
    templateUrl: 'examples-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LocationExamplesComponent {
    public links: Array<Link>;

    constructor() {
        this.links = [];

        for (var i = 0; i < menuLinks.length; i++) {
            this.links.push(menuLinks[i]);
        }
    }
}