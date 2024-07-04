# Pre Release Notes 
V 11.0.0

<!-- 
type: tab 
titles: Premier
-->

### Fixed

| API Name | Description | Tentative Availability |
| -------- | ----------- | ---------------------- |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | We resolved the issue where the value "0" was passed in the resquest regardless of any valid value provided in the `RestrictionReasonCode` field. Now, the expected value is passed in the request. <br> **Impacted Field:** <br> `LoanAcctInfo/PmtPostingRestrictions/RestrictionReasonCode` | 2024_Q3.1 |

<!-- type: tab-end -->
