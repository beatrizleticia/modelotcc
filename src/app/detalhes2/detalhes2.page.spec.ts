import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Detalhes2Page } from './detalhes2.page';

describe('Detalhes2Page', () => {
  let component: Detalhes2Page;
  let fixture: ComponentFixture<Detalhes2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Detalhes2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Detalhes2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
