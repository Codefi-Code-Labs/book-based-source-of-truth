import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from './book.component';
import { Book } from './book.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the book title', () => {
    const book: Book = {
      id: 1,
      title: 'Test Book',
      author: 'Test Author',
      coverImg: 'https://source.unsplash.com/150x150/?book',
    };

    component.book = book;
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.book-title');
    expect(titleElement.textContent).toContain(book.title);
  });
});
