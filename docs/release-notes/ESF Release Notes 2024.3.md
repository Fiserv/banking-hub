# Release Notes 2024_Q3
V 11.0.0

<details>
<summary><b style="font-size: 20px; color: #ff6600;">Release Schedule </b> </summary>
<!-- 
type: tab 
titles: 2024_Q3.1, 2024_Q3.2, 2024_Q3.3
-->

|        Activity      |  Planned Schedule  |	  Status    |
| -------------- |----------------------------|---------|
| CERT Deployment      | 8 July, 2024 - 12 July, 2024 | ![Done](https://github.com/user-attachments/assets/4b33bfc3-7017-49d1-af32-d7ba7d57e6c1) |
| PROD Deployment      | 15 July, 2024 - 25 July, 2024 | ![Done](https://github.com/user-attachments/assets/4b33bfc3-7017-49d1-af32-d7ba7d57e6c1) |
| General Availability (GA) | 25 July, 2024	          | ![Live](https://github.com/user-attachments/assets/ca5a712e-083e-491c-9c55-bf54227cbeb2) |

<!-- type: tab -->

|        Activity      |  Planned Schedule  |	  Status    |
| -------------- |----------------------------|---------|
| CERT Deployment      | 2 August, 2024 - 14 August, 2024 | ![In Progress](https://github.com/user-attachments/assets/4c06d246-df65-49f9-abb7-60bdc2b8958b) |
| PROD Deployment      | 20 August, 2024 - 27 August, 2024 | ![Not Started](https://github.com/user-attachments/assets/e75f3245-255d-436c-963a-b72c034036dc) |
| General Availability (GA) | 29 August, 2024	             | ![Not Started](https://github.com/user-attachments/assets/e75f3245-255d-436c-963a-b72c034036dc) |

<!-- type: tab -->

|        Activity      |  Planned Schedule            |	  Status    |
| -------------- |----------------------------|---------|
| CERT Deployment      | 2 September, 2024 - 6 September, 2024 | ![Not Started](https://github.com/user-attachments/assets/e75f3245-255d-436c-963a-b72c034036dc) |
| PROD Deployment      | 18 September, 2024 - 24 September, 2024 | ![Not Started](https://github.com/user-attachments/assets/e75f3245-255d-436c-963a-b72c034036dc) |
| General Availability (GA) | 26 September, 2024	               | ![Not Started](https://github.com/user-attachments/assets/e75f3245-255d-436c-963a-b72c034036dc) |

<!-- type: tab-end -->

</details>

<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch 
-->

## 2024_Q3.2

### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open"> Get Account Details-DDA, Get Account Details-SDA</a> |We added the following fields to support the integration with a financial literacy feature. <br>  `DepositAcctInfo/FinancialLiteracy` <br>`DepositAcctInfo/FinancialLiteracy/IsRoundUp` <br>`DepositAcctInfo/FinancialLiteracy/IsFunding` <br>| CERT | 
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open"> Update Account-DDA, Update Account-SDA</a> |We added the following fields to support the integration with a financial literacy feature. <br>  `DepositAcctInfo/FinancialLiteracy` <br>`DepositAcctInfo/FinancialLiteracy/IsRoundUp` <br>`DepositAcctInfo/FinancialLiteracy/IsFunding` <br>| CERT |
| <a href="../api/?type=post&path=/epreferenceservice/epreference/ePreferences" title="Click to open"> Add ePreference </a>, <a href="../api/?type=put&path=/epreferenceservice/epreference/ePreferences" title="Click to open"> Update ePreference</a>, <a href="../api/?type=put&path=/epreferenceservice/epreference/ePreferences/secured" title="Click to open">Delete ePreference</a> | We added a new field 'OvrdAutoAckInd' to override the warnings that are returned in the response by the core while performing add, update and delete of an ePreference record under these APIs.| CERT |<!-- ESF-1769, ESFACYC-9557, ESFACYC-9558, ESFACYC-7461 & ESFACYC-1110 -->

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship Details-Account</a> | We resolved the issue related to `IssuedIdentId` field where the API was setting the value of this field automatically. Now, the API updates the value of `IssuedIdentId` field from the request.  <br>  **Impacted Field:** <br> `PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentType` <br>`PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentId` <br>`OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentType` <br> `OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentId` | CERT |<!-- ESFACYC-6744, ESFACYC-6718 -->
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship Details-Account</a> | We resolved the issue where the API retrieved the incorrect value of the client-defined `PartyAcctRelType` field. Now, the API retrieves the same value of the `PartyAcctRelType` field as provided while creation of the party account relationship. <br>  **Impacted Field:** <br> `PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelType` | CERT |<!-- ESFACYC-10214 -->
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details</a> | We updated the enumeration description call to accurately assign the enumeration description to the appropriate organization ID. Previously, there were some instances where the enumeration description was not assigned correctly. | CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open"> Add Account-SDA, Add Account-DDA, Add Account-CDA, Add Account-LOAN</a> | We fixed the issue where the TaxReportingOwner was incorrectly being assigned to the first Party, regardless of the indicator provided in the request. Now, the TaxReportingOwner is correctly assigned to the appropriate Party. <br>  **Impacted Field:** <br> `PartyAcctRelInfo/TaxReportingOwnerInd`| CERT |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open"> Get Party Account Relationship-ByTaxId</a> | We fixed the issue where the API was displaying a Null Pointer Exception error in the response when a null value is sent in the `AddrType` field. <br>  **Impacted Field:** <br> `DepositAcctInfo/PostAddr/AddrType`| CERT |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open"> Update Account</a> |We fixed the issue where the API was displaying a Null Pointer Exception error when a null or blank value is sent in the ovrdAutoAckInd field. <br>  **Impacted Field:** <br> `OvrdAutoAckInd`| CERT |


<!-- type: tab -->

## 2024_Q3.2

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open"> Get Party</a> | We resolved the issue with the `IssueDt` and `ExpDt` fields, where the API returned incorrect dates for driver license in the response message. <br> **Impacted Fields:** <br> `PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssueDt` <br> `PartyRec/PersonPartyInfo/PersonData/IssuedIdent/ExpDt` <br> `PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssueDt`<br> `PartyRec/OrgPartyInfo/OrgData/IssuedIdent/ExpDt`| CERT |
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open"> Get Party Account Relationship-ByParty</a> | We resolved an issue with the `DueAmt` field to populate with correct caluculations in the response message.<br>**Impacted Field:** <br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/DuePmt/PmtCompositeAmt/CurAmt/Amt`|
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open"> Get Party Account Relationship-ByParty</a>  | We resolved an issue with the `NextPmt` aggregate to populate in the response message. <br>**Impacted Field:** <br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/NextPmt`|
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open"> Get Party Account Relationship-ByParty</a>  | We resolved an issue with the `DueDt` field to populate in the response message.<br>**Impacted Field:** <br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/DuePmt/DueDt`|


## 2024_Q3.1

### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We enhanced the API's ability where the user can delete the 'IssuedIdent' aggregate values that are not passed in the request. If the party has two `IssuedIdent` aggregates, the user can remove the aggregate that is not needed for the party. <br>  **Impacted Fields:** <br> `PersonPartyInfo/PersonData/IssuedIdent` <br> `PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentType` <br> `PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentId` <br> `PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentValue` <br> `PersonPartyInfo/PersonData/IssuedIdent/Issuer` <br> `PersonPartyInfo/PersonData/IssuedIdent/IssueDt` <br> `PersonPartyInfo/PersonData/IssuedIdent/ExpDt` <br>`OrgPartyInfo/OrgData/IssuedIdent` <br> `OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentType` <br> `OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentId` <br> `OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentValue` <br> `OrgPartyInfo/OrgData/IssuedIdent/Issuer` <br> `OrgPartyInfo/OrgData/IssuedIdent/IssueDt` <br> `OrgPartyInfo/OrgData/IssuedIdent/ExpDt`| CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-CDA</a> | We added `AcctRec/DepositAcctInfo/AcctStmtData/StmtGroup` as a new field to map the account relationships when adding a CDA account.<br>  **Impacted Field:** <br> `AcctRec/DepositAcctInfo/AcctStmtData/StmtGroup`| PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-CDA</a> | We added `AcctRec/DepositAcctInfo/AcctStmtData/StmtGroup` as a new field to display the account relationships status in the response message. <br>  **Impacted Field:** <br> `AcctRec/DepositAcctInfo/AcctStmtData/StmtGroup`| PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN </a> | Response message now includes the effective date of the home mortgages.<br>  **Impacted Field:** <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt`| PROD |

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/escrowservice/lending/escrow" title="Click to open">Add Escrow</a> | Previously, the escrow expiry date was sent in an incorrect format as "MMddyyyy.juliandate". We updated the date format as "MM/DD/YYYY".<br>**Impacted Field:** <br> `EscrowInfo/EscrowExpDt`| PROD |
|<a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> |We updated the field `OvrdAutoAckInd` to override the warnings that are returned in the response while performing Add Party operation. Now, the user can add a party successfully, when 'OvrdAutoAckInd' field value is set to true.| CERT |
|<a href="../api/?type=post&path=/beneficialownerservice/parties/beneficialowner" title="Click to open">Add Beneficial Owner</a> |We resolved an issue with the `ControlCode` field when the value of the `RelationshipType` field is "ControlPerson", the value was not sent in the correct format to the provider displaying an error in the API response. Now, the provider accepts the correct interger value for this field.<br>**Impacted Field:** <br>`BeneficialOwnerInfo/BeneficialOwnerData/ControlCode` | CERT |
|<a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship-ByParty </a> |We resolved an issue where the API returned the value for `PhoneType` field in lower case. Now, the `PhoneType` field value is retrieved correctly as per the configurations.<br>**Impacted Fields:** <br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PhoneNum/PhoneType` <br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PhoneNum/PhoneType` | CERT |
|<a href="../api/?type=put&path=/addrservice/partyacctsvc/address" title="Click to open">Update Address</a> |We resolved the issue with the `RelationshipMgr` aggregate where the `RelationshipMgrIdent` and `RelationshipRole`  fields were not modified for the specified address. Now, the users can update the address successfully. <br>**Impacted Fields:** <br>`AddrInfo/PostAddr/RelationshipMgr` <br> `AddrInfo/PostAddr/RelationshipMgr/RelationshipMgrIdent` <br> `AddrInfo/PostAddr/RelationshipMgr/RelationshipRole` <br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PhoneNum/PhoneType` | CERT |
|<a href="../api/?type=put&path=/addrservice/partyacctsvc/address" title="Click to open">Update Address</a> |We resolved the issue where the user was unable to update the value of the field `HandlingCodeOption`for addresses when the AddrType field is "Seasonal".<br>**Impacted Field:** <br>`AddrInfo/PostAddr/HandlingCodeOption`| CERT |
| <a href="../api/?type=put&path=/addrservice/partyacctsvc/address" title="Click to open">Update Address</a> | We resolved an issue with the `AddrType` field where the address fields were not sent to the provider when the value for the field is "Secondary". <br> **Impacted Field:** <br> `AddrInfo/PostAddr/AddrType` | CERT |
| <a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History-WithAMS2.0</a> | We fixed the issue to successfully retrieve transactions from Premier that are present between 'Pending' and 'Posted'.  | PROD |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-DDA</a> | We fixed the "IndexOutOfBoundsException: Index 0" error that occurred when the `RateFactor` field was sent in the API request. <br>  **Impacted Field:** <br> `​​​​​​​DepositAcctInfo/RateChangeData/RateFactor`| PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-all types </a> | We updated the API to correctly display the product description in the API response message. Previously, the `Desc` field was displaying incorrect description. <br>  **Impacted Field:** <br> `AcctRec/DepositAcctInfo/Desc`| PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN </a> | We added the notes within the `InitialAmount/Amt` and `RevolvingLoanCode` fields to provide the correlation between these fields. <br>  **Impacted Fields:** <br> `AcctRec/LoanAcctInfo/InitialAmount/Amt` <br> `AcctRec/LoanAcctInfo/RevolvingLoanCode`| PROD |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> |We resolved the issue to correctly map the `WebAddrLink` and `WebAddrIdent` fields to the provider. <br> **Impacted Fields:** <br>`PersonPartyInfo/PersonData/Contact/WebAddr/WebAddrIdent` <br>`OrgPartyInfo/OrgData/Contact/WebAddr/WebAddrIdent` <br>`OrgPartyInfo/OrgData/Contact/WebAddr/WebAddrLink` <br> `PersonPartyInfo/PersonData/Contact/WebAddr/WebAddrLink` | CERT |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> |Previously, the API failed to modify the address if both primary and secondary addresses have the same address identification. Now, the API can modify both addresses successfully provided they have different address uses. | CERT | <!-- ESFPAN-1453 -->

<!-- type: tab -->

## 2024_Q3.2

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details</a> | We updated the enumeration description call to accurately assign the enumeration description to the appropriate organization ID. Previously, there were some instances where the enumeration description was not assigned correctly.  | CERT |

## 2024_Q3.1

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account</a> | We resolved an issue where the nickname provided in the request was not updating for a loan account. Now, users can update the nickname successfully. | PROD |
| <a href="../api/?type=post&path=/stopchkservice/stophold/stopChecks" title="Click to open">Add Stop Check</a> | The system generated an error exception in the response even when the configuration of fee amount code, fee option and fee waive reason code is correct for the associated organization and client application. To resolve this issue, we have corrected the code. | PROD |
| <a href="../api/?type=post&path=/xferservice/payments/transfers" title="Click to open">Add Transfer</a> | We resoved an issue where the users were not able to make payment for loan from another loan account.  | CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-DDA_SDA</a> | We updated the note for the `TaxIncentiveType` field with the addition of "HSA" (Health Saving Account). <br> **Impacted Field:** <br>`DepositAcctInfo/TaxIncentiveType` | PROD |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-DDA, Update Account-SDA</a> | We resolved the null pointer exception error that used to occur in the service charge data (SvcChgData) aggregate when the ProdIntRateId and AcctStmtData values are provided in the request. We removed the "AnalysisOffset" enumeration value from the `SvcChgMethodType` field. <br> **Impacted Field:** <br>`DepositAcctInfo/SvcChgData/SvcChgMethod/SvcChgMethodType` | PROD |


<!-- type: tab -->

## 2024_Q3.1

### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="/api/?type=post&path=/safedepositboxservice/safedepositbox/safedepositbox" title="Click to open">Add Safe Deposit Box</a> | We added the following enum values to the `SafeDepositBoxInfo/AcctTaxData/TaxType` field for installed banks that have a modification to extend tax type codes: <ul> <li>Tax4</li> <li> Tax5 </li> <li> Tax6 </li> <li> Tax7 </li> <li> Tax8 </li> <li> Tax9 </li> <li> TaxA </li> <li> TaxB </li> <li> TaxC </li> </ul>| PROD | <!-- ESFPAN-4160 -->
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | Collateral code is now available when you perform the account inquiry for the LOAN accounts. <br>  **Impacted Field:** <br> `AcctRec/LoanAcctInfo/CollateralCode`| PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | Previously, the API returned an error message “Invalid Float Extension Code” when the `OEDCode` field value was set to “MainShareHolder” or “RelInterest”. We updated the API to successfully set these values without any error message”.<br>  **Impacted Field:** <br> `LoanAcctInfo/OEDCode`| CERT |

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We fixed the issue in `ShortName` field where its value was not saved in accordance with the maximum supported length of 18 characters. Now the field value is saved correctly when the client provides a `ShortName` field value with upto 18 characters is length. <br> **Impacted Fields:** <br> `PersonPartyInfo/ShortName` <br> `OrgPartyInfo/ShortName`| CERT |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved the issue with the `ShortName` field where the API used the full middle name instead of initials to construct the short name when this field is not provided in the request. In such case, the value of the `ShortName` field is populated from the `PersonName` aggregate using family name, given name and middle name initials, such that the maximum length is 18 characters.| CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open"> Add Account-DDA</a> | We resolved the issue of the “Invalid Float Extension Code” error, which previously occurred when the `RegCCStatus` value was sent in the request. <br>  **Impacted Field:** <br> `DepositAcctInfo/RegCCData/RegCCStatus`| PROD |

<!-- type: tab -->

## 2024_Q3.1

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/xferservice/payments/transfers" title="Click to open">Add Transfer</a> | We enhanced the ability of the API to allow transfers from commercial loans (CLA) to checking and savings account. <br>  **Impacted Fields:** <br> `XferInfo/FromAcctRef/AcctKeys/AcctType` <br> `XferStatusRec/XferKeys/AcctKeys/AcctType` | CERT |
| <a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History-DDA_SDA_Teller</a> | We fixed the issue where transaction date and timestamp were not getting mapped properly with `PostedDt` and `TrnDt` fields when received from Cleartouch.  <br>  **Impacted Fields:** <br> `AcctTrnRec/AcctTrnInfo/PostedDt` <br> `AcctTrnRec/AcctTrnInfo/TrnDt`| PROD |
| <a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History </a> | We fixed the issue where the API was returning the pending transactions on each response in pagination logic. Now, the pending transactions are returned against the prior/initial request at once.| PROD |

<!-- type: tab-end -->


