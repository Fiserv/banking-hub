# Implementation Notes for Get MultiAcct
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
|`MultiAcctSel`||Operation calls AcctInq service for each account that is provided in request to fetch the details of multiple accounts.<br>Performance issues and delayed response can be expected due to large number of server calls and higher data volume returned in response.|
|`MultiAcctSel.AcctKeys`||Multiple instances of MultiAcctSel/AcctKeys aggregate can be sent in the request as AcctInq service operation can be called for multiple accounts.|
|`MultiAcctSel.AcctKeys.AcctId`||This field refers to the account number and can contain alphanumeric characters.|
|`MultiAcctSel.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN<br>CRD<br>SDB|Operation supports inquiry of an account type as configured in ESF for AcctInq service for channel, provider and data application type.|
|`MultiAcctSel.AcctKeys.FIIdentType`|ABA|  |
|`MultiAcctSel.AcctKeys.FIIdent`||  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`MultiAcctRec`|||
|`MultiAcctRec.AcctKeys`|||
|`MultiAcctRec.AcctKeys.AcctId`||This field refers to the account number and can contain alphanumeric characters.|
|`MultiAcctRec.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN<br>SDB<br>CRD|Operation supports inquiry of an account type as configured in ESF for AcctInq service for channel, provider and data application type.|
|`MultiAcctRec.AcctKeys.CardKeys`|||
|`MultiAcctRec.AcctKeys.CardKeys.CardId`|||
|`MultiAcctRec.MultiAcctInfo`|||
|`MultiAcctRec.MultiAcctInfo.ProductIdent`|||
|`MultiAcctRec.MultiAcctInfo.Desc`|||
|`MultiAcctRec.MultiAcctInfo.AcctBal`|||
|`MultiAcctRec.MultiAcctInfo.AcctBal.BalType`|See BalType Tab|Balance type returned in response for an account is dependent on the AcctType (DDA, SDA, CDA LOAN, CRD or SDB).|
|`MultiAcctRec.MultiAcctInfo.AcctBal.CurAmt`|||
|`MultiAcctRec.MultiAcctInfo.AcctBal.CurAmt.Amt`|||
|`MultiAcctRec.MultiAcctInfo.AcctBal.CurAmt.CurCode`|||
|`MultiAcctRec.MultiAcctInfo.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`MultiAcctRec.MultiAcctInfo.AcctBal.CurAmt.CurCode.CurCodeValue`|||
|`MultiAcctRec.MultiAcctInfo.AcctDtlStatus`|DDA/SDA:<br>Active<br>Inactive<br>Dormant<br>ChargedOff<br>ClientControlled<br>Closed<br><br>CDA: Client-Defined values<br><br>LOAN:<br>Active<br>Bankrupcty<br>Foreclosure<br>EarlyCollection<br>Closed<br><br>CRD:<br>Active<br>ActiveNoRenew<br>NoWithdrawal<br>HotCard<br>Closed<br><br>SDB:<br>Active<br>Closed<br>PendingClosed||
|`MultiAcctRec.MultiAcctInfo.AcctDtlStatusEnumDesc`|||
|`MultiAcctRec.AcctStatus`|||
|`MultiAcctRec.AcctStatus.AcctStatusCode`|Valid<br>Invalid||
|`MultiAcctRec.AcctStatus.EffDt`|||
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
