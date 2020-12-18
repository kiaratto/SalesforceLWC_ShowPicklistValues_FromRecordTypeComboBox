public with sharing class MeuTesteDAO {
    @AuraEnabled(cacheable=true)
    public static List<RecordType> getRecordTypeList() {
        return 
        [
            Select 
                id,
                Name,
                DeveloperName 
            From 
                RecordType 
            Where 
                IsActive = true and 
                SobjectType = 'MeuTeste__c' 
        ]  ;
    }
}
