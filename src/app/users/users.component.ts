import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import ListStagger from '../../animations/listStagger';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    animations: ListStagger
})
export class UsersComponent implements OnInit {
    users: Object;

    constructor(private data: DataService) {}

    ngOnInit() {
        this.data.getUsers().subscribe(data => (this.users = data));
    }
}
