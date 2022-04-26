# Implementation Notes for Add Xfer
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`|||
|`XferInfo`|||
|`XferInfo.FromAcctRef`|||
|`XferInfo.FromAcctRef.AcctKeys`||***Required**<br><br>It is mandatory to provide this aggregate along with AcctId and AcctType to get successful response. ESF returns an error if AcctKeys/AcctId or AcctKeys/AcctType is not provided in request. This aggregate contains details of account being debited.|
|`XferInfo.FromAcctRef.AcctKeys.AcctId`|||
|`XferInfo.FromAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferInfo.ToAcctRef`|||
|`XferInfo.ToAcctRef.AcctKeys`||***Required**<br><br>It is mandatory to provide this aggregate along with AcctId and AcctType to get successful response. ESF returns an error if AcctKeys/AcctId or AcctKeys/AcctType is not provided in request. This aggregate contains details of account being credited.|
|`XferInfo.ToAcctRef.AcctKeys.AcctId`|||
|`XferInfo.ToAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>EXT<br>LOAN<br>SDB<br>GLA<br>||
|`XferInfo.ToAcctRef.AcctKeys.AcctIdent`|||
|`XferInfo.ToAcctRef.AcctKeys.AcctIdent.AcctIdentType`|AcctTypeCode||
|`XferInfo.ToAcctRef.AcctKeys.AcctIdent.AcctIdentValue`|None<br>DDA<br>SDA<br>LOAN<br>Vendor<br>Check|***Conditionally Required** <br><br>This field is required when the transfer to account is an external transfer. Value of 'None' indicates no external account is involved in transfer.<br><br>For transfer from a DDA (Demand Deposit) account, the valid external account types are None, DDA, SDA, Vendor and LOAN. <br><br>For transfer from SDA (Savings Account) account, the valid external account types are None, DDA, SDA, Vendor, LOAN, Check.<br><br>For transfer from a CDA account, the valid external account types are EXT, DDA, SDA, Check.|
|`XferInfo.ToAcctRef.AcctKeys.FIIdentType`|RoutingNum||
|`XferInfo.ToAcctRef.AcctKeys.FIIdent`||***Conditionally Required**<br><br>This field is required if account type is external.|
|`XferInfo.ToAcctRef.TrnCode`|||
|`XferInfo.CurAmt`|||
|`XferInfo.CurAmt.Amt`|||
|`XferInfo.CurAmt.CurCode`|||
|`XferInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`XferInfo.CurAmt.CurCode.CurCodeValue`|||
|`XferInfo.RecurModel`|||
|`XferInfo.RecurModel.RecurRule`|||
|`XferInfo.RecurModel.RecurRule.RecurType`|Cycle<br>Monthly<br>TwiceMonthly<br>Quarterly<br>Yearly<br>Weekly<br>Once<br>Maturity||
|`XferInfo.RecurModel.RecurRule.RecurInterval`|||
|`XferInfo.RecurModel.RecurRule.RecurStartDate`|||
|`XferInfo.RecurModel.RecurRule.Occurrences`|||
|`XferInfo.RecurModel.RecurRule.RecurEndDate`|||
|`XferInfo.RelationshipMgr`|||
|`XferInfo.RelationshipMgr.RelationshipMgrIdent`|||
|`XferInfo.RelationshipMgr.RelationshipRole`|Officer<br><br>||
|`XferInfo.ReportGroupCode`|||
|`XferInfo.ExpediteInd`|true<br>false||
|`XferInfo.ExtendedXferData`|||
|`XferInfo.ExtendedXferData.XferAmtCode`|Fixed<br>Variable||
|`XferInfo.ExtendedXferData.ACHEntryClass`|||
|`XferInfo.ExtendedXferData.NoticeData`|||
|`XferInfo.ExtendedXferData.NoticeData.NoticeType`|RegularNotice<br>ACHNotice||
|`XferInfo.ExtendedXferData.NoticeData.NoticeOption`|||
|`XferInfo.ExtendedXferData.ForcePostInd`|true<br>false||
|`XferInfo.ExtendedXferData.FeeIdent`|||
|`XferInfo.XferFromDesc`|||
|`XferInfo.XferToDesc`|||
|`XferInfo.RefData`|||
|`XferInfo.RefData.RefType`|PayeeDesc<br>PayorDesc<br>|***Conditionally Required**<br><br>PayorDesc refers to payor identification. PayorDesc is required when the ‘To Account’ type is external account and external account type is DDA, SDA or LOAN.<br><br>PayeeDesc refers to vendor number. VendorNumber is required when the ‘To Account’ type is Ext (external account) and external account type is vendor (BPM).|
|`XferInfo.RefData.RefIdent`|||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`XferStatusRec`|||
|`XferStatusRec.XferKeys`|||
|`XferStatusRec.XferKeys.XferId`|||
|`XferStatusRec.XferStatus`|||
|`XferStatusRec.XferStatus.EffDt`|||
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
