import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegumesPage } from './legumes.page';

describe('LegumesPage', () => {
  let component: LegumesPage;
  let fixture: ComponentFixture<LegumesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegumesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
