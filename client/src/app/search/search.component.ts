import {Component, EventEmitter, Output} from '@angular/core';
import {SearchService} from './search.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'search-input',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent {
  results: Array<any>;
  searchTerm$ = new Subject<string>();
  isClosed: boolean = true;
  selectedName: string = '';
  @Output() public userData = new EventEmitter();


  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.data;
        this.isClosed = false;
      });
  }

  onKeyUp(str: string) {
    this.selectedName = str;
    this.searchTerm$.next(str);
  }


  onRecordSelect(item) {
    this.selectedName = item;
    this.isClosed = true;
  }

  onSubmit() {
    this.isClosed = true;
    this.searchService.searchUsers(this.selectedName)
      .subscribe(results => {
        this.userData.emit(results.data);
      });
  }
}
