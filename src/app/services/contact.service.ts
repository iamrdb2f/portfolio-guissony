import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sendMail(formData: any) {
    const emailParams = {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      sujet: formData.sujet,
      message: formData.message
    };

    console.log('Données envoyées à EmailJS :', emailParams); // ✅ Vérifier les valeurs avant l’envoi

    return emailjs.send('mail_serv_rolatlafed_org', 'template_ro_at_lafed_org', emailParams, 'u26ZJ_QwwGqDxCCFc')
      .then((response) => {
        console.log('Email envoyé avec succès ✅', response.status, response.text);
      }, (error) => {
        console.log('Erreur lors de l’envoi ❌', error);
      });
  }
}
