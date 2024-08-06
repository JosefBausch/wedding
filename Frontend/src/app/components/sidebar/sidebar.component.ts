import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  startX = 0;
  startY = 0;
  endX = 0;
  endY = 0;
  swipeThreshold = 50;

  ngOnInit() {
    let swipeElement = document.getElementById("overlay");

    if (swipeElement) {
      swipeElement.addEventListener("touchstart", (event) => {
        this.startX = event.touches[0].clientX;
        this.startY = event.touches[0].clientY;
      });

      swipeElement.addEventListener("touchmove", (event) => {
        // Prevent scrolling when swiping
        event.preventDefault();
      });

      swipeElement.addEventListener("touchend", (event) => {
        this.endX = event.changedTouches[0].clientX;
        this.endY = event.changedTouches[0].clientY;

        // Calculate distance moved
        let distanceX = this.endX - this.startX;
        let distanceY = this.endY - this.startY;

        // Determine swipe direction
        if (Math.abs(distanceX) > Math.abs(distanceY)) {
          // Horizontal swipe detected
          if (distanceX > this.swipeThreshold) {
            // Swipe from left to right (close sidebar)
            this.closeSidebar();
          } else if (distanceX < -this.swipeThreshold) {
            // Swipe from right to left (open sidebar)
            this.openSidebar();
          }
        }
      });
    }
  }

  closeSidebar() {
    let sidebar = document.getElementById("sidebar");
    let body = document.body;
    let overlay = document.getElementById("overlay");

    if (sidebar && overlay) {
      sidebar.style.borderLeft = "none";
      sidebar.style.width = "0px";
      overlay.style.opacity = "0%";
      overlay.style.backgroundColor = "rgba(29, 53, 87, 0)";
      setTimeout(function() {
        sidebar.style.display = "none";
        body.style.overflow = 'auto';
      }, 550);

      // Hide overlay
      overlay.style.display = "none";
    }
  }

  openSidebar() {
    let sidebar = document.getElementById("sidebar");
    let overlay = document.getElementById("overlay");

    if (sidebar && overlay) {
      sidebar.style.display = "block";
      sidebar.style.width = "250px";
      sidebar.style.borderLeft = "2px solid #ccc";
      overlay.style.display = "block";
      overlay.style.opacity = "50%";
      overlay.style.backgroundColor = "rgba(29, 53, 87, 0.5)";
      document.body.style.overflow = 'hidden';
    }
  }
}
