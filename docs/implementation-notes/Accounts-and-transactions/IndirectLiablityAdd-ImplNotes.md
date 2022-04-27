# Implementation Notes for Add IndirectLiablity
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`||  |
|`IndirectLiabilityInfo`||  |
|`IndirectLiabilityInfo.AcctKeys`||  |
|`IndirectLiabilityInfo.AcctKeys.AcctId`||  |
|`IndirectLiabilityInfo.AcctKeys.AcctType`|LOAN<br>CLOC|  |
|`IndirectLiabilityInfo.AcctIdent`||  |
|`IndirectLiabilityInfo.AcctIdent.AcctIdentType`|PORT|  |
|`IndirectLiabilityInfo.AcctIdent.AcctIdentValue`||*Required<br>It is required to provide portfolio number while adding indirect liability record. If not provided, existing portfolio account associated to the Loan/Line is used to create indirect liability.|
|`IndirectLiabilityInfo.BureauAddrStatusCode`||  |
|`IndirectLiabilityInfo.IndirectLiabilityParty`||  |
|`IndirectLiabilityInfo.IndirectLiabilityParty.PartyKeys`||  |
|`IndirectLiabilityInfo.IndirectLiabilityParty.PartyKeys.PartyId`||Service provider supports up to 3 parties for an indirect liability record.|
|`IndirectLiabilityInfo.IndirectLiabilityParty.CreditBureauData`||  |
|`IndirectLiabilityInfo.IndirectLiabilityParty.CreditBureauData.ECOACode`||  |
|`IndirectLiabilityInfo.IndirectLiabilityParty.CreditBureauData.ConsumerCode`||  |
|`IndirectLiabilityInfo.PartyKeys`||*Conditionally Required<br>This aggregate should be sent in the request if, IndirectLiabilityInfo/IndirectLiabilityParty/PartyKeys has not been provided. Only one occurrence for this aggregate can be sent along with the PartyId which needs to be associated to the IndirectLiability record being created on the loan (see LiabilityType applicable for the PartyId). If both aggregates are sent then ESF would ignore IndirectLiabilityInfo/PartyKeys and only process occurence(s) of IndirectLiabilityInfo/IndirectLiabilityParty/PartyKeys. Multiple addendas (IndirectLiability Records) can be created with same customer (PartyId) if, other fields are validated successfully. Application should provide the correct PartyId to call this service.|
|`IndirectLiabilityInfo.PartyKeys.PartyId`||  |
|`IndirectLiabilityInfo.AddressIdent`||*Required<br>This field is required by service provider.|
|`IndirectLiabilityInfo.LiabilityType`|Guarantor<br>Indirect<br>GovernmentAgency<br>CoSigner|*Required<br>This field is required by service provider.|
|`IndirectLiabilityInfo.Liability`||Application should provide either LiabilityPercent or LiabilityAmt while creating the Indirect Liability record on the Loan/Line and also, validate the sum of LiabilityPercent/LiabilityAmt figures being sent across the Parties. This is to ensure that semantically correct values are sent in request as validation of percentage/amount figure on the IndirectLiability is not supported.|
|`IndirectLiabilityInfo.Liability.LiabilityPercent`||  |
|`IndirectLiabilityInfo.Liability.LiabilityAmt`||  |
|`IndirectLiabilityInfo.ExpDt`||  |
|`IndirectLiabilityInfo.RelationshipMgr`||  |
|`IndirectLiabilityInfo.RelationshipMgr.RelationshipMgrIdent`||  |
|`IndirectLiabilityInfo.RelationshipMgr.RelationshipRole`|Officer|  |
|`IndirectLiabilityInfo.ReportGroupCode`||  |
|`IndirectLiabilityInfo.HandlingCodeOption`|UseDefault<br>StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>|*Required<br>This field is required by service provider.|
|`IndirectLiabilityInfo.HandlingCode`||This field is used for special routing of all correspondence involving limited liability. Handling Code is printed in the customer name and address area on all special forms.|
|`IndirectLiabilityInfo.OEDCode`|Director<br>Employee<br>ExecutiveOfficer<br>FamilyMember<br>FiservOfficerOrEmployee<br>MainShareHolder<br>Officer<br>RelInterest<br>SubsidaryEmployee<br>SvcCorpEmployee<br>Other<br>NoRelationship<br>OfficerOtherBank|  |
|`IndirectLiabilityInfo.DocDistributionOption`||  |
|`IndirectLiabilityInfo.NoticeData`||  |
|`IndirectLiabilityInfo.NoticeData.NoticeType`|PastDueNotice<br>BillingNotice<br>RatePmtChangeNotice<br>MaturityNotice<br>TicklerNotice<br>CreditBureauNotice<br>LoanAdvanceNotice|Valid values that can be sent are:<br>Past Due Notification-indicates whether past due notification is produced for the third party.<br><br>Billing Notification-indicates whether billing notification is produced for the third party.<br><br>RatePmtChangeNotice-refers to change notification and  indicates whether rate and payment change notification is produced for the third party.<br><br>Maturity Notification-indicates whether maturity notification is produced for the third party.<br><br>Tickler Notification-indicates whether tickler notification is produced for the third party.<br><br>Credit Bureau Notification-indicates whether the third party is reported to credit bureaus.<br><br>Advance Notification-indicates whether advance notification and transaction receipts are produced for the third party.<br>|
|`IndirectLiabilityInfo.NoticeData.NoticeOption`|GenerateNotice<br>NoNotice<br>PastDueAndRightToCure<br>NoFirstPastDueNotice|Values of NoNotice, PastDueAndRightToCure and NoFirstPastDueNotice are applicable for PastDueNotice type only. For all other notice types, GenerateNotice and NoNotice will be applicable.|
|`IndirectLiabilityInfo.SBAData`||  |
|`IndirectLiabilityInfo.SBAData.ApprovalDt`||  |
|`IndirectLiabilityInfo.SBAData.FeePct`||This field refers to the fees paid to SBA (Small Business Administration).|
|`IndirectLiabilityInfo.NextFinancialStmtDt`||  |
|`IndirectLiabilityInfo.FinancialStmtNoticeCode`||*Required<br>This field is required by service provider and indicates whether zero balance lines or notes are to be included.|
|`IndirectLiabilityInfo.ClientDefinedData`||Metadata such as flex data (field size) is required to be sent along with the user-entered indirect liability data.|
|`IndirectLiabilityInfo.ClientDefinedData.DataIdent`||This field refers to the field code.|
|`IndirectLiabilityInfo.ClientDefinedData.DataType`|Alpha<br>Currency <br>CurrencySymbol <br>Date <br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol |  |
|`IndirectLiabilityInfo.ClientDefinedData.Value`||  |
|`IndirectLiabilityInfo.ClientDefinedData.DataLength`||  |
|`IndirectLiabilityInfo.ClientDefinedData.ExpDt`||  |
|`IndirectLiabilityInfo.ClientDefinedData.Desc`||  |
|`IndirectLiabilityInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`IndirectLiabilityStatusRec`||  |
|`IndirectLiabilityStatusRec.IndirectLiabilityKeys.AcctKeys`||  |
|`IndirectLiabilityStatusRec.IndirectLiabilityKeys.AcctKeys.AcctId`||  |
|`IndirectLiabilityStatusRec.IndirectLiabilityKeys.AcctKeys.AcctType`|LOAN<br>CLOC|  |
|`IndirectLiabilityStatusRec.IndirectLiabilityKeys.IndirectLiabilityIdent`||  |
|`IndirectLiabilityStatusRec.IndirectLiabilityStatus`||  |
|`IndirectLiabilityStatusRec.IndirectLiabilityStatus.IndirectLiabilityStatusCode`|Valid|  |
|`IndirectLiabilityStatusRec.IndirectLiabilityStatus.EffDt`||  |
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
