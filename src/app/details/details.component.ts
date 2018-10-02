import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    userId: number;
    user: User;

    constructor(private data: DataService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => (this.userId = params.id));
    }

    ngOnInit() {
        this.data.getUser(this.userId).subscribe(user => (this.user = user));
    }
}
