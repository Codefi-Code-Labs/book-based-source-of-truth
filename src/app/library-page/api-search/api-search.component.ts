import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from '../library.service';

const API_SEARCH_BASE_URL = 'https://openlibrary.org/search.json?q=';

export type searchResDocsT = {
  key: string;
  title: string;
  publish_date: string[];
  first_publish_year: number;
  isbn: string[];
  author_name: string[];
  subject: string[];
};

@Component({
  selector: 'app-api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.css'],
})
export class ApiSearchComponent {
  isLoading = false;

  // * Constructor
  constructor(
    private libraryService: LibraryService,
    private http: HttpClient
  ) {}

  // * Methods
  onSearchSubmit(searchQuery: string) {
    if (!searchQuery || searchQuery === '') return; // Edge case: empty search query

    this.isLoading = true;

    // Transform the searchQuery
    const transformedQuery = searchQuery.split(' ').join('+').toLowerCase();

    // Make API call (GET)
    const searchRes = this.http.get(API_SEARCH_BASE_URL + transformedQuery);

    // Subscribe to the searchRes observable
    searchRes.subscribe((searchRes: { docs: searchResDocsT[] }) => {
      if (searchRes?.docs.length > 0) {
        // Save books to libraryService
        this.libraryService.saveApiBookResults(searchRes['docs'].slice(0, 12));
      }

      this.isLoading = false; // Stop loading
    });
  }
}
