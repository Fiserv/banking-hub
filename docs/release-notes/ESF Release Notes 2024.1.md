# Pre-Release Notes 
V 11.0.0

<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, Portico
-->

### Fixed

| API Name | Description | 
| -------- | ----------- | 
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | We resolved the issue where the value "0" was passed in the resquest regardless of any valid value provided in the `RestrictionReasonCode` field. Now, the expected value is passed in the request. <br> **Impacted Field:** <br> `LoanAcctInfo/PmtPostingRestrictions/RestrictionReasonCode` |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> |Previously, the API failed to modify the address if both primary and secondary addresses have the same address identification. Now, the API can modify both addresses successfully provided they have different address uses. |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> |Previously, the API failed to modify the secondary address details when both primary and secondary addresses were modified at the same time. Now, this issue is resolved and both the addresses can be modified successfully. |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> |We resolved the issue to correctly map the `EmailIdent` and `PreferredEmail` fields to the provider. <br> **Impacted Fields:** <br> `PersonPartyInfo/PersonData/Contact/Email/EmailIdent` <br> `OrgPartyInfo/OrgData/Contact/Email/EmailIdent` <br>`OrgPartyInfo/OrgData/Contact/Email/PreferredEmail` <br> `PersonPartyInfo/PersonData/Contact/Email/PreferredEmail` |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> |We resolved the issue where user was unable to add the `ForeignTaxForms` field and received an error "Foreign Code is invalid with Tax ID Code of Foreign". <br>**Impacted Field:** <br> `PersonPartyInfo/TaxDataInfo/ForeignTaxData/ForeignTaxForms` |
|<a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship-ByTaxId</a> | Previously, when the client sends maximum record limit (MaxRecLimit) in the request with value more than the number of records linked to the tax ident, the API failed with an error as "Internal Server Error".  To resolve this issue, we fixed the `MaxRecLimit` field and now, the API retreives the data successfully.|
|<a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | We added two new fields `County` and `StateProv` in the `MortgageReportingData` aggregate to retrieve county and state province codes used for Federal Housing Authority (FHA) and Federal Home Loan Bank (FHLB) reporting. <br> **Impacted Fields:** <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/County`<br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/StateProv` <br> <br> The following fields will deprecate in the future because the above added fields make usage of these fields obsolete: <br>`AcctRec/LoanAcctInfo/HomeMortgageDisclosure/PostAddr/County` <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/PostAddr/StateProv` |
|<a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-LOAN</a> | We added two new fields `County` and `StateProv` in the `MortgageReportingData` aggregate to modify county and state province codes for Federal Housing Authority (FHA) and Federal Home Loan Bank (FHLB) reporting.<br> **Impacted Fields:** <br> `LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/County`<br> `LoanAcctInfo/HomeMortgageDisclosure/MortgageReportingData/StateProv` <br><br> The following fields will deprecate in the future because the above added fields make usage of these fields obsolete: <br> `LoanAcctInfo/HomeMortgageDisclosure/PostAddr/County` <br> `LoanAcctInfo/HomeMortgageDisclosure/PostAddr/StateProv` | 
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | We fixed the issue where `InitialAmount` field was not getting populated when Revolving Loan Code value was either 1 (Credit Limit) or 2 (Advance Limit) in the AcctInq-LOAN API.<br>**Impacted Field:** <br> `AcctRec/LoanAcctInfo/InitialAmount/Amt`|  
| <a href="../api/?type=post&path=/escrowservice/lending/escrow" title="Click to open">Add Escrow</a> | We resolved the issue of incorrect error message generation when the account number sent in the request is not as per the numeric format. |
| <a href="../api/?type=post&path=/escrowservice/lending/escrow" title="Click to open">Add Escrow</a> | We resolved the issue to accept additional values (other than "Insurance", "Taxes" or "Other") of the `EscrowCategory` field in the request message. Now, the API converts the additional value as "Other" before it sends to service provider.<br>**Impacted Field:** <br> `EscrowInfo/EscrowCategory` |

### Enhancements
| API Name | Description | 
| --- | ----------- |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | Estimated revenue code for the community reinvestment act for small business or small farm is now available as single-digit numeric code.<br> **Impacted Field:** <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode`| 
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a>, <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN_INET</a> | Accrual method field now uses the original interest method instead of the current interest method. This accrues the interest correctly.<br>**Impacted Field:** <br> `AcctRec/LoanAcctInfo/IntRateData/AccrualMethod`| 
| <a href="../api/?type=post&path=/escrowservice/lending/escrow" title="Click to open">Add Escrow</a> | We added a new field `DataLength` under the `ClientDefinedData` aggregate in the request message, to improve the API workflow.<br>**Impacted Field:**<br> `EscrowInfo/ClientDefinedData/DataLength`| 
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-CDA</a> | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the certificate of deposit or retirement account. The valid values of this field are "Eligible", "NotEligible" or "NotApplicable". <br> **Impacted Field:** <br> `AcctRec/DepositAcctInfo/FederalInsuranceEligibility`|
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-DDA</a> | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the demand deposit account. The valid values of this field are "Eligible", "NotEligible" or "NotApplicable". <br> **Impacted Field:** <br>`AcctRec/DepositAcctInfo/FederalInsuranceEligibility`|
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the loan account. The valid value of this field is "NotApplicable". <br> **Impacted Field:** <br> `AcctRec/LoanAcctInfo/FederalInsuranceEligibility`|
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-DDL</a> | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the demand deposit loan account. The valid value of this field is "NotApplicable". <br> **Impacted Field:** <br> `AcctRec/LoanAcctInfo/FederalInsuranceEligibility`|
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-SDA</a> | We added the new field `FederalInsuranceEligibility` in the response to retrieve the details of the savings account. The valid values of this field are "Eligible", "NotEligible" or "NotApplicable". <br> **Impacted Field:** <br> `AcctRec/DepositAcctInfo/FederalInsuranceEligibility`|

<!-- type: tab -->

### Fixed
| API Name | Description | 
| --- | ----------- | 
| <a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open">Get Party</a> | Previously, the response message failed to retrieve multiple issued identifications (IssuedIdent) associated with the party record. We resolved this issue so that users can retrieve all (repeating IssuedIdents) successfully.<br>**Impacted Fields:**<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentType`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentValue`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssueDt`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/ExpDt`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/VerificationDetailText`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeSource`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeValue`<br>`PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/StateProv`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentType`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentValue`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssueDt`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/ExpDt`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/VerificationDetailText`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeSource`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeValue`<br>`PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/StateProv`| 
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship | We resolved the issue where the user was unable to retrieve the party account relationship information in response using the party identifier.|

<!-- type: tab -->
### Fixed
| API Name | Description | 
| --- | ----------- | 
| <a href="../api/?type=post&path=/cardservice/cards/cards/secured" title="Click to open">Get Card</a> | We fixed the API so that the following fields are not truncated in the response and ensure that they match the value of the `CardId` field sent in the request when the `CardSeqNum` field is not provided: <br> `CardRec/CardKeys/CardId` <br> `CardRec/CardKeys/CardSeqNum` | 
| <a href="../api/?type=post&path=/prodspecservice/servicing/prodspec/secured" title="Click to open"> Get Product Specifications | We resolved the issue in response message to populate all occurences of the `RateMatrixTier` field as per the value received from the provider.|
| <a href="../api/?type=post&path=/prodspecservice/servicing/prodspec/secured" title="Click to open"> Get Product Specifications-Deposit | We resolved the issue with the `RateChangeRecurType` field that was not populated in the response message for certificate of deposit accounts. Now users can retrieve the field successfully. <br> **Impacted Field:** <br> `ProdSpecRec/DepositProdSpecInfo/RateChangeData/RateChangeRecurType`|
| <a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open"> Get Party | We resolved the issue where the `ApartmentNum`, `ApartmentNumType `, and `HouseNum` fields retrieved the incorrect value in the response message. We also updated the code to resolve the retrieval issue of an extra field `HouseName`, which was not supposed to be returned in the response message. <br> **Impacted Fields:** <br>`PartyRec/PersonPartyInfo/PersonData/Contact/PostAddr/ApartmentNum` <br>`PartyRec/PersonPartyInfo/PersonData/Contact/PostAddr/ApartmentNumType` <br>`PartyRec/PersonPartyInfo/PersonData/Contact/PostAddr/HouseNum` <br>`PartyRec/OrgPartyInfo/OrgData/Contact/PostAddr/ApartmentNum` <br>`PartyRec/OrgPartyInfo/OrgData/Contact/PostAddr/ApartmentNumType` <br>`PartyRec/OrgPartyInfo/OrgData/Contact/PostAddr/HouseNum`|
| <a href="../api/?type=post&path=/hostsystemservice/servicing/hostSystem/secured" title="Click to open"> Get Host System Status | We resolved the issue to retrieve the correct value of the `StatusCode` field in response when the `SystemName` field is not provided in the request.|
| <a href="../api/?type=post&path=/creditservice/payments/credits" title="Click to open">Add Credit</a> | We resolved the issue to validate the client defined XREF rule "SCO_ClientTimeZone_Rule" while setting the AMPMCode tag in the request message.| 
| <a href="../api/?type=post&path=/debitservice/payments/debits" title="Click to open">Add Debit-CDA_Teller</a>, <a href="../api/?type=post&path=/debitservice/payments/debits" title="Click to open">Add Debit-IRA_Teller</a> | We resolved the null point exception error. Now, even if the value is null, the API adds the debit successfully without any error.<br>**Impacted Fields:**<br> `Context/TrnIdent (in request)`<br>`Status/ServerStatusCode (in response)`| 

<!-- type: tab -->

### Enhancements
| API Name | Description | 
| --- | ----------- | 
| <a href="../api/?type=post&path=/creditservice/payments/credits" title="Click to open">Add Credit-DDA_Teller</a> | We added the following new fields so that a teller or supervisor can override the transaction when required:<br>`OvrdExceptionData`<br>`OvrdExceptionData/OverrideException`<br> `OvrdExceptionData/OverrideException/SubjectRole`| 
| <a href="../api/?type=post&path=/debitservice/payments/debits" title="Click to open">Add Debit-DDA_Teller</a> | We added the following new fields so that a teller or supervisor can override the transaction when required:<br>`OvrdExceptionData`<br>`OvrdExceptionData/OverrideException`<br> `OvrdExceptionData/OverrideException/SubjectRole`|
| <a href="../api/?type=post&path=/xferservice/payments/transfers" title="Click to open"> Add Transfer | As part of the enhancement, we added a new value in `AcctType` field (CLA) that enables transfers from commercial loans to checking and savings accounts.<br>**Impacted Fields:**<br> `XferInfo/FromAcctRef/AcctKeys/AcctType`<br>`XferStatusRec/XferKeys/AcctKeys/AcctType`|

### Fixed
| API Name | Description |
| --- | ----------- |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved an issue that occurred while updating the marital status to "NotApplicable".<br>**Impacted Field:**<br> `PersonPartyInfo/MaritalStat`| 
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved an issue that occurred while updating the gender status to "Unknown".<br>**Impacted Field:**<br> `PersonPartyInfo/Gender`| 
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved an issue that occurred while updating the race status to "Other", "NativeAmerican" or "NativeAlaskan".<br>**Impacted Field:**<br> `PersonPartyInfo/Race`|


<!-- type: tab -->
### What's New
| API Name | Description | 
| --- | ----------- | 
| General | We added the following API endpoints:<br> <ul><li>Get Address</li> <li>Update Address</li> <li> Get Account Details-DDA_SDA</li> <li> Get Account Details-CDA</li> </ul> |

<!-- type: tab-end -->
