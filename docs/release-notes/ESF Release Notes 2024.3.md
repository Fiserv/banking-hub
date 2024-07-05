# Release Notes 
## 2024_Q3
V 11.0.0

<!-- 
type: tab 
titles: Premier
-->

### Fixed

| API Name | Description | 
| -------- | ----------- | 
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | We resolved the issue where the value "0" was passed in the resquest regardless of any valid value provided in the `RestrictionReasonCode` field. Now, the expected value is passed in the request. <br> **Impacted Field:** <br> `LoanAcctInfo/PmtPostingRestrictions/RestrictionReasonCode` |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> |Previously, the API failed to modify the address if both primary and secondary addresses have the same address identification. Now, the API can modify both addresses successfully provided they have different address uses. |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> |Previously, the API failed to modify the secondary address details when both primary and secondary addresses were modified at the same time. Now, this issue is resolved and both the addresses can be modified successfully. |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> |We resolved the issue to correctly map the `EmailIdent` and `PreferredEmail` fields to the provider. <br> **Impacted Fields:** <br> `PersonPartyInfo/PersonData/Contact/Email/EmailIdent` <br> `OrgPartyInfo/OrgData/Contact/Email/EmailIdent` <br>`OrgPartyInfo/OrgData/Contact/Email/PreferredEmail` <br> `PersonPartyInfo/PersonData/Contact/Email/PreferredEmail` |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> |We resolved the issue to correctly map the `WebAddrLink` and `WebAddrIdent` fields to the provider. <br> **Impacted Fields:** <br>`PersonPartyInfo/PersonData/Contact/WebAddr/WebAddrIdent` <br>`OrgPartyInfo/OrgData/Contact/WebAddr/WebAddrIdent` <br>`OrgPartyInfo/OrgData/Contact/WebAddr/WebAddrLink` <br> `PersonPartyInfo/PersonData/Contact/WebAddr/WebAddrLink` |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> |We resolved the issue where user was unable to add the `ForeignTaxForms` field and received an error "Foreign Code is invalid with Tax ID Code of Foreign". <br>**Impacted Field:** <br> `PersonPartyInfo/TaxDataInfo/ForeignTaxData/ForeignTaxForms` |


<!-- type: tab-end -->
