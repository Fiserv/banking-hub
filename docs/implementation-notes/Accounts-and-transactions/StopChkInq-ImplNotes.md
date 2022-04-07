# Implementation Notes for StopChk Inq
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Notes
> 
> - To view the descriptions of fields listed in the below tables, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`StopChkSel`|||
|`StopChkSel.StopChkKeys`||This field is used to search for a specific stop check record.|
|`StopChkSel.StopChkKeys.AcctKeys`|||
|`StopChkSel.StopChkKeys.AcctKeys.AcctId`|||
|`StopChkSel.StopChkKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`StopChkSel.StopChkKeys.StopChkIdent`||This field refers to stop addenda number.|
|`StopChkSel.AcctKeys`|||
|`StopChkSel.AcctKeys.AcctId`|||
|`StopChkSel.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`RecCtrlOut`|||
|`RecCtrlOut.SentRecCount`||Total number of records returned will be the number of stop checks present for an account.|
|`StopChkRec`|||
|`StopChkRec.StopChkKeys`|||
|`StopChkRec.StopChkKeys.AcctKeys`|||
|`StopChkRec.StopChkKeys.AcctKeys.AcctId`|||
|`StopChkRec.StopChkKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`StopChkRec.StopChkKeys.StopChkIdent`|||
|`StopChkRec.StopChkInfo`|||
|`StopChkRec.StopChkInfo.AcctKeys`|||
|`StopChkRec.StopChkInfo.AcctKeys.AcctId`|||
|`StopChkRec.StopChkInfo.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`StopChkRec.StopChkInfo.ChkNum`||Either single or range of check numbers will be provided in the response. Value of '0' will be provided in response if a single or range of check numbers is set.|
|`StopChkRec.StopChkInfo.ChkNumRange`||Either single or range of check numbers will be provided in the response.|
|`StopChkRec.StopChkInfo.ChkNumRange.ChkNumStart`||From and through number define an item number range to verify the stops placed. If the numbers are left blank, only amounts will be verified.|
|`StopChkRec.StopChkInfo.ChkNumRange.ChkNumEnd`|||
|`StopChkRec.StopChkInfo.Name`||This field refers to the payee.|
|`StopChkRec.StopChkInfo.CurAmt`|||
|`StopChkRec.StopChkInfo.CurAmt.Amt`||Either single or range of check amounts will be provided in the response. Value of '0' amount will be provided if amount is not set.|
|`StopChkRec.StopChkInfo.CurAmt.CurCode`|||
|`StopChkRec.StopChkInfo.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`StopChkRec.StopChkInfo.CurAmt.CurCode.CurCodeValue`|USD||
|`StopChkRec.StopChkInfo.CurAmtRange`||Either single or range of amounts will be provided in the response.|
|`StopChkRec.StopChkInfo.CurAmtRange.LowCurAmt`|||
|`StopChkRec.StopChkInfo.CurAmtRange.LowCurAmt.Amt`||From and through amount define a dollar range for verifying stop item.|
|`StopChkRec.StopChkInfo.CurAmtRange.LowCurAmt.CurCode`|||
|`StopChkRec.StopChkInfo.CurAmtRange.LowCurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`StopChkRec.StopChkInfo.CurAmtRange.LowCurAmt.CurCode.CurCodeValue`|USD||
|`StopChkRec.StopChkInfo.CurAmtRange.HighCurAmt`|||
|`StopChkRec.StopChkInfo.CurAmtRange.HighCurAmt.Amt`|||
|`StopChkRec.StopChkInfo.CurAmtRange.HighCurAmt.CurCode`|||
|`StopChkRec.StopChkInfo.CurAmtRange.HighCurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`StopChkRec.StopChkInfo.CurAmtRange.HighCurAmt.CurCode.CurCodeValue`|USD||
|`StopChkRec.StopChkInfo.OrigDt`|||
|`StopChkRec.StopChkInfo.StopChkDt`||This field refers to the stop pay date and can be manually entered or is defined by the system.|
|`StopChkRec.StopChkInfo.ExpDt`|||
|`StopChkRec.StopChkInfo.Desc`|||
|`StopChkRec.StopChkInfo.OtherDesc`||This field refers to client-defined comment line and is used for additional information regarding stop item.|
|`StopChkRec.StopChkInfo.TranFee.FeeAmt`|||
|`StopChkRec.StopChkInfo.TranFee.FeeAmt.Amt`|||
|`StopChkRec.StopChkInfo.TranFee.FeeAmt.CurCode`|||
|`StopChkRec.StopChkInfo.TranFee.FeeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`StopChkRec.StopChkInfo.TranFee.FeeAmt.CurCode.CurCodeValue`|USD||
|`StopChkRec.StopChkInfo.TranFee.BillingInstruction`|||
|`StopChkRec.StopChkInfo.TranFee.BillingInstruction.BillingMethod`|None<br>DirectDebitDDA<br>DirectDebitSDA<br>DirectDebitDDAWithAnalysis||
|`StopChkRec.StopChkInfo.TranFee.BillingInstruction.FromAcctKeys`|||
|`StopChkRec.StopChkInfo.TranFee.BillingInstruction.FromAcctKeys.AcctId`|||
|`StopChkRec.StopChkInfo.TranFee.BillingInstruction.FromAcctKeys.AcctType`|DDA<br>SDA<br>||
|`StopChkRec.StopChkInfo.PrintReceiptCode`||This code indicates whether a receipt (notice) of a new stop request is produced.|
|`StopChkRec.StopChkStatus`|||
|`StopChkRec.StopChkStatus.StopChkStatusCode`|Valid||
|`StopChkRec.StopChkStatus.EffDt`|||
<!-- type: tab-end -->
