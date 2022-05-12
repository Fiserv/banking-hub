# Implementation Notes for Update Transfer
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
|`OvrdExceptionData`|||
|`XferKeys`||For service provider, Transfer Identifier is the combination of Account Number (of account debited), Account Type and Addenda Number|
|`XferKeys.AcctKeys`|||
|`XferKeys.AcctKeys.AcctId`|||
|`XferKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferKeys.XferIdent`||This field refers to the addenda number.|
|`XferInfo`|||
|`XferInfo.FromAcctRef`|||
|`XferInfo.FromAcctRef.AcctKeys`|||
|`XferInfo.FromAcctRef.AcctKeys.AcctId`||Account Number (of debited account) is part of Transfer Identifier and cannot be updated. If a different Account Number is to be used for transfer, then a new request for transfer is required to create with the desired Account Number.|
|`XferInfo.FromAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>CDA|Account Type (of debited account) is part of Transfer Identifier and cannot be updated. If a different Account Type is to be used for transfer, then a new request for transfer is required to create with the desired Account Type.|
|`XferInfo.ToAcctRef`|||
|`XferInfo.ToAcctRef.AcctKeys`|||
|`XferInfo.ToAcctRef.AcctKeys.AcctId`|||
|`XferInfo.ToAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>EXT<br>LOAN<br>SDB<br>GLA<br>|EXT refers to an external account.|
|`XferInfo.ToAcctRef.AcctKeys.AcctIdent`|||
|`XferInfo.ToAcctRef.AcctKeys.AcctIdent.AcctIdentType`|AcctTypeCode||
|`XferInfo.ToAcctRef.AcctKeys.AcctIdent.AcctIdentValue`|0<br>1<br>2<br>3<br>4<br>9|***Conditionally Required**<br><br>This field is required if, credit to account type is external. <br>Valid values for DDA are:<br>0 = None<br>1 = Demand Deposit<br>2 = Savings<br>3 = Vendor (BPM)<br>4 = Loan<br>Valid values for SDA are:<br>0 = None<br>1 = Demand Deposit<br>2 = Savings<br>3 = Vendor (BPM)<br>4 = Loan<br>9 =Check<br>Valid values for CDA are:<br>0 = None<br>1 = Demand Deposit<br>2 = Savings<br>9 =Check|
|`XferInfo.ToAcctRef.AcctKeys.FIIdentType`|RoutingNum|This field is used for routing numbers.|
|`XferInfo.ToAcctRef.AcctKeys.FIIdent`||***Conditionally Required**<br><br>This is a mandatory field if, account type is external.|
|`XferInfo.CurAmt`|||
|`XferInfo.CurAmt.Amt`|||
|`XferInfo.CurAmt.CurCode`|||
|`XferInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`XferInfo.CurAmt.CurCode.CurCodeValue`||Only USD is supported.|
|`XferInfo.CompositeCurAmt`|||
|`XferInfo.RecurModel`|||
|`XferInfo.RecurModel.RecurRule`|||
|`XferInfo.RecurModel.RecurRule.RecurType`|Cycle<br>Monthly<br>Quarterly<br>Yearly<br>Weekly<br>TwiceMonthly<br>Once <br>InterestCycle<br>Maturity<br><br>||
|`XferInfo.RecurModel.RecurRule.RecurInterval`||<br>Following values can be used for RecurInterval and relevant RecurType:<br><br>RecurInterval is not required if RecurType value is 'once'.<br>For RecuwrType based on cycle, use values between 001-999 to express cycle number.<br><br>For RecurType based  on months, use "1" for Monthly , "3" for Quarterly, "2" for BiMonthly or "6" for SemiAnnually intervals.<br><br>For RecurType based on quarter, use "1" for Quarterly interval.<br><br>For RecurType based on weeks, use "1"  for Weekly or "2" for BiWeekly intervals.<br><br>For Recurrence Type based on years, use value "1"  for Yearly.|
|`XferInfo.RecurModel.RecurRule.DayOfMonth`||***Conditionally Required**<br><br>This field is required if, transfer frequency is Twice Monthly. Values represent the first day withing a month at which transfer occurs.<br>Valid values are:<br>'1'=1st and 16th of the month<br>'2'=2nd and 17th of the month<br>'3'=3rd and 18th of the month<br>'4'=4th and 19th of the month<br>'5'=5th and 20th of the month<br>'6'=6th and 21th of the month<br>'7'=7th and 22th of the month<br>'8'=8th and 23th of the month<br>'9'=9th and 24th of the month<br>'10'=10th and 25th of the month<br>'11'=11th and 26th of the month<br>'12'=12th and 27th of the month<br>'13'=13th and 28th of the month<br>'14'=14th and 29th of the month<br>'15'=15th and 30th of the month (end of month in 31 das month)|
|`XferInfo.RecurModel.RecurRule.RecurStartDate`|Can not be sent if recurrence type is Cycle|This field refers to the next transfer date.<br>Service provider either supports Cycle or RecurStartDate for modifying a transfer, and both cannot be sent in the request.|
|`XferInfo.RecurModel.RecurRule.RecurEndDate`||This field can be used instead of Occurences.|
|`XferInfo.RelationshipMgr`|||
|`XferInfo.RelationshipMgr.RelationshipMgrIdent`||This field refers to client-defined responsibility code to identify the officer responsible for an account. Values that can be provided are, 000-999.|
|`XferInfo.RelationshipMgr.RelationshipRole`|Officer||
|`XferInfo.ReportGroupCode`||This field refers to client-defined miscellaneous code used to group the portfolios primarily as selection criteria for reporting. Values that can be provided are, 000-999.|
|`XferInfo.ExtendedXferData`|||
|`XferInfo.ExtendedXferData.XferAmtCode`|Fixed<br>Variable<br>IntPlusDistribution<br>BalanceMinusDistribution||
|`XferInfo.ExtendedXferData.ACHEntryClass`|PPD<br>CCD<br>WEB<br>CIE||
|`XferInfo.ExtendedXferData.NoticeData`|||
|`XferInfo.ExtendedXferData.NoticeData.NoticeType`|ACHNotice<br>RegularNotice||
|`XferInfo.ExtendedXferData.NoticeData.NoticeOption`|||
|`XferInfo.ExtendedXferData.ForcePostInd`|true<br>false||
|`XferInfo.ExtendedXferData.FeeIdent`||This field refers to transfer charge code to identify one out of 999 transfer fee codes from DDA fee specifications.|
|`XferInfo.ExtendedXferData.PostingPriority`|First<br>Last|This field refers to priority code and indicates the posting sequence of a recurring transfer in relation to other (check) transactions.|
|`XferInfo.RefData`|||
|`XferInfo.RefData.RefType`|PayorDesc<br>XferDesc<br>PayeeDesc<br>TranCode|XferDesc refer to the description of transfer. Description is printed on reports, statement inquiries and customer notification.<br>PayorDesc refers to Payor identification.<br><br>PayeeDesc refers to vendor number. VendorNumber is required when the ‘To Account’ type is Ext (External account) and External account type is Vendor (BPM).|
|`XferInfo.RefData.RefDesc`|||
|`XferInfo.LastXferDt`|||
|`XferInfo.LastXferAmt`|||
#### Response Schema
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
|`XferStatusRec.XferKeys.XferIdent`||This field refers to the addenda number.|
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
