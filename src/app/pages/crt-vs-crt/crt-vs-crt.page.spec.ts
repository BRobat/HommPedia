import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrtVsCrtPage } from './crt-vs-crt.page';

describe('CrtVsCrtPage', () => {
  let component: CrtVsCrtPage;
  let fixture: ComponentFixture<CrtVsCrtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrtVsCrtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrtVsCrtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
