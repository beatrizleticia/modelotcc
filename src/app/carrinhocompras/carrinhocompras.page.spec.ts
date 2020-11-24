import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrinhocomprasPage } from './carrinhocompras.page';

describe('CarrinhocomprasPage', () => {
  let component: CarrinhocomprasPage;
  let fixture: ComponentFixture<CarrinhocomprasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhocomprasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrinhocomprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
