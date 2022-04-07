# Implementation Note for Debit Inq
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, 
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
|`DebitInfo`|||
|`DebitInfo.DebitType`|Debit||
|`DebitInfo.PostedDt`||Core do not provide posted date for current date processing debits.|
|`DebitInfo.Desc`|| *Required|
|`DebitInfo.AcctRef`|||
|`DebitInfo.AcctRef.AcctKeys`|||
|`DebitInfo.AcctRef.AcctKeys.AcctId`|||
|`DebitInfo.AcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`DebitInfo.CompositeCurAmt`|||
|`DebitInfo.CompositeCurAmt.CurAmt`|||
|`DebitInfo.CompositeCurAmt.CurAmt.Amt`|||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode`|||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeValue`|| |
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`DebitStatusRec`|||
|`DebitStatusRec.DebitKeys`|||
|`DebitStatusRec.DebitKeys.AcctKeys`|||
|`DebitStatusRec.DebitKeys.AcctKeys.AcctId`|||
|`DebitStatusRec.DebitKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN<br>||
|`DebitStatusRec.DebitStatus`|||
|`DebitStatusRec.DebitStatus.DebitStatusCode`|Posted <br>||
|`DebitStatusRec.DebitStatus.EffDt`|||
|`Receipt`|||
|`Receipt.AcctBal`|||
|`Receipt.AcctBal.BalType`|Avail<br>PrevLedger<br>PrevAvail<br>MemoLedger <br>|In the core, the balance types PrevLedger and PrevAvail are the current values on the core at the time of the request while MemoLeger and Avail reflect the new balance after applying the transaction.|
|`Receipt.AcctBal.CurAmt`|||
|`Receipt.AcctBal.CurAmt.Amt`|||
|`Receipt.AcctBal.CurAmt.CurCode`|||
|`Receipt.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`Receipt.AcctBal.CurAmt.CurCode.CurCodeValue`||  |
<!-- type: tab -->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field descriptions of below listed fields, please refer the API Explorer section of this API.


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`|||
|`DebitInfo`||My impl note my impl note|
|`DebitInfo.DebitType`|Debit||
|`DebitInfo.PostedDt`||Core do not provide posted date for current date processing debits.|
|`DebitInfo.Desc`|| *Required|
|`DebitInfo.AcctRef`|||
|`DebitInfo.AcctRef.AcctKeys`|||
|`DebitInfo.AcctRef.AcctKeys.AcctId`|||
|`DebitInfo.AcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN|My impl note my impl note|
|`DebitInfo.CompositeCurAmt`||My impl note my impl note|
|`DebitInfo.CompositeCurAmt.CurAmt`|||
|`DebitInfo.CompositeCurAmt.CurAmt.Amt`|||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode`|||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeValue`|| |
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`DebitStatusRec`|||
|`DebitStatusRec.DebitKeys`|||
|`DebitStatusRec.DebitKeys.AcctKeys`|||
|`DebitStatusRec.DebitKeys.AcctKeys.AcctId`|||
|`DebitStatusRec.DebitKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN<br>||
|`DebitStatusRec.DebitStatus`|||
|`DebitStatusRec.DebitStatus.DebitStatusCode`|Posted <br>||
|`DebitStatusRec.DebitStatus.EffDt`|||
|`Receipt`|||
|`Receipt.AcctBal`|||
|`Receipt.AcctBal.BalType`|Avail<br>PrevLedger<br>PrevAvail<br>MemoLedger <br>|In the core, the balance types PrevLedger and PrevAvail are the current values on the core at the time of the request while MemoLeger and Avail reflect the new balance after applying the transaction.|
|`Receipt.AcctBal.CurAmt`||My impl note my impl note|
|`Receipt.AcctBal.CurAmt.Amt`||My impl note my impl note|
|`Receipt.AcctBal.CurAmt.CurCode`|||
|`Receipt.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`Receipt.AcctBal.CurAmt.CurCode.CurCodeValue`||  |
<!-- type: tab -->
# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`|||
|`DebitInfo`|||
|`DebitInfo.DebitType`|Debit||
|`DebitInfo.PostedDt`||Core do not provide posted date for current date processing debits.|
|`DebitInfo.Desc`|| *Required|
|`DebitInfo.AcctRef`|||
|`DebitInfo.AcctRef.AcctKeys`|||
|`DebitInfo.AcctRef.AcctKeys.AcctId`|||
|`DebitInfo.AcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`DebitInfo.CompositeCurAmt`|||
|`DebitInfo.CompositeCurAmt.CurAmt`|||
|`DebitInfo.CompositeCurAmt.CurAmt.Amt`|||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode`|||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DebitInfo.CompositeCurAmt.CurAmt.CurCode.CurCodeValue`|| |
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`DebitStatusRec`|||
|`DebitStatusRec.DebitKeys`|||
|`DebitStatusRec.DebitKeys.AcctKeys`|||
|`DebitStatusRec.DebitKeys.AcctKeys.AcctId`|||
|`DebitStatusRec.DebitKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN<br>||
|`DebitStatusRec.DebitStatus`|||
|`DebitStatusRec.DebitStatus.DebitStatusCode`|Posted <br>||
|`DebitStatusRec.DebitStatus.EffDt`|||
|`Receipt`|||
|`Receipt.AcctBal`|||
|`Receipt.AcctBal.BalType`|Avail<br>PrevLedger<br>PrevAvail<br>MemoLedger <br>|In the core, the balance types PrevLedger and PrevAvail are the current values on the core at the time of the request while MemoLeger and Avail reflect the new balance after applying the transaction.|
|`Receipt.AcctBal.CurAmt`|||
|`Receipt.AcctBal.CurAmt.Amt`|||
|`Receipt.AcctBal.CurAmt.CurCode`|||
|`Receipt.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`Receipt.AcctBal.CurAmt.CurCode.CurCodeValue`||  |
<!-- type: tab-end -->
