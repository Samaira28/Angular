import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { PipesModule } from 'pipes-module';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ AddComponent ]
  //   })
  //   .compileComponents();
  // });
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [FormsModule ],
      declarations: [ AddComponent ]
      // declare the test component
    })
    .compileComponents();  // compile template and css
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
