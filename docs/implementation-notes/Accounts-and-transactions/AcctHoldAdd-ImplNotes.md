# Implementation Notes for AcctHold Add
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field descriptions of below listed fields, please refer the API Explorer section of this API.


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`AcctHoldInfo`|||
|`AcctHoldInfo.AcctRef`|||
|`AcctHoldInfo.AcctRef.AcctKeys`|||
|`AcctHoldInfo.AcctRef.AcctKeys.AcctId`|||
|`AcctHoldInfo.AcctRef.AcctKeys.AcctType`|CDA<br>DDA<br>SDA||
|`AcctHoldInfo.CurAmt`|||
|`AcctHoldInfo.CurAmt.Amt`|||
|`AcctHoldInfo.CurAmt.CurCode`|||
|`AcctHoldInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldInfo.CurAmt.CurCode.CurCodeValue`|USD||
|`AcctHoldInfo.RelationshipMgr`|||
|`AcctHoldInfo.RelationshipMgr.RelationshipMgrIdent`|||
|`AcctHoldInfo.RelationshipMgr.RelationshipRole`|Officer||
|`AcctHoldInfo.ReportGroupCode`|||
|`AcctHoldInfo.SecuredAcctRef`|||
|`AcctHoldInfo.SecuredAcctRef.AcctKeys`|||
|`AcctHoldInfo.SecuredAcctRef.AcctKeys.AcctId`|||
|`AcctHoldInfo.SecuredAcctRef.AcctKeys.AcctType`|LOAN||
|`AcctHoldInfo.MaxPledgeAmt`|||
|`AcctHoldInfo.MaxPledgeAmt.Amt`|||
|`AcctHoldInfo.MaxPledgeAmt.CurCode`|||
|`AcctHoldInfo.MaxPledgeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldInfo.MaxPledgeAmt.CurCode.CurCodeValue`|USD||
|`AcctHoldInfo.HoldReason`|||
|`AcctHoldInfo.ExpDt`|||
|`AcctHoldInfo.EffDt`|||
|`AcctHoldInfo.AcctHoldOption`|FixedAmt<br>AvailBal<br>LedgerBal||
|`AcctHoldInfo.PendingHoldAmt`|||
|`AcctHoldInfo.PendingHoldAmt.Amt`|||
|`AcctHoldInfo.PendingHoldAmt.CurCode`|||
|`AcctHoldInfo.PendingHoldAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldInfo.PendingHoldAmt.CurCode.CurCodeValue`|USD||
|`AcctHoldInfo.PendingHoldDt`|||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|| |
|`AcctHoldStatusRec`|||
|`AcctHoldStatusRec.AcctHoldKeys`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys.AcctId`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys.AcctType`|DDA<br>CDA<br>SDA||
|`AcctHoldStatusRec.AcctHoldKeys.AcctHoldIdent`|||
|`AcctHoldStatusRec.AcctHoldStatus`|||
|`AcctHoldStatusRec.AcctHoldStatus.AcctHoldStatusCode`|Valid||
|`AcctHoldStatusRec.AcctHoldStatus.EffDt`|||
<!-- type: tab-end -->
