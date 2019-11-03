import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonData } from './button-data';
import { ButtonComponent } from './button.component';


describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;
    let fakeButtonData: ButtonData;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fakeButtonData = undefined;
    }));

    describe('INIT', () => {

        beforeEach(() => {
            fakeButtonData = {
                label: 'FAKE LABEL',
                size: '10|10|10'
            };
            component.label = fakeButtonData.label;
            fixture.detectChanges();
        });

        it('should create ButtonComponent', () => {
            expect(component).toBeTruthy();
        });

        describe('Given label is available THEN show the label text', () => {
            it('should set label text be equal to input label text', () => {
                const labelElement = fixture.debugElement.query(By.css('button'));
                expect(labelElement.nativeElement.innerText).toEqual(fakeButtonData.label);
            });
        });

        describe('Given size input is NOT available THEN add DEFAULT size class to div container', () => {
            it('should set default size class to div element', () => {
                const containerElement = fixture.debugElement.query(By.css('#container'));
                expect(containerElement.nativeElement.innerText).toEqual(fakeButtonData.label);
            });
        });

        describe('Given size is available THEN add size class to container', () => {
            it('label text should be equal to input label text', () => {
                const containerElement = fixture.debugElement.query(By.css('#container'));
                expect(containerElement.nativeElement.innerText).toEqual(fakeButtonData.label);
            });
        });
    });


});
