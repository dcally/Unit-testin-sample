import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { MessageService } from '../message.service';

import { AlertButComponent } from './alert-but.component';

describe('AlertButComponent', () => {
  let component: AlertButComponent;
  let fixture: ComponentFixture<AlertButComponent>;
  let de: DebugElement;

  let serviceStub: any;

  beforeEach(async () => {

    serviceStub = {
      getText: () => of("Hello World")
    };

    await TestBed.configureTestingModule({
      declarations: [ AlertButComponent ],
      providers: [ { provide: MessageService, useValue: serviceStub} ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with `warn`', () => {
    expect(component.content).toContain('warn');
  })

  it('should hve a zero counter', () => {
    expect(component.counter).toEqual(0);
  })

  it('Should have <h2> tag with `Button Page`', () => {
    expect(de.query(By.css('h2')).nativeElement.innerText).toBe("Button Page");
  })

  it('Toggle Hidden message', () => {
    expect(component.hidden).toBeTruthy();
    component.clicked();
    expect(component.hidden).toBeFalsy();
  })

  it('Toggle Hidden message ASYNC', () => {
    expect(component.hidden).toBeTruthy();
    component.clickedAsnc();
    tick(499);
    expect(component.hidden).toBeFalsy();
  })

  it('Should return an observable', () => {
    component.content.subscribe(content => {
      expect(content).toBeDefined();
    })
  })
  it('Should return an observable saying hello world', () => {
    component.content.subscribe(content => {
      expect(content).toBeDefined();
      expect(content).toBe("Hello World");
    })
  })
});
