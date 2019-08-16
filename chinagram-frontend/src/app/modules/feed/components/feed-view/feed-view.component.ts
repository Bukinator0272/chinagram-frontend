import { Component, OnInit } from '@angular/core';
import {FeedService} from "../../services/feed.service";
import {Photo} from "../../../photo/model/Photo";
import {BASE_URL} from "../../../../china-config";
import {Page} from "../../model/Page";

@Component({
  selector: 'china-feed-view',
  templateUrl: './feed-view.component.html',
  styleUrls: ['./feed-view.component.less']
})
export class FeedViewComponent implements OnInit {

  constructor(private feedService: FeedService) { }
  public BASE_URL = BASE_URL;
  private photos: Photo[] = [];
  currentPageNumber: number = 1;
  currentPage: Page;

  public isLoading: boolean = true;

  ngOnInit() {
    this.initializePage();
    this.getFeed();
  }

  private getFeed() {
    this.feedService.getFeedDataScroll(this.currentPage).subscribe(response => {
      this.photos = this.photos.concat(response);
      this.isLoading = false;
    });
  }

  private initializePage(){
   this.currentPage = new Page(2, this.currentPageNumber);
  }

  onScroll() {
    this.currentPageNumber++;
    this.initializePage();
    this.getFeed();
  }
}
