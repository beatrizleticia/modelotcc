import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Detalhes1Page } from './detalhes1.page';

describe('Detalhes1Page', () => {
  let component: Detalhes1Page;
  let fixture: ComponentFixture<Detalhes1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detalhes1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Detalhes1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
