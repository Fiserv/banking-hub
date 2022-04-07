# Implementation Notes for AcctCollateralRel Add
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Notes
> 
> -	To view the descriptions of fields listed in the below tables, please refer the API Explorer section of this API.
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API.


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`|||
|`AcctCollateralRelInfo`||Only one collateral can be linked to an account per request.|
|`AcctCollateralRelInfo.CollateralRef`|||
|`AcctCollateralRelInfo.CollateralRef.CollateralKeys`|||
|`AcctCollateralRelInfo.CollateralRef.CollateralKeys.CollateralId`||***Required**<br>This field is required by service provider and hence must be sent in request by client application.|
|`AcctCollateralRelInfo.AcctRef`|||
|`AcctCollateralRelInfo.AcctRef.AcctKeys`||This aggregate indicates an account for which the collateral is pledged.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.AcctId`||***Required**<br>This field is required by service provider and hence must be sent in request by client application.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.AcctType`|LOAN|***Required**<br>This field is required to be sent in request by client application. Only loan accounts are supported in this service.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.BranchIdent`||This field refers to the branch number.|
|`AcctCollateralRelInfo.PledgeRule`|None<br>Principal<br>AvailCreditPlusPrincipal<br>OriginalNoteAmount<br>||
|`AcctCollateralRelInfo.PledgeType`|Amount<br>Percent|This field is applicable if the pledge rule is 'None'.|
|`AcctCollateralRelInfo.CollateralPledgeAmt`||This aggregate is applicable if the PledgeType is 'Amount'.|
|`AcctCollateralRelInfo.CollateralPledgeAmt.Amt`|||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode`|||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode.CurCodeValue`|USD||
|`AcctCollateralRelInfo.CollateralPledgePercent`||This field is applicable if the PledgeType is 'Percent'.|
|`AcctCollateralRelInfo.PledgeDt`||Future Date is not supported.|
|`AcctCollateralRelInfo.LienPosition`||0|
|`OvrdExceptionData`|||
|`AcctCollateralRelInfo`||Only one collateral can be linked to an account per request.|
|`AcctCollateralRelInfo.CollateralRef`|||
|`AcctCollateralRelInfo.CollateralRef.CollateralKeys`|||
|`AcctCollateralRelInfo.CollateralRef.CollateralKeys.CollateralId`||***Required**<br>This field is required by service provider and hence must be sent in request by client application.|
|`AcctCollateralRelInfo.AcctRef`|||
|`AcctCollateralRelInfo.AcctRef.AcctKeys`||This aggregate indicates an account for which the collateral is pledged.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.AcctId`||***Required**<br>This field is required by service provider and hence must be sent in request by client application.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.AcctType`|LOAN|***Required**<br>This field is required to be sent in request by client application. Only loan accounts are supported in this service.|
|`AcctCollateralRelInfo.AcctRef.AcctKeys.BranchIdent`||This field refers to the branch number.|
|`AcctCollateralRelInfo.PledgeRule`|None<br>Principal<br>AvailCreditPlusPrincipal<br>OriginalNoteAmount<br>||
|`AcctCollateralRelInfo.PledgeType`|Amount<br>Percent|This field is applicable if the pledge rule is 'None'.|
|`AcctCollateralRelInfo.CollateralPledgeAmt`||This aggregate is applicable if the PledgeType is 'Amount'.|
|`AcctCollateralRelInfo.CollateralPledgeAmt.Amt`|||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode`|||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctCollateralRelInfo.CollateralPledgeAmt.CurCode.CurCodeValue`|USD||
|`AcctCollateralRelInfo.CollateralPledgePercent`||This field is applicable if the PledgeType is 'Percent'.|
|`AcctCollateralRelInfo.PledgeDt`||Future Date is not supported.|
|`AcctCollateralRelInfo.LienPosition`||0|
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`AcctCollateralRelStatusRec`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.CollateralKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.CollateralKeys.CollateralId`||0|
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys.AcctId`||0|
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys.AcctType`|LOAN<br>|0|
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctCollateralRelIdent`||This field refers to the record number and is the pledge identifier of collateral and an account.|
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus.AcctCollateralRelStatusCode`|Valid||
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus.EffDt`|||
|`Status`|||
|`AcctCollateralRelStatusRec`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.CollateralKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.CollateralKeys.CollateralId`||0|
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys.AcctId`||0|
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctKeys.AcctType`|LOAN<br>|0|
|`AcctCollateralRelStatusRec.AcctCollateralRelKeys.AcctCollateralRelIdent`||This field refers to the record number and is the pledge identifier of collateral and an account.|
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus`|||
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus.AcctCollateralRelStatusCode`|Valid||
|`AcctCollateralRelStatusRec.AcctCollateralRelStatus.EffDt`|||
<!-- type: tab-end -->
