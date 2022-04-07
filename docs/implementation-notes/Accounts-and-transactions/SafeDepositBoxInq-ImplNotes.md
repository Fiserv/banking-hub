# Implementation Notes for SafeDepositBox Inq
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
|`SafeDepositBoxSel`||    |
|`SafeDepositBoxSel.SafeDepositBoxKeys`||    |
|`SafeDepositBoxSel.SafeDepositBoxKeys.AcctId`||    |
|`SafeDepositBoxSel.SafeDepositBoxKeys.AcctType`|SDB|    |
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||    |
|`SafeDepositBoxRec`||    |
|`SafeDepositBoxRec.SafeDepositBoxKeys`|||
|`SafeDepositBoxRec.SafeDepositBoxKeys.AcctId`|||
|`SafeDepositBoxRec.SafeDepositBoxKeys.AcctType`|SDB||
|`SafeDepositBoxRec.SafeDepositBoxInfo`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxDtlStatus`|Active<br>Closed<br>PendingClosed|This field indicates if the account is active or in a closing process.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxDtlStatusEnumDesc`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxDtlStatusDt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctPref`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctPref.Language`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctIdent`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctIdent.AcctIdentType`|PORT|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctIdent.AcctIdentValue`||This field refers to a portfolio to which the safe deposit box account is associated.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.ProductIdent`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxDesc`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxNum`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxSizeCode`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxRentTypeCode`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.OpenDt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.RelationshipMgr`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.RelationshipMgr.RelationshipMgrIdent`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.RelationshipMgr.RelationshipRole`|Officer<br>SecondOfficer<br>ReferralOfficer<br>|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxRentAmt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxRentAmt.Amt`||This field refers to the annual rent amount that overrides the amount calculated using the rent code and the annual charge specifications.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxRentAmt.CurCode`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxRentAmt.CurCode.CurCodeType`|ISO4217-Alpha|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxRentAmt.CurCode.CurCodeValue`|USD|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxDiscountCode`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxDiscountAmt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxDiscountAmt.Amt`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxDiscountAmt.CurCode`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxDiscountAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`SafeDepositBoxRec.SafeDepositBoxInfo.BoxDiscountAmt.CurCode.CurCodeValue`|USD||
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.BillingMethod`|ACHXferDDA<br>ACHXferSDA<br>BillingNotice<br>DirectDebitDDA<br>DirectDebitSDA<br>None<br>NoCharge<br><br><br>|This field indicates the billing method of rent.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.FromAcctKeys`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.FromAcctKeys.AcctId`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.FromAcctKeys.AcctType`|DDA<br>SDA||
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.FromAcctKeys.FIIdent`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.ACHPayerId`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.Memo`||This field contains the description of ACH transaction.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.BillingFrequency`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.BillingFrequency.RecurType`|Monthly<br>Yearly<br>Quarterly<br>SemiYearly<br>None|This field defines the billing frequency to a customer for use of safe deposit box.<br>Values can be defined as:<br>Monthly - RecurType="Monthly" and RecurInterval='1'<br>Quaterly - RecurType="Quaterly" and RecurInterval='1'<br>Semiannually - RecurType="Semiannually" and RecurInterval='1'<br>Annually - RecurType="Annually" and RecurInterval='1'|
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.BillingFrequency.RecurInterval`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BillingInstruction.NextBillingDt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.ClosedDt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.LastContactDt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.EscheatDt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.DateData`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.DateData.DateType`|LastFileMaint<br>|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.DateData.DateValue`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.OriginatingBranch`||This field refers to a branch where safe deposit box is assigned. Only branches identified in PRM Institution Specifications are accepted.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.OriginatingBranchEnumDesc`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.ResponsibleBranch`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.NicknameOption`|Printed<br>NoPrinted|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.Nickname`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctTitleOption`||This field indicates if the Account Title is printed before or after the account name lines.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctTitle`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.HandlingCodeOption`|Statements<br>StatementsNotices<br>Notices<br>DoNotPrint<br>UsePortfolio|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.HandlingCode`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.OEDCode`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AccountingMethod`|Class<br>CostCenter<br>BoxRentCode|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AccountingValue`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.ClassCode`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctBal`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctBal.BalType`|RentDue<br>LateFee<br>FeesDue|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctBal.CurAmt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctBal.CurAmt.Amt`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctBal.CurAmt.CurCode`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctBal.CurAmt.CurCode.CurCodeValue`|USD||
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctPeriodData`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctPeriodData.AcctAmtType`|PastDue<br>RentEarned<br>RentPaid<br>LateChargePaid<br>Discount<br><br>|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctPeriodData.AcctPeriodType`|OverEqual01 <br>OverEqual30<br>OverEqual60<br>OverEqual90<br>YTD<br>PriorYr<br>|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctPeriodData.LastOccurInd`|true<br>false|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctPeriodData.Amt`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctPeriodData.Count`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.NameIdent`||Only 3 name identifiers can be included for each Address Type.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.AddressIdent`||This field is shared by both Primary and Seasonal address types.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|Value of this field for:<br>- Primary and related seasonal address of an account is "Inquiry"<br>- Secondary and related seasonal address of an account is "Mailing"<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if account can have different inquiry and mailing address/ names.<br>- If parameter is set to N, both inquiry and mailing addresses are same and ESF returns only inquiry address.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different and ESF returns both in the response.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.AddrFormatType`|Label|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.FullName1`||This field refers to first name of the customer for inquiry and mailing purpose.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.FullName2`||This field refers to second name of the customer for inquiry and mailing purpose.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.FullName3`||This field refers to third name of the customer for inquiry and mailing purpose.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.Addr1`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.Addr2`||This field is applicable if enabled in the CIS Miscellaneous (Institution) specifications.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.City`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.StateProv`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.PostalCode`||This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code is optional and if not present, can be represented with value as '0000'. For example, 32714-1234 or 32714-0000. Additional code of four digits provides a more specific location within a given ZIP code.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.CountryCode`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.CountryCode.CountryCodeValue`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.CountryCode.CountryCodeValueEnumDesc`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.AddrType`|Primary<br>Seasonal<br>Secondary|One account can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.TimeFrame`||This field is applicable only for seasonal address type.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.TimeFrame.StartDt`||This field is applicable only for seasonal address type.<br>Seasonal address begins and ends on same start date/end date every year. ESF displays value of 9999 in the response for start year of seasonal address, whereas month and day of the month will display the actual start date.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.TimeFrame.EndDt`||This field is applicable only for seasonal address type.<br>Seasonal address begins and ends on same start date/end date every year. ESF displays value of 9999 in the response for end year of seasonal address, whereas month and day of the month will display the actual end date.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.Retention`|true<br>false|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.CensusTract`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.CensusBlock`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.ForeignFlag`|true<br>false|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.HandlingCode`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio||
|`SafeDepositBoxRec.SafeDepositBoxInfo.PostAddr.MSACode`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.NoticeData`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.NoticeData.NoticeType`|DrillNotice<br>RegularNotice|Value of DrillNotice indicates whether a notice will be generated to inform the customer that the box is to be drilled to open.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.NoticeData.NoticeOption`|GenerateNotice<br>NoNotice|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.Fee`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.Fee.FeePlan`||Late charge code links the late charge calculations of an account to SDB late charge specifications. Value of '0' in late charge code indicate that an account is not subject to late charges, whereas value of '01' to '20' indicate account subjected for late charges.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.Fee.FeeType`|LateFee|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.Fee.FeeWaiver.WaiverCode`||This field indicates whether sales taxes are waived on automatic safe deposit box rent fees.|
|`SafeDepositBoxRec.SafeDepositBoxInfo.CreditRisk`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.CreditRisk.RiskCategory`|RisScore1<br>RisScore2|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.CreditRisk.InternalScore`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.RiskRanking`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.TrnRestriction`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.TrnRestrictionOvrd`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.ReportGroupCode`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.DocDistributionOption`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.CostCenter`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CompositeCurAmtType`|Rent<br>Tax|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CompositeSeqId`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CurAmt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CurAmt.Amt`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CurAmt.CurCode`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeValue`|USD||
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt.DueDt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.BilledPmt.PaidInd`|true<br>false|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.LastPmt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.LastPmt.PmtCompositeAmt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.LastPmt.PmtCompositeAmt.CurAmt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.LastPmt.PmtCompositeAmt.CurAmt.Amt`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.LastPmt.PmtCompositeAmt.CurAmt.CurCode`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.LastPmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`SafeDepositBoxRec.SafeDepositBoxInfo.LastPmt.PmtCompositeAmt.CurAmt.CurCode.CurCodeValue`|USD||
|`SafeDepositBoxRec.SafeDepositBoxInfo.LastPmt.PmtDt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.NumSignatureReq`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctTaxData`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctTaxData.TaxType`|SalesTax|    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctTaxData.CurAmt`||    |
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctTaxData.CurAmt.Amt`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctTaxData.CurAmt.CurCode`|||
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctTaxData.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctTaxData.CurAmt.CurCode.CurCodeValue`|USD||
|`SafeDepositBoxRec.SafeDepositBoxInfo.AcctTaxData.WaiveTaxInd`|true<br>false|    |
|`SafeDepositBoxRec.SafeDepositBoxStatus`||    |
|`SafeDepositBoxRec.SafeDepositBoxStatus.SafeDepositBoxStatusCode`|Valid|    |
|`SafeDepositBoxRec.SafeDepositBoxStatus.EffDt`||    |
<!-- type: tab-end -->
