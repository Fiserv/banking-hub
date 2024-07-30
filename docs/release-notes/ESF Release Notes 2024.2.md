# Pre-Release Notes 
V 11.0.0

<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, Portico
-->

### Fixed

| API Name | Description | 
| -------- | ----------- |
| Get Safe Deposit Box | Previously, the value set for the enum description fields for one tenant was getting assigned to the another tenant on the provider from the cache. We resolved the issue and now users can expect to retrieve the correct values. <br> **Impacted Fields:** <br> `SafeDepositBoxRec/SafeDepositBoxInfo/BoxDtlStatusEnumDesc` <br> `SafeDepositBoxRec/SafeDepositBoxInfo/OriginatingBranchEnumDesc` <br> `SafeDepositBoxRec/SafeDepositBoxInfo/PostAddr/CountryCode/CountryCodeValueEnumDesc` |
| Get Card | Previously, the value set for the enum description fields for one tenant was getting assigned to the another tenant on the provider from the cache. We resolved the issue and now users can expect to retrieve the correct values. <br> **Impacted Fields:** <br> `CardRec/CardInfo/CardDtlStatusEnumDesc` <br> `CardRec/CardInfo/PostAddr/CountryCode/CountryCodeValueEnumDesc` |
| Get Account Details | We updated the enumeration description call to accurately assign the enumeration description to the appropriate organization ID. Previously, there were some instances where the enumeration description was not assigned correctly. |
| Add Account-LOAN | We resolved the issue where the value "0" was passed in the resquest regardless of any valid value provided in the `RestrictionReasonCode` field. Now, the expected value is passed in the request. <br> **Impacted Field:** <br> `LoanAcctInfo/PmtPostingRestrictions/RestrictionReasonCode` |
| Update Party |Previously, the API failed to modify the secondary address details when both primary and secondary addresses were modified at the same time. Now, this issue is resolved and both the addresses can be modified successfully. |
| Add Party |We resolved the issue to correctly map the `EmailIdent` and `PreferredEmail` fields to the provider. <br> **Impacted Fields:** <br> `PersonPartyInfo/PersonData/Contact/Email/EmailIdent` <br> `OrgPartyInfo/OrgData/Contact/Email/EmailIdent` <br>`OrgPartyInfo/OrgData/Contact/Email/PreferredEmail` <br> `PersonPartyInfo/PersonData/Contact/Email/PreferredEmail` |
| Add Party |We resolved the issue where user was unable to add the `ForeignTaxForms` field and received an error "Foreign Code is invalid with Tax ID Code of Foreign". <br>**Impacted Field:** <br> `PersonPartyInfo/TaxDataInfo/ForeignTaxData/ForeignTaxForms` |
| Get Party Account Relationship-ByTaxId | Previously, when the client sends maximum record limit (MaxRecLimit) in the request with value more than the number of records linked to the tax ident, the API failed with an error as "Internal Server Error".  To resolve this issue, we fixed the `MaxRecLimit` field and now, the API retreives the data successfully.|
| Get Account Details-LOAN | We added two new fields `County` and `StateProv` in the `MortgageReportingData` aggregate to retrieve county and state province codes used for Federal Housing Authority (FHA) and Federal Home Loan Bank (FHLB) reporting. <br> **Impacted Fields:** <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/County`<br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/StateProv` <br> <br> The following fields will deprecate in the future because the above added fields make usage of these fields obsolete: <br>`AcctRec/LoanAcctInfo/HomeMortgageDisclosure/PostAddr/County` <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/PostAddr/StateProv` |
| Update Account-LOAN | We added two new fields `County` and `StateProv` in the `MortgageReportingData` aggregate to modify county and state province codes for Federal Housing Authority (FHA) and Federal Home Loan Bank (FHLB) reporting.<br> **Impacted Fields:** <br> `LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/County`<br> `LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/StateProv` <br><br> The following fields will deprecate in the future because the above added fields make usage of these fields obsolete: <br> `LoanAcctInfo/HomeMortgageDisclosure/PostAddr/County` <br> `LoanAcctInfo/HomeMortgageDisclosure/PostAddr/StateProv` | 
| Get Account Details-LOAN | We fixed the issue where `InitialAmount` field was not getting populated when Revolving Loan Code value was either 1 (Credit Limit) or 2 (Advance Limit) in the AcctInq-LOAN API.<br>**Impacted Field:** <br> `AcctRec/LoanAcctInfo/InitialAmount/Amt`|  
| Get Party Account Relationship-ByTaxId | We resolved the issue where the API retrieved incorrect response for the `PreferredPhone` field and did not match the Premier navigator response.<br>**Impacted Fields:** <br> `PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PhoneNum` <br> `PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PhoneNum` | <!-- ESFATIG-2238 -->

### Enhancements
| API Name | Description | 
| --- | ----------- |
| Get Account Details-LOAN | Estimated revenue code for the community reinvestment act for small business or small farm is now available as single-digit numeric code.<br> **Impacted Field:** <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode`| 
| Get Account Details-LOAN</a>, Get Account Details-LOAN_INET | Accrual method field now uses the original interest method instead of the current interest method. This accrues the interest correctly.<br>**Impacted Field:** <br> `AcctRec/LoanAcctInfo/IntRateData/AccrualMethod`| 
| Add Escrow | We added a new field `DataLength` under the `ClientDefinedData` aggregate in the request message, to improve the API workflow.<br>**Impacted Field:**<br> `EscrowInfo/ClientDefinedData/DataLength`| 
| Get Account Details-CDA | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the certificate of deposit or retirement account. The valid values of this field are "Eligible", "NotEligible" or "NotApplicable". <br> **Impacted Field:** <br> `AcctRec/DepositAcctInfo/FederalInsuranceEligibility`|
| Get Account Details-DDA | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the demand deposit account. The valid values of this field are "Eligible", "NotEligible" or "NotApplicable". <br> **Impacted Field:** <br>`AcctRec/DepositAcctInfo/FederalInsuranceEligibility`|
| Get Account Details-LOAN | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the loan account. The valid value of this field is "NotApplicable". <br> **Impacted Field:** <br> `AcctRec/LoanAcctInfo/FederalInsuranceEligibility`|
| Get Account Details-DDL | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the demand deposit loan account. The valid value of this field is "NotApplicable". <br> **Impacted Field:** <br> `AcctRec/LoanAcctInfo/FederalInsuranceEligibility`|
| Get Account Details-SDA | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the savings account. The valid values of this field are "Eligible", "NotEligible" or "NotApplicable". <br> **Impacted Field:** <br> `AcctRec/DepositAcctInfo/FederalInsuranceEligibility`|
| Get Party Account Relationship-ByParty, Get Party Account Relationship-ByParty_INET, Get Party Account Relationship-ByTaxId | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the demand deposit account, demand deposit loan, savings account, certificate of deposit account, loan account and safe deposit box account. The valid values of this field are "Eligible", "NotEligible" or "NotApplicable".  <br> **Impacted Field:** <br> `PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/FederalInsuranceEligibility`|
| Get Multiple Accounts | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the demand deposit, demand deposit loan, savings, certificate of deposit, loan and safe deposit box accounts. The valid values of this field are "Eligible", "NotEligible" or "NotApplicable". <br> **Impacted Field:** <br> `MultiAcctRec/MultiAcctInfo/FederalInsuranceEligibility`|
| Get Safe Deposit Box | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the safe deposit box account. The valid value of this field is "NotApplicable". <br> **Impacted Field:** <br> `SafeDepositBoxRec/SafeDepositBoxInfo/FederalInsuranceEligibility`| <!-- ESFATIG-2728 -->


<!-- type: tab -->

### Fixed
| API Name | Description | 
| --- | ----------- | 
| Get Party | Previously, the response message failed to retrieve multiple issued identifications (IssuedIdent) associated with the party record. We resolved this issue so that users can retrieve all (repeating IssuedIdents) successfully.<br>**Impacted Fields:** <br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentType`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentValue`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssueDt`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/ExpDt`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/VerificationDetailText`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeSource`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeValue`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/StateProv`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentType`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentValue`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssueDt`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/ExpDt`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/VerificationDetailText`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeSource`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeValue`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/StateProv`| 
| Get Party Account Relationship | We resolved the issue where the user was unable to retrieve the party account relationship information in response using the party identifier.|
| Add Account Hold | We resolved the internal server error in the response when the `HoldType` field is passed with one of the valid value "Caution". Now users can add hold on the account successfully.|
| Add Account Hold | Previously the API generated an internal server error when the `AcctType` field value is "CDA" and the `AcctKeys` aggreagte (AcctHoldInfo/OtherAcctRef/AcctKeys) is sent as blank. Now users can expect valid error message as "Other Account reference not found" in the response.|
| Get Party Account Relationship-ByParty | We resolved an issue with the `DueAmt` field to populate with correct caluculations in the response message.<br>**Impacted Field:** <br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/DuePmt/PmtCompositeAmt/CurAmt/Amt`|
| Get Party Account Relationship-ByParty | We resolved an issue with the `NextPmt` aggregate to populate in the response message. <br>**Impacted Field:** <br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/NextPmt`|
| Get Party Account Relationship-ByParty | We resolved an issue with the `DueDt` field to populate in the response message.<br>**Impacted Field:** <br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/DuePmt/DueDt`|
| Add Account-CDA | We resolved the datatype mismatch error with the `ClientDefinedData` aggregate when the region code is passed as client defined field udi-1.<br>**Impacted Fields:** <br> `DepositAcctInfo/ClientDefinedData/DataClassType` <br>`DepositAcctInfo/ClientDefinedData/DataIdent`<Br>`DepositAcctInfo/ClientDefinedData/DataType`<br>`DepositAcctInfo/ClientDefinedData/Value`|

### Enhancements
| API Name | Description | 
| --- | ----------- |
| Get Account Details-CDA, Get Account Details-CDA_INET | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of certificate of a deposit or retirement account. The valid values of this field are "Eligible", "NotEligible" or "NotApplicable".  <br> **Impacted Field:** <br> `AcctRec/DepositAcctInfo/FederalInsuranceEligibility`|
| Get Account Details-DDA_SDA, Get Account Details-DDA_SDA_INET | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the demand deposit or savings account. The valid values of this field are "Eligible", "NotEligible" or "NotApplicable".  <br> **Impacted Field:** <br> `AcctRec/DepositAcctInfo/FederalInsuranceEligibility`|


<!-- type: tab -->
### Fixed
| API Name | Description | 
| --- | ----------- |
| Get Account Details | We updated the enumeration description call to accurately assign the enumeration description to the appropriate organization ID. Previously, there were some instances where the enumeration description was not assigned correctly. |
| Get Card | We fixed the API so that the following fields are not truncated in the response and ensure that they match the value of the `CardId` field sent in the request when the `CardSeqNum` field is not provided: <br> `CardRec/CardKeys/CardId` <br> `CardRec/CardKeys/CardSeqNum` | 
| Get Party | We resolved the issue where the `ApartmentNum`, `ApartmentNumType `, and `HouseNum` fields retrieved the incorrect value in the response message. We also updated the code to resolve the retrieval issue of an extra field `HouseName`, which was not supposed to be returned in the response message. <br> **Impacted Fields:** <br>`PartyRec/PersonPartyInfo/PersonData/Contact/PostAddr/ApartmentNum` <br>`PartyRec/PersonPartyInfo/PersonData/Contact/PostAddr/ApartmentNumType` <br>`PartyRec/PersonPartyInfo/PersonData/Contact/PostAddr/HouseNum` <br>`PartyRec/OrgPartyInfo/OrgData/Contact/PostAddr/ApartmentNum` <br>`PartyRec/OrgPartyInfo/OrgData/Contact/PostAddr/ApartmentNumType` <br>`PartyRec/OrgPartyInfo/OrgData/Contact/PostAddr/HouseNum`|
| Get Host System Status | We resolved the issue to retrieve the correct value of the `StatusCode` field in response when the `SystemName` field is not provided in the request.|
| Add Credit | We resolved the issue to validate the client defined XREF rule "SCO_ClientTimeZone_Rule" while setting the AMPMCode tag in the request message.| 
| Add Debit-CDA_Teller</a>, Add Debit-IRA_Teller| We resolved the null point exception error. Now, even if the value is null, the API adds the debit successfully without any error.<br>**Impacted Fields:**<br> `Context/TrnIdent (in request)`<br>`Status/ServerStatusCode (in response)`| 

<!-- type: tab -->

### Enhancements
| API Name | Description | 
| --- | ----------- | 
| Add Credit-DDA_Teller | We added the following new fields so that a teller or supervisor can override the transaction when required:<br>`OvrdExceptionData`<br>`OvrdExceptionData/OverrideException`<br> `OvrdExceptionData/OverrideException/SubjectRole`| 
| Add Debit-DDA_Teller | We added the following new fields so that a teller or supervisor can override the transaction when required:<br>`OvrdExceptionData`<br>`OvrdExceptionData/OverrideException`<br> `OvrdExceptionData/OverrideException/SubjectRole`|
| Add Transfer | As part of the enhancement, we added a new value in `AcctType` field (CLA) that enables transfers from commercial loans to checking and savings accounts.<br>**Impacted Fields:**<br> `XferInfo/FromAcctRef/AcctKeys/AcctType`<br>`XferStatusRec/XferKeys/AcctKeys/AcctType`|

### Fixed
| API Name | Description |
| --- | ----------- |
| Update Party | We resolved an issue that occurred while updating the marital status to "NotApplicable".<br>**Impacted Field:**<br> `PersonPartyInfo/MaritalStat`| 
| Update Party | We resolved an issue that occurred while updating the gender status to "Unknown".<br>**Impacted Field:**<br> `PersonPartyInfo/Gender`| 
| Update Party| We resolved an issue that occurred while updating the race status to "Other", "NativeAmerican" or "NativeAlaskan".<br>**Impacted Field:**<br> `PersonPartyInfo/Race`|

<!-- type: tab -->
### What's New
| API Name | Description | 
| --- | ----------- | 
| General | We added the following API endpoints:<br> <ul><li>Get Address</li> <li>Update Address</li> <li> Get Account Details-DDA_SDA</li> <li> Get Account Details-CDA</li> </ul> |

<!-- type: tab-end -->
