# Release Notes

<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, Finxact, DNA 
-->
 April 12, 2025

 ## New in Premier

| API Name/Core | Description |
| --- | ----------- |
| [Add Party](https://google.com "View Link") | Added [Postman collection](https://github.com/Fiserv/banking-hub/files/14896028/Banking.Hub.-.Precision-.Trial.Plan.Postman.Collection.postman_collection.zip) for better linking of API elements together for easy editing, sharing, testing, and reuse. |
| [Update Party](https://google.com "View Link") | The following API endpoints are newly added.<br> [Add Address](Google.com) <br> [Get Address](Google.com) <br> [UpdateAddress](Google.com) <br>  [Delete Address](Google.com) <br> [Get Beneficiary](Google.com) <br> [Add Party Account Relationship](Google.com)| 

 
### Enhancements
With this release, the following enhancements are made. 
| API Name | Details of the Enhancement |
| --- | ----------- |
| [Add Document](https://google.com "View Link")| Added the new enum values "DOCX" and "XLSX" in the 'DocumentInfo/PageData/PageFormat' field as new page formats. This will support more page formats while adding as a document. <br><br>Impacted Field: <br> `PageData/PageFormats` | 
| [Update Stop Item](https://google.com "View Link")| With this release, you can extend enumeration values for the field 'StopItemReasonCode'. You can define these values using the ClientDefined_StopChkReasonCode_Rule. <br><br>Impacted Fields: <br> `StopChkKeys/AcctKeys/AcctType`  <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType` </li> <br> <br> Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>Impacted Fields: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType`|


### Fixed
With this release, the following issues are resolved. 
| API Name | Issue and Resolution |
| --- | ----------- |
| [Add Escrow](https://google.com "View Link") | We resolved an issue where Escrow Expiry Date was sent in an incorrect format to Premier.  <br><br>Impacted Field: <br> `EscrowInfo/EscrowExpDt`|
|[Add Account-LOAN-INET](https://google.com "View Link")| We fixed an issue where loan accounts were successfully created when the value of the RateChangeRecurType field was "Quarterly," which was not specified in the enum values. We have added the "Quarterly" value as an enum value. <br> <br>Impacted Field:<br>`LoanAcctInfo/RateChangeData/RateChangeRecurType`|
| [Update Party](https://google.com "View Link")  | </li> <br> <br> While modifying the "Gender" field from existing value or some other allowed value to "Unknown", the request was not returning the "Gender" field's changed value in the response. To resolve this issue, we updated the gender value "Unknown" in the *XrefTable List_Gender_Rule.* </li> <br><br>Impacted Fields:<br>`PersonPartyInfo/Gender`|
|[Get Party Account Relationship-ByParty](https://google.com "View Link") |Fixed the issue in the "PartyAcctRelDesc" field (PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelDesc) where numeric value was getting assigned instead of the description from Premier Relationship Specifications <br> <br>Fixed the issue in the EnumDesc fields where the value set for one tenant on Premier was getting assigned to the value set for another tenant on Premier. <br><br>Impacted Fields:<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/CountryCode/CountryCodeValueEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/CountryCode/CountryCodeValueEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/IssuedIdent/IssuedIdentTypeEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/IssuedIdent/IssuedIdentTypeEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/AddrUseEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/AddrUseEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/Desc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/AcctDtlStatusEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/OriginatingBranchEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/RelationshipMgr/RelationshipMgrIdentEnumDesc`|

### Known Issues
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
