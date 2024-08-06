import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quotes = [
    { text: "Honey, I accidentally made 24 cabinets...", author: "Josef" },
    { text: "There's a difference between Raising Cane's and meth...", author: "Josef" },
    { text: "I swear, girls are... something else...", author: "Josef" },
    { text: "I like a girl that smells of tortilla...", author: "Josef" },
    { text: "People love my buns...", author: "Josef" },
    { text: "I'd recognize that rear from anywhere...", author: "Josef" }
    // Add more quotes as needed
  ];

  currentQuoteIndex = 0;

  ngOnInit() {
    this.rotateQuotes();
  }

  displayQuote(index: number) {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const quoteContainer = document.getElementById('quote-container');

    if (quoteText && quoteAuthor && quoteContainer) {
      // Set the new quote text
      quoteText.textContent = '"' + this.quotes[index].text + '"';
      quoteAuthor.textContent = '- ' + this.quotes[index].author;

      // Trigger reflow
      void quoteContainer.offsetWidth;

      // Add fade-in class
      quoteContainer.classList.remove('fade-out');
      quoteContainer.classList.add('fade-in');
    }
  }

  fadeOutQuote(): Promise<void> {
    return new Promise((resolve) => {
      const quoteContainer = document.getElementById('quote-container');
      if (quoteContainer) {
        quoteContainer.classList.remove('fade-in');
        quoteContainer.classList.add('fade-out');
        setTimeout(resolve, 1000); // Wait for the fade-out transition to complete
      } else {
        resolve();
      }
    });
  }

  async rotateQuotes() {
    this.displayQuote(this.currentQuoteIndex);

    await new Promise(resolve => setTimeout(resolve, 10000)); // Display quote for 10 seconds
    await this.fadeOutQuote();

    this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
    this.rotateQuotes();
  }
}
