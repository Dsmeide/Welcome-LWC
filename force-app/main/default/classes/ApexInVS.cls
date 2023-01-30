public with sharing class ApexInVS {
    public void determineBananaCapacity(Used_Cars__c[] cars) {
        for (Used_Cars__c car : cars) {
            if (car.Type_c == 'Coupe') {
                        car.Banana_Capacity__c = 4000;
                }
        }
    }
}