# Implementation Notes for CreditLine Add
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field descriptions of below listed fields, please refer the API Explorer section of this API.


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`PartyAcctRelInfo`|||
|`PartyAcctRelInfo.PartyRef`|||
|`PartyAcctRelInfo.PartyRef.PartyKeys`|||
|`PartyAcctRelInfo.PartyRef.PartyKeys.PartyId`|||
|`PartyAcctRelInfo.PartyAcctRelData`|||
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelType`|Owner<br>Signer<br>OwnerSigner<br>JointTenancy<br>Executor<br>Trustee<br>Borrower<br>CoBorrower<br>Custodian<br>DoingBusinessAs|Client-defined values are used also, additional values can be client-defined. Values of trustee and fiduciary are interchangeable.|
|`PartyAcctRelInfo.OwnerInd`|true<br>false|This tag is used to select up to 3 parties that will be used for inquiries and will receive Account Statements and Notices.|
|`PartyAcctRelInfo.TaxReportingOwnerInd`|true<br>false||
|`PartyAcctRelInfo.AcctRef`|||
|`PartyAcctRelInfo.AcctRef.AcctKeys`|||
|`PartyAcctRelInfo.AcctRef.AcctKeys.AcctIdent`|||
|`PartyAcctRelInfo.AcctRef.AcctKeys.AcctIdent.AcctIdentType`|PORT||
|`PartyAcctRelInfo.AcctRef.AcctKeys.AcctIdent.AcctIdentValue`|||
|`CreditLineInfo`|||
|`CreditLineInfo.AcctType`|CLOC||
|`CreditLineInfo.OpenDt`|||
|`CreditLineInfo.DateData`|||
|`CreditLineInfo.RelationshipMgr`|||
|`CreditLineInfo.RelationshipMgr.RelationshipMgrIdent`||Only one officer and one referral officer is supported per CreditLine account.|
|`CreditLineInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer||
|`CreditLineInfo.OriginatingBranch`||This field refers to the two-digit branch number.<br>|
|`CreditLineInfo.ResponsibleBranch`||Client-defined accounting branch is used to aggregate the accounts for similar accounting, processing and integration into general ledger. Accounting branch can also be used to group accounts for reporting.|
|`CreditLineInfo.AcctTitleOption`|||
|`CreditLineInfo.AcctTitle`|||
|`CreditLineInfo.HandlingCodeOption`|Statements<br>StatementsNotices<br>Notices<br>DoNotPrint<br>UsePortfolio||
|`CreditLineInfo.HandlingCode`|||
|`CreditLineInfo.AccountingMethod`|Class<br>CostCenter||
|`CreditLineInfo.ClassCode`|||
|`CreditLineInfo.AcctTypeCode`|||
|`CreditLineInfo.ClientDefinedData`||*Required<br>It is required to send the Flex Data metadata (such as field size) along with the user-entered account data.|
|`CreditLineInfo.ClientDefinedData.DataClassType`|Portfolio||
|`CreditLineInfo.ClientDefinedData.DataIdent`||This field refers to the client-defined field code used for reference and reporting. Valid values are between 0-90000.|
|`CreditLineInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol||
|`CreditLineInfo.ClientDefinedData.Value`||This field refers to the data value entered by the client for corresponding client-defined field.|
|`CreditLineInfo.ClientDefinedData.DataLength`|||
|`CreditLineInfo.ClientDefinedData.ExpDt`||This field refers to the expiration date entered by the user.|
|`CreditLineInfo.ClientDefinedData.Desc`||This field refers to the label that appears for the field.|
|`CreditLineInfo.ClientDefinedData.RequiredFlag`|true<br>false||
|`CreditLineInfo.AcctStmtData`|||
|`CreditLineInfo.AcctStmtData.NextStmtDt`|||
|`CreditLineInfo.AcctStmtData.StmtPrepCode`|||
|`CreditLineInfo.PostAddr`|||
|`CreditLineInfo.PostAddr.OpenDt`|||
|`CreditLineInfo.PostAddr.RelationshipMgr`|||
|`CreditLineInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`|||
|`CreditLineInfo.PostAddr.RelationshipMgr.RelationshipRole`|||
|`CreditLineInfo.PostAddr.OriginatingBranch`||This field refers to the branch region associated with the address record.|
|`CreditLineInfo.PostAddr.ResponsibleBranch`||This field refers to the accounting branch associated with the address record.|
|`CreditLineInfo.PostAddr.AddressIdent`||If an existing address is used, then a valid AddressIdent must be sent by consumer application. <br><br>If a new address is to be added, AddressIdent should not be sent. <br><br>|
|`CreditLineInfo.PostAddr.AddrFormatType`|Label|All address types are in label format.|
|`CreditLineInfo.PostAddr.Addr1`|||
|`CreditLineInfo.PostAddr.Addr2`|||
|`CreditLineInfo.PostAddr.City`|||
|`CreditLineInfo.PostAddr.StateProv`|||
|`CreditLineInfo.PostAddr.PostalCode`|||
|`CreditLineInfo.PostAddr.CountryCode`|||
|`CreditLineInfo.PostAddr.CountryCode.CountryCodeSource`|||
|`CreditLineInfo.PostAddr.CountryCode.CountryCodeValue`|||
|`CreditLineInfo.PostAddr.AddrType`|Primary<br>Secondary<br>Physical||
|`CreditLineInfo.PostAddr.TimeFrame`|||
|`CreditLineInfo.PostAddr.TimeFrame.StartDt`|||
|`CreditLineInfo.PostAddr.TimeFrame.EndDt`|||
|`CreditLineInfo.PostAddr.Retention`|||
|`CreditLineInfo.PostAddr.CensusTract`|||
|`CreditLineInfo.PostAddr.CensusBlock`|||
|`CreditLineInfo.PostAddr.ForeignFlag`|||
|`CreditLineInfo.PostAddr.HandlingCode`|||
|`CreditLineInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint||
|`CreditLineInfo.PostAddr.MSACode`|||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`CreditLineStatusRec`|||
|`CreditLineStatusRec.CreditLineKeys`|||
|`CreditLineStatusRec.CreditLineKeys.AcctKeys`|||
|`CreditLineStatusRec.CreditLineKeys.AcctKeys.AcctId`||This field refers to the account number of the line entered by the user.<br>|
|`CreditLineStatusRec.CreditLineKeys.AcctKeys.AcctType`|CLOC||
|`CreditLineStatusRec.CreditLineStatus`|||
|`CreditLineStatusRec.CreditLineStatus.CreditLineStatusCode`|Valid||
|`CreditLineStatusRec.CreditLineStatus.EffDt`|||
<!-- type: tab-end -->
