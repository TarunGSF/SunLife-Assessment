({
    doInit: function (cmp, event, helper) {
        cmp.set('v.mycolumns', [
            {label: 'Account Name', fieldName: 'Name', type: 'text',sortable: true},
            {label: 'Phone', fieldName: 'Phone', type: 'phone'},
            {label: 'Website', fieldName: 'Website', type: 'url', typeAttributes: { target: '_parent'}},
            {label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency', typeAttributes: { currencyCode: 'USD'}},
            {label: 'Owner', fieldName: 'OwnerId', type: 'text'}                
        ]);
        var actionFilter = {"accName":cmp.get("v.accName")};
        helper.getData(cmp, actionFilter);
    },
    doSearch:function(cmp, event, helper){
        var actionFilter = {"accName":cmp.get("v.accName")};
        helper.getData(cmp, actionFilter);
    },
    updateColumnSorting: function (cmp, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        // assign the latest attribute with the sorted column fieldName and sorted direction
        cmp.set("v.sortedBy", fieldName);
        cmp.set("v.sortedDirection", sortDirection);
        helper.sortData(cmp, fieldName, sortDirection);
    },
    handleSaveEdition: function (cmp, event, helper) {
        var draftValues = event.getParam('draftValues');
        
        helper.saveEdition(cmp, draftValues);
    },
})