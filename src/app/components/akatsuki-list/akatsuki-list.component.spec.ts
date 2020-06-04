import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AkatsukiListComponent } from './akatsuki-list.component';

describe('AkatsukiListComponent', () => {
  let component: AkatsukiListComponent;
  let fixture: ComponentFixture<AkatsukiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkatsukiListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AkatsukiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
