import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestDetailPage } from './rest-detail.page';

describe('RestDetailPage', () => {
  let component: RestDetailPage;
  let fixture: ComponentFixture<RestDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
