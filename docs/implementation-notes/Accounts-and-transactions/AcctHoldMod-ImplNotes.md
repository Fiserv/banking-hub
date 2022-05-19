# Implementation Notes for Update AcctHold
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`AcctHoldKeys`|||
|`AcctHoldKeys.AcctKeys`|||
|`AcctHoldKeys.AcctKeys.AcctId`||***Required**|
|`AcctHoldKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`AcctHoldKeys.AcctHoldIdent`||***Required**|
|`AcctHoldInfo`|||
|`AcctHoldInfo.CurAmt`|||
|`AcctHoldInfo.CurAmt.Amt`||Hold amount is not expected by the service provider if the account is pledged as collateral and loan account is specified, system will calculate the hold amount.|
|`AcctHoldInfo.CurAmt.CurCode`|||
|`AcctHoldInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldInfo.CurAmt.CurCode.CurCodeValue`|||
|`AcctHoldInfo.RelationshipMgr`|||
|`AcctHoldInfo.RelationshipMgr.RelationshipMgrIdent`|||
|`AcctHoldInfo.RelationshipMgr.RelationshipRole`|||
|`AcctHoldInfo.ReportGroupCode`|||
|`AcctHoldInfo.SecuredAcctRef`|||
|`AcctHoldInfo.SecuredAcctRef.AcctKeys`|||
|`AcctHoldInfo.SecuredAcctRef.AcctKeys.AcctId`||Account number of the loan account to which the account is pledged.|
|`AcctHoldInfo.SecuredAcctRef.AcctKeys.AcctType`|LOAN||
|`AcctHoldInfo.MaxPledgeAmt`|||
|`AcctHoldInfo.MaxPledgeAmt.Amt`|||
|`AcctHoldInfo.MaxPledgeAmt.CurCode`|||
|`AcctHoldInfo.MaxPledgeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldInfo.MaxPledgeAmt.CurCode.CurCodeValue`|||
|`AcctHoldInfo.HoldReason`|||
|`AcctHoldInfo.ExpDt`|||
|`AcctHoldInfo.EffDt`||Effective Date can be accepted as a current date and Back Date, prior to the expiration date. |
|`AcctHoldInfo.AcctHoldOption`|FixedAmt<br>AvailBal<br>LedgerBal|If specifying a loan or a hold amount then the account hold option is fixed and if the hold amount is not specified and the account is not used as collateral for the loan,then either the available balance or ledger balance of the account is used.<br>AvailBal (available balance) used for the Deposit and Savings Account and not for checking accounts.<br>If invalid values send in the request then it is ignored by the core but the record get updated with the othere values sent.|
|`AcctHoldInfo.PendingHoldAmt`|||
|`AcctHoldInfo.PendingHoldAmt.Amt`|||
|`AcctHoldInfo.PendingHoldAmt.CurCode`|||
|`AcctHoldInfo.PendingHoldAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldInfo.PendingHoldAmt.CurCode.CurCodeValue`|||
|`AcctHoldInfo.PendingHoldDt`||Pending date should be prior to the expiration date. |
|`AcctHoldKeys`|||
|`AcctHoldKeys.AcctKeys`|||
|`AcctHoldKeys.AcctKeys.AcctId`||***Required**|
|`AcctHoldKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`AcctHoldKeys.AcctHoldIdent`||***Required**|
|`AcctHoldInfo`|||
|`AcctHoldInfo.CurAmt`|||
|`AcctHoldInfo.CurAmt.Amt`||Hold amount is not expected by the service provider if the account is pledged as collateral and loan account is specified, system will calculate the hold amount.|
|`AcctHoldInfo.CurAmt.CurCode`|||
|`AcctHoldInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldInfo.CurAmt.CurCode.CurCodeValue`|||
|`AcctHoldInfo.RelationshipMgr`|||
|`AcctHoldInfo.RelationshipMgr.RelationshipMgrIdent`|||
|`AcctHoldInfo.RelationshipMgr.RelationshipRole`|||
|`AcctHoldInfo.ReportGroupCode`|||
|`AcctHoldInfo.SecuredAcctRef`|||
|`AcctHoldInfo.SecuredAcctRef.AcctKeys`|||
|`AcctHoldInfo.SecuredAcctRef.AcctKeys.AcctId`||Account number of the loan account to which the account is pledged.|
|`AcctHoldInfo.SecuredAcctRef.AcctKeys.AcctType`|LOAN||
|`AcctHoldInfo.MaxPledgeAmt`|||
|`AcctHoldInfo.MaxPledgeAmt.Amt`|||
|`AcctHoldInfo.MaxPledgeAmt.CurCode`|||
|`AcctHoldInfo.MaxPledgeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldInfo.MaxPledgeAmt.CurCode.CurCodeValue`|||
|`AcctHoldInfo.HoldReason`|||
|`AcctHoldInfo.ExpDt`|||
|`AcctHoldInfo.EffDt`||Effective Date can be accepted as a current date and Back Date, prior to the expiration date. |
|`AcctHoldInfo.AcctHoldOption`|FixedAmt<br>AvailBal<br>LedgerBal|If specifying a loan or a hold amount then the account hold option is fixed and if the hold amount is not specified and the account is not used as collateral for the loan,then either the available balance or ledger balance of the account is used.<br>AvailBal (available balance) used for the Deposit and Savings Account and not for checking accounts.<br>If invalid values send in the request then it is ignored by the core but the record get updated with the othere values sent.|
|`AcctHoldInfo.PendingHoldAmt`|||
|`AcctHoldInfo.PendingHoldAmt.Amt`|||
|`AcctHoldInfo.PendingHoldAmt.CurCode`|||
|`AcctHoldInfo.PendingHoldAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldInfo.PendingHoldAmt.CurCode.CurCodeValue`|||
|`AcctHoldInfo.PendingHoldDt`||Pending date should be prior to the expiration date. |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`AcctHoldStatusRec`|||
|`AcctHoldStatusRec.AcctHoldKeys`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys.AcctId`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys.AcctType`|DDA<br>CDA<br>SDA||
|`AcctHoldStatusRec.AcctHoldKeys.AcctHoldIdent`|||
|`AcctHoldStatusRec.AcctHoldStatus`|||
|`AcctHoldStatusRec.AcctHoldStatus.AcctHoldStatusCode`|Valid||
|`AcctHoldStatusRec.AcctHoldStatus.EffDt`|||
|`Status`|||
|`AcctHoldStatusRec`|||
|`AcctHoldStatusRec.AcctHoldKeys`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys.AcctId`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys.AcctType`|DDA<br>CDA<br>SDA||
|`AcctHoldStatusRec.AcctHoldKeys.AcctHoldIdent`|||
|`AcctHoldStatusRec.AcctHoldStatus`|||
|`AcctHoldStatusRec.AcctHoldStatus.AcctHoldStatusCode`|Valid||
|`AcctHoldStatusRec.AcctHoldStatus.EffDt`|||
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
