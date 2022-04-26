# Implementation Notes for Add StopChk
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
|`StopChkInfo`|||
|`StopChkInfo.AcctKeys`|||
|`StopChkInfo.AcctKeys.AcctId`|||
|`StopChkInfo.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`StopChkInfo.AcctKeys.BranchIdent`||This field refers to the branch region and if not provided in request, the branch region of account (on which stop check is placed) will be used.|
|`StopChkInfo.ChkNum`||Either single or range of check numbers are to be provided in order to create a stop check record. If single check number is provided, inquiry service will return a single check number. Validation of duplicate check numbers is not supported.|
|`StopChkInfo.ChkNumRange`||If range of check numbers is provided, inquiry service will return the range of check numbers.|
|`StopChkInfo.ChkNumRange.ChkNumStart`||From and through number define an item number range to verify the stops placed. If the numbers are left blank, only amounts will be verified.|
|`StopChkInfo.ChkNumRange.ChkNumEnd`||From and through number define an item number range to verify the stops placed. If the numbers are left blank, only amounts will be verified.|
|`StopChkInfo.Name`||This field refers to the payee and maximum 25 characters are allowed else, error will be returned.|
|`StopChkInfo.CurAmt`||Either single or range of check amounts are to be provided in order to create a stop check record. If single check amount is provided, inquiry service will return a single check amount.|
|`StopChkInfo.CurAmt.Amt`||Duplicate check amounts will not be validated.|
|`StopChkInfo.CurAmt.CurCode`|||
|`StopChkInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`StopChkInfo.CurAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`StopChkInfo.CurAmtRange`||Either single or range of check amounts are to be provided in order to create a stop check record. If range of check amounts is provided, inquiry service will return range of check amounts.|
|`StopChkInfo.CurAmtRange.LowCurAmt`|||
|`StopChkInfo.CurAmtRange.LowCurAmt.Amt`||From and through amounts define a dollar range to verify the stop checks. If the amounts are left blank, only check/item numbers will be verified.|
|`StopChkInfo.CurAmtRange.LowCurAmt.CurCode`|||
|`StopChkInfo.CurAmtRange.LowCurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`StopChkInfo.CurAmtRange.LowCurAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`StopChkInfo.CurAmtRange.HighCurAmt`|||
|`StopChkInfo.CurAmtRange.HighCurAmt.Amt`||From and through amounts define a dollar range to verify the stop checks. If the amounts are left blank, only check numbers will be verified.|
|`StopChkInfo.CurAmtRange.HighCurAmt.CurCode`|||
|`StopChkInfo.CurAmtRange.HighCurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`StopChkInfo.CurAmtRange.HighCurAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`StopChkInfo.OrigDt`||***Required**<br>This is a mandatory field and is required to be provided in request else, ESF will use system date.|
|`StopChkInfo.StopChkDt`||If this field is not provided in the request, by default, current date will be used.|
|`StopChkInfo.ExpDt`|||
|`StopChkInfo.Desc`||Maximum 25 characters are accepted else, error will be returned.|
|`StopChkInfo.OtherDesc`||Maximum 60 characters are accepted else, error will be returned.|
|`StopChkInfo.TranFee`||This field can be included in the request and will be applicable even if amount is not included in the client request. ESF allows the Fee Amount (FeeAmt/Amt) and Billing Method (BillingInstruction/BillingMethod) to be configured for the organization (FI) and client application as a parameter. It is required to provide this field if StopCheck is placed on Loan or CDA account type.|
|`StopChkInfo.TranFee.FeeAmt`|||
|`StopChkInfo.TranFee.FeeAmt.Amt`|||
|`StopChkInfo.TranFee.FeeAmt.CurCode`|||
|`StopChkInfo.TranFee.FeeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`StopChkInfo.TranFee.FeeAmt.CurCode.CurCodeValue`|USD||
|`StopChkInfo.TranFee.BillingInstruction`||If billing instruction is not provided, fee will be charged to the stop check account. If billing method is not provided, by default, DirectDebitDDA for DDA account type and DirectDebitSDA for an SDA account type will be applied. If billing method is not provided and configuration for an organziation (FI) and client application exists, then billing method available in ESF will be used. Client application needs to distinguish between retail and business customers for DDA and SDA accounts and send the correct billing method since, there is not distinction available in ESF. If DDA and Analysis Code is > 0, expected PRM FeeMethod = "3".  If DDA and Analysis Code = 0, expected PRM FeeMethod = "1".  If SDA and Analysis Code = 0, expected PRM FeeMethod = "2".|
|`StopChkInfo.TranFee.BillingInstruction.BillingMethod`|None<br>DirectDebitDDA<br>DirectDebitSDA<br>DirectDebitDDAWithAnalysis||
|`StopChkInfo.TranFee.BillingInstruction.FromAcctKeys.AcctId`||AcctType should be provided if AcctId is to be sent in request.|
|`StopChkInfo.TranFee.BillingInstruction.FromAcctKeys.AcctType`|DDA<br>SDA<br>||
|`StopChkInfo.PrintReceiptCode`|||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`StopChkStatusRec`|||
|`StopChkStatusRec.StopChkKeys`|||
|`StopChkStatusRec.StopChkKeys.AcctKeys`|||
|`StopChkStatusRec.StopChkKeys.AcctKeys.AcctId`|||
|`StopChkStatusRec.StopChkKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`StopChkStatusRec.StopChkKeys.StopChkIdent`|||
|`StopChkStatusRec.StopChkStatus`|||
|`StopChkStatusRec.StopChkStatus.StopChkStatusCode`|Valid||
|`StopChkStatusRec.StopChkStatus.EffDt`|||
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
