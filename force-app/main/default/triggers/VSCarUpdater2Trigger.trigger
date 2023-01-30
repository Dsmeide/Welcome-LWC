trigger VSCarUpdater2Trigger on Used_Cars__c (before insert) {
  Used_Cars__c car = Trigger.new;
    
    CarUpdater2InVS.determineBananaCapacity(car);
}