import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  title = 'sibo';
  services: any[] = [
    {
      img: 'assets/img/service1.png',
      logo_img:'assets/img/servicePms.png',
      title: 'Full property management system',
      description: 'Fully customisable guest journeys, dynamic pricing, task management geared to fit your needs. Create your listings, insert pictures, description, rules and any relevant information.',
      buttonText: 'Discover our PMS'
    },
    {
      img: 'assets/img/service2.png',
      logo_img:'assets/img/ServiceBranding.png',
      title: 'White label branding',
      description: 'Your own branded website fully integrated with a payment engine and channel manager presenting your full portfolio of properties.',
      description_list:["Payment", "Payment","Booking request", "Back office"],
      buttonText: 'Discover our creations'
    },
    {
      img: 'assets/img/service3.png',
      logo_img:'assets/img/ServiceSupport.png',
      title: 'Dedicated Support Team & Expert Advice',
      description: 'A specialised team available to support your journey from the beginning and throughout. Training and collaboration to allow you to work independently and together with the team.',
      description_list:["Technical support","Training", "Professional advices"],
      buttonText: 'Discover our support'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
