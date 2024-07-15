# Release Notes 2024_Q3
V 11.0.0

<!-- 
type: tab 
titles: Premier, Signature, Cleartouch
-->
## 2024_Q3.1

### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=put&path=/partyservice/parties/secured" title="Click to open">Update Party</a> | We enhanced the API's ability where the user can delete the 'IssuedIdent' aggregate values that are not passed in the request. If the party has two `IssuedIdent` aggregates, the user can remove the aggregate that is not needed for the party. <br>  **Impacted Fields:** <br> `PersonPartyInfo/PersonData/IssuedIdent` <br> `PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentType` <br> `PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentId` <br> `PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentValue` <br> `PersonPartyInfo/PersonData/IssuedIdent/Issuer` <br> `PersonPartyInfo/PersonData/IssuedIdent/IssueDt` <br> `PersonPartyInfo/PersonData/IssuedIdent/ExpDt` <br>`OrgPartyInfo/OrgData/IssuedIdent` <br> `OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentType` <br> `OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentId` <br> `OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentValue` <br> `OrgPartyInfo/OrgData/IssuedIdent/Issuer` <br> `OrgPartyInfo/OrgData/IssuedIdent/IssueDt` <br> `OrgPartyInfo/OrgData/IssuedIdent/ExpDt`| CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account - CDA</a> | We added `AcctRec/DepositAcctInfo/AcctStmtData/StmtGroup` as a new field to map the account relationships when adding a CDA account.<br>  **Impacted Field:** <br> `AcctRec/DepositAcctInfo/AcctStmtData/StmtGroup`| CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details - CDA</a> | We added `AcctRec/DepositAcctInfo/AcctStmtData/StmtGroup` as a new field to display the account relationships status in the response message. <br>  **Impacted Field:** <br> `AcctRec/DepositAcctInfo/AcctStmtData/StmtGroup`| CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN </a> | Response message now includes the effective date of the home mortgages.<br>  **Impacted Field:** <br> `AcctRec/LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt`| CERT |

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
|<a href="../api/?type=post&path=/beneficialownerservice/parties/beneficialowner/secured" title="Click to open">Add Beneficial Owner</a> |We resolved an issue with the `ControlCode` field when the value of the `RelationshipType` field is "ControlPerson", the value was not sent in the correct format to the provider displaying an error in the API response. Now, the provider accepts the correct interger value for this field.<br>**Impacted Field:** <br>`BeneficialOwnerInfo/BeneficialOwnerData/ControlCode` | CERT |
|<a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship (By Party)</a> |We resolved an issue where the API returned the value for `PhoneType` field in lower case. Now, the `PhoneType` field value is retrieved correctly as per the configurations.<br>**Impacted Fields:** <br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PhoneNum/PhoneType` <br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PhoneNum/PhoneType` | CERT |
|<a href="../api/?type=put&path=/addrservice/partyacctsvc/secured" title="Click to open">Update Address</a> |We resolved the issue with the `RelationshipMgr` aggregate where the `RelationshipMgrIdent` and `RelationshipRole`  fields were not modified for the specified address. Now, the users can update the address successfully. <br>**Impacted Fields:** <br>`AddrInfo/PostAddr/RelationshipMgr` <br> `AddrInfo/PostAddr/RelationshipMgr/RelationshipMgrIdent` <br> `AddrInfo/PostAddr/RelationshipMgr/RelationshipRole` <br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PhoneNum/PhoneType` | CERT |
|<a href="../api/?type=put&path=/addrservice/partyacctsvc/secured" title="Click to open">Update Address</a> |We resolved the issue where the user was unable to update the value of the field `HandlingCodeOption`for addresses when the AddrType field is "Seasonal".<br>**Impacted Fields:** <br>`AddrInfo/PostAddr/HandlingCodeOption`| CERT |
| <a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History-WithAMS2.0</a> | We fixed the issue to successfully retrieve transactions from Premier that are present between 'Pending' and 'Posted'.  | CERT |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account - DDA</a> | We fixed the "IndexOutOfBoundsException: Index 0" error that occurred when the `RateFactor` field was sent in the API request. <br>  **Impacted Field:** <br> `​​​​​​​DepositAcctInfo/RateChangeData/RateFactor`| CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details - all types </a> | We updated the API to correctly display the product description in the API response message. Previously, the `Desc` field was displaying incorrect description. <br>  **Impacted Field:** <br> `AcctRec/DepositAcctInfo/Desc`| CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details - LOAN </a> | We added the notes within the `InitialAmount/Amt` and `RevolvingLoanCode` fields to provide the correlation between these fields. <br>  **Impacted Field:** <br> `AcctRec/LoanAcctInfo/InitialAmount/Amt` <br> `AcctRec/LoanAcctInfo/RevolvingLoanCode`| CERT |

<!-- type: tab -->
## 2024_Q3.1

### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | Collateral code is now available when you perform the account inquiry for the LOAN accounts. <br>  **Impacted Field:** <br> `AcctRec/LoanAcctInfo/CollateralCode`| CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account - LOAN</a> | Previously, the API returned an error message “Invalid Float Extension Code” when the `OEDCode` field value was set to “MainShareHolder” or “RelInterest”.  We updated the API to successfully set these values without any error message”.<br>  **Impacted Field:** <br> `LoanAcctInfo/OEDCode`| CERT |

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="/api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We fixed the issue in `ShortName` field where its value was not saved in accordance with the maximum supported length of 18 characters. Now the field value is saved correctly when the client provides a `ShortName` field value with upto 18 characters is length. <br> **Impacted Fields:** <br> `PersonPartyInfo/ShortName` <br> `OrgPartyInfo/ShortName`| CERT |
| <a href="/api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved the issue with the `ShortName` field where the API used the full middle name instead of initials to construct the short name when this field is not provided in the request. In such case, the value of the `ShortName` field is populated from the `PersonName` aggregate using family name, given name and middle name initials, such that the maximum length is 18 characters.| CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open"> Add Account - DDA</a> | We resolved the issue of the “Invalid Float Extension Code” error, which previously occurred when the `RegCCStatus` value was sent in the request. <br>  **Impacted Field:** <br> `DepositAcctInfo/RegCCData/RegCCStatus`| CERT |

<!-- type: tab -->

## 2024_Q3.1

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History DDA_SDA_Teller</a> | We fixed the issue where transaction date and timestamp were not getting mapped properly with `PostedDt` and `TrnDt` fields when received from Cleartouch.  <br>  **Impacted Fields:** <br> `AcctTrnRec/AcctTrnInfo/PostedDt` <br> `AcctTrnRec/AcctTrnInfo/TrnDt`| CERT |
| <a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History </a> | We fixed the issue where the API was returning the pending transactions on each response in pagination logic. Now, the pending transactions are returned against the prior/initial request at once.| PROD |

<!-- type: tab-end -->
