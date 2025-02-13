import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  imports: [
    FormsModule
  ],
  standalone: true
})
export class ContactFormComponent {
  formData = {
    nom: '',
    prenom: '',
    email: '',
    sujet: '',
    message: ''
  };

  messageConfirmation: string = ''; // ✅ Variable pour stocker le message de confirmation

  constructor(private readonly contactService: ContactService) {}

  onSubmit() {
    console.log('Formulaire soumis :', this.formData);
    this.contactService.sendMail(this.formData).then(() => {
      this.messageConfirmation = "✅ Votre message a bien été envoyé !";
      this.resetForm(); // Nettoie le formulaire après l’envoi
    }).catch(() => {
      this.messageConfirmation = "❌ Une erreur s'est produite, veuillez réessayer.";
    });
  }

  resetForm() {
    this.formData = {
      nom: '',
      prenom: '',
      email: '',
      sujet: '',
      message: ''
    };
  }
}
