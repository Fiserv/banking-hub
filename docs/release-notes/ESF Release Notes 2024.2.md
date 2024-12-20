# Release Notes 
## 2024_Q2
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, Finxact, Onboard Advisor, DNA, EPOC
-->
## 2024_Q2.3

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/xferservice/payments/transfers/secured" title="Click to open">Get Transfer</a> | We resolved the issue where the `DayOfMonth` field was not mapped correctly.<br>**Impacted Field:** <br> `XferRec/XferInfo/RecurModel/RecurRule/DayOfMonth`| PROD |
|<a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History-WithAMS2.0</a> | We fixed the issue where ESF was not mapping 'Pending' transactions in the response when cursor value is set to 1. We also updated a configuration that was limiting the number of pending transactions.<br>**Impacted Fields:** <br>`RecCtrlIn/MaxRecLimit` <br>`AcctTrnRec aggregate level` | PROD |
|<a href="../api/?type=post&path=/collateralservice/collateral/collateral" title="Click to open">Add Collateral</a> | We updated the enum value of the `PartyCollateralRelType` field from "Signer/Owner" to "OwnerSigner". <br> **Impacted Field:** <br> `PartyCollateralRelInfo/PartyCollateralRelType`| PROD |
| <a href="../api/?type=post&path=/escrowservice/lending/escrow" title="Click to open">Add Escrow</a>| We resolved the issue of incorrect error message generation when the account number sent in the request is not as per the numeric format. | PROD | <!-- ESFPAN-3409 -->
| <a href="../api/?type=post&path=/escrowservice/lending/escrow" title="Click to open">Add Escrow</a> | We resolved the issue to accept additional values (other than "Insurance", "Taxes" or "Other") of the `EscrowCategory` field in the request message. Now, the API converts the additional value as "Other" before it sends to service provider.<br>**Impacted Field:** <br> `EscrowInfo/EscrowCategory` | PROD | <!-- ESFPAN-3380 -->

## 2024_Q2.2

### What's New
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| General | In the API Explorer, we enabled a dropdown to select Premier APIs. When you select '**Premier**' from the dropdown, the API Explorer dynamically displays only Premier APIs. The '**11.0.0 (latest)**' continues to display all APIs including Premier.<br>![PRM](/assets/images/PRM-Dropdown.png)| PROD |

### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| API Specification| We updated the API Specifications (v11.0.0.2024.2).| PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN_INET</a> | We updated the `BalType` field to reflect the current available credit balance instantly. Previously, when a bank updates the current available credit on navigator, the credit balance was updating after the nightly batch process.<br>**Impacted Field:**<br> `AcctRec/LoanAcctInfo/AcctBal/BalType`| PROD |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-LOAN</a> | We updated the `NextRateChangeDt` field with correct path to process the request successfully. Previously, the `NextRateChangeDt` field was not getting updated due to incorrect path.<br>**Impacted Field:**<br>`LoanAcctInfo/RateChangeData/NextRateChangeDt`| PROD |

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
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
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | We have fixed an issue where loan accounts were successfully created when the value of the `RateChangeRecurType` field was "Quarterly", which was not specified in the enum values. We added the "Quarterly" value as an enum value.<br>**Impacted Field:** <br> `LoanAcctInfo/RateChangeData/RateChangeRecurType`| PROD |
| <a href="../api/?type=post&path=/epreferenceservice/epreference/ePreferences" title="Click to open">Add ePreferences</a> | We resolved an issue in the `DocGroupName` field where the value was not set while creating ePreference record in a request during creation of ePreference record for LOAN or SDA account.<br>**Impacted Field:**<br> `ePreferenceInfo/DocGroupName`| PROD |

<!--type: tab-->

## 2024_Q2.2

### What's New
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| General | In the API Explorer, we enabled a dropdown to select Precision APIs. When you select '**Precision**' from the dropdown, the API Explorer dynamically displays only Precision APIs. The '**11.0.0 (latest)**' continues to display all APIs including Precision.<br> ![PRC](/assets/images/PRC-Dropdown.png) | PROD |

### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| API Specification| We updated the API Specifications (v11.0.0.2024.2).| PROD |

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> | We resolved the issue where the correct number of records were not returned in the response message when filtered by the internet banking party identifier. | PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> |  The fields `OwnerInd`, `PrimaryOwnerInd` and `TaxReportingOwnerInd` were not rendering as expected in the response. To resolve this issue, we added correct values for owner indicator, primary owner indicator and tax reporting owner indicator.<br>**Impacted Fields:**<br>`PartyAcctRelRec/PartyAcctRelInfo/OwnerInd`<br>`PartyAcctRelRec/PartyAcctRelInfo/PrimaryOwnerInd`<br> `PartyAcctRelRec/PartyAcctRelInfo/TaxReportingOwnerInd`| PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> | We resolved the error exception issue that was occurring in the response message when retrieving party account relationships using the party identifier. | PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> | We updated the configurations so that the API successfully retrieves the accounts whose secondary ownership type is "Direct" and "Fiduciary". | PROD |
| <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Acct</a>,<br> <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Party</a> |  Previously, the response message failed to retrieve multiple memo ticklers associated with an account or party record. We resolved this issue so that users can retrieve all the memo ticklers successfully. | PROD |
| <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Acct</a>,<br> <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Party</a> |  We resolved the issue in which the system does not generate "HTTP 200-OK 1120- No Records Match Selection Criteria" response, if a user sent the request with `MemoTicklerIdent` as blank or with an invalid value. | PROD |
| <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Acct</a>,<br> <a href="../api/?type=post&path=/memoticklerservice/partyacctsvc/memotickler/secured" title="Click to open">Get Memo Tickler-Party</a> |  We resolved the issue in which the system does not generate "HTTP 200-OK 1120-No Records Match Selection Criteria" response, when the memo ticker usage was "Memo" or "MemoRequired" in the request. | PROD |
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
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
|<a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-CDA</a> | We added the new enum value "NightlyReview" for the `RateChangeControl` field. Now the account is created successfully for the product. <br> **Impacted Field:** <br> `DepositAcctInfo/RateChangeData/RateChangeControl` | PROD |
| <a href="../api/?type=post&path=/prodspecservice/servicing/prodspec/secured" title="Click to open">Get Product Specifications-Deposit</a> | We resolved the issue with the `RateChangeRecurType` field that was not populated in the response message for certificate of deposit accounts. Now users can retrieve the field successfully. <br> **Impacted Field:** <br> `ProdSpecRec/DepositProdSpecInfo/RateChangeData/RateChangeRecurType`| PROD | <!-- ESFPAN-3468 -->
| <a href="../api/?type=post&path=/prodspecservice/servicing/prodspec/secured" title="Click to open">Get Product Specifications</a> | We resolved the issue in response message to populate all occurences of the `RateMatrixTier` field as per the value received from the provider.| PROD | <!-- ESFABUS-7528/ESFPAN-4117 -->


## 2024_Q2.2

### What's New
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| General | In the API Explorer, we enabled a dropdown to select Signature APIs. When you select '**Signature**' from the dropdown, the API Explorer dynamically displays only Signature APIs. The '**11.0.0 (latest)**' continues to display all APIs including Signature.<br>![SIG](/assets/images/SIG-Dropdown.png) | PROD |

### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| API Specification| We updated the API Specifications (v11.0.0.2024.2).| PROD |

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
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
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship-ByParty_INET</a> | For imporvised Single Sign On (SSO) processes and consistancy in API performace, we updated the account number format with required leading zeros (0), if the length of the account number is less than 10 digits. <br>**Impacted Field:**<br> `PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/AcctId`| PROD |<!--  ESFACYC-9148 -->
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship-ByParty_INET</a> | We added a new field `ClosedDt` under the `AcctSummInfo` aggregate in the response message for the accounts having the `AcctDtlStatus` field value as "Closed", to improve the API workflow. <br>**Impacted Field:**<br> `PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/ClosedDt` | PROD |<!-- ESFACYC-4911 -->

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved an issue where the API displayed an error in the response message, when `OrgData` an optional aggregate was not provided in the request. Now, user can update the party record successfully even when `OrgData` aggregate is not provided in the request. <br>**Impacted Field:**<br> `OrgPartyInfo/OrgData`| PROD |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship</a> | We updated the list of supported account types and removed AcctType CDA from the list to receive expected list of accounts in response. | PROD |

## 2024_Q2.2

### What's New
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| General | In the API Explorer, we enabled a dropdown to select Cleartouch APIs. When you select '**Cleartouch**' from the dropdown, the API Explorer dynamically displays only Cleartouch APIs. The '**11.0.0 (latest)**' continues to display all APIs including Cleartouch.<br>![CT](/assets/images/CT-Dropdown.png) | PROD |

<!-- type: tab -->

## 2024_Q2.2

### What's New
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| General | In the API Explorer, we enabled a dropdown to select Finxact APIs. When you select '**Finxact**' from the dropdown, the API Explorer dynamically displays only Finxact APIs. The '**11.0.0 (latest)**' continues to display all APIs including Finxact.<br>![FNX](/assets/images/FNX-Dropdown.png) | PROD |

<!-- type: tab -->

## 2024_Q2.2

### What's New
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| General | In the API Explorer, we enabled a dropdown to select Onboard Advisor APIs. When you select '**Onboard Advisor**' from the dropdown, the API Explorer dynamically displays only Onboard Advisor APIs. The '**11.0.0 (latest)**' continues to display all APIs including Onboard Advisor.<br> ![ONBOARD-ADV](/assets/images/ONBOARD-ADV-Dropdown.png) | PROD |

<!-- type: tab -->

## 2024_Q2.2

### What's New
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| General | In the API Explorer, we enabled a dropdown to select DNA APIs. When you select '**DNA**' from the dropdown, the API Explorer dynamically displays only DNA APIs. The '**11.0.0 (latest)**' continues to display all APIs including DNA.<br>![DNA](/assets/images/DNA-Dropdown.png) | PROD |

<!-- type: tab -->

## 2024_Q2.2

### What's New
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| General | In the API Explorer, we enabled a dropdown to select EPOC APIs. When you select '**EPOC**' from the dropdown, the API Explorer dynamically displays only EPOC APIs. The '**11.0.0 (latest)**' continues to display all APIs including EPOC.<br>![EPOC](/assets/images/EPOC-Dropdown.png)  | PROD |

<!-- type: tab-end -->
