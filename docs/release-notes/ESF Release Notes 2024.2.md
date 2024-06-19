# Release Notes 
## 2024_Q2
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch
-->
## 2024_Q2.3

### Fixed
| API Name | Description | Environment Availability |
| --- | ----------- | -------- |
|<a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History-WithAMS2.0</a> | We fixed the issue where ESF was not mapping 'Pending' transactions in the response when cursor value is set to 1. We also updated a configuration that was limiting the number of pending transactions.<br>**Impacted Fields:** <br>`RecCtrlIn/MaxRecLimit` <br>`AcctTrnRec aggregate level` | PROD |
|<a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History-WithAMS2.0</a> | We fixed the issue to successfully retrieve transactions from Premier that are present between 'Pending" and 'Posted'. | CERT |

## 2024_Q2.2

### Enhancements
| API Name | Description | Environment Availability |
| --- | ----------- | -------- |
| API Specification| We updated the API Specifications (v11.0.0.2024.2).| PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN_INET</a> | We updated the `BalType` field to reflect the current available credit balance instantly. Previously, when a bank updates the current available credit on navigator, the credit balance was updating after the nightly batch process.<br>**Impacted Field:**<br> `AcctRec/LoanAcctInfo/AcctBal/BalType`| PROD |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-LOAN</a> | We updated the `NextRateChangeDt` field with correct path to process the request successfully. Previously, the `NextRateChangeDt` field was not getting updated due to incorrect path.<br>**Impacted Field:**<br>`LoanAcctInfo/RateChangeData/NextRateChangeDt`| PROD |

### Fixed
| API Name | Description | Environment Availability |
| --- | ----------- | ------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | The system no longer displays an internal server error message when the accrual method value is not included in the request under the interest rate data aggregate. <br> **Impacted Field:** <br> `LoanAcctInfo/IntRateData/AccrualMethod` | PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-DDA</a>,<br> <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-DDA</a> |  We resolved an internal server error issue that used to occur when the analysis group value was not included in the request.<br>**Impacted Field:**<br>`DepositAcctInfo/CommercialAnalysisData/AnalysisGroup` | PROD |
|<a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-LOAN</a> | The system no longer displays an internal server error message when the Accrual Method value is not included in the request under the Interest Rate Data (`IntRateData`) aggregate.<br>**Impacted Fields:**<br>`LoanAcctInfo/IntRateData`<br>`LoanAcctInfo/IntRateData/AccrualMethod`| PROD |
| <a href="../api/?type=post&path=/epreferenceservice/epreference/ePreferences/secured" title="Click to open">Get ePreferences</a>|  We resolved an issue by updating the xref rule for the `StmtPrepCode` field that was not sent to the core for the DDA accounts.<br>**Impacted Field:**<br>`ePreferenceRec/ePreferenceInfo/StmtPrepCode`| PROD |
| <a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History-WithAMS2.0</a> | Memo posted transaction now returns only in the first instance of the API request as per the pagination logic. Previously, both memo posted and posted transactions used to return in every response message. <br> **Impacted Fields:**<br>`RecCtrlIn/MaxRecLimit` <br>`RecCtrlIn/Cursor` | PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Account Service</a> | We updated the security fix for all account management APIs. | PROD |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved the exception handling error. Now, this API can add phone number and/or email address for the party successfully. | PROD |
| <a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open">Get Party</a> | We resolved the issue where the `NameSuffix` field was not retrieved correctly. <br>**Impacted Field:** <br>`PartyRec/PersonPartyInfo/PersonData/PersonName/NameSuffix` | PROD | 
| <a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open">Get Party</a> | We resolved the issue with the `PreferredPhone` field where the phone flag was not rendered correctly. Now users can retrieve valid values in the response.<br>**Impacted Fields:** <br>`PartyRec/PersonPartyInfo/PersonData/Contact/PhoneNum/PreferredPhone`<br>`PartyRec/OrgPartyInfo/OrgData/Contact/PhoneNum/PreferredPhone`| PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a>| The revolving loan indicator information now displays correctly in the response message. <br>**Impacted Field:** <br>`AcctRec/LoanAcctInfo/RevolvingLoanInd`| PROD |

<!--type: tab-->

## 2024_Q2.3

### Fixed
| API Name | Description | Environment Availability |
| --- | ----------- | ------------------ |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved an issue that occured while creating a party where the given month in the issued and expiration date for Drivers License (DL) information defaults to "01" (January). Now, the value of the month remains same as the users provide in the request. | CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account</a> | Previously, while adding the benficiary (secondary customer) to an account, the details provided in the request were not added with the provider. We resolved this issue and now users can add and retrieve beneficiary details using Get Account API. | CERT |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account</a> | We resolved an issue where the nickname provided in the request was not updating for a loan account. Now, users can update the nickname successfully. | CERT |

## 2024_Q2.2

### Enhancements
| API Name | Description | Environment Availability |
| --- | ----------- | -------- |
| API Specification| We updated the API Specifications (v11.0.0.2024.2).| PROD |

### Fixed
| API Name | Description | Environment Availability |
| --- | ----------- | ------------------ |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> | We resolved the issue where the correct number of records were not returned in the response message when filtered by the internet banking party identifier. | PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> |  The fields `OwnerInd`, `PrimaryOwnerInd` and `TaxReportingOwnerInd` were not rendering as expected in the response. To resolve this issue, we added correct values for owner indicator, primary owner indicator and tax reporting owner indicator.<br>**Impacted Fields:**<br>`PartyAcctRelRec/PartyAcctRelInfo/OwnerInd`<br>`PartyAcctRelRec/PartyAcctRelInfo/PrimaryOwnerInd`<br> `PartyAcctRelRec/PartyAcctRelInfo/TaxReportingOwnerInd`| PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> | We resolved the error exception issue that was occurring in the response message when retrieving party account relationships using the party identifier. | PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> | We updated the configurations so that the API successfully retrieves the accounts whose secondary ownership type is "Direct" and "Fiduciary". | PROD |
| <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Acct</a>,<br> <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Party</a> |  Previously, the response message failed to retrieve multiple memo ticklers associated with an account or party record. We resolved this issue so that users can retrieve all the memo ticklers successfully. | PROD |
| <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Acct</a>,<br> <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Party</a> |  We resolved the issue in which the system does not generate "HTTP 200-OK 1120- No Records Match Selection Criteria" response, if a user sent the request with `MemoTicklerIdent` as blank or with an invalid value. | PROD |
| <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Acct</a>,<br> <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Party</a> |  We resolved the issue in which the system does not generate "HTTP 200-OK 1120-No Records Match Selection Criteria" response, when the memo ticker usage was "Memo" or "MemoRequired" in the request. | PROD |
| <a href="../api/?type=post&path=/stopchkservice/stophold/stopChecks" title="Click to open">Add Stop Check</a> | The system generated an error exception in the response even when the configuration of fee amount code, fee option and fee waive reason code is correct for the associated organization and client application. To resolve this issue, we have corrected the code. | PROD |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-DDA_SDA</a> | Previously, in the request, the value "UserCode1" of the `DataIdent` field for the Saving Deposit Account (SDA) was not updated with the value that client defines. We resolved the issue so that the client defined value gets updated successfully.<br>**Impacted Fields:**<br>`LoanAcctInfo/ClientDefinedData`<br>`LoanAcctInfo/ClientDefinedData/DataClassType`<br> `LoanAcctInfo/ClientDefinedData/DataIdent` <br> `LoanAcctInfo/ClientDefinedData/DataType` <br> `LoanAcctInfo/ClientDefinedData/Value`| PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship-ByParty</a> | The API now retrieves the correct relationship type. Previously, the API retrieves the relationship type as "Owner" for all the records irrespective of the actual relationship type. | PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship-ByParty</a> | We improved the API configuration to retrieve the response message within 30 seconds. Previously, there was a latency in response while using internet banking. | PROD |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved the internal server error for client defined boolean values sent in the request. Now, users can expect correct values in the API response. | PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account- DDA_SDA</a> | Previously, in request, the numeric value (udi-1, which specifies the region code) of the client defined data aggregate was added incorrectly while account creation. We resolved this issue to send the correct value.<br>**Impacted Fields:**<br>`DepositAcctInfo/ClientDefinedData`<br>`DepositAcctInfo/ClientDefinedData/DataClassType`<br> `DepositAcctInfo/ClientDefinedData/DataIdent` <br> `DepositAcctInfo/ClientDefinedData/DataType` <br> `DepositAcctInfo/ClientDefinedData/Value` | PROD |
| <a href="../api/?type=post&path=/acctholdservice/stophold/accountHolds" title="Click to open">Add Account Hold</a> | We resolved the issue of internal server error while account hold creation. Now, the user can successfully place a hold on an account. | PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account</a> | We resolved an issue to get the correct error message in response when user provides the invalid value for data identifier in the request. Previously, user gets "HTTP 999 - General Error 1011 - Invalid User" message instead of "HTTP 400 - Bad Request 1090 - Invalid Value".<br>**Impacted Field:**<br>`DepositAcctInfo/ClientDefinedData/DataIdent`| PROD |

<!-- type: tab -->
## 2024_Q2.3

### Fixed
| API Name | Description | 
| --- | ----------- | 
|<a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> |We resolved the update issue with the `ApartmentNum` field. The user was unable to delete the apartment number even if the value of the `ApartmentNum` field was sent empty in the request to update the party contact information.<br> **Impacted Fields:** <br> `PersonPartyInfo/PersonData/Contact/PostAddr/ApartmentNum` <br> `PersonPartyInfo/PersonData/Contact/PostAddr/ApartmentNumType` <br> `OrgPartyInfo/OrgData/Contact/PostAddr/ApartmentNum` <br> `OrgPartyInfo/OrgData/Contact/PostAddr/ApartmentNumType` <br> | 
|<a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open">Get Party</a> | We resolved the issue where user was unable to modify the `SecretData` aggregate provided in the request. Now, the aggregate is modified successfully and mapped to the provider as per the request. <br> **Impacted Fields:** <br> `PersonPartyInfo/SecretData` <br> `PersonPartyInfo/SecretData/SecretIdent` <br> `PersonPartyInfo/SecretData/SecretValue` <br> `OrgPartyInfo/SecretData` <br> `OrgPartyInfo/SecretData/SecretIdent` <br> `OrgPartyInfo/SecretData/SecretValue` |

## 2024_Q2.2

### What's New
| API Name | Description | Environment Availability |
| --- | ----------- | -------- |
| General | In the API Explorer, we enabled a dropdown to select Signature APIs. When you select '**Signature**' from the dropdown, the API Explorer dynamically displays only Signature APIs. The '**11.0.0 (latest)**' continues to display all APIs including Signature.<br> ![image](https://github.com/Fiserv/banking-hub/assets/85101648/9efbbe40-9682-4b18-9676-fa980ecdc32a) | PROD |

### Enhancements
| API Name | Description | Environment Availability |
| --- | ----------- | -------- |
| API Specification| We updated the API Specifications (v11.0.0.2024.2).| PROD |

### Fixed
| API Name | Description | Environment Availability |
| --- | ----------- | ------------------ |
| General | We resolved the status code synchronization issue for all APIs. | PROD |
| <a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open">Get Party</a> | We updated the service contract to make the aggregate `Secretdata` as an optional aggregate as this information can be optional on the core. | PROD |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved the null pointer exception error in the response when the value of the `CountryCodeValue` field was null in the request. Now, even if the value is null, the API adds the party record successfully without any error.<br>**Impacted Fields:**<br>`PersonPartyInfo/PersonData/Contact/PostAddr/CountryCode/CountryCodeValue`<br>`OrgPartyInfo/OrgData/Contact/PostAddr/CountryCode/CountryCodeValue` | PROD |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved the issue in the `PostalCode` field where the postal codes are not passed to the core when adding the Non-US addresses.<br>**Impacted Fields:**<br>`PersonPartyInfo/Employment/PostAddr/PostalCode`<br>`OrgPartyInfo/OrgData/Contact/PostAddr/PostalCode` | PROD |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved an internal server error when the optional `PostalCode` field was not sent in the request. Now users can create a party record with the required fields in the request. | PROD |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | Previously, the API displayed error in response and failed to create a party even if the value of the optional `PreferredPhone` filed is not provided. To resolve this issue, we fixed the code and updated the `PreferredPhone` field. Now, user can create the party records successfully.<br>**Impacted Fields:**<br>`PersonPartyInfo/PersonData/Contact/PhoneNum/PreferredPhone`<br>`OrgPartyInfo/OrgData/Contact/PhoneNum/PreferredPhone` | PROD |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved the issue where the `SecretData` aggregate provided in the request was not stored in the core although the API was returning successful response. | PROD |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved the issue in the `PostalCode` field where the postal codes are not passed to the core when adding the Non-US addresses.<br>**Impacted Fields:**<br>`PersonPartyInfo/Employment/PostAddr/PostalCode`<br>`OrgPartyInfo/OrgData/Contact/PostAddr/PostalCode` | PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> | We resolved the internal server error when the API retrieves party account relationship using account keys (`PartyAcctRelSel/AcctKeys`) in the request. Now users can retrieve a valid API response message. | PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> | We resolved an issue where null tags are returned in the response when the `IncAddtlAcctInfoInd` field was sent in the request.<br>**Impacted Field:**<br>`PartyAcctRelSel/IncAddtlAcctInfoInd` | PROD |

<!-- type: tab -->
## 2024_Q2.3

### Enhancements
| API Name | Description | Environment Availability |
| --- | ----------- | -------- |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship-ByParty_INET</a> | For imporvised Single Sign On (SSO) processes and consistancy in API performace, we updated the account number format with required leading zeros (0), if the length of the account number is less than 10 digits. <br>**Impacted Field:**<br> `PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/AcctId`| CERT |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship-ByParty_INET</a> | We added a new field `ClosedDt` under the `AcctSummInfo` aggregate in the response message for the accounts having the `AcctDtlStatus` field value as "Closed", to improve the API workflow. <br>**Impacted Field:**<br> `PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/ClosedDt` | CERT |
| <a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History</a> | We fixed the issue where the API was returning the pending transactions on each response in pagination logic. Now, the pending transactions are returned against the prior/initial request at once.| CERT |

### Fixed
| API Name | Description | Environment Availability |
| --- | ----------- | -------- |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved an issue where the API displayed an error in the response message, when `OrgData` an optional aggregate was not provided in the request. We updated the `OrgData` aggregate in the request and now user can update the party records successfully. <br>**Impacted Field:**<br> `OrgPartyInfo/OrgData`| PROD |

<!-- type: tab-end -->
