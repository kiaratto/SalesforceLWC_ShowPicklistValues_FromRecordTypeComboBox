import { LightningElement, api } from 'lwc';

 import Opa_FIELD from '@salesforce/schema/MeuTeste__c.Opa__c';
 import Objetos_FIELD from '@salesforce/schema/MeuTeste__c.Objetos__c';
 import getRecordTypeList from '@salesforce/apex/MeuTesteDAO.getRecordTypeList';

export default class LightningEditForm extends LightningElement 
{
    Campo_Opa = Opa_FIELD;
    Campo_Objetos = Objetos_FIELD;
    RecordTypesFromObject;
    RecordTypesSelectedId = '';

    get RecordTypesOptionsList() {
        if(!this.RecordTypesFromObject)
        {
            getRecordTypeList()
                .then(result => 
                {
                    console.log(result);
                    this.RecordTypesFromObject = [];
                    for(var i = 0 ; i < result.length ; i++)
                    {
                        this.RecordTypesFromObject.push( { label : result[i].Name, value : result[i].Id } );
                    } 
                    return this.RecordTypesFromObject;
                })
                .catch(error => 
                {
                    console.log(error);
                    this.error = error;
                });
        }
        else
        {
            return this.RecordTypesFromObject;
        }
    }

    renderedCallback()
    {
      
    }

    onSelectRecordType(event) 
    {
        this.RecordTypesSelectedId = event.detail.value;
    }
}