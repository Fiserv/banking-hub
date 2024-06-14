# Release Notes 
## 2024_Q2
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch
-->
## June 20, 2024

### Fixed
| API Name | Description | 
| --- | ----------- | 
|<a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | We resolved an issue where the attributes of the `EscrowCtrlData` aggregate were not mapped correctly but the loan account was created successfully. Now, the arrtributes are mapped correctly and can be retrieved using the Get Account API successfully.<br> **Impacted Fields:** <br> `LoanAcctInfo/EscrowCtrlData` <br> `LoanAcctInfo/EscrowCtrlData/RecurRule/RecurType` <br> `LoanAcctInfo/EscrowCtrlData/RecurRule/RecurInterval` <br> `LoanAcctInfo/EscrowCtrlData/RecurRule/LeadDays` <br> `LoanAcctInfo/EscrowCtrlData/NextAnalysisDt` | 
|<a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | We resolved an issue where the `HomeMortgageDisclosure` aggregate was not mapped correctly. Now, the aggregate is mapped correctly and the values can be retrieved using the Get Account Details-LOAN API successfully. <br> **Impacted Fields:** <br> `LoanAcctInfo/HomeMortgageDisclosure/PostAddr/CensusTract` <br> `LoanAcctInfo/HomeMortgageDisclosure/PostAddr/MSACode`|
|<a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship-ByTaxId</a> | Previously, when the client sends maximum record limit (MaxRecLimit) in the request with value more than the number of records linked to the tax ident, the API failed with an error as "Internal Server Error".  To resolve this issue, we fixed the `MaxRecLimit` field and now, the API retreives the data successfully.|
|<a href="../api/?type=post&path=/collateralservice/collateral/collateral" title="Click to open">Add Collateral</a> | We updated the enum value of the `PartyCollateralRelType` field from "Signer/Owner" to "OwnerSigner". <br> **Impacted Field:** <br> `PartyCollateralRelInfo/PartyCollateralRelType`|
|<a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | We added two new fields `County` and `StateProv` in the `MortgageReportingData` aggregate to add county and state province codes for Federal Housing Authority (FHA) and Federal Home Loan Bank (FHLB) reporting.<br> **Impacted Fields:** <br> `LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/County`<br> `LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/StateProv` <br><br> The following fields will deprecate in the future because the above added fields make usage of these fields obsolete: <br> `LoanAcctInfo/HomeMortgageDisclosure/PostAddr/County` <br> `LoanAcctInfo/HomeMortgageDisclosure/PostAddr/StateProv` | 
|<a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | We added two new fields `County` and `StateProv` in the `MortgageReportingData` aggregate to retrieve county and state province codes used for Federal Housing Authority (FHA) and Federal Home Loan Bank (FHLB) reporting. <br> **Impacted Fields:** <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/County`<br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/StateProv` <br> <br> The following fields will deprecate in the future because the above added fields make usage of these fields obsolete: <br>`AcctRec/LoanAcctInfo/HomeMortgageDisclosure/PostAddr/County` <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/PostAddr/StateProv` |
|<a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-LOAN</a> | We added two new fields `County` and `StateProv` in the `MortgageReportingData` aggregate to modify county and state province codes for Federal Housing Authority (FHA) and Federal Home Loan Bank (FHLB) reporting.<br> **Impacted Fields:** <br> `LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/County`<br> `LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/StateProv` <br><br> The following fields will deprecate in the future because the above added fields make usage of these fields obsolete: <br> `LoanAcctInfo/HomeMortgageDisclosure/PostAddr/County` <br> `LoanAcctInfo/HomeMortgageDisclosure/PostAddr/StateProv` | 

## June 6, 2024

### Fixed
| API Name | Description | 
| --- | ----------- | 
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | We fixed the issue where `InitialAmount` field was not getting populated when Revolving Loan Code value was either 1 (Credit Limit) or 2 (Advance Limit) in the AcctInq-LOAN API.<br>**Impacted Field:** <br> `AcctRec/LoanAcctInfo/InitialAmount/Amt`|  
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | We resolved an issue where the attributes of the `EscrowCtrlData` aggregate were not mapped correctly but the loan account was created successfully. Now, the arrtributes are mapped correctly and can be retrieved using the Get Account API successfully.<br>**Impacted Fields:**<br> `LoanAcctInfo/EscrowCtrlData` <br> `LoanAcctInfo/EscrowCtrlData/RecurRule/RecurType` <br> `LoanAcctInfo/EscrowCtrlData/RecurRule/RecurInterval` <br> `LoanAcctInfo/EscrowCtrlData/RecurRule/LeadDays` <br> `LoanAcctInfo/EscrowCtrlData/NextAnalysisDt`|  


## May 9, 2024

### Enhancements
| API Name | Description | 
| --- | ----------- | 
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | Response message now includes the effective date of the home mortgages.<br> **Impacted Field:** <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt`| 
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | Estimated revenue code for the community reinvestment act for small business or small farm is now available as single-digit numeric code.<br> **Impacted Field:** <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode`| 
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a>, <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN_INET</a> | Accrual method field now uses the original interest method instead of the current interest method. This accrues the interest correctly.<br>**Impacted Field:** <br> `AcctRec/LoanAcctInfo/IntRateData/AccrualMethod`| 
| <a href="../api/?type=post&path=/escrowservice/lending/escrow" title="Click to open">Add Escrow</a> | We added a new field `DataLength` under the `ClientDefinedData` aggregate in the request message, to improve the API workflow.<br>**Impacted Field:**<br> `EscrowInfo/ClientDefinedData/DataLength`| 

### Fixed
| API Name | Description | 
| --- | ----------- | 
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | We have fixed an issue where loan accounts were successfully created when the value of the `RateChangeRecurType` field was "Quarterly", which was not specified in the enum values. We added the "Quarterly" value as an enum value.<br>**Impacted Field:** <br> `LoanAcctInfo/RateChangeData/RateChangeRecurType`| 
| <a href="../api/?type=post&path=/escrowservice/lending/escrow" title="Click to open">Add Escrow</a> | Previously, the escrow expiry date was sent in an incorrect format as "MMddyyyy.juliandate". We updated the date format as "MM/DD/YYYY".<br>**Impacted Field:** <br> `EscrowInfo/EscrowExpDt`|
| <a href="../api/?type=post&path=/epreferenceservice/epreference/ePreferences" title="Click to open">Add ePreferences</a> | We resolved an issue in the `DocGroupName` field where the value was not set while creating ePreference record in a request during creation of ePreference record for LOAN or SDA account.<br>**Impacted Field:**<br> `ePreferenceInfo/DocGroupName`|

<!-- type: tab -->

## May 9, 2024

### Fixed
| API Name | Description | 
| --- | ----------- | 
| <a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open">Get Party</a> | Previously, the response message failed to retrieve multiple issued identifications (IssuedIdent) associated with the party record. We resolved this issue so that users can retrieve all (repeating IssuedIdents) successfully.<br>**Impacted Fields:**<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentType`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentValue`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssueDt`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/ExpDt`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/VerificationDetailText`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeSource`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeValue`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/StateProv`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentType`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentValue`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssueDt`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/ExpDt`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/VerificationDetailText`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeSource`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeValue`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/StateProv`| 

<!-- type: tab -->
## June 20, 2024

### Fixed
| API Name | Description | 
| --- | ----------- | 
|<a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-CDA</a> | We added the new enum value "NightlyReview" for the `RateChangeControl` field. Now the account is created successfully for the product. <br> **Impacted Field:** <br> `DepositAcctInfo/RateChangeData/RateChangeControl` | 

## May 9, 2024

### What's New
| API Name | Description | 
| --- | ----------- | 
| General | In the API Explorer, we enabled a dropdown to select Signature APIs. When you select '**Signature**' from the dropdown, the API Explorer dynamically displays only Signature APIs. The '**11.0.0 (latest)**' continues to display all APIs including Signature. <br> ![image](https://github.com/Fiserv/banking-hub/assets/85101648/9efbbe40-9682-4b18-9676-fa980ecdc32a)| 

### Fixed
| API Name | Description |
| --- | ----------- | 
| <a href="../api/?type=post&path=/creditservice/payments/credits" title="Click to open">Add Credit</a> | We resolved the issue to validate the client defined XREF rule "SCO_ClientTimeZone_Rule" while setting the AMPMCode tag in the request message.| 
| <a href="../api/?type=post&path=/debitservice/payments/debits" title="Click to open">Add Debit-CDA_Teller</a>, <a href="../api/?type=post&path=/debitservice/payments/debits" title="Click to open">Add Debit-IRA_Teller</a> | We resolved the null point exception error. Now, even if the value is null, the API adds the debit successfully without any error.<br>**Impacted Fields:**<br> `Context/TrnIdent (in request)`<br>`Status/ServerStatusCode (in response)`| 

<!-- type: tab -->

## May 9, 2024

### Enhancements
| API Name | Description | 
| --- | ----------- | 
| <a href="../api/?type=post&path=/creditservice/payments/credits" title="Click to open">Add Credit-DDA_Teller</a> | We added the following new fields so that a teller or supervisor can override the transaction when required:<br>`OvrdExceptionData`<br>`OvrdExceptionData/OverrideException`<br> `OvrdExceptionData/OverrideException/SubjectRole`| 
| <a href="../api/?type=post&path=/debitservice/payments/debits" title="Click to open">Add Debit-DDA_Teller</a> | We added the following new fields so that a teller or supervisor can override the transaction when required:<br>`OvrdExceptionData`<br>`OvrdExceptionData/OverrideException`<br> `OvrdExceptionData/OverrideException/SubjectRole`| 

### Fixed
| API Name | Description |
| --- | ----------- |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved an issue that occurred while updating the marital status to "NotApplicable".<br>**Impacted Field:**<br> `PersonPartyInfo/MaritalStat`| 
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved an issue that occurred while updating the gender status to "Unknown".<br>**Impacted Field:**<br> `PersonPartyInfo/Gender`| 
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved an issue that occurred while updating the race status to "Other", "NativeAmerican" or "NativeAlaskan".<br>**Impacted Field:**<br> `PersonPartyInfo/Race`| 


<!-- type: tab-end -->
