import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtifactsPage } from './artifacts.page';

describe('ArtifactsPage', () => {
  let component: ArtifactsPage;
  let fixture: ComponentFixture<ArtifactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtifactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtifactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
