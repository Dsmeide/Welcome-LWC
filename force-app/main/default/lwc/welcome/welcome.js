

import { LightningElement } from "lwc";

export default class Welcome extends LightningElement {
  greeting = 'Welcome';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}











// import { LightningElement } from 'lwc';

// export default class HelloWorld extends LightningElement {
//   greeting = 'World';
//   changeHandler(event) {
//     this.greeting = event.target.value;
//   }
// }