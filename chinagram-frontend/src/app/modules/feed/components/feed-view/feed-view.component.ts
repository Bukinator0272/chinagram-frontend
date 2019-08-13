import { Component, OnInit } from '@angular/core';
import {FeedService} from "../../services/feed.service";
import {Photo} from "../../../photo/model/Photo";
import {BASE_URL} from "../../../../china-config";

@Component({
  selector: 'china-feed-view',
  templateUrl: './feed-view.component.html',
  styleUrls: ['./feed-view.component.less']
})
export class FeedViewComponent implements OnInit {

  constructor(private feedService: FeedService) { }
  private BASE_URL = BASE_URL;
  private photos: Photo[];

  ngOnInit() {
    this.getFeed();
  }

  private getFeed() {
    this.feedService.getFeedData().subscribe(response => {
      this.photos = response
    });
  }
}
