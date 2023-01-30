// myComponent.js

import { LightningElement, api } from "lwc";
export default class CarComponent extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = ['Mileage__c','Website', 'Fax', 'Name', 'Title', 'Phone', 'Email', 'Type__c'];
}



// import { LightningElement, api } from 'lwc';
// export default class MyComponent extends LightningElement {
//     @api recordId;
//     @api objectApiName;
//     fields = ['AccountId', 'Name', 'Title', 'Phone', 'Email'];
// }