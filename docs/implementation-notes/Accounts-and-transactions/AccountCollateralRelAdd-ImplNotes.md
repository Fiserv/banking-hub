# Implementation Notes for Add AcctCollateralRel
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, 
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
|`AcctCollateralRelInfo`||Only one collateral can be linked to an account per request.|
|`AcctCollateralRelInfo.CollateralRef`|||
|`AcctCollateralRelInfo.CollateralRef.CollateralKeys`|||
|`AcctCollateralRelInfo.CollateralRef.CollateralKeys.CollateralId`||***Required**<br>Mandatory field and should be sent in the request by client application.|
|`AcctCollateralRelInfo.AcctRef`|||
|`AcctCollateralRelInfo.AcctRef.AcctKeys`||Aggregate is used to indicate an account for which the collateral is pledged.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.AcctId`||***Required**<br>Mandatory field and should be sent in the request by client application.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.AcctType`|LOAN|***Required**<br>Only loan accounts are supported in this service.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.BranchIdent`|||
|`AcctCollateralRelInfo.PledgeRule`|None<br>Principal<br>AvailCreditPlusPrincipal<br>OriginalNoteAmount<br>||
|`AcctCollateralRelInfo.PledgeType`|Amount<br>Percent|Only applicable if the pledge rule is 'None'.|
|`AcctCollateralRelInfo.CollateralPledgeAmt`||Only applicable if the PledgeType is 'Amount'.|
|`AcctCollateralRelInfo.CollateralPledgeAmt.Amt`|||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode`|||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode.CurCodeValue`|USD||
|`AcctCollateralRelInfo.CollateralPledgePercent`||Only applicable if the PledgeType is 'Percent'.|
|`AcctCollateralRelInfo.PledgeDt`||Future date is not supported.|
|`AcctCollateralRelInfo.LienPosition`|||
|`OvrdExceptionData`|||
|`AcctCollateralRelInfo`||Only one collateral can be linked to an account per request.|
|`AcctCollateralRelInfo.CollateralRef`|||
|`AcctCollateralRelInfo.CollateralRef.CollateralKeys`|||
|`AcctCollateralRelInfo.CollateralRef.CollateralKeys.CollateralId`||***Required**<br>Mandatory field and should be sent in the request by client application.|
|`AcctCollateralRelInfo.AcctRef`|||
|`AcctCollateralRelInfo.AcctRef.AcctKeys`||Aggregate is used to indicate an account for which the collateral is pledged.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.AcctId`||***Required**<br>Mandatory field and should be sent in the request by client application.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.AcctType`|LOAN|***Required**<br>Only loan accounts are supported in this service.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.BranchIdent`|||
|`AcctCollateralRelInfo.PledgeRule`|None<br>Principal<br>AvailCreditPlusPrincipal<br>OriginalNoteAmount<br>||
|`AcctCollateralRelInfo.PledgeType`|Amount<br>Percent|Only applicable if the pledge rule is 'None'.|
|`AcctCollateralRelInfo.CollateralPledgeAmt`||Only applicable if the PledgeType is 'Amount'.|
|`AcctCollateralRelInfo.CollateralPledgeAmt.Amt`|||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode`|||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode.CurCodeValue`|USD||
|`AcctCollateralRelInfo.CollateralPledgePercent`||Only applicable if the PledgeType is 'Percent'.|
|`AcctCollateralRelInfo.PledgeDt`||Future date is not supported.|
|`AcctCollateralRelInfo.LienPosition`|||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`AcctCollateralRelStatusRec`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.CollateralKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.CollateralKeys.CollateralId`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys.AcctId`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys.AcctType`|LOAN<br>||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctCollateralRelIdent`||This field refers to the record number and is the pledge identifier of collateral and an account.|
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus.AcctCollateralRelStatusCode`|Valid||
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus.EffDt`|||
|`Status`|||
|`AcctCollateralRelStatusRec`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.CollateralKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.CollateralKeys.CollateralId`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys.AcctId`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys.AcctType`|LOAN<br>||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctCollateralRelIdent`||This field refers to the record number and is the pledge identifier of collateral and an account.|
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus.AcctCollateralRelStatusCode`|Valid||
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus.EffDt`|||

<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->


