# Release Notes 
## 2024_Q3
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
