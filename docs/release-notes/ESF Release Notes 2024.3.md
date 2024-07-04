# Release Notes 
## 2024_Q3
V 11.0.0
<!-- 
type: tab 
titles: Signature
-->
## 2024_Q3.1

### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | Collateral code is now available when you perform the account inquiry for the LOAN accounts. <br>  **Implemented Field:** <br> `AcctRec/LoanAcctInfo/CollateralCode`| CERT |

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="/api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We fixed the issue in `ShortName` field where its value was not saved in accordance with the maximum supported length of 18 characters. Now the field value is saved correctly when the client provides a `ShortName` field value with upto 18 characters is length. <br> **Impacted Fields:** <br> `PersonPartyInfo/ShortName` <br> `OrgPartyInfo/ShortName`| CERT |

<!-- type: tab-end -->
