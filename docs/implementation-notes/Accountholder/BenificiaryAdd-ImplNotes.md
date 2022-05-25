# Implementation Notes for Add Benificiary
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`BeneficiaryInfo`||***Required**|
|`BeneficiaryInfo.AcctKeys`||***Required**|
|`BeneficiaryInfo.AcctKeys.AcctId`||***Required**|
|`BeneficiaryInfo.AcctKeys.AcctType`|DDA<br>SDA<br>CDA|***Required**|
|`BeneficiaryInfo.BeneficiaryData`||***Required**|
|`BeneficiaryInfo.BeneficiaryData.PartyKeys`||***Required**|
|`BeneficiaryInfo.BeneficiaryData.PartyKeys.PartyId`||<br><br>ESF and Core do not validate existing party data present as Beneficiary on the account or the new party data being added as a beneficiary. If the same PartyId is added as a beneficiary for the same account, more than once,then core would accept the request and apply the changes. Therefore proactive data validation is required at consumer's end to prevent such situation. <br><br>However, ESF BeneficiaryMod operation can be used later to update the information for a specific Beneficiary Record present on the account, if required or ESF BeneficiaryDel operation can be used to remove a specific Beneficiary for the account, so that a new Beneficiary can be associated later, if needed.|
|`BeneficiaryInfo.BeneficiaryData.PostAddr`||***Conditionally Required**<br>Required to provide the address for the beneficiary party.|
|`BeneficiaryInfo.BeneficiaryData.PostAddr.AddressIdent`||***Conditionally Required**<br><br>This field is required if existing Address is to be added as a beneficiary address. |
|`BeneficiaryInfo.BeneficiaryData.PostAddr.AddrType`|Primary|***Required**|
|`BeneficiaryInfo.BeneficiaryData.BeneficiaryType`||Optional field, to be provided in the request to specify the relationship of the beneficiary with the owner of the account.|
|`BeneficiaryInfo.BeneficiaryData.BeneficiaryPercent`||Optional field, to be provided to determine the percentage allocated to beneficiary party in case of multiple beneficiaries.<br><br>Consumer must not provide the same PartyId as beneficiary for the account more than once as ESF and service provider do not validate the existing data present as beneficiary on the account with the new PartyId. <br>Also the service provider does not validate the total percentage allocated to the beneficiaries and therefore proactive data validation is required at consumer end.<br>BeneficiaryMod operation can be used to update the data or Delete operation can be used to delete the beneficiary, if required.|
#### Response Schema
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
|`BeneficiaryStatusRec.BeneficiaryStatus.BeneficiaryStatusCode`||Status code of the beneficiary party.|
|`BeneficiaryStatusRec.BeneficiaryStatus.EffDt`||Date that indicates the last update of the beneficiary party details in the system.|
<!-- type: tab-end -->
