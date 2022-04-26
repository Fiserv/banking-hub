# Implementation Notes for Get-CDA AcctTrn
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, , , , , Precision, Signature, Cleartouch, DNA, 
-->

<!-- 
type: tab 
titles: CDA, DDA, SDA, SDB, LOAN
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`||  |
|`RecCtrlIn.Cursor`||This field is not to be provided in initial request of transaction history. If more than 250 transactions exist on an account, next cursor value will be provided in the response to indicate that more transactions are to be returned. Cursor value returned in RecCtrlOut/Cursor field should be passed in the subsequent request within RecCtrlIn/Cursor field to retrieve the next set of posted transactions. This field is not applicable for memo post transactions.|
|`AcctTrnSel`||  |
|`AcctTrnSel.AcctKeys`||  |
|`AcctTrnSel.AcctKeys.AcctId`||  |
|`AcctTrnSel.AcctKeys.AcctType`|CDA|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||This field contains total number of posted transactions with completed nightly processing + number of memo posted transactions.|
|`RecCtrlOut.Cursor`||  |
|`AcctTrnRec`||  |
|`AcctTrnRec.AcctTrnKeys`||  |
|`AcctTrnRec.AcctTrnKeys.AcctKeys`||
|`AcctTrnRec.AcctTrnKeys.AcctKeys.AcctId`||
|`AcctTrnRec.AcctTrnKeys.AcctKeys.AcctType`|CDA|
|`AcctTrnRec.AcctTrnKeys.AcctTrnIdent`||This field refers to record key for memo posted transactions. Unique transaction identifier is not provided for posted transactions. Transaction  posting date and occurrence will be returned as transaction identifier.|
|`AcctTrnRec.AcctTrnInfo`||  |
|`AcctTrnRec.AcctTrnInfo.TrnCode`||  |
|`AcctTrnRec.AcctTrnInfo.DrCrType`|Debit<br>Credit|  |
|`AcctTrnRec.AcctTrnInfo.TrnRevType`|Reversal<br>MatchedTransaction|  |
|`AcctTrnRec.AcctTrnInfo.MemoPostInd`|true<br>false|  |
|`AcctTrnRec.AcctTrnInfo.PostedDt`||  |
|`AcctTrnRec.AcctTrnInfo.EffDt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnDt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnType`|YTDContribution<br>PriorYrContribution<br>YTDContributionEmployer<br>PriorYrContributionEmployer<br>Rollover<br>RefundedDisabilityDistribution<br>RefundedDeathDistribution<br>RefundedQualifiedDistribution<br>RefundedExcessYTDContribution<br>RefundedExcessPriorYrContribution<br>RefundedEarningExcessYTDContribution<br>RefundedEarningExcessPriorYrContribution<br>RefundedProhibitedHSA<br>RefundedDeathNonSpouseDistribution<br>DisabilityDistribution<br>DeathDistribution<br>QualifiedDistribution<br>ExcessYTDContribution<br>ExcessPriorYrContribution<br>EarningExcessYTDContribution<br>EarningExcessPriorYrContribution<br>ProhibitedHSA<br>DeathNonSpouseDistribution<br>RefundedYTDContribution<br>RefundedPriorYrContribution<br>RefundedYTDContributionEmployer<br>RefundedPriorYrContributionEmployer<br>RefundedRollover<br>NonReportable|This field is not applicable for memo posted transactions.|
|`AcctTrnRec.AcctTrnInfo.TrnAmt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.Amt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode.CurCodeValue`|USD|  |
|`AcctTrnRec.AcctTrnInfo.Desc`||Bank can define custom description for transaction codes. API version should be configured to match the core version and display the transaction descriptions correctly.|
|`AcctTrnRec.AcctTrnInfo.ChkNum`||  |
|`AcctTrnRec.AcctTrnInfo.ExternalTrnCode`||  |
|`AcctTrnRec.AcctTrnInfo.ImageInd`||  |
|`AcctTrnRec.AcctTrnInfo.TrnImageId`||  |
|`AcctTrnRec.AcctTrnStatus`||  |
|`AcctTrnRec.AcctTrnStatus.AcctTrnStatusCode`|Valid|  |
|`AcctTrnRec.AcctTrnStatus.EffDt`||  |
<!-- type: tab -->

The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`||  |
|`RecCtrlIn.Cursor`||This field is not to be provided in initial request of transaction history. If more than 250 transactions exist on an account, next cursor value will be provided in the response to indicate that more transactions are to be returned. Cursor value returned in RecCtrlOut/Cursor field should be passed in the subsequent request within RecCtrlIn/Cursor field to retrieve the next set of posted transactions. This field is not applicable for memo post transactions.|
|`AcctTrnSel`||  |
|`AcctTrnSel.AcctKeys`||  |
|`AcctTrnSel.AcctKeys.AcctId`||  |
|`AcctTrnSel.AcctKeys.AcctType`|DDA|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut.SentRecCount`||This field contains total number of posted transactions with completed nightly processing + number of memo posted transactions.|
|`RecCtrlOut.Cursor`||  |
|`AcctTrnRec`||  |
|`AcctTrnRec.AcctTrnKeys`||  |
|`AcctTrnRec.AcctTrnKeys.AcctKeys`||
|`AcctTrnRec.AcctTrnKeys.AcctKeys.AcctId`||
|`AcctTrnRec.AcctTrnKeys.AcctKeys.AcctType`|DDA|
|`AcctTrnRec.AcctTrnKeys.AcctTrnIdent`||This field refers to record key for memo posted transactions. Unique transaction identifier is not provided for posted transactions. Transaction  posting date and occurrence will be returned as transaction identifier.|
|`AcctTrnRec.AcctTrnInfo`||  |
|`AcctTrnRec.AcctTrnInfo.TrnCode`||  |
|`AcctTrnRec.AcctTrnInfo.DrCrType`|Debit<br>Credit|  |
|`AcctTrnRec.AcctTrnInfo.TrnRevType`|Reversal<br>MatchedTransaction|  |
|`AcctTrnRec.AcctTrnInfo.MemoPostInd`|true<br>false|  |
|`AcctTrnRec.AcctTrnInfo.PostedDt`||  |
|`AcctTrnRec.AcctTrnInfo.EffDt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnDt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnType`|YTDContribution<br>PriorYrContribution<br>YTDContributionEmployer<br>PriorYrContributionEmployer<br>Rollover<br>RefundedDisabilityDistribution<br>RefundedDeathDistribution<br>RefundedQualifiedDistribution<br>RefundedExcessYTDContribution<br>RefundedExcessPriorYrContribution<br>RefundedEarningExcessYTDContribution<br>RefundedEarningExcessPriorYrContribution<br>RefundedProhibitedHSA<br>RefundedDeathNonSpouseDistribution<br>DisabilityDistribution<br>DeathDistribution<br>QualifiedDistribution<br>ExcessYTDContribution<br>ExcessPriorYrContribution<br>EarningExcessYTDContribution<br>EarningExcessPriorYrContribution<br>ProhibitedHSA<br>DeathNonSpouseDistribution<br>RefundedYTDContribution<br>RefundedPriorYrContribution<br>RefundedYTDContributionEmployer<br>RefundedPriorYrContributionEmployer<br>RefundedRollover<br>NonReportable|This field is not applicable for memo posted transactions.|
|`AcctTrnRec.AcctTrnInfo.TrnAmt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.Amt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode.CurCodeValue`|USD|  |
|`AcctTrnRec.AcctTrnInfo.Desc`||Bank can define custom description for transaction codes. API version should be configured to match the core version and display the transaction descriptions correctly.|
|`AcctTrnRec.AcctTrnInfo.ChkNum`||  |
|`AcctTrnRec.AcctTrnInfo.ExternalTrnCode`||  |
|`AcctTrnRec.AcctTrnInfo.ImageInd`|true<br>false|  |
|`AcctTrnRec.AcctTrnInfo.TrnImageId`||  |
|`AcctTrnRec.AcctTrnInfo.FloatData`||  |
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatType`|Uncollected|  |
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails`||This aggregate repeats 7 times.|
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.FloatDays`||  |
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.CheckFloatAmt`||  |
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.CheckFloatAmt.Amt`||
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode`||
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeType`|ISO4217-Alpha|
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeValue`|USD|
|`AcctTrnRec.AcctTrnStatus`||  |
|`AcctTrnRec.AcctTrnStatus.AcctTrnStatusCode`|Valid|  |
|`AcctTrnRec.AcctTrnStatus.EffDt`||  |
<!-- type: tab -->

The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`||  |
|`RecCtrlIn.Cursor`||This field is not to be provided in initial request of transaction history. If more than 250 transactions exist on an account, next cursor value will be provided in the response to indicate that more transactions are to be returned. Cursor value returned in RecCtrlOut/Cursor field should be passed in the subsequent request within RecCtrlIn/Cursor field to retrieve the next set of posted transactions. This field is not applicable for memo post transactions.|
|`AcctTrnSel`||  |
|`AcctTrnSel.AcctKeys`||  |
|`AcctTrnSel.AcctKeys.AcctId`||  |
|`AcctTrnSel.AcctKeys.AcctType`|SDA|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||This field contains total number of posted transactions with completed nightly processing + number of memo posted transactions.|
|`RecCtrlOut.Cursor`||  |
|`AcctTrnRec`||  |
|`AcctTrnRec.AcctTrnKeys`||  |
|`AcctTrnRec.AcctTrnKeys.AcctKeys`||
|`AcctTrnRec.AcctTrnKeys.AcctKeys.AcctId`||
|`AcctTrnRec.AcctTrnKeys.AcctKeys.AcctType`|SDA|
|`AcctTrnRec.AcctTrnKeys.AcctTrnIdent`||This field refers to record key for memo posted transactions. Unique transaction identifier is not provided for posted transactions. Transaction  posting date and occurrence will be returned as transaction identifier.|
|`AcctTrnRec.AcctTrnInfo`||  |
|`AcctTrnRec.AcctTrnInfo.TrnCode`||  |
|`AcctTrnRec.AcctTrnInfo.DrCrType`|Debit<br>Credit|  |
|`AcctTrnRec.AcctTrnInfo.TrnRevType`|Reversal<br>MatchedTransaction|  |
|`AcctTrnRec.AcctTrnInfo.MemoPostInd`|true<br>false|  |
|`AcctTrnRec.AcctTrnInfo.PostedDt`||  |
|`AcctTrnRec.AcctTrnInfo.EffDt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnDt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnType`|YTDContribution<br>PriorYrContribution<br>YTDContributionEmployer<br>PriorYrContributionEmployer<br>Rollover<br>RefundedDisabilityDistribution<br>RefundedDeathDistribution<br>RefundedQualifiedDistribution<br>RefundedExcessYTDContribution<br>RefundedExcessPriorYrContribution<br>RefundedEarningExcessYTDContribution<br>RefundedEarningExcessPriorYrContribution<br>RefundedProhibitedHSA<br>RefundedDeathNonSpouseDistribution<br>DisabilityDistribution<br>DeathDistribution<br>QualifiedDistribution<br>ExcessYTDContribution<br>ExcessPriorYrContribution<br>EarningExcessYTDContribution<br>EarningExcessPriorYrContribution<br>ProhibitedHSA<br>DeathNonSpouseDistribution<br>RefundedYTDContribution<br>RefundedPriorYrContribution<br>RefundedYTDContributionEmployer<br>RefundedPriorYrContributionEmployer<br>RefundedRollover<br>NonReportable|This field is not applicable for memo posted transactions.|
|`AcctTrnRec.AcctTrnInfo.TrnAmt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.Amt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode.CurCodeValue`|USD|  |
|`AcctTrnRec.AcctTrnInfo.Desc`||Bank can define custom description for transaction codes. API version should be configured to match the core version and display the transaction descriptions correctly.|
|`AcctTrnRec.AcctTrnInfo.ChkNum`||  |
|`AcctTrnRec.AcctTrnInfo.ExternalTrnCode`||  |
|`AcctTrnRec.AcctTrnInfo.ImageInd`|true<br>false|  |
|`AcctTrnRec.AcctTrnInfo.TrnImageId`||  |
|`AcctTrnRec.AcctTrnInfo.FloatData`||  |
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatType`|Uncollected|  |
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails`||This aggregate repeats 7 times.|
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.FloatDays`|1 through 7|  |
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.CheckFloatAmt`||  |
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.CheckFloatAmt.Amt`||
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode`||
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeType`|ISO4217-Alpha|
|`AcctTrnRec.AcctTrnInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeValue`|USD|
|`AcctTrnRec.AcctTrnStatus`||  |
|`AcctTrnRec.AcctTrnStatus.AcctTrnStatusCode`|Valid|  |
|`AcctTrnRec.AcctTrnStatus.EffDt`||  |
<!-- type: tab -->

The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`AcctTrnSel`||  |
|`AcctTrnSel.AcctKeys`||  |
|`AcctTrnSel.AcctKeys.AcctId`||  |
|`AcctTrnSel.AcctKeys.AcctType`|SDB|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||This field contains total number of posted transactions with completed nightly processing + number of memo posted transactions.|
|`AcctTrnRec`||  |
|`AcctTrnRec.AcctTrnKeys`||  |
|`AcctTrnRec.AcctTrnKeys.AcctKeys`||
|`AcctTrnRec.AcctTrnKeys.AcctKeys.AcctId`||
|`AcctTrnRec.AcctTrnKeys.AcctKeys.AcctType`|SDB|
|`AcctTrnRec.AcctTrnKeys.AcctTrnIdent`||This field refers to record key for memo posted transactions. Unique transaction identifier is not provided for posted transactions. Transaction  posting date and occurrence will be returned as transaction identifier.|
|`AcctTrnRec.AcctTrnInfo`||  |
|`AcctTrnRec.AcctTrnInfo.TrnCode`||  |
|`AcctTrnRec.AcctTrnInfo.DrCrType`|Debit<br>Credit|  |
|`AcctTrnRec.AcctTrnInfo.TrnRevType`|Reversal|  |
|`AcctTrnRec.AcctTrnInfo.PostedDt`||  |
|`AcctTrnRec.AcctTrnInfo.EffDt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnDt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.Amt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode.CurCodeValue`|USD|  |
|`AcctTrnRec.AcctTrnInfo.Desc`||Bank can define custom description for transaction codes. API version should be configured to match the core version and display the transaction descriptions correctly.|
|`AcctTrnRec.AcctTrnInfo.ExternalTrnCode`||  |
|`AcctTrnRec.AcctTrnStatus`||  |
|`AcctTrnRec.AcctTrnStatus.AcctTrnStatusCode`|Valid|  |
|`AcctTrnRec.AcctTrnStatus.EffDt`||  |
<!-- type: tab -->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`||  |
|`RecCtrlIn.Cursor`||This field is not to be provided in initial request of transaction history. If more than 250 transactions exist on an account, next cursor value will be provided in the response to indicate that more transactions are to be returned. Cursor value returned in RecCtrlOut/Cursor field should be passed in the subsequent request within RecCtrlIn/Cursor field to retrieve the next set of posted transactions. This field is not applicable for memo post transactions.|
|`AcctTrnSel`||  |
|`AcctTrnSel.AcctKeys`||  |
|`AcctTrnSel.AcctKeys.AcctId`||  |
|`AcctTrnSel.AcctKeys.AcctType`|LOAN|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||This field contains total number of posted transactions with completed nightly processing + number of memo posted transactions.|
|`RecCtrlOut.Cursor`||  |
|`AcctTrnRec`||  |
|`AcctTrnRec.AcctTrnKeys`||  |
|`AcctTrnRec.AcctTrnKeys.AcctKeys`||
|`AcctTrnRec.AcctTrnKeys.AcctKeys.AcctId`||
|`AcctTrnRec.AcctTrnKeys.AcctKeys.AcctType`|LOAN|
|`AcctTrnRec.AcctTrnKeys.AcctTrnIdent`||This field refers to record key for memo posted transactions. Unique transaction identifier is not provided for posted transactions. Transaction  posting date and occurrence will be returned as transaction identifier.|
|`AcctTrnRec.AcctTrnInfo`||  |
|`AcctTrnRec.AcctTrnInfo.TrnCode`||  |
|`AcctTrnRec.AcctTrnInfo.DrCrType`|Debit<br>Credit|  |
|`AcctTrnRec.AcctTrnInfo.TrnRevType`|Reversal<br>MatchedTransaction|  |
|`AcctTrnRec.AcctTrnInfo.MemoPostInd`|true<br>false|  |
|`AcctTrnRec.AcctTrnInfo.PostedDt`||  |
|`AcctTrnRec.AcctTrnInfo.EffDt`||  |
|`AcctTrnRec.AcctTrnInfo.PrincipalPaidToDt`||  |
|`AcctTrnRec.AcctTrnInfo.IntPaidToDt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnDt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.Amt`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode`||  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctTrnRec.AcctTrnInfo.TrnAmt.CurCode.CurCodeValue`|USD|  |
|`AcctTrnRec.AcctTrnInfo.CompositeCurAmt`||  |
|`AcctTrnRec.AcctTrnInfo.CompositeCurAmt.CompositeCurAmtType`|AddtlPrincipal<br>Fees<br>Insurance<br>Escrow<br>Interest<br>OtherEscrow<br>LateFee|This core does not provide the principal payments on the loan. Instead, 'AddtlPrincipal' is returned by core, which corresponds to the extra principal payment made on the loan. It usually reflects the amount paid besides the regular monthly payment against the loan to payoff the mortgage early or to reduce future interest payments.|
|`AcctTrnRec.AcctTrnInfo.CompositeCurAmt.CurAmt`||  |
|`AcctTrnRec.AcctTrnInfo.CompositeCurAmt.CurAmt.Amt`||
|`AcctTrnRec.AcctTrnInfo.CompositeCurAmt.SpecialHandling`|ExcessToPrin|  |
|`AcctTrnRec.AcctTrnInfo.Desc`||Bank can define custom description for transaction codes. API version should be configured to match the core version and display the transaction descriptions correctly.|
|`AcctTrnRec.AcctTrnInfo.ChkNum`||  |
|`AcctTrnRec.AcctTrnInfo.RateOverSplit`||  |
|`AcctTrnRec.AcctTrnInfo.RateUnderSplit`||  |
|`AcctTrnRec.AcctTrnInfo.SplitRateAmt`||  |
|`AcctTrnRec.AcctTrnInfo.SplitRateAmt.Amt`||
|`AcctTrnRec.AcctTrnInfo.ExternalTrnCode`||  |
|`AcctTrnRec.AcctTrnInfo.ImageInd`||  |
|`AcctTrnRec.AcctTrnInfo.TrnImageId`||  |
|`AcctTrnRec.AcctTrnStatus`||  |
|`AcctTrnRec.AcctTrnStatus.AcctTrnStatusCode`|Valid|  |
|`AcctTrnRec.AcctTrnStatus.EffDt`||  |

<!-- type: tab-end -->

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
