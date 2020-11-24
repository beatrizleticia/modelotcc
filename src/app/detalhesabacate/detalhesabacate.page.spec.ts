import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhesabacatePage } from './detalhesabacate.page';

describe('DetalhesabacatePage', () => {
  let component: DetalhesabacatePage;
  let fixture: ComponentFixture<DetalhesabacatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesabacatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesabacatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
