# Implementation Notes for Add SafeDepositBox
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
|`OvrdExceptionData`||    |
|`PartyAcctRelInfo`||***Required**<br>Information provided in this aggregate is used to create a relationship between party and safe deposit box. One PartyAcctRelInfo aggregate should be provided for each Party being associated to the safe deposit box account. Each Party can have more than one relationship (Power of Attorney or Trustee relationship) to the safe deposit box account. If party has more than one relationship to the safe deposit box account, PartyAcctRelData aggregate should be provided multiple times within the PartyAcctRelInfo aggregate. |
|`PartyAcctRelInfo.PartyRef`||    |
|`PartyAcctRelInfo.PartyRef.PartyKeys`||    |
|`PartyAcctRelInfo.PartyRef.PartyKeys.PartyId`||***Required**<br>This field refers to unique identifier of party associated with safe deposit box.|
|`PartyAcctRelInfo.PartyAcctRelData`||***Required**<br>Multiple PartyAcctRelData aggregates can be provided in the request if, party is intended to have multiple relationships with the safe deposit box account.|
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelType`|Owner<br>Signer<br>OwnerSigner<br>JointTenancy<br>Executor<br>Trustee<br>Borrower<br>CoBorrower<br>Custodian<br>DoingBusinessAs<br>Fiduciary|In addition to the values defined by service provider, financial institutions can create user defined relationship types. Each party should have at least one relationship type with the associated safe deposit box account, whereas party can have multiple relationship types with the safe deposit box account.|
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelOrder`|First<br>Second<br>Third<br>Other|***Required**<br>Parties having first, second and third relationship order are considered to be the main names and, only one party can be associated with first/second/third relationship order on the safe deposit box account. Relationship order value of 'Other' is commonly used for relationships other than OwnerSigner, Signer and Owner. One party can have multiple 'Other' type of relationship orders on safe deposit box account. If Mailing Name Option parameter is set up at financial institution, then first, second and third names can be used for inquiry or account related mailing purpose. If Mailing Name Option parameter is set to Y, safe deposit box account can have up to 3 names for mailing purpose which can be provided in PostAdd aggregate.|
|`PartyAcctRelInfo.OwnerInd`|true<br>false|ESF has introduced a new data element - PartyAcctRelOrder to identify first 3 names displayed on the safe deposit box account. This element is available in ESF release prior to 9.2 and will be deprecated in future.|
|`PartyAcctRelInfo.TaxReportingOwnerInd`|true<br>false|***Required**<br>This field identifies the party that has tax responsibility of an account. At least one tax relationship is required to create an account and, there cannot be more than one tax relationships associated to an account. If primary tax reporting indicator is not provided, by default, first party will be considered as tax reporting owner.|
|`SafeDepositBoxInfo`|||
|`SafeDepositBoxInfo.BoxDtlStatus`|Active<br>Closed<br>PendingClosed||
|`SafeDepositBoxInfo.AcctPref`|||
|`SafeDepositBoxInfo.AcctPref.Language`|UsePortfolio<br>English<br>Spanish<br>||
|`SafeDepositBoxInfo.AcctIdent`|||
|`SafeDepositBoxInfo.AcctIdent.AcctIdentType`|PORT<br>AcctNum||
|`SafeDepositBoxInfo.AcctIdent.AcctIdentValue`|||
|`SafeDepositBoxInfo.ProductIdent`|||
|`SafeDepositBoxInfo.BoxNum`|||
|`SafeDepositBoxInfo.BoxSizeCode`|||
|`SafeDepositBoxInfo.BoxRentTypeCode`|||
|`SafeDepositBoxInfo.OpenDt`|||
|`SafeDepositBoxInfo.RelationshipMgr`|||
|`SafeDepositBoxInfo.RelationshipMgr.RelationshipMgrIdent`|||
|`SafeDepositBoxInfo.RelationshipMgr.RelationshipRole`|Officer<br>SecondOfficer<br>ReferralOfficer||
|`SafeDepositBoxInfo.BoxRentAmt`|||
|`SafeDepositBoxInfo.BoxRentAmt.Amt`|||
|`SafeDepositBoxInfo.BoxRentAmt.CurCode`|||
|`SafeDepositBoxInfo.BoxRentAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`SafeDepositBoxInfo.BoxRentAmt.CurCode.CurCodeValue`|USD||
|`SafeDepositBoxInfo.BoxDiscountCode`|||
|`SafeDepositBoxInfo.BoxDiscountAmt`|||
|`SafeDepositBoxInfo.BoxDiscountAmt.Amt`|||
|`SafeDepositBoxInfo.BoxDiscountAmt.CurCode`|||
|`SafeDepositBoxInfo.BoxDiscountAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`SafeDepositBoxInfo.BoxDiscountAmt.CurCode.CurCodeValue`|USD||
|`SafeDepositBoxInfo.BillingInstruction`|||
|`SafeDepositBoxInfo.BillingInstruction.BillingMethod`|BillingNotice<br>DirectDebitDDA<br>DirectDebitSDA<br>None<br>NoCharge<br>ACHXferDDA<br>ACHXferSDA||
|`SafeDepositBoxInfo.BillingInstruction.FromAcctKeys`|||
|`SafeDepositBoxInfo.BillingInstruction.FromAcctKeys.AcctId`|||
|`SafeDepositBoxInfo.BillingInstruction.FromAcctKeys.AcctType`|DDA<br>SDA||
|`SafeDepositBoxInfo.BillingInstruction.FromAcctKeys.FIIdent`|||
|`SafeDepositBoxInfo.BillingInstruction.ACHPayerId`|||
|`SafeDepositBoxInfo.BillingInstruction.Memo`|||
|`SafeDepositBoxInfo.BillingInstruction.BillingFrequency`|||
|`SafeDepositBoxInfo.BillingInstruction.BillingFrequency.RecurType`|Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>None<br>||
|`SafeDepositBoxInfo.BillingInstruction.BillingFrequency.RecurInterval`|||
|`SafeDepositBoxInfo.BillingInstruction.NextBillingDt`|||
|`SafeDepositBoxInfo.LastContactDt`|||
|`SafeDepositBoxInfo.EscheatDt`|||
|`SafeDepositBoxInfo.OriginatingBranch`|||
|`SafeDepositBoxInfo.ResponsibleBranch`|||
|`SafeDepositBoxInfo.NicknameOption`|Printed<br>NoPrinted||
|`SafeDepositBoxInfo.Nickname`|||
|`SafeDepositBoxInfo.AcctTitleOption`|||
|`SafeDepositBoxInfo.AcctTitle`|||
|`SafeDepositBoxInfo.HandlingCodeOption`|Statements<br>StatementsNotices<br>Notices<br>DoNotPrint<br>UsePortfolio||
|`SafeDepositBoxInfo.HandlingCode`|||
|`SafeDepositBoxInfo.OEDCode`|||
|`SafeDepositBoxInfo.AccountingMethod`|Class<br>CostCenter<br>AcctType||
|`SafeDepositBoxInfo.ClassCode`|||
|`SafeDepositBoxInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone||
|`SafeDepositBoxInfo.PostAddr`|||
|`SafeDepositBoxInfo.PostAddr.OpenDt`|||
|`SafeDepositBoxInfo.PostAddr.RelationshipMgr`||    |
|`SafeDepositBoxInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`||This field is not applicable for seasonal address type. Vales of this field are user-defined.|
|`SafeDepositBoxInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to responsibility code and referral officer refers to referral responsibility code.|
|`SafeDepositBoxInfo.PostAddr.OriginatingBranch`||***Required**<br>This field is required if new address record is to be created and values in this field are user-defined.|
|`SafeDepositBoxInfo.PostAddr.ResponsibleBranch`||This field refers to the accounting branch associated to address record and does not apply to seasonal address type. Values are user-defined. |
|`SafeDepositBoxInfo.PostAddr.NameIdent`|||
|`SafeDepositBoxInfo.PostAddr.AddressIdent`|||
|`SafeDepositBoxInfo.PostAddr.AddrUse`|Inquiry<br>Mailing||
|`SafeDepositBoxInfo.PostAddr.AddrFormatType`|Label||
|`SafeDepositBoxInfo.PostAddr.Addr1`|||
|`SafeDepositBoxInfo.PostAddr.Addr2`|||
|`SafeDepositBoxInfo.PostAddr.City`|||
|`SafeDepositBoxInfo.PostAddr.StateProv`|||
|`SafeDepositBoxInfo.PostAddr.PostalCode`|||
|`SafeDepositBoxInfo.PostAddr.CountryCode`|||
|`SafeDepositBoxInfo.PostAddr.CountryCode.CountryCodeSource`|||
|`SafeDepositBoxInfo.PostAddr.CountryCode.CountryCodeValue`|||
|`SafeDepositBoxInfo.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal||
|`SafeDepositBoxInfo.PostAddr.TimeFrame`|||
|`SafeDepositBoxInfo.PostAddr.TimeFrame.StartDt`|||
|`SafeDepositBoxInfo.PostAddr.TimeFrame.EndDt`|||
|`SafeDepositBoxInfo.PostAddr.Retention`|true<br>false||
|`SafeDepositBoxInfo.PostAddr.CensusTract`|||
|`SafeDepositBoxInfo.PostAddr.CensusBlock`|||
|`SafeDepositBoxInfo.PostAddr.ForeignFlag`|true<br>false||
|`SafeDepositBoxInfo.PostAddr.HandlingCode`||This field indicates special routing information for customer correspondence. Values are client-defined.|
|`SafeDepositBoxInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint||
|`SafeDepositBoxInfo.PostAddr.MSACode`|||
|`SafeDepositBoxInfo.NoticeData`|||
|`SafeDepositBoxInfo.NoticeData.NoticeType`|RegularNotice<br>DrillNotice<br>||
|`SafeDepositBoxInfo.NoticeData.NoticeOption`|||
|`SafeDepositBoxInfo.Fee`|||
|`SafeDepositBoxInfo.Fee.FeePlan`|||
|`SafeDepositBoxInfo.Fee.FeeType`|LateFee<br>||
|`SafeDepositBoxInfo.CreditRisk`|||
|`SafeDepositBoxInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2||
|`SafeDepositBoxInfo.CreditRisk.InternalScore`|||
|`SafeDepositBoxInfo.RiskRanking`|||
|`SafeDepositBoxInfo.TrnRestriction`|||
|`SafeDepositBoxInfo.TrnRestrictionOvrd`|||
|`SafeDepositBoxInfo.ReportGroupCode`|||
|`SafeDepositBoxInfo.DocDistributionOption`|||
|`SafeDepositBoxInfo.CostCenter`|||
|`SafeDepositBoxInfo.BilledPmt`|||
|`SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt`|||
|`SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CurAmt`|||
|`SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CurAmt.Amt`|||
|`SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CurAmt.CurCode`|||
|`SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeType`|||
|`SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeValue`|USD||
|`SafeDepositBoxInfo.BilledPmt.DueDt`|||
|`SafeDepositBoxInfo.BilledPmt.PaidInd`|true<br>false||
|`SafeDepositBoxInfo.NumSignatureReq`|||
|`SafeDepositBoxInfo.AcctTaxData`|||
|`SafeDepositBoxInfo.AcctTaxData.TaxType`|SalesTax||
|`SafeDepositBoxInfo.AcctTaxData.WaiveTaxInd`|true<br>false||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||    |
|`SafeDepositBoxStatusRec`||    |
|`SafeDepositBoxStatusRec.SafeDepositBoxKeys`|||
|`SafeDepositBoxStatusRec.SafeDepositBoxKeys.AcctId`|||
|`SafeDepositBoxStatusRec.SafeDepositBoxKeys.AcctType`|SDB<br>||
|`SafeDepositBoxStatusRec.SafeDepositBoxStatus`|||
|`SafeDepositBoxStatusRec.SafeDepositBoxStatus.SafeDepositBoxStatusCode`|Valid||
|`SafeDepositBoxStatusRec.SafeDepositBoxStatus.EffDt`|||
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
