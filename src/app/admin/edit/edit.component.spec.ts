import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesModule } from 'pipes-module';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ EditComponent ]
  //   })
  //   .compileComponents();
  // });
  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [FormsModule ],
      declarations: [ EditComponent ]
      // declare the test component
    })
    .compileComponents();  // compile template and css
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
