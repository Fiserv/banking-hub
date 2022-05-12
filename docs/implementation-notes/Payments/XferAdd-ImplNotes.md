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
|`XferInfo.FromAcctRef.AcctKeys`||***Required**<br><br>Mandatory to provide this aggregate along with AcctId and AcctType to get successful response. ESF returns an error if AcctKeys/AcctId or AcctKeys/AcctType is not provided in request. This aggregate contains details of account being debited.|
|`XferInfo.FromAcctRef.AcctKeys.AcctId`|||
|`XferInfo.FromAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferInfo.ToAcctRef`|||
|`XferInfo.ToAcctRef.AcctKeys`||***Required**<br><br>Mandatory to provide this aggregate along with AcctId and AcctType to get successful response. ESF returns an error if AcctKeys/AcctId or AcctKeys/AcctType is not provided in request. This aggregate contains details of account being credited.|
|`XferInfo.ToAcctRef.AcctKeys.AcctId`|||
|`XferInfo.ToAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>EXT<br>LOAN<br>SDB<br>GLA<br>|EXT refers to an External Account.|
|`XferInfo.ToAcctRef.AcctKeys.AcctIdent`||This aggregate is used to capture the additional information related to external transfer.|
|`XferInfo.ToAcctRef.AcctKeys.AcctIdent.AcctIdentType`|AcctTypeCode|This field refers to an external transfer account type.|
|`XferInfo.ToAcctRef.AcctKeys.AcctIdent.AcctIdentValue`|None<br>DDA<br>SDA<br>LOAN<br>Vendor<br>Check|***Conditionally Required** <br><br>This field is required when the transfer to account is an external transfer. Value of 'None' indicates no external account is involved in transfer.<br><br>For transfer from a DDA (Demand Deposit) account, the valid external account types are None, DDA, SDA, Vendor and LOAN. <br><br>For transfer from SDA (Savings Account) account, the valid external account types are None, DDA, SDA, Vendor, LOAN, Check.<br><br>For transfer from a CDA account, the valid external account types are EXT, DDA, SDA, Check.|
|`XferInfo.ToAcctRef.AcctKeys.FIIdentType`|RoutingNum|This field is used for routing numbers.|
|`XferInfo.ToAcctRef.AcctKeys.FIIdent`||***Conditionally Required**<br><br>This field is required if account type is external.|
|`XferInfo.ToAcctRef.TrnCode`||This field is applicable only if the transfer is done to a loan account.|
|`XferInfo.CurAmt`|||
|`XferInfo.CurAmt.Amt`|||
|`XferInfo.CurAmt.CurCode`|||
|`XferInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|Only ISO4217-Alpha type of currency code is supported.|
|`XferInfo.CurAmt.CurCode.CurCodeValue`||Only USD is supported.|
|`XferInfo.RecurModel`|||
|`XferInfo.RecurModel.RecurRule`|||
|`XferInfo.RecurModel.RecurRule.RecurType`|Cycle<br>Monthly<br>TwiceMonthly<br>Quarterly<br>Yearly<br>Weekly<br>Once<br>Maturity|Allowed Values are used in conjunction with RecurInterval to determine the transfer frequency.|
|`XferInfo.RecurModel.RecurRule.RecurInterval`||This field is used in conjunction with RecurType to determine the transfer frequency.  <br><br>Following values can be used for RecurInterval and relevant RecurType:<br><br>RecurInterval is not required if RecurType value is 'once'.<br><br>For RecurType based  on months, use "1" for Monthly , "3" for Quarterly, "2" for BiMonthly or "6" for SemiAnnually intervals.<br><br>For RecurType value based on quarteruse "1" for Quarterly interval.<br><br>For RecurType based on weeks, use "1"  for Weekly or "2" for BiWeekly intervals.<br><br>For Recurrence Type based on years, use value "1"  for Yearly.<br><br>For Recurrence Type values based on twice monthly use "1" for TwiceMonthly.|
|`XferInfo.RecurModel.RecurRule.RecurStartDate`|||
|`XferInfo.RecurModel.RecurRule.Occurrences`||This field can be used as an alternative to RecurEndDate. Consumer application can either send Occurences or XferRecurEndDate in the request of add operation.|
|`XferInfo.RecurModel.RecurRule.RecurEndDate`||This field can be used as an alternative to Occurrences. Consumer application can either send Occurences or XferRecurEndDate in the request of add operation.|
|`XferInfo.RelationshipMgr`|||
|`XferInfo.RelationshipMgr.RelationshipMgrIdent`|||
|`XferInfo.RelationshipMgr.RelationshipRole`|Officer<br><br>|Officer refers to the responsibility code.  |
|`XferInfo.ReportGroupCode`||This tag requires pre-installation tasks to define the values for the field.|
|`XferInfo.ExpediteInd`|true<br>false|Immediate transfers are executed by the TMS services and the recurring transfers are executed by PRM services. This indicator will determine the service used.|
|`XferInfo.ExtendedXferData`|||
|`XferInfo.ExtendedXferData.XferAmtCode`|Fixed<br>Variable||
|`XferInfo.ExtendedXferData.ACHEntryClass`|||
|`XferInfo.ExtendedXferData.NoticeData`|||
|`XferInfo.ExtendedXferData.NoticeData.NoticeType`|RegularNotice<br>ACHNotice|Regular as well as ACH notice type is supported.|
|`XferInfo.ExtendedXferData.NoticeData.NoticeOption`|||
|`XferInfo.ExtendedXferData.ForcePostInd`|true<br>false||
|`XferInfo.ExtendedXferData.FeeIdent`||This tag requires pre-installation tasks to define the values for the field.<br>This field refers to the transfer charge code that identifies one out of 999 transfer fee specifications, to be automatically assessed when the transfer occurs.|
|`XferInfo.XferFromDesc`||This value should be identical to the value sent in XferToDesc field. |
|`XferInfo.XferToDesc`||This value should be identical to the value sent in XferFromDesc field. |
|`XferInfo.RefData`|||
|`XferInfo.RefData.RefType`|PayeeDesc<br>PayorDesc<br>|***Conditionally Required**<br><br>PayorDesc refers to payor identification. PayorDesc is required when the ‘To Account’ type is external account and external account type is DDA, SDA or LOAN.<br><br>PayeeDesc refers to vendor number. VendorNumber is required when the ‘To Account’ type is Ext (external account) and external account type is vendor (BPM).|
|`XferInfo.RefData.RefIdent`|||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`XferStatusRec`|||
|`XferStatusRec.XferKeys`|||
|`XferStatusRec.XferKeys.XferId`||This field refers to the addenda number.|
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
