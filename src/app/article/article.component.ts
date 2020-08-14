import { Component, OnInit, Input, HostBinding } from '@angular/core';
//import { Component, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  //article: Article;
  //votes: number;
  //title: string;
  //link: string;

  constructor() {
//    this.article = new Article ('Angular', 'http://angular.io',10);
//    this.title = 'Angular';
//    this.link = 'http://angular.io';
//    this.votes = 10;
  }

  voteUp():boolean {
    this.article.voteUp();
    return false;
  }

  voteDown():boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }
}
