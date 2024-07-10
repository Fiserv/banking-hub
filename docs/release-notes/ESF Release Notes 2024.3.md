# Release 2024_Q3
## Release Schedule
<!-- 
type: tab 
titles: 2024_Q3.1, 2024_Q3.2, 2024_Q3.3
-->
|        Activity      |  Tentitative Available Date  |	  Status    |
|   --------------     | ---------------------------- |  ---------  |
| CERT Deployment      | 8 July, 2024 - 12 July, 2024 | In-progress |
| PROD Deployment      | 8 July, 2024 - 12 July, 2024 | In-progress |
| General Availability | 25 July, 2024	              | In-progress |

<!-- type: tab -->
|        Activity      |  Tentitative Available Date      |	  Status    |
|   --------------     | ----------------------------     |  ---------  |
| CERT Deployment      | 8 August, 2024 - 12 August, 2024 | Not started |
| PROD Deployment      | 8 August, 2024 - 12 August, 2024 | Not started |
| General Availability | 25 August, 2024	                | Not started |

<!-- type: tab -->
|        Activity      |  Tentitative Available Date            |	  Status    |
|   --------------     | ----------------------------           |  ---------  |
| CERT Deployment      | 8 September, 2024 - 12 September, 2024 | Not started |
| PROD Deployment      | 8 September, 2024 - 12 September, 2024 | Not started |
| General Availability | 25 September, 2024	                    | Not started |

<!-- type: tab-end -->

## Release Notes
V 11.0.0
<!-- 
type: tab 
titles: Premier, Signature
-->
## 2024_Q3.1

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
|<a href="../api/?type=post&path=/beneficialownerservice/parties/beneficialowner/secured" title="Click to open">Add Beneficial Owner</a> |We resolved an issue with the `ControlCode` field when the value of the `RelationshipType` field is "ControlPerson", the value was not sent in the correct format to the provider displaying an error in the API response. Now, the provider accepts the correct interger value for this field.<br>**Impacted Field:** <br>`BeneficialOwnerInfo/BeneficialOwnerData/ControlCode` | CERT |
|<a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open">Get Party Account Relationship (By Party)</a> |We resolved an issue where the API returned the value for `PhoneType` field in lower case. Now, the `PhoneType` field value is retrieved correctly as per the configurations.<br>**Impacted Fields:** <br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PhoneNum/PhoneType` <br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PhoneNum/PhoneType` | CERT |
|<a href="../api/?type=put&path=/addrservice/partyacctsvc/secured" title="Click to open">Update Address</a> |We resolved the issue with the `RelationshipMgr` aggregate where the `RelationshipMgrIdent` and `RelationshipRole`  fields were not modified for the specified address. Now, the users can update the address successfully. <br>**Impacted Fields:** <br>`AddrInfo/PostAddr/RelationshipMgr` <br> `AddrInfo/PostAddr/RelationshipMgr/RelationshipMgrIdent` <br> `AddrInfo/PostAddr/RelationshipMgr/RelationshipRole` <br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PhoneNum/PhoneType` | CERT |

<!-- type: tab -->
## 2024_Q3.1

### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | Collateral code is now available when you perform the account inquiry for the LOAN accounts. <br>  **Implemented Field:** <br> `AcctRec/LoanAcctInfo/CollateralCode`| CERT |

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="/api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We fixed the issue in `ShortName` field where its value was not saved in accordance with the maximum supported length of 18 characters. Now the field value is saved correctly when the client provides a `ShortName` field value with upto 18 characters is length. <br> **Impacted Fields:** <br> `PersonPartyInfo/ShortName` <br> `OrgPartyInfo/ShortName`| CERT |
| <a href="/api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved the issue with the `ShortName` field where the API used the full middle name instead of initials to construct the short name when this field is not provided in the request. In such case, the value of the `ShortName` field is populated from the `PersonName` aggregate using family name, given name and middle name initials, such that the maximum length is 18 characters.| CERT |


<!-- type: tab-end -->
