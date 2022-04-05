# Implementation Notes for Xfer Mod
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
|`OvrdExceptionData`|||
|`XferKeys`||For service provider, Transfer Identifier is the combination of Account Number (of account debited), Account Type and Addenda Number|
|`XferKeys.AcctKeys`|||
|`XferKeys.AcctKeys.AcctId`|||
|`XferKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferKeys.XferIdent`|||
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
|`XferInfo.ToAcctRef.AcctKeys.AcctIdent.AcctIdentValue`|0<br>1<br>2<br>3<br>4<br>9|***Conditionally Required** <br><br>This field is required when the transfer to account is an external transfer. Value of 'None' indicates no external account is involved in transfer.<br><br>For transfer from a DDA (Demand Deposit) account, the valid external account types are None, DDA, SDA, Vendor and LOAN. <br><br>For transfer from SDA (Savings Account) account, the valid external account types are None, DDA, SDA, Vendor, LOAN, Check.<br><br>For transfer from a CDA account, the valid external account types are EXT, DDA, SDA, Check.|
|`XferInfo.ToAcctRef.AcctKeys.FIIdentType`|RoutingNum||
|`XferInfo.ToAcctRef.AcctKeys.FIIdent`||***Conditionally Required**<br><br>This field is required if account type is external.|
|`XferInfo.CurAmt`|||
|`XferInfo.CurAmt.Amt`|||
|`XferInfo.CurAmt.CurCode`|||
|`XferInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`XferInfo.CurAmt.CurCode.CurCodeValue`|||
|`XferInfo.CompositeCurAmt`|||
|`XferInfo.RecurModel`|||
|`XferInfo.RecurModel.RecurRule`|||
|`XferInfo.RecurModel.RecurRule.RecurType`|Cycle<br>Monthly<br>Quarterly<br>Yearly<br>Weekly<br>TwiceMonthly<br>Once <br>InterestCycle<br>Maturity<br><br>||
|`XferInfo.RecurModel.RecurRule.RecurInterval`|||
|`XferInfo.RecurModel.RecurRule.DayOfMonth`||***Conditionally Required**<br><br>This field is required if, transfer frequency is Twice Monthly. Values represent the first day withing a month at which transfer occurs.<br>Valid values are:<br>'1'=1st and 16th of the month<br>'2'=2nd and 17th of the month<br>'3'=3rd and 18th of the month<br>'4'=4th and 19th of the month<br>'5'=5th and 20th of the month<br>'6'=6th and 21th of the month<br>'7'=7th and 22th of the month<br>'8'=8th and 23th of the month<br>'9'=9th and 24th of the month<br>'10'=10th and 25th of the month<br>'11'=11th and 26th of the month<br>'12'=12th and 27th of the month<br>'13'=13th and 28th of the month<br>'14'=14th and 29th of the month<br>'15'=15th and 30th of the month (end of month in 31 das month)|
|`XferInfo.RecurModel.RecurRule.RecurStartDate`|Can not be sent if recurrence type is Cycle||
|`XferInfo.RecurModel.RecurRule.RecurEndDate`|||
|`XferInfo.RelationshipMgr`|||
|`XferInfo.RelationshipMgr.RelationshipMgrIdent`|||
|`XferInfo.RelationshipMgr.RelationshipRole`|Officer||
|`XferInfo.ReportGroupCode`|||
|`XferInfo.ExtendedXferData`|||
|`XferInfo.ExtendedXferData.XferAmtCode`|Fixed<br>Variable<br>IntPlusDistribution<br>BalanceMinusDistribution||
|`XferInfo.ExtendedXferData.ACHEntryClass`|PPD<br>CCD<br>WEB<br>CIE||
|`XferInfo.ExtendedXferData.NoticeData`|||
|`XferInfo.ExtendedXferData.NoticeData.NoticeType`|ACHNotice<br>RegularNotice||
|`XferInfo.ExtendedXferData.NoticeData.NoticeOption`|||
|`XferInfo.ExtendedXferData.ForcePostInd`|true<br>false||
|`XferInfo.ExtendedXferData.FeeIdent`|||
|`XferInfo.ExtendedXferData.PostingPriority`|First<br>Last||
|`XferInfo.RefData`|||
|`XferInfo.RefData.RefType`|PayorDesc<br>XferDesc<br>PayeeDesc<br>TranCode|***Conditionally Required**<br><br>PayorDesc refers to payor identification. PayorDesc is required when the ‘To Account’ type is external account and external account type is DDA, SDA or LOAN.<br><br>PayeeDesc refers to vendor number. VendorNumber is required when the ‘To Account’ type is Ext (external account) and external account type is vendor (BPM).|
|`XferInfo.RefData.RefDesc`|||
|`XferInfo.LastXferDt`|||
|`XferInfo.LastXferAmt`|||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`XferStatusRec`|||
|`XferStatusRec.XferKeys`|||
|`XferStatusRec.XferStatus`|||
|`XferStatusRec.XferStatus.XferStatusCode`|||
|`XferStatusRec.XferStatus.EffDt`|||
|`XferStatusRec.XferKeys.AcctKeys`|||
|`XferStatusRec.XferKeys.AcctKeys.AcctId`|||
|`XferStatusRec.XferKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferStatusRec.XferKeys.XferIdent`|||
<!-- type: tab-end -->
