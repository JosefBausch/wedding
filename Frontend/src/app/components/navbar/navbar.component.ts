import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  openSidebar() {
    let sidebar = document.getElementById("sidebar");
    let body = document.body;
    let overlay = document.getElementById("overlay");

    if (sidebar && overlay) {
      sidebar.style.display = "flex";
      overlay.style.opacity = "100%";
      setTimeout(function() {
        sidebar.style.borderLeft = "3px solid var(--surfaceDark)";
        sidebar.style.width = "70%";
        overlay.style.backgroundColor = "rgba(29, 53, 87, 0.8)";
      }, 1);

      // Disable scrolling on body
      body.style.overflow = 'hidden';

      // Show overlay to disable interactions on body
      overlay.style.display = "block";
    }
  }
}
