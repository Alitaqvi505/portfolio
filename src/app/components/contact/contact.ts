import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contactForm: FormGroup;
  isSending = false;
  statusMessage = '';
  statusType: 'success' | 'error' | '' = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSending = true;
      this.statusMessage = '';

      const { name, email, message } = this.contactForm.value;

      const data = {
        access_key: '14727ddd-fcda-49a3-85a7-9bf7b3f2ae67', 
        name,
        email,
        message,
      };

      const headers = new HttpHeaders({ 'Accept': 'application/json' });

      this.http.post('https://api.web3forms.com/submit', data, { headers })
        .subscribe({
          next: (res: any) => {
            if (res.success) {
              this.statusType = 'success';
              this.statusMessage = 'Message sent successfully!';
              this.contactForm.reset();
            } else {
              this.statusType = 'error';
              this.statusMessage = 'Something went wrong. Please try again.';
            }
            this.isSending = false;
          },
          error: () => {
            this.statusType = 'error';
            this.statusMessage = 'Error sending message. Please try again.';
            this.isSending = false;
          }
        });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
