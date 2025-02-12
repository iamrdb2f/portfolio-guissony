import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  texts: string[] = ['JAVA & SPRING EXPERT', 'SELENIUM AUTOMATION SPECIALIST', 'ENKINS & DEVOPS ENTHUSIASTIC'];
  currentText = '';
  currentIndex = 0;
  typingSpeed = 100;
  displayTime = 3000;

  ngOnInit() {
    this.startTextAnimation();
  }

  startTextAnimation() {
    let i = 0;

    const typeText = () => {
      if (i < this.texts[this.currentIndex].length) {
        this.currentText += this.texts[this.currentIndex].charAt(i);
        i++;
        setTimeout(typeText, this.typingSpeed);
      } else {
        setTimeout(() => this.deleteText(), this.displayTime);
      }
    };

    typeText();
  }

  deleteText() {
    if (this.currentText.length > 0) {
      this.currentText = this.currentText.slice(0, -1);
      setTimeout(() => this.deleteText(), this.typingSpeed);
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.startTextAnimation();
    }
  }
}
