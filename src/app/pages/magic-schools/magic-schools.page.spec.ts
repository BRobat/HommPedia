import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagicSchoolsPage } from './magic-schools.page';

describe('MagicSchoolsPage', () => {
  let component: MagicSchoolsPage;
  let fixture: ComponentFixture<MagicSchoolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicSchoolsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagicSchoolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
