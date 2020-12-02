import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraosPage } from './graos.page';

describe('GraosPage', () => {
  let component: GraosPage;
  let fixture: ComponentFixture<GraosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
