import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textArray: string[] = [
    "JAVA & SPRING EXPERT",
    "SELENIUM AUTOMATION SPECIALIST",
    "JENKINS & DEVOPS ENTHUSIASTIC"
  ];
  typingSpeed: number = 100;
  erasingSpeed: number = 100;
  delayBetweenTexts: number = 2000;
  currentTextIndex: number = 0;
  currentText: string = "";
  isDeleting: boolean = false;

  ngOnInit() {
    this.typingEffect();
  }

  typingEffect() {
    const fullText = this.textArray[this.currentTextIndex];
    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    setTimeout(() => {
      if (!this.isDeleting && this.currentText === fullText) {
        setTimeout(() => {
          this.isDeleting = true;
          this.typingEffect();
        }, this.delayBetweenTexts);
      } else if (this.isDeleting && this.currentText === "") {
        this.isDeleting = false;
        this.currentTextIndex = (this.currentTextIndex + 1) % this.textArray.length;
        this.typingEffect();
      } else {
        this.typingEffect();
      }
    }, this.isDeleting ? this.erasingSpeed : this.typingSpeed);
  }
}
