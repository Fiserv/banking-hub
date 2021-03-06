# Implementation Notes for Rev Debit
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
|`DebitKeys`|||
|`DebitKeys.DebitId`|||
|`DebitKeys.AcctKeys`|||
|`DebitKeys.AcctKeys.AcctId`|||
|`DebitKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`DebitInfo`|||
|`DebitInfo.DebitType`|Debit||
|`DebitInfo.CompositeCurAmt`|||
|`DebitInfo.CompositeCurAmt.CurAmt`|||
|`DebitInfo.CompositeCurAmt.CurAmt.Amt`|||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode`|||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeTypeEnumDesc`|||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeValue`||Only USD is supported and expected to be sent in this field.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`DebitStatusRec`|||
|`DebitStatusRec.DebitKeys`|||
|`DebitStatusRec.DebitKeys.DebitId`|||
|`DebitStatusRec.DebitKeys.AcctKeys`|||
|`DebitStatusRec.DebitKeys.AcctKeys.AcctId`|||
|`DebitStatusRec.DebitKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN<br>||
|`DebitStatusRec.DebitStatus`|||
|`DebitStatusRec.DebitStatus.DebitStatusCode`|Reversed||
|`DebitStatusRec.DebitStatus.EffDt`|||
|`Receipt`|||
|`Receipt.AcctBal`|||
|`Receipt.AcctBal.BalType`|Avail<br>PrevLedger<br>PrevAvail<br>MemoLedger <br>|Balance types PrevLedger and PrevAvail are the current values on the core at the time of the request while MemoLeger and Avail reflect the new balance after applying the transaction.<br><br>|
|`Receipt.AcctBal.CurAmt`|||
|`Receipt.AcctBal.CurAmt.Amt`|||
|`Receipt.AcctBal.CurAmt.CurCode`|||
|`Receipt.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`Receipt.AcctBal.CurAmt.CurCode.CurCodeValue`||Only USD is supported and expected to be returned in the response.|
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
