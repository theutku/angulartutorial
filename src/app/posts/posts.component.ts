import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../../models/post';
import ListStagger from '../../animations/listStagger';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    animations: ListStagger
})
export class PostsComponent implements OnInit {
    posts: object;

    constructor(private data: DataService) {}

    ngOnInit() {
        this.data.getPosts().subscribe((posts: Post[]) => {
            this.posts = posts;
        });
    }
}
