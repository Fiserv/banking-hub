# Implementation Notes for Inq-CDA Acct
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.

<!-- 
type: tab 
titles: Premier, , ,Precision, Signature, Cleartouch, DNA, 
-->

<!-- 
type: tab 
titles: CDA, DDA, SDA
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`AcctSel`||  |
|`AcctSel.AcctKeys`||  |
|`AcctSel.AcctKeys.AcctId`||  |
|`AcctSel.AcctKeys.AcctType`|CDA<br>|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||This aggregate is returned in the response and indicates the high-level status code and description of the operation. Error details/code are returned in case of a failure.|
|`AcctRec`||  |
|`AcctRec.AcctKeys`||  |
|`AcctRec.AcctKeys.AcctId`||  |
|`AcctRec.AcctKeys.AcctType`|CDA<br>|  |
|`AcctRec.DepositAcctInfo`||  |
|`AcctRec.DepositAcctInfo.AcctDtlStatus`||Field refers to the status code of an account and values are user-defined.|
|`AcctRec.DepositAcctInfo.AcctDtlStatusEnumDesc`||  |
|`AcctRec.DepositAcctInfo.AcctDtlStatusDt`||  |
|`AcctRec.DepositAcctInfo.AcctPref`||  |
|`AcctRec.DepositAcctInfo.AcctPref.Language`|UsePortfolio<br>English<br>Spanish<br>|  |
|`AcctRec.DepositAcctInfo.AcctIdent`||  |
|`AcctRec.DepositAcctInfo.AcctIdent.AcctIdentType`|PORT|Value of PORT refers to portfolio. Field returns the portfolio account number that is associated to CDA account.|
|`AcctRec.DepositAcctInfo.AcctIdent.AcctIdentValue`||  |
|`AcctRec.DepositAcctInfo.ProductIdent`||  |
|`AcctRec.DepositAcctInfo.Desc`||  |
|`AcctRec.DepositAcctInfo.TaxIncentiveType`|None<br>HSAFamily<br>HSAIndividual|  |
|`AcctRec.DepositAcctInfo.TaxIncentiveTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.InitialAmount`||  |
|`AcctRec.DepositAcctInfo.InitialAmount.Amt`||  |
|`AcctRec.DepositAcctInfo.InitialAmount.CurCode`||  |
|`AcctRec.DepositAcctInfo.InitialAmount.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctRec.DepositAcctInfo.InitialAmount.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`AcctRec.DepositAcctInfo.OpenDt`||  |
|`AcctRec.DepositAcctInfo.ClosedDt`||  |
|`AcctRec.DepositAcctInfo.BalanceAtClosingAmt`||  |
|`AcctRec.DepositAcctInfo.BalanceAtClosingAmt.Amt`||  |
|`AcctRec.DepositAcctInfo.BalanceAtClosingAmt.CurCode`||  |
|`AcctRec.DepositAcctInfo.BalanceAtClosingAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctRec.DepositAcctInfo.BalanceAtClosingAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`AcctRec.DepositAcctInfo.Term`||  |
|`AcctRec.DepositAcctInfo.Term.Count`||  |
|`AcctRec.DepositAcctInfo.Term.TermUnits`|Days<br>Months<br>|  |
|`AcctRec.DepositAcctInfo.Term.TermUnitsEnumDesc`||  |
|`AcctRec.DepositAcctInfo.TermToMaturity`||  |
|`AcctRec.DepositAcctInfo.TermToMaturity.Count`||Value indicates the remaining number of monthns between current processing date and maturity date.|
|`AcctRec.DepositAcctInfo.TermToMaturity.TermUnits`|Months|  |
|`AcctRec.DepositAcctInfo.MaturityDt`||  |
|`AcctRec.DepositAcctInfo.LastContactDt`||  |
|`AcctRec.DepositAcctInfo.DateData`||  |
|`AcctRec.DepositAcctInfo.DateData.DateType`|LastFileMaint<br>LastTrn<br>LastPrc<br>Accrual<br>IRALastStmt<br>OldestHold|Values for this field indicate following:<br><br>- LastFileMaint refers to Date Last Changed - The date on which certificate was last modified using online maintenance<br><br>- LastPrc refers to Date Last Updated - Date on which certificate was last updated<br><br>- LastTrn refers to Date Last Transaction Activity - Last date on which account was either credited or debited.<br><br>- Accrual refers to Date Accrued Through - The date through which the certificates earned interest is accrued<br><br>- IRALastStmt refers to Date Last IRA Statement -The last date on which certificate received an IRA statement.<br><br>- OldestHold refers to the date of the oldest record in the CODA Hold Addenda.|
|`AcctRec.DepositAcctInfo.DateData.DateValue`||  |
|`AcctRec.DepositAcctInfo.RelationshipMgr`||  |
|`AcctRec.DepositAcctInfo.RelationshipMgr.RelationshipMgrIdent`||Value of '0' indicates that an officer is not assigned to an account.|
|`AcctRec.DepositAcctInfo.RelationshipMgr.RelationshipMgrIdentEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RelationshipMgr.RelationshipRole`|Officer<br>SecondOfficer<br>ReferralOfficer|Values of indicate following:<br>- Officer refers to Responsibility Code.<br>- SecondOfficer refers to Opened by Responsibility Code.<br>- Referral Officer refers to Referral Responsibility Code.|
|`AcctRec.DepositAcctInfo.OriginatingBranch`||OriginatingBranch refers to BranchNumber.|
|`AcctRec.DepositAcctInfo.OriginatingBranchEnumDesc`||  |
|`AcctRec.DepositAcctInfo.ResponsibleBranch`||ResponsibleBranch refers to AccountingGroup.|
|`AcctRec.DepositAcctInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`AcctRec.DepositAcctInfo.Nickname`||  |
|`AcctRec.DepositAcctInfo.AcctTitleOption`|NotPrinted<br>PrintBefore<br>PrintAfter|  |
|`AcctRec.DepositAcctInfo.AcctTitle`||User-defined title is printed as an additional name line on all customer correspondences.|
|`AcctRec.DepositAcctInfo.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|Field indicates the type of customer correspondence that prints handling messages.|
|`AcctRec.DepositAcctInfo.HandlingCode`||User-defined code to identify the handling message printed in the customer name and address area on the forms designated by the HandlingCodeOption.|
|`AcctRec.DepositAcctInfo.OEDCode`||Field refers to the employee/officer/director code to indicate whether an individual is employee, officer or director of institution. Code is primarily used as selection criteria for reporting and values are 1-9.|
|`AcctRec.DepositAcctInfo.OEDCodeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.AccountingMethod`|Class<br>CostCenter<br>AcctType|  |
|`AcctRec.DepositAcctInfo.AccountingValue`||  |
|`AcctRec.DepositAcctInfo.ClassCode`||  |
|`AcctRec.DepositAcctInfo.AcctTypeCode`||  |
|`AcctRec.DepositAcctInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|  |
|`AcctRec.DepositAcctInfo.ClientDefinedData`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.DataIdent`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.DataType`|Alpha<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.Value`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.DataLength`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.ExpDt`||If date is not defined in this field, flex data exists with an account for lifetime unitl the data is manually deleted.|
|`AcctRec.DepositAcctInfo.ClientDefinedData.Desc`||Label that appears for the field.|
|`AcctRec.DepositAcctInfo.ClientDefinedData.RequiredFlag`|true <br>false|  |
|`AcctRec.DepositAcctInfo.AcctStmtData`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurType`|Cycle|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurInterval`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtInd`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtOption`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.LastStmtDt`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.CombinedStmtIdent`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.CombinedStmtCode`|DoNotCombine<br>SecondaryDDA<br>SecondarySDA|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.SpecialStmtCode`|None<br>Transcript<br>FinalStmt<br>DropTransactions|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtGroup`||Used to indicate if an inquiry can be done to retrieve the relationship of an account with other accounts attached to a portfolio. This will indicate the combined statement relationship code.|
|`AcctRec.DepositAcctInfo.NoticeData`||  |
|`AcctRec.DepositAcctInfo.NoticeData.NoticeType`|RegularNotice<br>BalanceOnReceipt<br>IntNotice<br>MaturityNotice<br>RateChangeNotice<br><br>|Values indicate following:<br>- RegularNotice refers to Notification Option. <br>- BalanceOnReceipt refers to Receipt Balance Override.<br>- IntNotice refers to Interest Notice Override.<br>- MaturityNotice refers to Maturity Notice Override.<br>- RateChangeNotice refers to Rate Change Notice Override.|
|`AcctRec.DepositAcctInfo.NoticeData.NoticeOption`||  |
|`AcctRec.DepositAcctInfo.NoticeData.GenLastUpDtInd`|true<br>false|Field refers to change notification request code and indicates if the rate change notification was generated in last update.|
|`AcctRec.DepositAcctInfo.ProdIntRateId`||Field refers to deposit rate index.|
|`AcctRec.DepositAcctInfo.ProdIntRateIdEnumDesc`||  |
|`AcctRec.DepositAcctInfo.Rate`||  |
|`AcctRec.DepositAcctInfo.EffectiveRate`||  |
|`AcctRec.DepositAcctInfo.IntRateData`||  |
|`AcctRec.DepositAcctInfo.IntRateData.APYRecurType`|IntPmtFrequency<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>Weekly<br>BiWeekly<br>Maturity|Field refers to Reg DD Compound Frequency.|
|`AcctRec.DepositAcctInfo.IntRateData.AccrualMethod`|Simple<br>Daily<br>Continuous|Field refers to compounding code.|
|`AcctRec.DepositAcctInfo.IntRateData.AccrualMethodEnumDesc`||  |
|`AcctRec.DepositAcctInfo.IntRateData.DailyAccrual`|Daily365<br>Daily360<br>Current365<br>Current360<br>Equal365<br>Equal360|Field refers to interest method.|
|`AcctRec.DepositAcctInfo.IntRateData.DailyAccrualFactor`||  |
|`AcctRec.DepositAcctInfo.MaturityIntCalcData`||  |
|`AcctRec.DepositAcctInfo.MaturityIntCalcData.MaturityIntRateType`|CurrentRate <br>CurrentRateInPeriod<br>MaturityIntRate|  |
|`AcctRec.DepositAcctInfo.MaturityIntCalcData.MaturityIntRate`||  |
|`AcctRec.DepositAcctInfo.MaturityIntCalcData.MaturityIntRecurType`|Daily|Maturity rate period is expressed in days.|
|`AcctRec.DepositAcctInfo.MaturityIntCalcData.MaturityIntInterval`||  |
|`AcctRec.DepositAcctInfo.RateChangeData`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.RateChangeControl`|Fixed<br>StepFreq<br>IndexFreq<br><br>|Field indicates if the base rate is used and if the rate is fixed/variable.|
|`AcctRec.DepositAcctInfo.RateChangeData.RateChangeControlEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.VarianceFactorType`|Variance <br>None|  |
|`AcctRec.DepositAcctInfo.RateChangeData.RateVariance`||Field refers to the base adjuster/rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateVariance.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.EffDt`||***Conditionally Required**<br>Field is required if pending rate information is applicable on an account.<br>This field indicates the effective date of pending interest cycle and pending rate. Cycle and rate changes are effective after completion of current interest cycle, beginning with the first full cycle after the pending rate effective date.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.ProdIntRateId`||Field refers to pending deposit rate index. If value of '0' is received in the response, this indicates that pending interest on an account is not linked to the rate specification.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.VarianceFactorType`|Variance<br>Factor|  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.RateVariance`||Field refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateVariance.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.RateFactor`||Field refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateFactor.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurType`|Cycle|  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurInterval`||Field refers to the pending interest cycle that is pending frequency of interest credit to the customer.|
|`AcctRec.DepositAcctInfo.RateChangeData.IncreaseOnlyInd`|true<br>false|Field indicates if rate variances can increase/decrease base rate or can only increase base rate.<br>Values indicate following:<br>- False: Either increase or decrease<br>- True: Increase only|
|`AcctRec.DepositAcctInfo.RateChangeData.FloorRate`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.CeilingRate`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.RateChangeRecurType`|Maturity<br>Monthly<br>Weekly<br>Yearly<br>InterestCycle<br>None<br>Quarterly<br>Semiannually<br>BiWeekly<br>|Field if used in combination with RecurInterval refers to rate change frequency.|
|`AcctRec.DepositAcctInfo.RateChangeData.RateChangeRecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.RecurInterval`||Field refers to rate change frequency and used along with with RateChangeRecurType.|
|`AcctRec.DepositAcctInfo.RateChangeData.DayOfMonth`|1 thru 31|  |
|`AcctRec.DepositAcctInfo.RateChangeData.LeadDays`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.NextRateChangeDt`||  |
|`AcctRec.DepositAcctInfo.AcctBal`||  |
|`AcctRec.DepositAcctInfo.AcctBal.BalType`||  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt`||  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.Amt`||  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.CurCode`||  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`AcctRec.DepositAcctInfo.AcctPeriodData`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.AcctAmtType`|Credit<br>Debit<br>FederalWithhold<br>ForfeitureAmt<br>HSA<br>IntEarned<br>IntPaid<br>IntCarryOver<br>StateWithhold<br>Statement<br>IntPaidOut<br>AccrueOnBalance<br>IntReported<br>AggLedger<br>Principal|  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.AcctPeriodType`|CTD<br>LTD<br>YTD<br>PriorYr<br>AnniversaryTD<br>PriorCycle<br>MTD<br>PriorMonth<br>TotalInCycle<br>Anniversary<br>|  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.InPeriod`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.InPeriod.Count`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.InPeriod.Units`|Days|  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.LastOccurInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.Amt`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.Count`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.Rate`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.LastOccuranceDt`||  |
|`AcctRec.DepositAcctInfo.PostAddr`||  |
|`AcctRec.DepositAcctInfo.PostAddr.NameIdent`||Each AddressType can have up to 3 name identifiers.|
|`AcctRec.DepositAcctInfo.PostAddr.AddressIdent`||Unique address identifier is shared by primary and related seasonal address.|
|`AcctRec.DepositAcctInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if account can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only inquiry address is returned by ESF.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, ESF will return both in response.|
|`AcctRec.DepositAcctInfo.PostAddr.AddrUseEnumDesc`||  |
|`AcctRec.DepositAcctInfo.PostAddr.AddrFormatType`|Label|Service provider address type is label.|
|`AcctRec.DepositAcctInfo.PostAddr.FullName1`||Field refers to first name of the customer used for account mailing and enquiry purpose.|
|`AcctRec.DepositAcctInfo.PostAddr.FullName2`||  |
|`AcctRec.DepositAcctInfo.PostAddr.FullName3`||  |
|`AcctRec.DepositAcctInfo.PostAddr.Addr1`||***Conditionally Required**<br>To be provided in request if new address record is to be created.<br>First address line can be 30/40 characters long as per address length option defined under miscellaneous specification.<br>Optional values for name and address field length are:<br>- '0' indicates names and addresses up to 30 characters in length can be entered.<br>- '1' indicates names and addresses up to 40 characters in length can be entered.<br>- '2' indicates names and addresses up to 30 characters can be entered, and that two address lines are available.<br>- '3' indicates names and addresses up to 40 characters can be entered, and that two address lines are available.|
|`AcctRec.DepositAcctInfo.PostAddr.Addr2`||Addr2 is supported if enabled under address and name length option in the miscellaneous specifications.|
|`AcctRec.DepositAcctInfo.PostAddr.City`||  |
|`AcctRec.DepositAcctInfo.PostAddr.StateProv`||  |
|`AcctRec.DepositAcctInfo.PostAddr.PostalCode`||Postal Code provides information about the ZIP code, if Address is a United States address. It also provides Postal Code information, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they are will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Postal codes that are not ZIP codes are a string of characters.|
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode`||  |
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode.CountryCodeValue`||Country code values for postal address are client-defined.|
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode.CountryCodeValueEnumDesc`||  |
|`AcctRec.DepositAcctInfo.PostAddr.AddrType`|Primary<br>Seasonal<br>Secondary|Account can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.|
|`AcctRec.DepositAcctInfo.PostAddr.TimeFrame`||Field is applicable only if AddrType is seasonal.|
|`AcctRec.DepositAcctInfo.PostAddr.TimeFrame.StartDt`||Field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, month and day of month shows actual start date of seasonal address. ESF response displays year as 9999 for start year.|
|`AcctRec.DepositAcctInfo.PostAddr.TimeFrame.EndDt`||Field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, month and day of month shows actual end date of seasonal address. ESF response displays year as 9999 for end year.|
|`AcctRec.DepositAcctInfo.PostAddr.CensusTract`||  |
|`AcctRec.DepositAcctInfo.PostAddr.CensusBlock`||  |
|`AcctRec.DepositAcctInfo.PostAddr.ForeignFlag`|true<br>false|  |
|`AcctRec.DepositAcctInfo.PostAddr.HandlingCode`||Field indicates special routing information for customer correspondence. Values of this field are client-defined.|
|`AcctRec.DepositAcctInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>|Field is used to identify the type of customer correspondence that prints on handling messages as defined by HandlingCode.|
|`AcctRec.DepositAcctInfo.PostAddr.MSACode`||  |
|`AcctRec.DepositAcctInfo.TaxIdentType`|None<br>SSN<br>EIN<br>Foreign<br>ITIN<br>ATIN|  |
|`AcctRec.DepositAcctInfo.TaxIdent`||  |
|`AcctRec.DepositAcctInfo.TaxExempt`||Tax data from first party-to-account relationship (as sent by service provider) will be provided. Values are client-defined.|
|`AcctRec.DepositAcctInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`AcctRec.DepositAcctInfo.WithholdingOptionEnumDesc`||  |
|`AcctRec.DepositAcctInfo.WithholdingData`||Provides information about federal and state tax. This aggregate can be provided up to two times in the request.|
|`AcctRec.DepositAcctInfo.WithholdingData.WithholdingType`|FederalTax<br>StateTax|Value of FederalTax refers to the Federal Withholding Rate Override, and value of StateTax refers to State Withholding Rate Override.|
|`AcctRec.DepositAcctInfo.WithholdingData.WithholdingPercent`||Rate value in this field overrides the federal or state withholding rate in institution specifications.|
|`AcctRec.DepositAcctInfo.IntReportingCode`|None<br>1099_INT<br>1099_OID|  |
|`AcctRec.DepositAcctInfo.IntReportingInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.CreditRisk`||  |
|`AcctRec.DepositAcctInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>|  |
|`AcctRec.DepositAcctInfo.CreditRisk.InternalScore`||  |
|`AcctRec.DepositAcctInfo.RiskRanking`|None<br>Low<br>Medium<br>High|Additional values can be client-defined.|
|`AcctRec.DepositAcctInfo.TrnRestriction`||Client-defined transaction restriction code indicates the allowed (posted) and disallowed (non-posted) transaction codes on an account.|
|`AcctRec.DepositAcctInfo.TrnRestrictionOvrd`||Field refers to user-defined restriction override code that allows a specific type of transaction to post on an account for one update, by overriding the transaction code. Override code is removed after the completion of update.|
|`AcctRec.DepositAcctInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disable|Field refers to electronic banking restriction.|
|`AcctRec.DepositAcctInfo.ReportGroupCode`||Field refers to user-defined miscellanoeus code.|
|`AcctRec.DepositAcctInfo.DocDistributionOption`||  |
|`AcctRec.DepositAcctInfo.DocDistributionOptionEnumDesc`||  |
|`AcctRec.DepositAcctInfo.NAICS`||  |
|`AcctRec.DepositAcctInfo.CostCenter`||  |
|`AcctRec.DepositAcctInfo.AcctMemoData`||  |
|`AcctRec.DepositAcctInfo.AcctMemoData.AcctMemoIdent`|1, 2, 3|  |
|`AcctRec.DepositAcctInfo.AcctMemoData.AcctMemoType`|Teller<br>Warning|  |
|`AcctRec.DepositAcctInfo.AcctMemoData.AcctMemoText`||  |
|`AcctRec.DepositAcctInfo.RenewalData`||  |
|`AcctRec.DepositAcctInfo.RenewalData.OrigIssueDt`||  |
|`AcctRec.DepositAcctInfo.RenewalData.OrigMatDt`||  |
|`AcctRec.DepositAcctInfo.RenewalData.RenewalOption`|AutomaticRenewal<br>NoRenewalAllowed<br>None|  |
|`AcctRec.DepositAcctInfo.RenewalData.RenewalOptionEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RenewalData.LastRenewalDt`||  |
|`AcctRec.DepositAcctInfo.NegotiableInstrumentInd`|true<br>false|Field refers tocontract code.<br>Values indicate following:<br>- false: not negotiable<br>- true: negotiable|
|`AcctRec.DepositAcctInfo.IntDispData`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntDisposition`|TransferToAcct<br>Check<br>Capitalize<br>|Field refers to interest payment method.|
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctId`||Field refers to interest (Interest pay to account).|
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctType`|DDA<br>SDA|  |
|`AcctRec.DepositAcctInfo.IntDispData.DistributionAmt`||  |
|`AcctRec.DepositAcctInfo.IntDispData.DistributionAmt.Amt`||  |
|`AcctRec.DepositAcctInfo.IntDispData.DistributionAmt.CurCode`||  |
|`AcctRec.DepositAcctInfo.IntDispData.DistributionAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctRec.DepositAcctInfo.IntDispData.DistributionAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`AcctRec.DepositAcctInfo.IntDispData.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|Field indicates if income tax is withheld on automatic distribution.|
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.RecurType`|Maturity<br>Monthly<br>Weekly<br>Yearly<br>Cycle<br>SemiYearly<br>BiWeekly<br>Quarterly|  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.RecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.RecurInterval`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.DayOfMonth`|1 thru 31|  |
|`AcctRec.DepositAcctInfo.IntDispData.NextIntPmtDt`||  |
|`AcctRec.DepositAcctInfo.IntDispData.LastIntPmtDt`||  |
|`AcctRec.DepositAcctInfo.RetirementAcctData`||  |
|`AcctRec.DepositAcctInfo.RetirementAcctData.RetirementPlanType`||Field refers to IRA plan. Value of 01-20 correspond to a plan type established in the ira description specifications.|
|`AcctRec.DepositAcctInfo.RetirementAcctData.RetirementPlanTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RetirementAcctData.RetirementStatus`|NotEligible<br>Eligible<br>DistributionDisability<br>DistributionDeath<br>DistributionNormal|Field refers to IRA status code.|
|`AcctRec.DepositAcctInfo.RetirementAcctData.RetirementStatusEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RetirementAcctData.LastRolloverDt`||  |
|`AcctRec.DepositAcctInfo.SvcChgData.CreditBackAcct`||  |
|`AcctRec.DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackIdent`||  |
|`AcctRec.DepositAcctInfo.EscheatDt`||  |
|`AcctRec.DepositAcctInfo.CollateralPledgeCode`||  |
|`AcctRec.DepositAcctInfo.HoldInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.StopInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.CheckNameOption`|None<br>JointOr<br>JointAnd|Field is used to control the method of listing multiple account owner names on interest and distribution checks.|
|`AcctRec.DepositAcctInfo.ForfeitureCalcMethod`||  |
|`AcctRec.AcctStatus`||  |
|`AcctRec.AcctStatus.AcctStatusCode`|Valid|Field refers to internal EFX status.|
|`AcctRec.AcctStatus.EffDt`||  |
<!-- type: tab -->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`AcctSel`||  |
|`AcctSel.AcctKeys`||  |
|`AcctSel.AcctKeys.AcctId`||  |
|`AcctSel.AcctKeys.AcctType`|DDA<br>|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||This aggregate is returned in the response and indicates the high-level status code and description of the operation. Error details/code are returned in case of a failure.|
|`AcctRec`||  |
|`AcctRec.AcctKeys`||  |
|`AcctRec.AcctKeys.AcctId`||  |
|`AcctRec.AcctKeys.AcctType`|DDA<br>|  |
|`AcctRec.DepositAcctInfo`||  |
|`AcctRec.DepositAcctInfo.AcctDtlStatus`|Active<br>Inactive<br>Dormant<br>ChargedOff<br>ClientControlled<br>Closed|Field refers to the status code of an account and values are user-defined.|
|`AcctRec.DepositAcctInfo.AcctDtlStatusEnumDesc`||  |
|`AcctRec.DepositAcctInfo.AcctDtlStatusDt`||  |
|`AcctRec.DepositAcctInfo.AcctPref`||  |
|`AcctRec.DepositAcctInfo.AcctPref.Language`|UsePortfolio<br>English<br>Spanish<br>|  |
|`AcctRec.DepositAcctInfo.AcctIdent`||  |
|`AcctRec.DepositAcctInfo.AcctIdent.AcctIdentType`|PORT|Value of PORT refers to portfolio. Field returns the portfolio account number that is associated to CDA account.|
|`AcctRec.DepositAcctInfo.AcctIdent.AcctIdentValue`||  |
|`AcctRec.DepositAcctInfo.ProductIdent`||  |
|`AcctRec.DepositAcctInfo.Desc`||  |
|`AcctRec.DepositAcctInfo.TaxIncentiveType`|None<br>HSAFamily<br>HSAIndividual|  |
|`AcctRec.DepositAcctInfo.TaxIncentiveTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.InitialAmount`||  |
|`AcctRec.DepositAcctInfo.InitialAmount.Amt`||  |
|`AcctRec.DepositAcctInfo.InitialAmount.CurCode`||  |
|`AcctRec.DepositAcctInfo.InitialAmount.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctRec.DepositAcctInfo.InitialAmount.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`AcctRec.DepositAcctInfo.OpenDt`||  |
|`AcctRec.DepositAcctInfo.ClosedDt`||  |
|`AcctRec.DepositAcctInfo.LastContactDt`||  |
|`AcctRec.DepositAcctInfo.DateData`||  |
|`AcctRec.DepositAcctInfo.DateData.DateType`|LastFileMaint<br>LastPrc<br>LastTrn<br>LastOverdraft<br>LastPrcThru<br>OldestHold<br>OverdraftEnroll<br>RegDViolation<br>LastHold|Values for this field indicate following:<br><br>- LastFileMaint refers to Date Last Changed - The date on which certificate was last modified using online maintenance<br><br>- LastPrc refers to Date Last Updated - Date on which certificate was last updated<br><br>- LastTrn refers to Date Last Transaction Activity - Last date on which account was either credited or debited.<br><br>- Accrual refers to Date Accrued Through - The date through which the certificates earned interest is accrued<br><br>- IRALastStmt refers to Date Last IRA Statement -The last date on which certificate received an IRA statement.<br><br>- OldestHold refers to the date of the oldest record in the CODA Hold Addenda.|
|`AcctRec.DepositAcctInfo.DateData.DateValue`||  |
|`AcctRec.DepositAcctInfo.RelationshipMgr`||  |
|`AcctRec.DepositAcctInfo.RelationshipMgr.RelationshipMgrIdent`||Value of '0' indicates that an officer is not assigned to an account.|
|`AcctRec.DepositAcctInfo.RelationshipMgr.RelationshipMgrIdentEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RelationshipMgr.RelationshipRole`|Officer<br>SecondOfficer<br>ReferralOfficer<br>|Values of indicate following:<br>- Officer refers to Responsibility Code.<br>- SecondOfficer refers to Opened by Responsibility Code.<br>- Referral Officer refers to Referral Responsibility Code.|
|`AcctRec.DepositAcctInfo.OriginatingBranch`||OriginatingBranch refers to BranchNumber.|
|`AcctRec.DepositAcctInfo.OriginatingBranchEnumDesc`||  |
|`AcctRec.DepositAcctInfo.ResponsibleBranch`||ResponsibleBranch refers to AccountingGroup.|
|`AcctRec.DepositAcctInfo.ResponsibleBranchEnumDesc`|||
|`AcctRec.DepositAcctInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`AcctRec.DepositAcctInfo.Nickname`||  |
|`AcctRec.DepositAcctInfo.AcctTitleOption`||  |
|`AcctRec.DepositAcctInfo.AcctTitle`||User-defined title is printed as an additional name line on all customer correspondences.|
|`AcctRec.DepositAcctInfo.HandlingCodeOption`|Statements<br>StatementsNotices<br>Notices<br>DoNotPrint<br>UsePortfolio|Field indicates the type of customer correspondence that prints handling messages.|
|`AcctRec.DepositAcctInfo.HandlingCode`||User-defined code to identify the handling message printed in the customer name and address area on the forms designated by the HandlingCodeOption.|
|`AcctRec.DepositAcctInfo.OEDCode`||Field refers to the employee/officer/director code to indicate whether an individual is employee, officer or director of institution. Code is primarily used as selection criteria for reporting and values are 1-9.|
|`AcctRec.DepositAcctInfo.OEDCodeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.AccountingMethod`|Class<br>CostCenter<br>AcctType|  |
|`AcctRec.DepositAcctInfo.AccountingValue`||  |
|`AcctRec.DepositAcctInfo.ClassCode`||  |
|`AcctRec.DepositAcctInfo.AcctTypeCode`||  |
|`AcctRec.DepositAcctInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|  |
|`AcctRec.DepositAcctInfo.ClientDefinedData`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.DataIdent`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.DataType`|Alpha<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.Value`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.DataLength`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.ExpDt`||If date is not defined in this field, flex data exists with an account for lifetime unitl the data is manually deleted.|
|`AcctRec.DepositAcctInfo.ClientDefinedData.Desc`||Label that appears for the field.|
|`AcctRec.DepositAcctInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`AcctRec.DepositAcctInfo.AcctStmtData`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurType`|Cycle|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurInterval`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtOption`|None<br>Stmt<br>SmtAndInt<br>StmtAndSvcChg<br>StmtAndIntAndSvcChg|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.LastStmtDt`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.CombinedStmtIdent`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.CombinedStmtCode`|Primary<br>Secondary<br>|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.SpecialStmtCode`|Transcript<br>FinalSmt<br>None<br>DropTransactions|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtFormat`|||
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTruncationOption`|||
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtGroup`||Used to indicate if an inquiry can be done to retrieve the relationship of an account with other accounts attached to a portfolio. This will indicate the combined statement relationship code.|
|`AcctRec.DepositAcctInfo.NoticeData`||  |
|`AcctRec.DepositAcctInfo.NoticeData.NoticeType`|RegularNotice<br>ACHNotice<br>ChargeBack<br>PayeeChanges<br>BalanceOnReceipt<br>RegCCNotice<br>|Values indicate following:<br>- RegularNotice refers to Notification Option. <br>- BalanceOnReceipt refers to Receipt Balance Override.<br>- IntNotice refers to Interest Notice Override.<br>- MaturityNotice refers to Maturity Notice Override.<br>- RateChangeNotice refers to Rate Change Notice Override.|
|`AcctRec.DepositAcctInfo.NoticeData.NoticeOption`||  |
|`AcctRec.DepositAcctInfo.ProdIntRateId`||Field refers to deposit rate index.|
|`AcctRec.DepositAcctInfo.ProdIntRateIdEnumDesc`||  |
|`AcctRec.DepositAcctInfo.Rate`||  |
|`AcctRec.DepositAcctInfo.IntRateData`||  |
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier`|||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.Tier`|0<br>1<br>2<br>3<br>4<br>5<br>6||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt`|||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.Amt`|||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.CurCode`|||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.CurCode.CurCodeValue`|USD||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.Rate`|||
|`AcctRec.DepositAcctInfo.IntRateData.AccrualMethod`|Simple<br>Daily|Field refers to compounding code.|
|`AcctRec.DepositAcctInfo.IntRateData.AccrualOnBalance`|Ledger<br>Avail<br>MinAvail<br>MinLedger<br>None||
|`AcctRec.DepositAcctInfo.IntRateData.EffDt`|||
|`AcctRec.DepositAcctInfo.IntRateData.TierType`|||
|`AcctRec.DepositAcctInfo.IntRateData.TierAmtType`|Ledger<br>Avail<br>AvgMinLedger<br>MinLedger||
|`AcctRec.DepositAcctInfo.IntRateData.BalCutOffData`|||
|`AcctRec.DepositAcctInfo.IntRateData.BalCutOffData.BalCutOffType`|Avail<br>AvgAvail<br>AvgLedger<br>AvgMinLedger<br>Ledger<br>MinLedger<br>None||
|`AcctRec.DepositAcctInfo.IntRateData.BalCutOffData.BalCutOffAmt`|||
|`AcctRec.DepositAcctInfo.RateChangeData`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.VarianceFactorType`|Variance<br>Factor|  |
|`AcctRec.DepositAcctInfo.RateChangeData.RateFactor`|||
|`AcctRec.DepositAcctInfo.RateChangeData.RateVariance`||Field refers to the base adjuster/rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateVariance.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.EffDt`||***Conditionally Required**<br>Field is required if pending rate information is applicable on an account.<br>This field indicates the effective date of pending interest cycle and pending rate. Cycle and rate changes are effective after completion of current interest cycle, beginning with the first full cycle after the pending rate effective date.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.ProdIntRateId`||Field refers to pending deposit rate index. If value of '0' is received in the response, this indicates that pending interest on an account is not linked to the rate specification.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.VarianceFactorType`|Variance<br>Factor|  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.RateVariance`||Field refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateVariance.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.RateFactor`||Field refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateFactor.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurType`|Cycle|  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurInterval`||Field refers to the pending interest cycle that is pending frequency of interest credit to the customer.|
|`AcctRec.DepositAcctInfo.AcctBal`||  |
|`AcctRec.DepositAcctInfo.AcctBal.BalType`|Avail<br>AvailCash<br>AvailChk<br>AvailCredit<br>Closing<br>BalanceLastStatement<br>Current<br>Interest <br>ClosingInterest<br>InterestAccrued<br>Ledger <br>MinLedger<br>BalanceLastStatement<br>OpeningOutstanding<br>OverdraftAtmPos<br>PrevAvailCash<br>PrevAvailChk<br>PrevInterestAccrued<br>PrevAvail<br>PrevSvcChg<br>PrevLedger <br>Principal <br>SvcChg<br>Hold<br>OtherTransfers <br>Sweep<br>Float<br>MemoLedger<br>Memo<br>AvailPending<br>LedgerPending<br>|  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt`||  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.Amt`||  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.CurCode`||  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha<br>|  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`AcctRec.DepositAcctInfo.AcctPeriodData`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.AcctAmtType`|AvgAvail<br>AvgLedger<br>PostedTotal<br>CashIn<br>CashOut<br>ChkCredit<br>ChkDebit<br>Credit<br>DaysAvailOverdraft<br>DaysNSF<br>DaysOverdraft<br>Debit<br>Deposit<br>FederalWithhold<br>HSA<br>IntCarryOver<br>IntEarned<br>IntPaid<br>MinLedger<br>NSFFeePaid<br>NSFFeeRefunded<br>NSFFeeReturned<br>NSFFeeWaived<br>NSFPaid<br>NSFPresented<br>NSFReturned<br>OtherChargePaid<br>OtherChargeWaived<br>OtherMiscFee<br>Overdraft<br>OverdraftFee<br>RegDType1<br>RegDType2<br>Statement<br>StateWithhold<br>SvcCharge<br>SvcChargeWaived<br><br>|  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.AcctPeriodType`|CTD<br>LTD<br>MTD<br>PriorCycle<br>PrevToPriorCycle<br>PriorMonth<br>PriorYr<br>ThisCycle<br>YTD<br>PriorDay<br>|  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.LastOccurInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.Amt`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.Count`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.Rate`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.LastOccuranceDt`||  |
|`AcctRec.DepositAcctInfo.TranCounter`|||
|`AcctRec.DepositAcctInfo.TranCounter.Count`|||
|`AcctRec.DepositAcctInfo.TranCounter.TranCounterType`|RegD6<br>TranLastCurrStmt||
|`AcctRec.DepositAcctInfo.PostAddr`||  |
|`AcctRec.DepositAcctInfo.PostAddr.NameIdent`||Each AddressType can have up to 3 name identifiers.|
|`AcctRec.DepositAcctInfo.PostAddr.AddressIdent`||Unique address identifier is shared by primary and related seasonal address.|
|`AcctRec.DepositAcctInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if account can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only inquiry address is returned by ESF.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, ESF will return both in response.|
|`AcctRec.DepositAcctInfo.PostAddr.AddrFormatType`|Label|Service provider address type is label.|
|`AcctRec.DepositAcctInfo.PostAddr.FullName1`||Field refers to first name of the customer used for account mailing and enquiry purpose.|
|`AcctRec.DepositAcctInfo.PostAddr.FullName2`||  |
|`AcctRec.DepositAcctInfo.PostAddr.FullName3`||  |
|`AcctRec.DepositAcctInfo.PostAddr.Addr1`||***Conditionally Required**<br>To be provided in request if new address record is to be created.<br>First address line can be 30/40 characters long as per address length option defined under miscellaneous specification.<br>Optional values for name and address field length are:<br>- '0' indicates names and addresses up to 30 characters in length can be entered.<br>- '1' indicates names and addresses up to 40 characters in length can be entered.<br>- '2' indicates names and addresses up to 30 characters can be entered, and that two address lines are available.<br>- '3' indicates names and addresses up to 40 characters can be entered, and that two address lines are available.|
|`AcctRec.DepositAcctInfo.PostAddr.Addr2`||Addr2 is supported if enabled under address and name length option in the miscellaneous specifications.|
|`AcctRec.DepositAcctInfo.PostAddr.City`||  |
|`AcctRec.DepositAcctInfo.PostAddr.StateProv`||  |
|`AcctRec.DepositAcctInfo.PostAddr.PostalCode`||Postal Code provides information about the ZIP code, if Address is a United States address. It also provides Postal Code information, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they are will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Postal codes that are not ZIP codes are a string of characters.|
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode`||  |
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode.CountryCodeSource`||  |
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode.CountryCodeValue`||Country code values for postal address are client-defined.|
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode.CountryCodeValueEnumDesc`||  |
|`AcctRec.DepositAcctInfo.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|Account can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.|
|`AcctRec.DepositAcctInfo.PostAddr.TimeFrame`||Field is applicable only if AddrType is seasonal.|
|`AcctRec.DepositAcctInfo.PostAddr.TimeFrame.StartDt`||Field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, month and day of month shows actual start date of seasonal address. ESF response displays year as 9999 for start year.|
|`AcctRec.DepositAcctInfo.PostAddr.TimeFrame.EndDt`||Field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, month and day of month shows actual end date of seasonal address. ESF response displays year as 9999 for end year.|
|`AcctRec.DepositAcctInfo.PostAddr.CensusTract`||  |
|`AcctRec.DepositAcctInfo.PostAddr.CensusBlock`||  |
|`AcctRec.DepositAcctInfo.PostAddr.ForeignFlag`|true<br>false|  |
|`AcctRec.DepositAcctInfo.PostAddr.HandlingCode`||Field indicates special routing information for customer correspondence. Values of this field are client-defined.|
|`AcctRec.DepositAcctInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|Field is used to identify the type of customer correspondence that prints on handling messages as defined by HandlingCode.|
|`AcctRec.DepositAcctInfo.PostAddr.MSACode`||  |
|`AcctRec.DepositAcctInfo.TaxIdentType`|None<br>SSN<br>EIN<br>Foreign<br>ITIN<br>ATIN|  |
|`AcctRec.DepositAcctInfo.TaxIdent`||  |
|`AcctRec.DepositAcctInfo.TaxExempt`||Tax data from first party-to-account relationship (as sent by service provider) will be provided. Values are client-defined.|
|`AcctRec.DepositAcctInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`AcctRec.DepositAcctInfo.WithholdingOptionEnumDesc`||  |
|`AcctRec.DepositAcctInfo.WithholdingData`||Provides information about federal and state tax. This aggregate can be provided up to two times in the request.|
|`AcctRec.DepositAcctInfo.WithholdingData.WithholdingType`|FederalTax<br>StateTax|Value of FederalTax refers to the Federal Withholding Rate Override, and value of StateTax refers to State Withholding Rate Override.|
|`AcctRec.DepositAcctInfo.WithholdingData.WithholdingPercent`||Rate value in this field overrides the federal or state withholding rate in institution specifications.|
|`AcctRec.DepositAcctInfo.IntReportingInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.Fee`|||
|`AcctRec.DepositAcctInfo.Fee.FeeIdent`|||
|`AcctRec.DepositAcctInfo.Fee.FeePlan`|||
|`AcctRec.DepositAcctInfo.Fee.Desc`|||
|`AcctRec.DepositAcctInfo.Fee.FeeType`|ATMFee<br>BillPmt<br>DormantFee<br>EIM<br>FDIC<br>FeeCharge<br>NSFFee<br>Other<br>OtherNonTax<br>OverdraftInt<br>OverdraftFee<br>Recurring||
|`AcctRec.DepositAcctInfo.Fee.FeeOption`|Analysis<br>Charge<br>SvcChg<br>SvcChgCreditBack<br>Waive||
|`AcctRec.DepositAcctInfo.Fee.CurAmt`|||
|`AcctRec.DepositAcctInfo.Fee.CurAmt.Amt`|||
|`AcctRec.DepositAcctInfo.Fee.CurAmt.CurCode`|||
|`AcctRec.DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctRec.DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeValue`|USD||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame`|||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame.StartDt`|||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame.RecurRule`|||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurType`|Cycle<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>SvcChgCycle||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurInterval`|||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame.RecurRule.Occurrences`|||
|`AcctRec.DepositAcctInfo.Fee.FeeWaiver`|||
|`AcctRec.DepositAcctInfo.Fee.FeeWaiver.WaiverCode`|||
|`AcctRec.DepositAcctInfo.CreditRisk`||  |
|`AcctRec.DepositAcctInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>|  |
|`AcctRec.DepositAcctInfo.CreditRisk.InternalScore`||  |
|`AcctRec.DepositAcctInfo.RiskRanking`||Additional values can be client-defined.|
|`AcctRec.DepositAcctInfo.TrnRestriction`||Client-defined transaction restriction code indicates the allowed (posted) and disallowed (non-posted) transaction codes on an account.|
|`AcctRec.DepositAcctInfo.TrnRestrictionOvrd`||Field refers to user-defined restriction override code that allows a specific type of transaction to post on an account for one update, by overriding the transaction code. Override code is removed after the completion of update.|
|`AcctRec.DepositAcctInfo.MemoPostProcessOptOvrd`|Detail<br>DetailEnhanced<br>Summary<br>None||
|`AcctRec.DepositAcctInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disable|Field refers to electronic banking restriction.|
|`AcctRec.DepositAcctInfo.ReportGroupCode`||Field refers to user-defined miscellanoeus code.|
|`AcctRec.DepositAcctInfo.DocDistributionOption`||  |
|`AcctRec.DepositAcctInfo.DocDistributionOptionEnumDesc`||  |
|`AcctRec.DepositAcctInfo.NAICS`||  |
|`AcctRec.DepositAcctInfo.CostCenter`||  |
|`AcctRec.DepositAcctInfo.RetentionOption`|None<br>DoNotRetain<br>Retain||
|`AcctRec.DepositAcctInfo.RestrictedInd`|true<br>false||
|`AcctRec.DepositAcctInfo.RestrictedDesc`|||
|`AcctRec.DepositAcctInfo.AcctMemoData`||  |
|`AcctRec.DepositAcctInfo.AcctMemoData.AcctMemoIdent`||  |
|`AcctRec.DepositAcctInfo.AcctMemoData.AcctMemoType`|Teller<br>Warning|  |
|`AcctRec.DepositAcctInfo.AcctMemoData.AcctMemoText`||  |
|`AcctRec.DepositAcctInfo.IntDispData`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntDisposition`|TransferToAcct<br>Capitalize<br><br>|Field refers to interest payment method.|
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctId`||Field refers to interest (Interest pay to account).|
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctType`|DDA<br>SDA|  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.RecurType`|Cycle|  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.RecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.RecurInterval`||  |
|`AcctRec.DepositAcctInfo.OverdraftData`|||
|`AcctRec.DepositAcctInfo.OverdraftData.OverdraftEnrollOpt`|NoODPAccount<br>ODPAccount<br>OptIn<br>OptOut<br>InstutionOptOut||
|`AcctRec.DepositAcctInfo.OverdraftData.OverdraftAutoTrnInd`|true<br>false||
|`AcctRec.DepositAcctInfo.OverdraftData.OverdraftLimitPriority`|PriorXfer<br>AfterXfer||
|`AcctRec.DepositAcctInfo.OverdraftData.OverdraftLimitAmt`|||
|`AcctRec.DepositAcctInfo.OverdraftData.OverdraftLimitAmt.Amt`|||
|`AcctRec.DepositAcctInfo.OverdraftData.OverdraftReviewDt`|||
|`AcctRec.DepositAcctInfo.OverdraftData.OverdraftRatingCode`|||
|`AcctRec.DepositAcctInfo.OverdraftData.OverdraftTypeCode`|||
|`AcctRec.DepositAcctInfo.OverdraftData.OverdraftNotificationOpt`|NoNotice<br>GenerateException<br>GenerateStmt<br>NoticeAndStmt<br>StmtAndException<br>NoticeAndException<br>NoticeAndStmtAndException<br>Notice||
|`AcctRec.DepositAcctInfo.OverdraftData.ContactType`|||
|`AcctRec.DepositAcctInfo.OverdraftData.AtmPosOverdraft`|||
|`AcctRec.DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitOption`|OptOutNoReply<br>OptOut<br>OptOutCourtesy<br>OptInAtmPosODLimit <br>OptInPosODLimit <br>OptInAtmODLimit <br>OptInAtmPosAuthLimit <br>OptInPosAuthLimit <br>OptInAtmAuthLimit<br>NotAuth ||
|`AcctRec.DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitOptionEnumDesc`|||
|`AcctRec.DepositAcctInfo.OverdraftData.AtmPosOverdraft.OptInOutDt`|||
|`AcctRec.DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt`|||
|`AcctRec.DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.Amt`|||
|`AcctRec.DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.CurCode`|||
|`AcctRec.DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctRec.DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.CurCode.CurCodeValue`|||
|`AcctRec.DepositAcctInfo.OverdraftData.AtmPosOverdraft.NoticeOption`|NoNotice<br>GenerateNotice<br>NoticeSent||
|`AcctRec.DepositAcctInfo.FloatData`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatType`|RegCC<br>||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.FloatDays`|1  through 12||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.Amt`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeValue`|USD||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.Amt`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.CurCode`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.CurCode.CurCodeValue`|USD||
|`AcctRec.DepositAcctInfo.SvcChgData`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgMethod`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodType`|Maintenance<br>Activity<br>||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodOpt`|||
|`AcctRec.DepositAcctInfo.SvcChgData.CreditBackMethod`|||
|`AcctRec.DepositAcctInfo.SvcChgData.CreditBackAcct`||  |
|`AcctRec.DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackIdent`||  |
|`AcctRec.DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackType`|AllPrimaryDDA<br>AllPrimarySDA<br>AllPrimaryCDA<br>AllPrimaryDeposit<br>AllPrimarySecondaryDeposit<br>AllPrimaryDepositLoan<br>AllPrimarySecondaryDepositLoan<br>AllPrimaryLoan<br>AllPrimarySecondaryLoan<br>PrimaryDDA<br>PrimarySDA<br>PrimaryCDA<br>PrimaryLoan||
|`AcctRec.DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackAcctId`|||
|`AcctRec.DepositAcctInfo.SvcChgData.CreditBackGroupIdent`|1<br>2||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgFlatFee`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeType`|ActivityItem<br>DepositItem||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeIdent`|1 thru 18||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeAmt`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeAmt.Amt`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeAmt.CurCode`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeAmt.CurCode.CurCodeValue`|USD||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgAcctRef`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctId`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgWaiveCode`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgWaiveTaxInd`|true<br>false||
|`AcctRec.DepositAcctInfo.SvcChgData.LastSvcChgDt`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgTimeFrame`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgTimeFrame.RecurType`|Cycle||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgTimeFrame.RecurInterval`|||
|`AcctRec.DepositAcctInfo.CommercialAnalysisData`|||
|`AcctRec.DepositAcctInfo.CommercialAnalysisData.AnalysisCode`|||
|`AcctRec.DepositAcctInfo.CommercialAnalysisData.AnalysisGroup`|||
|`AcctRec.DepositAcctInfo.CommercialAnalysisData.AnalysisChargeAcct`|||
|`AcctRec.DepositAcctInfo.CommercialAnalysisData.AnalysisChargeAcct.AcctKeys`|||
|`AcctRec.DepositAcctInfo.CommercialAnalysisData.AnalysisChargeAcct.AcctKeys.AcctId`|||
|`AcctRec.DepositAcctInfo.CommercialAnalysisData.AnalysisChargeAcct.AcctKeys.AcctType`|DDA||
|`AcctRec.DepositAcctInfo.EscheatDt`||  |
|`AcctRec.DepositAcctInfo.RegCCData`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCCStatus`|NewAccount<br>NormalAuto<br>NormalManual<br>OverdrafterManual<br>OverdrafterAuto||
|`AcctRec.DepositAcctInfo.RegCCData.RegCCStatusDt`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCCException`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCCExceptionExpDt`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCC_NSF`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCC_NSF.NSFIdent`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCC_NSF.RegCC_NSFType`|LargeItems<br>RegularItems||
|`AcctRec.DepositAcctInfo.RegCCData.RegCC_NSF.Count`|||
|`AcctRec.DepositAcctInfo.CollateralPledgeCode`||  |
|`AcctRec.DepositAcctInfo.EIM_NSFInstruction`|Specification<br>Post<br>Return<br>PostandReturnNSF||
|`AcctRec.DepositAcctInfo.AutoNSFDecision`|||
|`AcctRec.DepositAcctInfo.NSFEntry`|||
|`AcctRec.DepositAcctInfo.NSFEntry.NSFIdent`|||
|`AcctRec.DepositAcctInfo.NSFEntry.NSFDt`|||
|`AcctRec.DepositAcctInfo.NSFEntry.Count`|||
|`AcctRec.DepositAcctInfo.HoldInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.StopInd`|true<br>false|  |
|`AcctRec.AcctStatus`||  |
|`AcctRec.AcctStatus.AcctStatusCode`|Valid|Field refers to internal EFX status.|
|`AcctRec.AcctStatus.EffDt`||  |
<!-- type: tab -->

The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`AcctSel`||  |
|`AcctSel.AcctKeys`||  |
|`AcctSel.AcctKeys.AcctId`||  |
|`AcctSel.AcctKeys.AcctType`|SDA<br>|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||This aggregate is returned in the response and indicates the high-level status code and description of the operation. Error details/code are returned in case of a failure.|
|`AcctRec`||  |
|`AcctRec.AcctKeys`||  |
|`AcctRec.AcctKeys.AcctId`||  |
|`AcctRec.AcctKeys.AcctType`|SDA|  |
|`AcctRec.DepositAcctInfo`||  |
|`AcctRec.DepositAcctInfo.AcctDtlStatus`|Active<br>Inactive<br>Dormant<br>ChargedOff<br>ClientControlled<br>Closed|Field refers to the status code of an account and values are user-defined.|
|`AcctRec.DepositAcctInfo.AcctDtlStatusEnumDesc`||  |
|`AcctRec.DepositAcctInfo.AcctDtlStatusDt`||  |
|`AcctRec.DepositAcctInfo.AcctPref`||  |
|`AcctRec.DepositAcctInfo.AcctPref.Language`|UsePortfolio<br>English<br>Spanish<br>|  |
|`AcctRec.DepositAcctInfo.AcctIdent`||  |
|`AcctRec.DepositAcctInfo.AcctIdent.AcctIdentType`|PORT|Value of PORT refers to portfolio. Field returns the portfolio account number that is associated to CDA account.|
|`AcctRec.DepositAcctInfo.AcctIdent.AcctIdentValue`||  |
|`AcctRec.DepositAcctInfo.ProductIdent`||  |
|`AcctRec.DepositAcctInfo.Desc`||  |
|`AcctRec.DepositAcctInfo.TaxIncentiveType`|None<br>HSAFamily<br>HSAIndividual|  |
|`AcctRec.DepositAcctInfo.InitialAmount`||  |
|`AcctRec.DepositAcctInfo.InitialAmount.Amt`||  |
|`AcctRec.DepositAcctInfo.InitialAmount.CurCode`||  |
|`AcctRec.DepositAcctInfo.InitialAmount.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctRec.DepositAcctInfo.InitialAmount.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`AcctRec.DepositAcctInfo.OpenDt`||  |
|`AcctRec.DepositAcctInfo.ClosedDt`||  |
|`AcctRec.DepositAcctInfo.BalanceAtClosingAmt`||  |
|`AcctRec.DepositAcctInfo.BalanceAtClosingAmt.Amt`||  |
|`AcctRec.DepositAcctInfo.Term`||  |
|`AcctRec.DepositAcctInfo.Term.Count`||  |
|`AcctRec.DepositAcctInfo.Term.TermUnits`|Days<br>Months<br>|  |
|`AcctRec.DepositAcctInfo.Term.TermUnitsEnumDesc`||  |
|`AcctRec.DepositAcctInfo.MaturityDt`||  |
|`AcctRec.DepositAcctInfo.LastContactDt`||  |
|`AcctRec.DepositAcctInfo.DateData`||  |
|`AcctRec.DepositAcctInfo.DateData.DateType`|LastFileMaint<br>LastPrc<br>LastTrn<br>LastPrcThru<br>OldestHold<br>IRALastStmt<br>LastHold<br>|Values for this field indicate following:<br><br>- LastFileMaint refers to Date Last Changed - The date on which certificate was last modified using online maintenance<br><br>- LastPrc refers to Date Last Updated - Date on which certificate was last updated<br><br>- LastTrn refers to Date Last Transaction Activity - Last date on which account was either credited or debited.<br><br>- Accrual refers to Date Accrued Through - The date through which the certificates earned interest is accrued<br><br>- IRALastStmt refers to Date Last IRA Statement -The last date on which certificate received an IRA statement.<br><br>- OldestHold refers to the date of the oldest record in the CODA Hold Addenda.|
|`AcctRec.DepositAcctInfo.DateData.DateValue`||  |
|`AcctRec.DepositAcctInfo.RelationshipMgr`||  |
|`AcctRec.DepositAcctInfo.RelationshipMgr.RelationshipMgrIdent`||Value of '0' indicates that an officer is not assigned to an account.|
|`AcctRec.DepositAcctInfo.RelationshipMgr.RelationshipMgrIdentEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RelationshipMgr.RelationshipRole`|Ofiicer<br>SecondOfficer<br>ReferralOfficer|Values of indicate following:<br>- Officer refers to Responsibility Code.<br>- SecondOfficer refers to Opened by Responsibility Code.<br>- Referral Officer refers to Referral Responsibility Code.|
|`AcctRec.DepositAcctInfo.OriginatingBranch`||OriginatingBranch refers to BranchNumber.|
|`AcctRec.DepositAcctInfo.OriginatingBranchEnumDesc`||  |
|`AcctRec.DepositAcctInfo.ResponsibleBranch`||ResponsibleBranch refers to AccountingGroup.|
|`AcctRec.DepositAcctInfo.ResponsibleBranchEnumDesc`|||
|`AcctRec.DepositAcctInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`AcctRec.DepositAcctInfo.Nickname`||  |
|`AcctRec.DepositAcctInfo.AcctTitleOption`|PrintAfter<br>PrintBefore<br>NotPrinted|  |
|`AcctRec.DepositAcctInfo.AcctTitle`||User-defined title is printed as an additional name line on all customer correspondences.|
|`AcctRec.DepositAcctInfo.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|Field indicates the type of customer correspondence that prints handling messages.|
|`AcctRec.DepositAcctInfo.HandlingCode`||User-defined code to identify the handling message printed in the customer name and address area on the forms designated by the HandlingCodeOption.|
|`AcctRec.DepositAcctInfo.OEDCode`||Field refers to the employee/officer/director code to indicate whether an individual is employee, officer or director of institution. Code is primarily used as selection criteria for reporting and values are 1-9.|
|`AcctRec.DepositAcctInfo.OEDCodeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.AccountingMethod`|Class<br>CostCenter<br>AcctType|  |
|`AcctRec.DepositAcctInfo.AccountingValue`||  |
|`AcctRec.DepositAcctInfo.ClassCode`||  |
|`AcctRec.DepositAcctInfo.AcctTypeCode`||  |
|`AcctRec.DepositAcctInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|  |
|`AcctRec.DepositAcctInfo.ClientDefinedData`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.DataIdent`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.Value`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.DataLength`||  |
|`AcctRec.DepositAcctInfo.ClientDefinedData.ExpDt`||If date is not defined in this field, flex data exists with an account for lifetime unitl the data is manually deleted.|
|`AcctRec.DepositAcctInfo.ClientDefinedData.Desc`||Label that appears for the field.|
|`AcctRec.DepositAcctInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`AcctRec.DepositAcctInfo.AcctStmtData`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame`|Two aggregates are provided one to describe  Statement Cycle and another for Alternate Statement Cycle. <br><br>The aggregation of the Alternate Statement Cycle will have the AlternateStmtInd set to "true"  and tag AlternateStmtOption will be provided.<br><br>|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurType`|Cycle|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurInterval`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtOption`|None<br>Stmt<br>StmtAndInt<br>StmtAndSvcChg<br>StmtAndIntAndSvcChg|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.LastStmtDt`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.CombinedStmtIdent`||  |
|`AcctRec.DepositAcctInfo.AcctStmtData.CombinedStmtCode`|Primary<br>SecondaryDDA<br>SecondarySDA|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.SpecialStmtCode`|None<br>Transcript<br>FinalStmt<br>DropTransactions|  |
|`AcctRec.DepositAcctInfo.AcctStmtData.StmtGroup`||Used to indicate if an inquiry can be done to retrieve the relationship of an account with other accounts attached to a portfolio. This will indicate the combined statement relationship code.|
|`AcctRec.DepositAcctInfo.NoticeData`||  |
|`AcctRec.DepositAcctInfo.NoticeData.NoticeType`|ACHNotice<br>BalanceOnReceipt<br>ChargeBack<br>IntNotice<br>MaturityNotice<br>PayeeChanges<br>RateChangeNotice<br>RegCCNotice<br>RegularNotice<br>|Values indicate following:<br>- RegularNotice refers to Notification Option. <br>- BalanceOnReceipt refers to Receipt Balance Override.<br>- IntNotice refers to Interest Notice Override.<br>- MaturityNotice refers to Maturity Notice Override.<br>- RateChangeNotice refers to Rate Change Notice Override.|
|`AcctRec.DepositAcctInfo.NoticeData.NoticeOption`||  |
|`AcctRec.DepositAcctInfo.ProdIntRateId`||Field refers to deposit rate index.|
|`AcctRec.DepositAcctInfo.ProdIntRateIdEnumDesc`||  |
|`AcctRec.DepositAcctInfo.Rate`||  |
|`AcctRec.DepositAcctInfo.IntRateData`||  |
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier`|||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.Tier`|0<br>1<br>2<br>3<br>4<br>5<br>6||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt`|||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.Amt`|||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.CurCode`|||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.CurCode.CurCodeValue`|USD||
|`AcctRec.DepositAcctInfo.IntRateData.RateMatrixTier.Rate`|||
|`AcctRec.DepositAcctInfo.IntRateData.APYRecurType`|IntPmtFrequency<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>Weekly<br>BiWeekly<br>Maturity|Field refers to Reg DD Compound Frequency.|
|`AcctRec.DepositAcctInfo.IntRateData.AccrualMethod`|Simple<br>Daily|Field refers to compounding code.|
|`AcctRec.DepositAcctInfo.IntRateData.AccrualMethodEnumDesc`||  |
|`AcctRec.DepositAcctInfo.IntRateData.AccrualOnBalance`|Ledger<br>Avail<br>MinAvail<br>AvgMinLedger<br>None||
|`AcctRec.DepositAcctInfo.IntRateData.EffDt`|||
|`AcctRec.DepositAcctInfo.IntRateData.TierType`|0-7||
|`AcctRec.DepositAcctInfo.IntRateData.TierAmtType`|Ledger<br>Avail<br>MinAvail<br>MinLedger<br>None||
|`AcctRec.DepositAcctInfo.IntRateData.BalCutOffData`|||
|`AcctRec.DepositAcctInfo.IntRateData.BalCutOffData.BalCutOffType`|||
|`AcctRec.DepositAcctInfo.IntRateData.BalCutOffData.BalCutOffAmt`|||
|`AcctRec.DepositAcctInfo.MaturityIntCalcData`||  |
|`AcctRec.DepositAcctInfo.MaturityIntCalcData.MaturityIntRateType`|CurrentRate<br>CurrentRateInPeriod<br>MaturityIntRate|  |
|`AcctRec.DepositAcctInfo.MaturityIntCalcData.MaturityIntRate`||  |
|`AcctRec.DepositAcctInfo.MaturityIntCalcData.MaturityIntRecurType`|Daily|Maturity rate period is expressed in days.|
|`AcctRec.DepositAcctInfo.MaturityIntCalcData.MaturityIntInterval`||  |
|`AcctRec.DepositAcctInfo.RateChangeData`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.RateChangeControl`|Fixed<br><br>RateIndex<br>StepFreq<br>IndexFreq|Field indicates if the base rate is used and if the rate is fixed/variable.|
|`AcctRec.DepositAcctInfo.RateChangeData.RateChangeControlEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.VarianceFactorType`|Variance<br>Factor|  |
|`AcctRec.DepositAcctInfo.RateChangeData.RateVariance`||Field refers to the base adjuster/rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateVariance.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.EffDt`||***Conditionally Required**<br>Field is required if pending rate information is applicable on an account.<br>This field indicates the effective date of pending interest cycle and pending rate. Cycle and rate changes are effective after completion of current interest cycle, beginning with the first full cycle after the pending rate effective date.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.ProdIntRateId`||Field refers to pending deposit rate index. If value of '0' is received in the response, this indicates that pending interest on an account is not linked to the rate specification.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.VarianceFactorType`|Variance<br>Factor|  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.RateVariance`||Field refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateVariance.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.RateFactor`||Field refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateFactor.|
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurType`|Cycle|  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurInterval`||Field refers to the pending interest cycle that is pending frequency of interest credit to the customer.|
|`AcctRec.DepositAcctInfo.RateChangeData.IncreaseOnlyInd`|true<br>false|Field indicates if rate variances can increase/decrease base rate or can only increase base rate.<br>Values indicate following:<br>- False: Either increase or decrease<br>- True: Increase only|
|`AcctRec.DepositAcctInfo.RateChangeData.FloorRate`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.CeilingRate`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.RateChangeRecurType`|Daily<br>Maturity<br>Monthly<br>Weekly<br>Yearly<br>SemiYearly<br>InterestCycle<br>None<br>Quarterly<br>BiWeekly<br>|Field if used in combination with RecurInterval refers to rate change frequency.|
|`AcctRec.DepositAcctInfo.RateChangeData.RateChangeRecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.RecurInterval`||Field refers to rate change frequency and used along with with RateChangeRecurType.|
|`AcctRec.DepositAcctInfo.RateChangeData.DayOfMonth`|1 thru 31|  |
|`AcctRec.DepositAcctInfo.RateChangeData.LeadDays`||  |
|`AcctRec.DepositAcctInfo.RateChangeData.NextRateChangeDt`||  |
|`AcctRec.DepositAcctInfo.AcctBal`||  |
|`AcctRec.DepositAcctInfo.AcctBal.BalType`|Avail<br>AvailCash<br>AvailChk<br>Closing<br>BalanceLastStatement<br>Current<br>Hold<br>ClosingInterest<br>InterestAccrued<br>Ledger <br>OpeningOutstanding<br>OtherEscrow<br>OtherIns<br>PrevAvailCash<br>PrevAvailChk<br>PrevInterestAccrued<br>PrevAvail<br>PrevSvcChg<br>PrevLedger <br>SvcChg<br>PrincipalPenalty<br>OtherTransfers<br>Float<br>MemoLedger<br>Memo<br>AvailPending<br>LedgerPending|  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt`||  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.Amt`||  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.CurCode`||  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctRec.DepositAcctInfo.AcctBal.CurAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`AcctRec.DepositAcctInfo.AcctPeriodData`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.AcctAmtType`|AvgAvail<br>AvgLedger<br>PostedTotal<br>AggLedger<br>Credit<br>DaysAvailOverdraft<br>DaysNSF<br>DaysOverdraft<br>Debit<br>Deposit<br>FederalWithhold<br>ForfeitureAmt<br>HSA<br>IntCarryOver<br>IntEarned<br>IntPaid<br>IntPaidOut<br>MinLedger<br>NSFFeePaid<br>NSFFeeRefunded<br>NSFFeeReturned<br>NSFFeeWaived<br>NSFPaid<br>NSFPresented<br>NSFReturned<br>Overdraft<br>Principal<br>RegDType1<br>RegDType2<br>Statement<br>StateWithhold<br>SvcCharge<br>|  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.AcctPeriodType`|AnniversaryTD<br>AnniversaryToDate<br>CTD<br>LTD<br>PriorCycle<br>MTD<br>PriorMonth<br>PriorYr<br>YTD<br>PriorDay|  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.TotalInPeriod`|||
|`AcctRec.DepositAcctInfo.AcctPeriodData.TotalInPeriod.Count`|||
|`AcctRec.DepositAcctInfo.AcctPeriodData.TotalInPeriod.Units`|||
|`AcctRec.DepositAcctInfo.AcctPeriodData.InPeriod`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.InPeriod.Count`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.InPeriod.Units`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.LastOccurInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.Amt`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.Count`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.Rate`||  |
|`AcctRec.DepositAcctInfo.AcctPeriodData.LastOccuranceDt`||  |
|`AcctRec.DepositAcctInfo.TranCounter`|||
|`AcctRec.DepositAcctInfo.TranCounter.Count`|||
|`AcctRec.DepositAcctInfo.TranCounter.TranCounterType`|RegD6||
|`AcctRec.DepositAcctInfo.PostAddr`||  |
|`AcctRec.DepositAcctInfo.PostAddr.NameIdent`||Each AddressType can have up to 3 name identifiers.|
|`AcctRec.DepositAcctInfo.PostAddr.AddressIdent`||Unique address identifier is shared by primary and related seasonal address.|
|`AcctRec.DepositAcctInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if account can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only inquiry address is returned by ESF.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, ESF will return both in response.|
|`AcctRec.DepositAcctInfo.PostAddr.AddrUseEnumDesc`||  |
|`AcctRec.DepositAcctInfo.PostAddr.AddrFormatType`|Label|Service provider address type is label.|
|`AcctRec.DepositAcctInfo.PostAddr.FullName1`||Field refers to first name of the customer used for account mailing and enquiry purpose.|
|`AcctRec.DepositAcctInfo.PostAddr.FullName2`||  |
|`AcctRec.DepositAcctInfo.PostAddr.FullName3`||  |
|`AcctRec.DepositAcctInfo.PostAddr.Addr1`||***Conditionally Required**<br>To be provided in request if new address record is to be created.<br>First address line can be 30/40 characters long as per address length option defined under miscellaneous specification.<br>Optional values for name and address field length are:<br>- '0' indicates names and addresses up to 30 characters in length can be entered.<br>- '1' indicates names and addresses up to 40 characters in length can be entered.<br>- '2' indicates names and addresses up to 30 characters can be entered, and that two address lines are available.<br>- '3' indicates names and addresses up to 40 characters can be entered, and that two address lines are available.|
|`AcctRec.DepositAcctInfo.PostAddr.Addr2`||Addr2 is supported if enabled under address and name length option in the miscellaneous specifications.|
|`AcctRec.DepositAcctInfo.PostAddr.City`||  |
|`AcctRec.DepositAcctInfo.PostAddr.StateProv`||  |
|`AcctRec.DepositAcctInfo.PostAddr.PostalCode`||Postal Code provides information about the ZIP code, if Address is a United States address. It also provides Postal Code information, if address is a non-US address.  The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they are will be displayed as 0000.  Examples: 32714-1234 or 32714-0000 <br><br>Postal codes that are not ZIP codes are a string of characters.|
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode`||  |
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode.CountryCodeValue`||Country code values for postal address are client-defined.|
|`AcctRec.DepositAcctInfo.PostAddr.CountryCode.CountryCodeValueEnumDesc`||  |
|`AcctRec.DepositAcctInfo.PostAddr.AddrType`|Primary<br>Seasonal<br>Secondary|Account can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.|
|`AcctRec.DepositAcctInfo.PostAddr.TimeFrame`||Field is applicable only if AddrType is seasonal.|
|`AcctRec.DepositAcctInfo.PostAddr.TimeFrame.StartDt`||Field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, month and day of month shows actual start date of seasonal address. ESF response displays year as 9999 for start year.|
|`AcctRec.DepositAcctInfo.PostAddr.TimeFrame.EndDt`||Field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, month and day of month shows actual end date of seasonal address. ESF response displays year as 9999 for end year.|
|`AcctRec.DepositAcctInfo.PostAddr.CensusTract`||  |
|`AcctRec.DepositAcctInfo.PostAddr.CensusBlock`||  |
|`AcctRec.DepositAcctInfo.PostAddr.ForeignFlag`|true<br>false|  |
|`AcctRec.DepositAcctInfo.PostAddr.HandlingCode`||Field indicates special routing information for customer correspondence. Values of this field are client-defined.|
|`AcctRec.DepositAcctInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|Field is used to identify the type of customer correspondence that prints on handling messages as defined by HandlingCode.|
|`AcctRec.DepositAcctInfo.PostAddr.MSACode`||  |
|`AcctRec.DepositAcctInfo.TaxIdentType`|None<br>SSN<br>EIN<br>Foreign<br>ITIN<br>ATIN|  |
|`AcctRec.DepositAcctInfo.TaxIdent`||  |
|`AcctRec.DepositAcctInfo.TaxExempt`||Tax data from first party-to-account relationship (as sent by service provider) will be provided. Values are client-defined.|
|`AcctRec.DepositAcctInfo.WithholdingOption`|None<br>FederalTax<br>StateTax<br>StateFederalTax|  |
|`AcctRec.DepositAcctInfo.WithholdingOptionEnumDesc`||  |
|`AcctRec.DepositAcctInfo.WithholdingData`||Provides information about federal and state tax. This aggregate can be provided up to two times in the request.|
|`AcctRec.DepositAcctInfo.WithholdingData.WithholdingType`|FederalTax<br>StateTax|Value of FederalTax refers to the Federal Withholding Rate Override, and value of StateTax refers to State Withholding Rate Override.|
|`AcctRec.DepositAcctInfo.WithholdingData.WithholdingPercent`||Rate value in this field overrides the federal or state withholding rate in institution specifications.|
|`AcctRec.DepositAcctInfo.IntReportingInd`|true<br>false|  |
|`AcctRec.DepositAcctInfo.Fee`|||
|`AcctRec.DepositAcctInfo.Fee.FeeIdent`|||
|`AcctRec.DepositAcctInfo.Fee.FeePlan`|||
|`AcctRec.DepositAcctInfo.Fee.Desc`|||
|`AcctRec.DepositAcctInfo.Fee.FeeType`|ATMFee<br>BillPmt<br>DormantFee<br>EIM<br>FDIC<br>Other<br>OtherNonTax<br>OverdraftInt<br>OverdraftFee<br>Recurring||
|`AcctRec.DepositAcctInfo.Fee.FeeOption`|Charge<br>Waive||
|`AcctRec.DepositAcctInfo.Fee.CurAmt`|||
|`AcctRec.DepositAcctInfo.Fee.CurAmt.Amt`|||
|`AcctRec.DepositAcctInfo.Fee.CurAmt.CurCode`|||
|`AcctRec.DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctRec.DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeValue`|USD||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame`|||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame.StartDt`|||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame.RecurRule`|||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurType`|Cycle<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>SvcChgCycle||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurInterval`|||
|`AcctRec.DepositAcctInfo.Fee.TimeFrame.RecurRule.Occurrences`|||
|`AcctRec.DepositAcctInfo.Fee.FeeWaiver`|||
|`AcctRec.DepositAcctInfo.Fee.FeeWaiver.WaiverCode`|||
|`AcctRec.DepositAcctInfo.CreditRisk`||  |
|`AcctRec.DepositAcctInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>|  |
|`AcctRec.DepositAcctInfo.CreditRisk.InternalScore`||  |
|`AcctRec.DepositAcctInfo.RiskRanking`|None<br>Low<br>Medium<br>High|Additional values can be client-defined.|
|`AcctRec.DepositAcctInfo.TrnRestriction`||Client-defined transaction restriction code indicates the allowed (posted) and disallowed (non-posted) transaction codes on an account.|
|`AcctRec.DepositAcctInfo.TrnRestrictionOvrd`||Field refers to user-defined restriction override code that allows a specific type of transaction to post on an account for one update, by overriding the transaction code. Override code is removed after the completion of update.|
|`AcctRec.DepositAcctInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disable|Field refers to electronic banking restriction.|
|`AcctRec.DepositAcctInfo.ReportGroupCode`||Field refers to user-defined miscellanoeus code.|
|`AcctRec.DepositAcctInfo.DocDistributionOption`||  |
|`AcctRec.DepositAcctInfo.DocDistributionOptionEnumDesc`||  |
|`AcctRec.DepositAcctInfo.NAICS`||  |
|`AcctRec.DepositAcctInfo.CostCenter`||  |
|`AcctRec.DepositAcctInfo.RetentionOption`|None<br>DoNotRetain<br>Retain||
|`AcctRec.DepositAcctInfo.AcctMemoData`||  |
|`AcctRec.DepositAcctInfo.AcctMemoData.AcctMemoIdent`||  |
|`AcctRec.DepositAcctInfo.AcctMemoData.AcctMemoType`|Teller<br>Warning|  |
|`AcctRec.DepositAcctInfo.AcctMemoData.AcctMemoText`||  |
|`AcctRec.DepositAcctInfo.RenewalData`||  |
|`AcctRec.DepositAcctInfo.RenewalData.RenewalOption`|None<br>AutomaticRenewal<br>NoRenewalAllowed<br> |  |
|`AcctRec.DepositAcctInfo.RenewalData.RenewalOptionEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RenewalData.RenewalFrequency`|||
|`AcctRec.DepositAcctInfo.RenewalData.RenewalFrequency.RecurType`|Daily<br>Monthly||
|`AcctRec.DepositAcctInfo.RenewalData.RenewalFrequency.RecurInterval`|||
|`AcctRec.DepositAcctInfo.RenewalData.LastRenewalDt`||  |
|`AcctRec.DepositAcctInfo.RenewalData.RenewalProductIdent`|||
|`AcctRec.DepositAcctInfo.IntDispData`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntDisposition`|TransferToAcct<br>Check<br>Capitalize<br>None<br>|Field refers to interest payment method.|
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctId`||Field refers to interest (Interest pay to account).|
|`AcctRec.DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctType`|DDA<br>SDA|  |
|`AcctRec.DepositAcctInfo.IntDispData.DistributionAmt`||  |
|`AcctRec.DepositAcctInfo.IntDispData.DistributionAmt.Amt`||  |
|`AcctRec.DepositAcctInfo.IntDispData.DistributionAmt.CurCode`||  |
|`AcctRec.DepositAcctInfo.IntDispData.DistributionAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`AcctRec.DepositAcctInfo.IntDispData.DistributionAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`AcctRec.DepositAcctInfo.IntDispData.WithholdingOption`|None<br>FederalTax<br>StateTax<br>StateFederalTax|Field indicates if income tax is withheld on automatic distribution.|
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.RecurType`|Maturity<br>Monthly<br>Weekly<br>Yearly<br>Cycle<br>BiWeekly<br>Maturity<br>SemiYearly|  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.RecurTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.RecurInterval`||  |
|`AcctRec.DepositAcctInfo.IntDispData.IntPmtFrequency.DayOfMonth`||  |
|`AcctRec.DepositAcctInfo.IntDispData.NextIntPmtDt`||  |
|`AcctRec.DepositAcctInfo.IntDispData.LastIntPmtDt`||  |
|`AcctRec.DepositAcctInfo.RetirementAcctData`||  |
|`AcctRec.DepositAcctInfo.RetirementAcctData.RetirementPlanType`||Field refers to IRA plan. Value of 01-20 correspond to a plan type established in the ira description specifications.|
|`AcctRec.DepositAcctInfo.RetirementAcctData.RetirementPlanTypeEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RetirementAcctData.RetirementStatus`|NotEligible<br>Eligible<br>DistributionDisability<br>DistributionDeath<br>DistributionNormal|Field refers to IRA status code.|
|`AcctRec.DepositAcctInfo.RetirementAcctData.RetirementStatusEnumDesc`||  |
|`AcctRec.DepositAcctInfo.RetirementAcctData.LastRolloverDt`||  |
|`AcctRec.DepositAcctInfo.ClubPayoffData`|||
|`AcctRec.DepositAcctInfo.ClubPayoffData.ClubPayoffOption`|TransferToAcct<br>Check<br>None||
|`AcctRec.DepositAcctInfo.ClubPayoffData.ClubPayoffAcctRef`|||
|`AcctRec.DepositAcctInfo.ClubPayoffData.ClubPayoffAcctRef.AcctKeys`|||
|`AcctRec.DepositAcctInfo.ClubPayoffData.ClubPayoffAcctRef.AcctKeys.AcctId`|||
|`AcctRec.DepositAcctInfo.ClubPayoffData.ClubPayoffAcctRef.AcctKeys.AcctType`|SDA<br>DDA<br>||
|`AcctRec.DepositAcctInfo.OverdraftData`|||
|`AcctRec.DepositAcctInfo.FloatData`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatType`|RegCC<br>||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.Amt`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeValue`|USD||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.Amt`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.CurCode`|||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`AcctRec.DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.CurCode.CurCodeValue`|USD||
|`AcctRec.DepositAcctInfo.SvcChgData`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgMethod`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodType`|Maintenance<br>Activity||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodOpt`|||
|`AcctRec.DepositAcctInfo.SvcChgData.CreditBackAcct`||  |
|`AcctRec.DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackIdent`||  |
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgAcctRef`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctId`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctType`|DDA<br>SDA||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgWaiveCode`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgWaiveTaxInd`|true<br>false||
|`AcctRec.DepositAcctInfo.SvcChgData.LastSvcChgDt`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgTimeFrame`|||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgTimeFrame.RecurType`|Cycle||
|`AcctRec.DepositAcctInfo.SvcChgData.SvcChgTimeFrame.RecurInterval`|||
|`AcctRec.DepositAcctInfo.EscheatDt`||  |
|`AcctRec.DepositAcctInfo.RegCCData`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCCStatus`|NewAccount <br>NormalAuto <br>NormalManual<br>OverdrafterManual<br>OverdrafterAuto||
|`AcctRec.DepositAcctInfo.RegCCData.RegCCStatusDt`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCCException`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCCExceptionExpDt`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCC_NSF`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCC_NSF.NSFIdent`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCC_NSF.RegCC_NSFType`|||
|`AcctRec.DepositAcctInfo.RegCCData.RegCC_NSF.Count`|||
|`AcctRec.DepositAcctInfo.CollateralPledgeCode`||  |
|`AcctRec.DepositAcctInfo.EIM_NSFInstruction`|Specification<br>Post<br>Return<br>PostandReturnNSF||
|`AcctRec.DepositAcctInfo.NSFEntry`|||
|`AcctRec.DepositAcctInfo.NSFEntry.NSFIdent`|||
|`AcctRec.DepositAcctInfo.NSFEntry.NSFDt`|||
|`AcctRec.DepositAcctInfo.NSFEntry.Count`|||
|`AcctRec.DepositAcctInfo.CheckNameOption`|JointAnd<br>JointOr<br>None|Field is used to control the method of listing multiple account owner names on interest and distribution checks.|
|`AcctRec.DepositAcctInfo.ForfeitureCalcMethod`|Forfeiture1<br>Forfeiture2<br>Forfeiture3|  |
|`AcctRec.AcctStatus`||  |
|`AcctRec.AcctStatus.AcctStatusCode`|Valid|Field refers to internal EFX status.|
|`AcctRec.AcctStatus.EffDt`||  |

<!-- type: tab-end -->

<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
