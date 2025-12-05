import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {

  showBackTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.showBackTop = scrollTop > 400; // aparece al bajar 400px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
