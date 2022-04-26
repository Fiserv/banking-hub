# Implementation Notes for Add Credit
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Signature, Cleartouch, 
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
|`CreditInfo`|||
|`CreditInfo.CreditType`|Credit||
|`CreditInfo.PostedDt`||Refers to expiration date in the core.<br>For current processing credits, PostedDt is not required to be provided.|
|`CreditInfo.Desc`||***Required**|
|`CreditInfo.AcctRef`|||
|`CreditInfo.AcctRef.AcctKeys`|||
|`CreditInfo.AcctRef.AcctKeys.AcctId`|||
|`CreditInfo.AcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`CreditInfo.CompositeCurAmt`|||
|`CreditInfo.CompositeCurAmt.CurAmt`|||
|`CreditInfo.CompositeCurAmt.CurAmt.Amt`||Refers to the total deposit amount. Total of Cash In and Check In should equal to this amount. <br>If multiple checks are deposited, the total of the ChecksIn and CashIn should equal to the CurAmt/Amt.|
|`CreditInfo.CompositeCurAmt.CurAmt.CurCode`|||
|`CreditInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`CreditInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeValue`||Only USD is accepted as a currency code value.|
|`CreditInfo.CashInData`|||
|`CreditInfo.CashInData.CashAmt`|||
|`CreditInfo.CashInData.CashAmt.Amt`||CashIn is not supported by the core for CDA and LOAN acount types.   <br>The total of CashIn and CheckIn for account types CDA and LOAN is expected to be sent in CompositeCurAmt/CurAmt/Amt.|
|`CreditInfo.CashInData.CashAmt.CurCode`|||
|`CreditInfo.CashInData.CashAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`CreditInfo.CashInData.CashAmt.CurCode.CurCodeValue`||Only USD is accepted as a currency code value.|
|`CreditInfo.ChkInData`||Applicable for DDA and CDA account types.<br>The total of Cash In and Check In for account types CDA and LOAN is expected to be sent in CompositeCurAmt/CurAmt/Amt.|
|`CreditInfo.ChkInData.ChkType`|Local <br>NonLocal<br>NoFloat|ChkType is used to determine the availability of funds. <br>NoFloat: indicates immediate availability of funds <br>NonLocal & Local: indicates funds are not available for immediate withdrawls.|
|`CreditInfo.ChkInData.FloatData`|||
|`CreditInfo.ChkInData.FloatData.FloatDetails`|||
|`CreditInfo.ChkInData.FloatData.FloatDetails.CheckFloatAmt`|||
|`CreditInfo.ChkInData.FloatData.FloatDetails.CheckFloatAmt.Amt`||Along with CheckType, this field reflects the amount available for immediate withdrawal.|
|`CreditInfo.ChkInData.FloatData.FloatDetails.CheckFloatAmt.CurCode`|||
|`CreditInfo.ChkInData.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`CreditInfo.ChkInData.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeValue`||Only USD is accepted as a currency code value.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`CreditStatusRec`|||
|`CreditStatusRec.CreditKeys.AcctKeys`|||
|`CreditStatusRec.CreditKeys.AcctKeys.AcctId`|||
|`CreditStatusRec.CreditKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`CreditStatusRec.CreditStatus`|||
|`CreditStatusRec.CreditStatus.CreditStatusCode`|Posted||
|`CreditStatusRec.CreditStatus.EffDt`|||
|`Receipt`|||
|`Receipt.AcctBal`|||
|`Receipt.AcctBal.BalType`|Avail<br>PrevLedger<br>PrevAvail<br>MemoLedger|The balance types PrevLedger and PrevAvail are the current values on the core at the time of the request was went to the core.<br>MemoLeger and Avail reflect the new balance after applying the transaction.|
|`Receipt.AcctBal.CurAmt`|||
|`Receipt.AcctBal.CurAmt.Amt`|||
|`Receipt.AcctBal.CurAmt.CurCode`|||
|`Receipt.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`Receipt.AcctBal.CurAmt.CurCode.CurCodeValue`||Only USD is accepted as a currency code value.|
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
