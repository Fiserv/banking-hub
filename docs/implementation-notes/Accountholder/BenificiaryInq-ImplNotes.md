# Implementation Notes for Get Benificiary
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
|`BeneficiarySel`|||
|`BeneficiarySel.BeneficiaryKeys`||  |
|`BeneficiarySel.BeneficiaryKeys.AcctKeys`|||
|`BeneficiarySel.BeneficiaryKeys.AcctKeys.AcctId`|||
|`BeneficiarySel.BeneficiaryKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`BeneficiarySel.BeneficiaryKeys.BeneficiaryIdent`||Beneficiary Addenda Record Number.|
|`BeneficiarySel.AcctKeys`||To be used to search for a list of beneficiary records for a specified account.|
|`BeneficiarySel.AcctKeys.AcctId`|||
|`BeneficiarySel.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`|||
|`RecCtrlOut.SentRecCount`|||
|`BeneficiaryRec`|||
|`BeneficiaryRec.BeneficiaryKeys`|||
|`BeneficiaryRec.BeneficiaryKeys.AcctKeys`|||
|`BeneficiaryRec.BeneficiaryKeys.AcctKeys.AcctId`|||
|`BeneficiaryRec.BeneficiaryKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`BeneficiaryRec.BeneficiaryKeys.BeneficiaryIdent`||Beneficiary Addenda Record Number.|
|`BeneficiaryRec.BeneficiaryInfo`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PartyKeys`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PartyKeys.PartyId`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.FullName`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.TaxIdentType`|None<br>SSN<br>Foreign<br>ITIN<br>ATIN<br>EIN||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.TaxIdent`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.BirthDt`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.AddressIdent`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.AddrFormatType`|Label||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.Addr1`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.Addr2`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.City`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.StateProv`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.PostalCode`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.CountryCode`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.CountryCode.CountryCodeValue`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.CountryCode.CountryCodeValueEnumDesc`|||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.PostAddr.AddrType`|Primary||
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.BeneficiaryType`||Beneficiary Relationship, which identifies how the beneficiary is related to the owner of the account.|
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.BeneficiaryPercent`||<br>Portion of the account balance conditionally assigned to the beneficiary.|
|`BeneficiaryRec.BeneficiaryStatus`|||
|`BeneficiaryRec.BeneficiaryStatus.BeneficiaryStatusCode`|||
|`BeneficiaryRec.BeneficiaryStatus.EffDt`|||
<!-- type: tab-end -->
