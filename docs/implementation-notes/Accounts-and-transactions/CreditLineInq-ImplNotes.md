# Implementation Notes for Inq CreditLine
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Cleartouch, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`CreditLineSel`|||
|`CreditLineSel.CreditLineKeys`|||
|`CreditLineSel.CreditLineKeys.AcctKeys`|||
|`CreditLineSel.CreditLineKeys.AcctKeys.AcctId`||This field refers to the account number of line record.<br>|
|`CreditLineSel.CreditLineKeys.AcctKeys.AcctType`|CLOC||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`CreditLineRec`|||
|`CreditLineRec.CreditLineKeys`|||
|`CreditLineRec.CreditLineKeys.AcctKeys`|||
|`CreditLineRec.CreditLineKeys.AcctKeys.AcctId`||This field refers to the account number of line record.<br>|
|`CreditLineRec.CreditLineKeys.AcctKeys.AcctType`|CLOC||
|`CreditLineRec.CreditLineInfo`|||
|`CreditLineRec.CreditLineInfo.OpenDt`||This field refers to the date on which the line was established.<br>|
|`CreditLineRec.CreditLineInfo.LastContactDt`||This field refers to the date on which the line was last updated.<br>|
|`CreditLineRec.CreditLineInfo.DateData`|||
|`CreditLineRec.CreditLineInfo.DateData.DateType`|LastFileMaint<br>Accrual||
|`CreditLineRec.CreditLineInfo.DateData.DateValue`||This field refers to the date on which line was last modified using online maintenance.<br>|
|`CreditLineRec.CreditLineInfo.RelationshipMgr`|||
|`CreditLineRec.CreditLineInfo.RelationshipMgr.RelationshipMgrIdent`||Responsibility code value '0' indicates that an officer has not been assigned to the account.|
|`CreditLineRec.CreditLineInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to responsibility code, whereas referral officer refers to referral responsibility code.|
|`CreditLineRec.CreditLineInfo.OriginatingBranch`||This field refers to BranchNumber|
|`CreditLineRec.CreditLineInfo.ResponsibleBranch`||This field refers to AccountingGroup|
|`CreditLineRec.CreditLineInfo.AcctTitleOption`|||
|`CreditLineRec.CreditLineInfo.AcctTitle`||User-defined title is printed as an additional name line on all customer correspondences.|
|`CreditLineRec.CreditLineInfo.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|This field indicates the type of customer correspondence used to print handling messages.|
|`CreditLineRec.CreditLineInfo.HandlingCode`||This field refers to user-defined handling code to identify the handling message printed in customer name and address area on the forms.|
|`CreditLineRec.CreditLineInfo.AccountingMethod`|Class<br>CostCenter||
|`CreditLineRec.CreditLineInfo.AccountingValue`|||
|`CreditLineRec.CreditLineInfo.ClassCode`|||
|`CreditLineRec.CreditLineInfo.AcctTypeCode`|||
|`CreditLineRec.CreditLineInfo.ClientDefinedData`|||
|`CreditLineRec.CreditLineInfo.ClientDefinedData.DataIdent`||This field is metadata and refers to client-defined field code used for reference and reporting. Valid values are between 0-90000.|
|`CreditLineRec.CreditLineInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol||
|`CreditLineRec.CreditLineInfo.ClientDefinedData.Value`|||
|`CreditLineRec.CreditLineInfo.ClientDefinedData.DataLength`|||
|`CreditLineRec.CreditLineInfo.ClientDefinedData.ExpDt`||Expiration date as entered by the user.|
|`CreditLineRec.CreditLineInfo.ClientDefinedData.Desc`||This field is a metadata and refers to the label that appears for the field.|
|`CreditLineRec.CreditLineInfo.ClientDefinedData.RequiredFlag`|true <br>false|This field is a metadata.<br>If value is:<br>- True = Data is required <br>- False = Data is not required.|
|`CreditLineRec.CreditLineInfo.AcctStmtData`|||
|`CreditLineRec.CreditLineInfo.AcctStmtData.NextStmtDt`|||
|`CreditLineRec.CreditLineInfo.AcctStmtData.StmtPrepCode`||This field controls the timing of financial statement request production including notice generation and tickler reporting.|
|`CreditLineRec.CreditLineInfo.AcctBal`|||
|`CreditLineRec.CreditLineInfo.AcctBal.BalType`|ChargeOff<br>Principal<br>AvailCredit<br>DirectLiability<br>Guaranteed<br>IndirectLiability<br>InterestDue<br>PartChargeOff<br>PartInterestDue<br>PartPrincipal<br>Secured<br>Unsecured<br>PledgedAmount||
|`CreditLineRec.CreditLineInfo.AcctBal.CurAmt`|||
|`CreditLineRec.CreditLineInfo.AcctBal.CurAmt.Amt`|||
|`CreditLineRec.CreditLineInfo.AcctBal.CurAmt.CurCode`|||
|`CreditLineRec.CreditLineInfo.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`CreditLineRec.CreditLineInfo.AcctBal.CurAmt.CurCode.CurCodeValue`|||
|`CreditLineRec.CreditLineInfo.AcctPeriodData`|||
|`CreditLineRec.CreditLineInfo.AcctPeriodData.AcctAmtType`|AvgAvail||
|`CreditLineRec.CreditLineInfo.AcctPeriodData.AcctPeriodType`|PriorYr<br>YTD<br>PrevToPriorYr||
|`CreditLineRec.CreditLineInfo.AcctPeriodData.LastOccurInd`|||
|`CreditLineRec.CreditLineInfo.AcctPeriodData.Amt`|||
|`CreditLineRec.CreditLineInfo.AcctPeriodData.Rate`|||
|`CreditLineRec.CreditLineInfo.PostAddr`||Primary and secondary address share the same address identification record.<br>EFX parses the address associated to an account in two type of records namely, Primary (Mailing) address and Secondary (Seasonal) address.|
|`CreditLineRec.CreditLineInfo.PostAddr.AddressIdent`|||
|`CreditLineRec.CreditLineInfo.PostAddr.AddrUse`|Inquiry<br>Stmt||
|`CreditLineRec.CreditLineInfo.PostAddr.AddrFormatType`|Label||
|`CreditLineRec.CreditLineInfo.PostAddr.Addr1`|||
|`CreditLineRec.CreditLineInfo.PostAddr.Addr2`|||
|`CreditLineRec.CreditLineInfo.PostAddr.City`|||
|`CreditLineRec.CreditLineInfo.PostAddr.StateProv`|||
|`CreditLineRec.CreditLineInfo.PostAddr.PostalCode`||This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code is optional and if not present, can be represented with value as '0000' (For example, 32714-1234 or 32714-0000). Additional code of four digits provides a more specific location within a given ZIP code.<br>|
|`CreditLineRec.CreditLineInfo.PostAddr.CountryCode`|||
|`CreditLineRec.CreditLineInfo.PostAddr.CountryCode.CountryCodeSource`|||
|`CreditLineRec.CreditLineInfo.PostAddr.CountryCode.CountryCodeValue`||Country code values for postal address are client-defined.|
|`CreditLineRec.CreditLineInfo.PostAddr.AddrType`|Primary<br>Secondary||
|`CreditLineRec.CreditLineInfo.PostAddr.TimeFrame`|||
|`CreditLineRec.CreditLineInfo.PostAddr.TimeFrame.StartDt`||Secondary address is used every year from date mentioned in this field until secondary address relationship is removed. Start date and day of the month format is recorded.|
|`CreditLineRec.CreditLineInfo.PostAddr.TimeFrame.EndDt`||This field refers to the end date of seasonal address. End date in month and day of the month formats are recorded.<br>Secondary address is used every year through date mentioned in this field until secondary address relationship is removed.|
|`CreditLineRec.CreditLineInfo.PostAddr.Retention`|True<br>False|This field refers to the address retention code for mailing address, to indicate if the address is automatically deleted when accounts, tax addenda or relationships are not attached to the address.|
|`CreditLineRec.CreditLineInfo.PostAddr.CensusTract`|||
|`CreditLineRec.CreditLineInfo.PostAddr.CensusBlock`|||
|`CreditLineRec.CreditLineInfo.PostAddr.ForeignFlag`|true<br>false||
|`CreditLineRec.CreditLineInfo.PostAddr.HandlingCode`||This field indicates if the special routing occurs for customer notification and statement forms.|
|`CreditLineRec.CreditLineInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|This field indicates the type of customer correspondence used to print handling messages.|
|`CreditLineRec.CreditLineInfo.PostAddr.MSACode`|||
|`CreditLineRec.CreditLineInfo.NAICS`|||
|`CreditLineRec.CreditLineInfo.CostCenter`|||
|`CreditLineRec.CreditLineInfo.RetentionOption`|DoNotRetain<br>Retain|This field indicates if the lines are retained or automatically deleted.|
|`CreditLineRec.CreditLineInfo.AcctMemoData`|||
|`CreditLineRec.CreditLineInfo.AcctMemoData.AcctMemoType`|Warning||
|`CreditLineRec.CreditLineInfo.AcctMemoData.AcctMemoText`|||
|`CreditLineRec.CreditLineInfo.CreditLineData`|||
|`CreditLineRec.CreditLineInfo.CreditLineData.CreditLineLimitAmt`|||
|`CreditLineRec.CreditLineInfo.CreditLineData.CreditLineLimitAmt.Amt`||This field indicates whether the maximum credit amount stated is anticipated or fixed.|
|`CreditLineRec.CreditLineInfo.CreditLineData.CreditLineLimitAmt.CurCode`|||
|`CreditLineRec.CreditLineInfo.CreditLineData.CreditLineLimitAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`CreditLineRec.CreditLineInfo.CreditLineData.CreditLineLimitAmt.CurCode.CurCodeValue`|||
|`CreditLineRec.CreditLineInfo.CreditLineData.NextReviewDt`|||
|`CreditLineRec.CreditLineInfo.MaxCreditCode`||This field indicates whether the maximum credit amount stated is anticipated or fixed, and whether it is based upon the gross balance or the net.|
|`CreditLineRec.CreditLineInfo.LTVPct`|||
|`CreditLineRec.CreditLineInfo.RunningLTVPct`|||
|`CreditLineRec.CreditLineInfo.TotalLTVPct`|||
|`CreditLineRec.CreditLineInfo.CreditLineCode`||This field refers to a four-digit number used to evaluate the performance of a borrower in terms of collectability, timeliness of payment, or any other client-defined criteria. Values can be defined as data descriptions in the administrator program.|
|`CreditLineRec.CreditLineInfo.DailyAccrualFactor`|||
|`CreditLineRec.CreditLineInfo.PartDailyAccrualFactor`|||
|`CreditLineRec.CreditLineInfo.CensusTract`|||
|`CreditLineRec.CreditLineInfo.MSACode`|||
|`CreditLineRec.CreditLineStatus`|||
|`CreditLineRec.CreditLineStatus.CreditLineStatusCode`|Valid||
|`CreditLineRec.CreditLineStatus.EffDt`|||
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
