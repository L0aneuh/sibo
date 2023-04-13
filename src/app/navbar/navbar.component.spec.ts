import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu') as HTMLElement;
const navToggle = document.getElementById('nav-toggle') as HTMLElement;
const navClose = document.getElementById('nav-close') as HTMLElement;

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    navToggle.classList.add('hide');
    (document.getElementById('myNavbar') as HTMLElement).classList.toggle('white-nav');
    (document.getElementById('nav-button') as HTMLElement).classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('hide');
    (document.getElementById('myNavbar') as HTMLElement).classList.remove('white-nav');
    (document.getElementById('nav-button') as HTMLElement).classList.remove('show-menu');
  });
}

