import { Component, OnInit } from '@angular/core';

import { MetadataService } from '../services/metadata.service';

import { Page, Artist } from '../objects';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  page: Page;
  artists: Artist[];

  constructor(private metadataSvc: MetadataService) { }

  ngOnInit() {
    this.metadataSvc.getArtists().subscribe(page => this.page = page);
  }

}
