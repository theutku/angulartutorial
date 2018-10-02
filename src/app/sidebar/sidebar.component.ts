import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    currentUrl: string;

    constructor(private router: Router) {
        router.events.forEach(e => {
            if (e instanceof NavigationEnd) {
                console.log(e);
                this.currentUrl = e.url;
            }
        });
    }

    ngOnInit() {}
}
