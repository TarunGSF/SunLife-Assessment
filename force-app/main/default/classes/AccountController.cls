public inherited sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccounts(String accName) {
        if(accName==null)
            accName='';        
        string accoutName = '%'+accName+'%';        
        
        List<Account> accounts = [SELECT Id, Name, Phone, Owner.Name, Website,AnnualRevenue  FROM Account where Name like :accoutName and Industry = 'Financial Services'];
        system.debug(accounts);        
        return accounts;
    } 
}
