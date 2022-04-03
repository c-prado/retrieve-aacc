import { LightningElement, api } from 'lwc';
import STATUS_ROCKET from '@salesforce/schema/Account.Agr_DocumentationStatus__c';
import STATUS_CADASTRO from '@salesforce/schema/Account.Agr_RegisterStatus__c';




export default class RecordViewFormConditional extends LightningElement {

    fields = [STATUS_ROCKET, STATUS_CADASTRO];

    @api recordId;
    @api objectApiName;

}