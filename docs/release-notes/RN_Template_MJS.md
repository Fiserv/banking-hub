# Release Notes

<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, Finxact, DNA 
-->
 April 12, 2025

 ## What's New
- Added [Postman collection for Precision](https://github.com/Fiserv/banking-hub/files/14896028/Banking.Hub.-.Precision-.Trial.Plan.Postman.Collection.postman_collection.zip) core.
- The following API endpoints are newly added.

  [Add Address](Google.com)

  [Get Address](Google.com)

  [UpdateAddress](Google.com)

  [Delete Address](Google.com)

  [Get Beneficiary](Google.com)

  [Add Party Account Relationship](Google.com)
 <summary><h1>What's New</h1></summary> </details>

### Enhancements
With this release, the following enhancements are made. 
| API Name | Details of the Enhancement |
| --- | ----------- |
| [Add Document](https://google.com "View Link")| Added the new enum values "DOCX" and "XLSX" in the "DocumentInfo/PageData/PageFormat" field as new page formats. This will support more page formats while adding as a document. <br><br>Impacted Field: <br> `PageData/PageFormats` | 

### Fixed
With this release, the following issues are resolved. 
| API Name | Issue and Resolution |
| --- | ----------- |
| [Get Party Account Relationship](https://google.com "View Link") | The fields "OwnerInd", "PrimaryOwnerInd" and "TaxReportingOwnerInd" were not rendering as expected in the response. To resolve this issue, we added correct values for owner indicator, primary owner indicator and tax reporting owner indicator. <br><br>Impacted Field: <br> `OwnerInd`<br>`PrimaryOwnerInd`<br>`TaxReportingOwnerInd `|
|[Update Party](https://google.com "View Link")| While modifying the "MaritalStat" field under *PersonPartyInfo* Xpath, the value "NotApplicable" was not returning in the response during updating the party records. To resolve this issue, we implemented the Xref Rule for the  "MaritalStat" field.<br> <br>Impacted Fields:<br>`PersonPartyInfo/MaritalStat`  </li> <br> <br> While modifying the "Gender" field from existing value or some other allowed value to "Unknown", the request was not returning the "Gender" field's changed value in the response. To resolve this issue, we updated the gender value "Unknown" in the *XrefTable List_Gender_Rule.* </li> <br><br>Impacted Fields:<br>`PersonPartyInfo/Gender`<br> <br>While modifying the Race field under *PersonPartyInfo/Race* Xpath, the values "Other" or "NativeAmerican" or "NativeAlaskan" was not returning in the response during updating the party records. To resolve this issue, we implemented the Xref Rule for the  "Race" field. </li> <br><br>Impacted Fields:<br>`PersonPartyInfo/Race` |
|[Get Party Account Relationship-ByParty](https://google.com "View Link") |Fixed the issue in the "PartyAcctRelDesc" field (PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelDesc) where numeric value was getting assigned instead of the description from Premier Relationship Specifications <br> <br>Fixed the issue in the EnumDesc fields where the value set for one tenant on Premier was getting assigned to the value set for another tenant on Premier. <br><br>Impacted Fields:<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/CountryCode/CountryCodeValueEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/CountryCode/CountryCodeValueEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/IssuedIdent/IssuedIdentTypeEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/IssuedIdent/IssuedIdentTypeEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/AddrUseEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/AddrUseEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/Desc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/AcctDtlStatusEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/OriginatingBranchEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/RelationshipMgr/RelationshipMgrIdentEnumDesc`|

### Known Issues <br>
[Get Account-CDA](https://google.com "View Link")
Added the following enum values for the "AcctBal/BalType" field: <br>
Avail <br>
AvailCash <br>
AvailChk <br>
Closing <br>
BalanceLastStatement <br>
Current <br>
ClosingInterest <br>
InterestAccrued <br>
Ledger <br>
MinLedger <br>
OpeningOutstanding <br>
OverdraftAtmPos <br>
PrevAvailCash <br>
PrevAvailChk <br>
PrevInterestAccrued <br>
PrevAvail <br>
PrevSvcChg <br>
PrevLedger <br>
SvcChg <br>
Hold <br>
OtherTransfers <br>
Sweep <br>
Float <br>
MemoLedger <br>
Memo <br>
AvailPending <br>
LedgerPending <br>
</details>
