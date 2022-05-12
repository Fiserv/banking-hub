# Implementation Notes for Get Transfer
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, DNA, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`XferSel`|||
|`XferSel.XferKeys`|||
|`XferSel.XferKeys.AcctKeys`|||
|`XferSel.XferKeys.AcctKeys.AcctId`|||
|`XferSel.XferKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferSel.XferKeys.XferIdent`|||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`XferRec`|||
|`XferRec.XferKeys`|||
|`XferRec.XferKeys.AcctKeys`|||
|`XferRec.XferKeys.AcctKeys.AcctId`|||
|`XferRec.XferKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferRec.XferKeys.XferIdent`|||
|`XferRec.XferInfo`|||
|`XferRec.XferInfo.FromAcctRef`|||
|`XferRec.XferInfo.FromAcctRef.AcctKeys`|||
|`XferRec.XferInfo.FromAcctRef.AcctKeys.AcctId`|||
|`XferRec.XferInfo.FromAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferRec.XferInfo.ToAcctRef`|||
|`XferRec.XferInfo.ToAcctRef.AcctKeys`|||
|`XferRec.XferInfo.ToAcctRef.AcctKeys.AcctId`|||
|`XferRec.XferInfo.ToAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>EXT<br>LOAN<br>SDB<br>GLA||
|`XferRec.XferInfo.ToAcctRef.AcctKeys.AcctIdent`|||
|`XferRec.XferInfo.ToAcctRef.AcctKeys.AcctIdent.AcctIdentType`|AcctTypeCode||
|`XferRec.XferInfo.ToAcctRef.AcctKeys.AcctIdent.AcctIdentValue`||***Conditionally Required**<br><br>This field is required when the transfer to account is an external transfer. <br><br>Value of 'None' indicates no external account is involved in transfer.<br><br>For transfer from a DDA (Demand Deposit) account, the valid external account types are None, DDA, SDA, Vendor and LOAN. <br><br>For transfer from SDA (Savings Account) account, the valid external account types are None, DDA, SDA, Vendor, LOAN, Check.<br><br>For transfer from a CDA account, the valid external account types are EXT, DDA, SDA, Check.|
|`XferRec.XferInfo.ToAcctRef.AcctKeys.FIIdentType`|RoutingNum||
|`XferRec.XferInfo.ToAcctRef.AcctKeys.FIIdent`||***Conditionally Required**<br><br>This field is required if account type is external.|
|`XferRec.XferInfo.CurAmt`|||
|`XferRec.XferInfo.CurAmt.Amt`|||
|`XferRec.XferInfo.CurAmt.CurCode`|||
|`XferRec.XferInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`XferRec.XferInfo.CurAmt.CurCode.CurCodeTypeEnumDesc`|||
|`XferRec.XferInfo.CurAmt.CurCode.CurCodeValue`|||
|`XferRec.XferInfo.RecurModel`|||
|`XferRec.XferInfo.RecurModel.RecurRule`|||
|`XferRec.XferInfo.RecurModel.RecurRule.RecurType`|||
|`XferRec.XferInfo.RecurModel.RecurRule.RecurTypeEnumDesc`|||
|`XferRec.XferInfo.RecurModel.RecurRule.RecurInterval`|||
|`XferRec.XferInfo.RecurModel.RecurRule.DayOfMonth`|||
|`XferRec.XferInfo.RecurModel.RecurRule.RecurStartDate`|||
|`XferRec.XferInfo.RecurModel.RecurRule.RecurEndDate`|||
|`XferRec.XferInfo.RelationshipMgr`|||
|`XferRec.XferInfo.RelationshipMgr.RelationshipMgrIdent`|||
|`XferRec.XferInfo.RelationshipMgr.RelationshipMgrIdentEnumDesc`|||
|`XferRec.XferInfo.RelationshipMgr.RelationshipRole`|Officer||
|`XferRec.XferInfo.RelationshipMgr.RelationshipRoleEnumDesc`|||
|`XferRec.XferInfo.ReportGroupCode`|||
|`XferRec.XferInfo.ExtendedXferData`|||
|`XferRec.XferInfo.ExtendedXferData.ACHEntryClass`|PPD<br>CCD<br>WEB<br>CIE||
|`XferRec.XferInfo.ExtendedXferData.NoticeData`|||
|`XferRec.XferInfo.ExtendedXferData.NoticeData.NoticeType`|RegularNotice<br>ACHNotice|Regular as well as ACH notice type is supported.|
|`XferRec.XferInfo.ExtendedXferData.NoticeData.NoticeTypeEnumDesc`|||
|`XferRec.XferInfo.ExtendedXferData.NoticeData.NoticeOption`|NoNotice<br>GenerateNotice<br>||
|`XferRec.XferInfo.ExtendedXferData.NoticeData.NoticeOptionEnumDesc`|||
|`XferRec.XferInfo.ExtendedXferData.ForcePostInd`|true<br>false||
|`XferRec.XferInfo.ExtendedXferData.FeeIdent`||This tag requires pre-installation tasks to define the values for the field.<br>This field refers to the Transfer Charge Code that identifies one out of 999 transfer fee specifications, to be automatically assessed when the transfer occurs.|
|`XferRec.XferInfo.RefData`|||
|`XferRec.XferInfo.RefData.RefType`|PayeeDesc<br>PayorDesc<br>XferDesc<br>TranCode|XferDesc refers to the transfer description and PayeeDesc refers to the payor identification.|
|`XferRec.XferInfo.RefData.RefTypeEnumDesc`|||
|`XferRec.XferInfo.RefData.RefIdent`||This field refers to the vendor number.|
|`XferRec.XferInfo.RefData.RefDesc`|||
|`XferRec.XferInfo.LastXferAmt.Amt`|||
|`XferRec.XferInfo.RemainingOccurrences`|||
|`XferRec.XferStatus`|||
|`XferRec.XferStatus.XferStatusCode`|||
|`XferRec.XferStatus.EffDt`|||
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
