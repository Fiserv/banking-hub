# Implementation Notes for Inq Benificiary
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> - To view the field descriptions and sample Requests and Responses, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`BeneficiarySel`|||
|`BeneficiarySel.BeneficiaryKeys`||  |
|`BeneficiarySel.BeneficiaryKeys.AcctKeys`|||
|`BeneficiarySel.BeneficiaryKeys.AcctKeys.AcctId`|||
|`BeneficiarySel.BeneficiaryKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`BeneficiarySel.BeneficiaryKeys.BeneficiaryIdent`||Refers to a Beneficiary Addenda Record Number.|
|`BeneficiarySel.AcctKeys`||To be used to search for a list of beneficiary records for a specified account.|
|`BeneficiarySel.AcctKeys.AcctId`|||
|`BeneficiarySel.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
# Response Schema
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
|`BeneficiaryRec.BeneficiaryKeys.BeneficiaryIdent`||This field is also know as Beneficiary Addenda Record Number.|
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
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.BeneficiaryType`||  |
|`BeneficiaryRec.BeneficiaryInfo.BeneficiaryData.BeneficiaryPercent`||<br>|
|`BeneficiaryRec.BeneficiaryStatus`|||
|`BeneficiaryRec.BeneficiaryStatus.BeneficiaryStatusCode`|||
|`BeneficiaryRec.BeneficiaryStatus.EffDt`|||
<!-- type: tab-end -->
