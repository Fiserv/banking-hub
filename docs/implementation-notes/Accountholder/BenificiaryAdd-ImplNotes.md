# Implementation Notes for Benificiary Add
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field descriptions of below listed fields, please refer the API Explorer section of this API.


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`BeneficiaryInfo`||  |
|`BeneficiaryInfo.AcctKeys`||  |
|`BeneficiaryInfo.AcctKeys.AcctId`||  |
|`BeneficiaryInfo.AcctKeys.AcctType`|DDA<br>SDA<br>CDA|  |
|`BeneficiaryInfo.BeneficiaryData`||  |
|`BeneficiaryInfo.BeneficiaryData.PartyKeys`||  |
|`BeneficiaryInfo.BeneficiaryData.PartyKeys.PartyId`||<br><br>ESF and Core (Premier) do not validate existing party data present as Beneficiary on the account or the new party data being added as a beneficiary. If the same PartyId is added as a beneficiary for the same account, more than once,then core would accept the request and apply the changes. Therefore proactive data validation is required at consumer's end to prevent such situation. <br><br>However, ESF BeneficiaryMod operation can be used later to update the information for a specific Beneficiary Record present on the account, if required or ESF BeneficiaryDel operation can be used to remove a specific Beneficiary for the account, so that a new Beneficiary can be associated later, if needed.|
|`BeneficiaryInfo.BeneficiaryData.PostAddr`||  |
|`BeneficiaryInfo.BeneficiaryData.PostAddr.AddressIdent`||***Conditionally Required**<br><br>This field is required if existing Address is to be added as a beneficiary address. |
|`BeneficiaryInfo.BeneficiaryData.PostAddr.AddrType`|Primary|  |
|`BeneficiaryInfo.BeneficiaryData.BeneficiaryType`||  |
|`BeneficiaryInfo.BeneficiaryData.BeneficiaryPercent`||  |
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`BeneficiaryStatusRec`||  |
|`BeneficiaryStatusRec.BeneficiaryKeys`||  |
|`BeneficiaryStatusRec.BeneficiaryKeys.AcctKeys`||  |
|`BeneficiaryStatusRec.BeneficiaryKeys.AcctKeys.AcctId`||  |
|`BeneficiaryStatusRec.BeneficiaryKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA|  |
|`BeneficiaryStatusRec.BeneficiaryKeys.BeneficiaryIdent`||If there are 3 beneficiaries associated to an account then 3 different and unique identifiers in core would be present to identify/retrieve the respective beneficiary party details using the BeneficiaryIdent.|
|`BeneficiaryStatusRec.BeneficiaryStatus`||  |
|`BeneficiaryStatusRec.BeneficiaryStatus.BeneficiaryStatusCode`||  |
|`BeneficiaryStatusRec.BeneficiaryStatus.EffDt`||  |
<!-- type: tab-end -->
