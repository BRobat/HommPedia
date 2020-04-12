import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreaturesPage } from './creatures.page';

describe('CreaturesPage', () => {
  let component: CreaturesPage;
  let fixture: ComponentFixture<CreaturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreaturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
