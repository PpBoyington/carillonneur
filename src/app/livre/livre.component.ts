import { Component, OnInit } from '@angular/core';

declare let paypal: any;

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
})
export class LivreComponent implements OnInit {
  title = 'app';
  addScript = false;
  finalAmount = 1;
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'demo_sandbox_client_id'
    },
    commit: true,
    payment: function (data, actions) {
      return actions.payment.create({
        transactions: [{
          amount: {
            total: '0.01',
            currency: 'USD'
          }
        }]
      });
    },
    onAuthorize: function (data, actions) {
      return actions.payment.execute()
        .then(function () {
          window.alert('Thank you for your purchase!');
        });
    }
  };

  constructor() { }

  ngOnInit() {
    paypal.Button.render(this.paypalConfig, '#paypal-button');
  }

}
