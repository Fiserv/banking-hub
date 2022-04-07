# Implementation Notes for AcctHold Inq
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
|`AcctHoldSel`|||
|`AcctHoldSel.AcctHoldKeys`|||
|`AcctHoldSel.AcctHoldKeys.AcctKeys`|||
|`AcctHoldSel.AcctHoldKeys.AcctKeys.AcctId`|||
|`AcctHoldSel.AcctHoldKeys.AcctKeys.AcctType`|CDA<br>DDA<br>SDA||
|`AcctHoldSel.AcctHoldKeys.AcctHoldIdent`|||
|`AcctHoldSel.AcctKeys`|||
|`AcctHoldSel.AcctKeys.AcctId`|||
|`AcctHoldSel.AcctKeys.AcctType`|CDA<br>DDA<br>SDA||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|| |
|`RecCtrlOut`|||
|`RecCtrlOut.SentRecCount`|||
|`AcctHoldRec`|||
|`AcctHoldRec.AcctHoldKeys`|||
|`AcctHoldRec.AcctHoldKeys.AcctKeys`|||
|`AcctHoldRec.AcctHoldKeys.AcctKeys.AcctId`|||
|`AcctHoldRec.AcctHoldKeys.AcctKeys.AcctType`|CDA<br>DDA<br>SDA||
|`AcctHoldRec.AcctHoldKeys.AcctHoldIdent`|||
|`AcctHoldRec.AcctHoldInfo`|||
|`AcctHoldRec.AcctHoldInfo.CurAmt`|||
|`AcctHoldRec.AcctHoldInfo.CurAmt.Amt`|||
|`AcctHoldRec.AcctHoldInfo.CurAmt.CurCode`|||
|`AcctHoldRec.AcctHoldInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldRec.AcctHoldInfo.CurAmt.CurCode.CurCodeValue`|||
|`AcctHoldRec.AcctHoldInfo.RelationshipMgr`|||
|`AcctHoldRec.AcctHoldInfo.RelationshipMgr.RelationshipMgrIdent`|||
|`AcctHoldRec.AcctHoldInfo.RelationshipMgr.RelationshipRole`|Officer||
|`AcctHoldRec.AcctHoldInfo.ReportGroupCode`|||
|`AcctHoldRec.AcctHoldInfo.SecuredAcctRef`|||
|`AcctHoldRec.AcctHoldInfo.SecuredAcctRef.AcctKeys`|||
|`AcctHoldRec.AcctHoldInfo.SecuredAcctRef.AcctKeys.AcctId`|||
|`AcctHoldRec.AcctHoldInfo.SecuredAcctRef.AcctKeys.AcctType`|LOAN||
|`AcctHoldRec.AcctHoldInfo.MaxPledgeAmt`|||
|`AcctHoldRec.AcctHoldInfo.MaxPledgeAmt.Amt`|||
|`AcctHoldRec.AcctHoldInfo.MaxPledgeAmt.CurCode`|||
|`AcctHoldRec.AcctHoldInfo.MaxPledgeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldRec.AcctHoldInfo.MaxPledgeAmt.CurCode.CurCodeValue`|||
|`AcctHoldRec.AcctHoldInfo.HoldReason`|||
|`AcctHoldRec.AcctHoldInfo.ExpDt`|||
|`AcctHoldRec.AcctHoldInfo.EffDt`|||
|`AcctHoldRec.AcctHoldInfo.AcctHoldOption`|FixedAmt<br>AvailBal<br>LedgerBal||
|`AcctHoldRec.AcctHoldInfo.AcctHoldIdent`|||
|`AcctHoldRec.AcctHoldInfo.PendingHoldAmt`|||
|`AcctHoldRec.AcctHoldInfo.PendingHoldAmt.Amt`|||
|`AcctHoldRec.AcctHoldInfo.PendingHoldAmt.CurCode`|||
|`AcctHoldRec.AcctHoldInfo.PendingHoldAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctHoldRec.AcctHoldInfo.PendingHoldAmt.CurCode.CurCodeValue`|||
|`AcctHoldRec.AcctHoldInfo.PendingHoldDt`|||
|`AcctHoldRec.AcctHoldStatus`|||
|`AcctHoldRec.AcctHoldStatus.AcctHoldStatusCode`|Valid||
|`AcctHoldRec.AcctHoldStatus.EffDt`|||
<!-- type: tab-end -->
