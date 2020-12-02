import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemperoPage } from './tempero.page';

describe('TemperoPage', () => {
  let component: TemperoPage;
  let fixture: ComponentFixture<TemperoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemperoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
