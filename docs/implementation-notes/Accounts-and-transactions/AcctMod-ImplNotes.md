# Implementation Notes for Mod-CDA Acct
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, , , Precision, Signature, DNA, 
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
|`OvrdExceptionData`||This is an optional aggregate to override warnings from core system and continue the processing.|
|`AcctKeys`||  |
|`AcctKeys.AcctId`||  |
|`AcctKeys.AcctType`|CDA<br>|  |
|`DepositAcctInfo`||  |
|`DepositAcctInfo.AcctDtlStatus`||Values are client-defined.|
|`DepositAcctInfo.AcctDtlStatusDt`||Future date is not supported.|
|`DepositAcctInfo.AcctPref`||  |
|`DepositAcctInfo.AcctPref.Language`|UsePortfolio<br>English<br>Spanish<br>|This is an optional field and user can send value of UserInstitution in the request, if no specific language preference exists.|
|`DepositAcctInfo.TaxIncentiveType`|HSAFamily<br>HSAIndividual<br>None|Values of HSAFamily and HSAIndividual indicate that the account is a Health Savings Account and refers to special reporting code. <br>IRA indicates that the account is a retirement account. <br>Value of 'None' should be provided if no tax benefits are associated to the account.|
|`DepositAcctInfo.InitialAmount`||***Conditionally Required**<br>Initial deposit amount is required to be provided in request for time account.|
|`DepositAcctInfo.InitialAmount.Amt`||  |
|`DepositAcctInfo.InitialAmount.CurCode`||  |
|`DepositAcctInfo.InitialAmount.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`DepositAcctInfo.InitialAmount.CurCode.CurCodeValue`|USD|  |
|`DepositAcctInfo.ClosedDt`||Account balance should be zero to set up ClosedDt.|
|`DepositAcctInfo.BalanceAtClosingAmt`||  |
|`DepositAcctInfo.BalanceAtClosingAmt.Amt`||Field refers to closing balance used for closed accounts, and records the balance from previous certificate update prior to closing.|
|`DepositAcctInfo.BalanceAtClosingAmt.CurCode`||  |
|`DepositAcctInfo.BalanceAtClosingAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`DepositAcctInfo.BalanceAtClosingAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`DepositAcctInfo.Term`||***Required**<br>This field is required to be provided in request.|
|`DepositAcctInfo.Term.Count`||  |
|`DepositAcctInfo.Term.TermUnits`|Months<br>Days|  |
|`DepositAcctInfo.MaturityDt`||  |
|`DepositAcctInfo.LastContactDt`||  |
|`DepositAcctInfo.RelationshipMgr`||  |
|`DepositAcctInfo.RelationshipMgr.RelationshipMgrIdent`||This field contains user-defined value (up to 5 digits) to identify the officer with a management responsibility of the account.<br>This field can be associated to each RelationshipRole as:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'<br><br>If responsibility code for 'Officer' RelationshipRole is provided in the request, provided value overrides the default value. If value is not provided, default value from the product is considered as responsibility code.<br>Referral responsibility code for 'ReferralOfficer' and opened by responsibility code for 'SecondOfficer' are applied to the account if, RelationshipMgrIdent is provided in the request along with the corresponding RelationshipRole.|
|`DepositAcctInfo.RelationshipMgr.RelationshipRole`|Officer<br>SecondOfficer<br>ReferralOfficer<br>|RelationshipMgrIdent is to be provided in the request along with the corresponding RelationshipRole.<br>RelationshipMgrIdent corresponding to values of RelationshipRole are:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'|
|`DepositAcctInfo.OriginatingBranch`||***Required**<br>This field refers to the branch region.|
|`DepositAcctInfo.ResponsibleBranch`||This field refers to the accouting branch.|
|`DepositAcctInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`DepositAcctInfo.Nickname`||  |
|`DepositAcctInfo.AcctTitleOption`|PrintAfter<br>PrintBefore<br>NotPrinted|Values of this field are user-defined.|
|`DepositAcctInfo.AcctTitle`||  |
|`DepositAcctInfo.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|  |
|`DepositAcctInfo.HandlingCode`||Values of this field are user-defined.|
|`DepositAcctInfo.OEDCode`||Values of this field are user-defined.|
|`DepositAcctInfo.AccountingMethod`|Class<br>CostCenter<br>AcctType|  |
|`DepositAcctInfo.AccountingValue`||Field refers to the numeric value to integrate accounts in general ledger. AccountingValue contains numeric value associated with chosen accounting method.|
|`DepositAcctInfo.ClassCode`||Values of this field are user-defined.|
|`DepositAcctInfo.AcctTypeCode`||This is an optional field.|
|`DepositAcctInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|Additional values can be user defined.|
|`DepositAcctInfo.ClientDefinedData`||It is required to send the flex data metdata (such as field size) along with the user-entered account data.<br>This is an optional aggregate and should be sent only if the client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataIdent`||***Conditionally Required**<br>This field refers to the field code and required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Value`||***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataLength`||***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.ExpDt`||***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Desc`||This field refers to the field label.|
|`DepositAcctInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`DepositAcctInfo.AcctStmtData`||***Conditionally Required**<br>This aggregate is required to be provided if statement data defaults are not configured in product specifications. If statement data defaults are set up under specifications, product defaults are applied to the account.<br>Statement data overrides product default values if provided in the request.<br>Alternate statement cycle functionality is supported in addition to the statement cycle and, additional set up is required to use alternate statement cycle.<br>If product is configured to use alternate statement cycle in product specifications then, by default, alternate statement cycle is used for an account of this product.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame`||Two instances of StmtTimeFrame can be provided if applicable. One for statement cycle and another to identify alternate statement cycle. Instance provided for alternate statement cycle should have AlternateStmtInd set to true.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurType`|Cycle|  |
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurInterval`|0-999|This field is used to identify user-defined statement cycle number/alternate statement cycle number.|
|`DepositAcctInfo.AcctStmtData.CombinedStmtIdent`||  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtCode`|DoNotCombine<br>SecondaryDDA<br>SecondarySDA|  |
|`DepositAcctInfo.AcctStmtData.SpecialStmtCode`|Transcript<br>FinalStmt<br>None<br>DropTransactions|  |
|`DepositAcctInfo.NoticeData`||  |
|`DepositAcctInfo.NoticeData.NoticeType`|RegularNotice<br>BalanceOnReceipt<br>IntNotice<br>MaturityNotice<br>RateChangeNotice|Values provided in this field are:<br>ACHNotice - Refers to ACH Notification Code Override.<br>ChargeBack - Refers to EIM Charge Back Notice Detail. <br>PayeeChanges - Refers to Payee List Request Code. <br>BalanceOnReceipt - Refers to ReceiptBalanceOverride.<br>RegularNotice - Refers to NotificationCode.|
|`DepositAcctInfo.NoticeData.NoticeOption`||  |
|`DepositAcctInfo.NoticeData.GenLastUpDtInd`|true<br>false|This field refers to change notification request code. |
|`DepositAcctInfo.ProdIntRateId`||This field refers to deposit rate index and is used to indicate the structures (defined in deposit rate specifications) used to calculate interest of an account. |
|`DepositAcctInfo.IntRateData`||  |
|`DepositAcctInfo.IntRateData.APYRecurType`|IntPmtFrequency<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>Weekly<br>BiWeekly<br>Maturity|If interest rate data is added to an account, and funds are not withdrawn during the year, then APYRecurType should be provided for calculation of the total interest that can be earned.|
|`DepositAcctInfo.IntRateData.AccrualMethod`|Simple<br>Daily<br>Continuous|If interest rate data is added to the account, then AccrualMethod should be provided to specify the method used to compound/accrue interest.|
|`DepositAcctInfo.IntRateData.DailyAccrual`|Daily365<br>Daily360<br>Current365<br>Current360<br>Equal365<br>Equal360|Field refers to interest method.|
|`DepositAcctInfo.MaturityIntCalcData`||This is an optional aggregate and should be provided for calculation on accounts after maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRateType`|CurrentRate<br>CurrentRateInPeriod<br>MaturityIntRate|This is an optional field and used to identify interest calculation/processing on deposits or other accounts post maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRate`||This is an optional field and should be provided if, interest calculation/processing is required on deposits or other accounts post maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRecurType`|Daily|Maturity rate period is expressed in days.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntInterval`|0-999|This is an optional field and should be provided if, interest calculation/processing is required on deposits or other accounts post maturity.|
|`DepositAcctInfo.RateChangeData`||  |
|`DepositAcctInfo.RateChangeData.RateChangeControl`|IndexFreq<br>StepFreq<br>Fixed|This field is used to indicate if the base rate is used and if the rate is fixed or variable. Should be provided if the interest rate is adjusted/changed at specified frequency.|
|`DepositAcctInfo.RateChangeData.VarianceFactorType`|Variance<br>None<br><br>|This field is used to indicate the interest rate change based on a factor or variance percentage.|
|`DepositAcctInfo.RateChangeData.RateVariance`||Field is to be used if VarianceFactorType = Variance.|
|`DepositAcctInfo.RateChangeData.IncreaseOnlyInd`|true<br>false|This field indicates if the interest revision can be increment only.|
|`DepositAcctInfo.RateChangeData.FloorRate`||  |
|`DepositAcctInfo.RateChangeData.CeilingRate`||  |
|`DepositAcctInfo.RateChangeData.RateChangeRecurType`|Maturity<br>Monthly<br>Weekly<br>Yearly<br>InterestCycle<br>None<br>Quarterly<br>Semiannually<br>Biweekly<br>|This is an optional field to indicate the recurrence type (period) of the rate change.|
|`DepositAcctInfo.RateChangeData.DayOfMonth`|1 thru 31|  |
|`DepositAcctInfo.RateChangeData.LeadDays`||  |
|`DepositAcctInfo.RateChangeData.NextRateChangeDt`||  |
|`DepositAcctInfo.PostAddr`||***Required**<br>At least one account address is required to be provided.<br>Account can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.<br>Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if account can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only primary address type and AddrUse as Inquiry is to be provided.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, secondary address type and AddrUse as Mailing and Names is to be provided.<br>If existing address is to be linked to an account then, AddressIdent including AddrType, AddrUse and AdddrFormatType are required to be provided.<br>If new address is to be created for an account, address details including AddrType, AddrUse and AdddrFormatType is required to be provided and AddressIdent should not be provided in the request.|
|`DepositAcctInfo.PostAddr.OpenDt`||***Conditionally Required**<br>This field is not applicable to the seasonal address type and required to be provided if new address record is to be created.|
|`DepositAcctInfo.PostAddr.RelationshipMgr`||Value of AddrUse for primary and related seasonal address is 'Inquiry'.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`||This field is not applicable to the seasonal address type. Values in this field are user-defined.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to responsibility code, whereas referral officer refers to referral responsibility code.|
|`DepositAcctInfo.PostAddr.OriginatingBranch`||This field is not applicable for seasonal address type and is required to be provided if new address record os to be created. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.ResponsibleBranch`||This field is not applicable for seasonal address type and refers to the accounting branch associated to the address record. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.NameIdent`||Applicable if AddrType is secondary and AddrUse is mailing and, not applicable for seasonal address type.<br>Only up to 3 name identifiers can be provided if financial institution is configured to use different Primary/Inquiry and Secondary/Mailing addresses and names. If provided for Primary/Inquiry address it will be ignored as name relationships for inquiry are established using information provided in PartyCardRelInfo.<br>Only names which have a relationship to the safe deposit box or account portfolio can be associated to safe deposit box for mailing purpose.<br>|
|`DepositAcctInfo.PostAddr.AddressIdent`||If new address is to be created for a card, address details including AddrType, AddrUse and AdddrFormatType is required to be provided.|
|`DepositAcctInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|***Required**<br>AddrUse for primary and related seasonal address is 'Inquiry', whereas for secondary and related seasonal address is 'Mailing'.<br>Account can have different inquiry and mailing addresses.<br> - If parameter is set to N, both inquiry and mailing addresses are same therefore, primary/inquiry address information is supported.<br> - If parameter is set to Y, then secondary/mailing and primary/inquiry addresses are supported whereas, inquiry and mailing address data can be provided in request.<br>AddrUse for seasonal address is always same as primary/secondary address.|
|`DepositAcctInfo.PostAddr.AddrFormatType`|Label|Label address format is supported.|
|`DepositAcctInfo.PostAddr.Addr1`||***Conditionally Required**<br>To be provided in request if new address record is created.|
|`DepositAcctInfo.PostAddr.Addr2`||Addr2 is valid if enabled in the CIS Miscellaneous (Institution) specifications.|
|`DepositAcctInfo.PostAddr.City`||***Conditionally Required**<br>It is mandatory to provide this field if a new address record is to be created.<br>Field length is 20 characters long (including spaces). It is recommended for consumer to abbreviate the value sent in the EFX request to prevent truncation (For example, City name "Rancho Santa Margarita" exceeds 20 characters and can be abbreviated to "Rancho S Margarita" to avoid truncation). Total length of 40 characters is supported for city, StateProv and PostalCode (appended together) including spaces.<br>|
|`DepositAcctInfo.PostAddr.StateProv`||It is mandatory to provide this field if new address record is created and country is United States.|
|`DepositAcctInfo.PostAddr.PostalCode`||***Conditionally Required**<br>It is required to provide this field if, a new address record is to be created with country as United States.<br><br>Postal Code provides information about the ZIP code if, address is from United States and, provides information about postal code if, address is not from United States.  This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code of four digits is optional and provides a more specific location within a given ZIP code. If additional code is not provided, it can be represented with value as '0000'. For example, 32714-1234 or 32714-0000.<br><br>Postal codes are string of characters for non-US addresses.|
|`DepositAcctInfo.PostAddr.CountryCode`||  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeValue`||Values in this field are user-defined.|
|`DepositAcctInfo.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|***Required**<br>Account can have one primary, one secondary and two seasonal addresses. <br>However, seasonal address cannot exist as a single address record hence, it is always related to a primary/secondary address. Therefore, seasonal address always shares AddressIdent and AddrUse with primary or the secondary address.<br>In order to relate the primary/secondary address with seasonal address, present the seasonal address right after the primary/secondary address.<br>It is required to provide the TimeFrame for seasonal address.|
|`DepositAcctInfo.PostAddr.TimeFrame`||  |
|`DepositAcctInfo.PostAddr.TimeFrame.StartDt`||This field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.TimeFrame.EndDt`||This field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.Retention`||Retention code indicates if the address record is to be retained, or deleted if no accounts, tax addenda or any other relationship exists on an address record.|
|`DepositAcctInfo.PostAddr.CensusTract`||  |
|`DepositAcctInfo.PostAddr.CensusBlock`||  |
|`DepositAcctInfo.PostAddr.ForeignFlag`|true<br>false|  |
|`DepositAcctInfo.PostAddr.HandlingCode`||Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.MSACode`||  |
|`DepositAcctInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`DepositAcctInfo.WithholdingData`||  |
|`DepositAcctInfo.WithholdingData.WithholdingType`|FederalTax<br>StateTax|  |
|`DepositAcctInfo.WithholdingData.WithholdingPercent`||  |
|`DepositAcctInfo.IntReportingInd`|true<br>false|  |
|`DepositAcctInfo.IntReportingCode`|None<br>1099_INT<br>1099_OID|  |
|`DepositAcctInfo.CreditRisk`||  |
|`DepositAcctInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>|  |
|`DepositAcctInfo.CreditRisk.InternalScore`||Field indicates the risk score based on account profile. Avlues of this field are client-defined.|
|`DepositAcctInfo.RiskRanking`|None<br>Low<br>Medium<br>High|Field indicates risk level of the account (Low to High). Additional values of this field can be client defined.|
|`DepositAcctInfo.TrnRestriction`||Field is used to determine the restrictions applicable on trnasactions of an account.|
|`DepositAcctInfo.TrnRestrictionOvrd`||Values of this field are client-defined.|
|`DepositAcctInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disable|Field refers to electronic banking restriction.|
|`DepositAcctInfo.ReportGroupCode`||Values of this field are client-defined.|
|`DepositAcctInfo.DocDistributionOption`||Values of this field are client-defined.|
|`DepositAcctInfo.NAICS`||  |
|`DepositAcctInfo.CostCenter`||Values of this field are client-defined.|
|`DepositAcctInfo.AcctMemoData`||  |
|`DepositAcctInfo.AcctMemoData.AcctMemoIdent`|1<br>2<br>3|***Conditionally Required**<br>Field is required if AcctMemoType is Teller.<br>Up to 3 teller alerts are supported.|
|`DepositAcctInfo.AcctMemoData.AcctMemoType`|Teller<br>Warning|Only one warning can be sent in the request.|
|`DepositAcctInfo.AcctMemoData.AcctMemoText`||Values of this field are client-defined.|
|`DepositAcctInfo.RenewalData`||  |
|`DepositAcctInfo.RenewalData.OrigIssueDt`||  |
|`DepositAcctInfo.RenewalData.RenewalOption`|AutomaticRenewal<br>NoRenewalAllowed<br>None|  |
|`DepositAcctInfo.NegotiableInstrumentInd`|true<br>false|  |
|`DepositAcctInfo.IntDispData`||  |
|`DepositAcctInfo.IntDispData.IntDisposition`|TransferToAcct<br>Check<br>Capitalize<br>None|  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctId`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctType`|DDA<br>SDA|  |
|`DepositAcctInfo.IntDispData.DistributionAmt`||  |
|`DepositAcctInfo.IntDispData.DistributionAmt.Amt`||  |
|`DepositAcctInfo.IntDispData.DistributionAmt.CurCode`||  |
|`DepositAcctInfo.IntDispData.DistributionAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`DepositAcctInfo.IntDispData.DistributionAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`DepositAcctInfo.IntDispData.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency`||  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.RecurType`|Maturity<br>Monthly<br>Weekly<br>Yearly<br>Cycle<br>SemiYearly<br>BiWeekly<br>Quarterly|  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.RecurInterval`|0-120|  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.DayOfMonth`|1 thru 31|Day of the month when interest is paid is not valid if Interest Payment Frequency of Cycle is used.|
|`DepositAcctInfo.IntDispData.NextIntPmtDt`||  |
|`DepositAcctInfo.RetirementAcctData`||If product type is set up as IRA account at the time of opening a new account, data specific to retirement account (Retirement Plan Type, Default Contirbution and Distribution Types) is set up by default as per the product level parameters.|
|`DepositAcctInfo.RetirementAcctData.RetirementPlanType`||Field refers to IRA plan. <br>Values are client-defined and can be set up under Certificate of Deposits/IRA specifications.<br>Range of values supported is 01 -20.<br>If value is not provided for product type set up as IRA account, by default, values of RetirementPlanType set up under product are considered.|
|`DepositAcctInfo.RetirementAcctData.RetirementStatus`|NotEligible<br>Eligible<br>DistributionDisability<br>DistributionDeath<br>DistributionNormal|Field refers to IRA status code that indicates the distribution status of retirement account. If value is not provided, default value of NotEligible is considered.|
|`DepositAcctInfo.RetirementAcctData.LastRolloverDt`||  |
|`DepositAcctInfo.SvcChgData.CreditBackGroupIdent`||Field refers to DDA credit back identification. If client-defined credit back identification matches the credit back identification on DDA account, certificate for calculation of credit back on DDA service charges is included.|
|`DepositAcctInfo.EscheatDt`||  |
|`DepositAcctInfo.CollateralPledgeCode`||Values of this field are client-defined|
|`DepositAcctInfo.CheckNameOption`|None<br>JointOr<br>JointAnd|  |
|`DepositAcctInfo.ForfeitureCalcMethod`||Overrides the forfeiture method in miscellaneous-1 specifications.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||This aggregate is returned in the response and indicates the high-level status code and description of the operation. Error details/code are returned in case of a failure.|
|`AcctStatusRec`||  |
|`AcctStatusRec.AcctKeys`||  |
|`AcctStatusRec.AcctKeys.AcctId`||  |
|`AcctStatusRec.AcctKeys.AcctType`|CDA<br>|  |
|`AcctStatusRec.AcctStatus`||This aggregate contains the status and last updated date/time details  of an account.|
|`AcctStatusRec.AcctStatus.AcctStatusCode`|Valid|Field refers to status of an account.|
|`AcctStatusRec.AcctStatus.EffDt`||  |
<!-- type: tab -->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`||This is an optional aggregate to override warnings from core system and continue the processing.|
|`AcctKeys`||  |
|`AcctKeys.AcctId`||  |
|`AcctKeys.AcctType`|DDA|  |
|`DepositAcctInfo`||  |
|`DepositAcctInfo.AcctDtlStatus`|Active<br>Inactive<br>Dormant<br>ClientControlled<br>Closed|Values are client-defined.|
|`DepositAcctInfo.AcctDtlStatusDt`||Future date is not supported.|
|`DepositAcctInfo.AcctPref`||  |
|`DepositAcctInfo.AcctPref.Language`|UsePortfolio<br>English<br>Spanish<br>|This is an optional field and user can send value of UserInstitution in the request, if no specific language preference exists.|
|`DepositAcctInfo.TaxIncentiveType`|HSAFamily<br>HSAIndividual<br>None|Values of HSAFamily and HSAIndividual indicate that the account is a Health Savings Account and refers to special reporting code. <br>IRA indicates that the account is a retirement account. <br>Value of 'None' should be provided if no tax benefits are associated to the account.|
|`DepositAcctInfo.InitialAmount`||***Conditionally Required**<br>Initial deposit amount is required to be provided in request for time account.|
|`DepositAcctInfo.InitialAmount.Amt`||  |
|`DepositAcctInfo.InitialAmount.CurCode`||  |
|`DepositAcctInfo.InitialAmount.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`DepositAcctInfo.InitialAmount.CurCode.CurCodeValue`|USD|  |
|`DepositAcctInfo.OpenDt`||***Required**<br>This field is required to be provided in request.|
|`DepositAcctInfo.ClosedDt`||Account balance should be zero to set up ClosedDt.|
|`DepositAcctInfo.BalanceAtClosingAmt`||  |
|`DepositAcctInfo.BalanceAtClosingAmt.Amt`||Field refers to closing balance used for closed accounts, and records the balance from previous certificate update prior to closing.|
|`DepositAcctInfo.BalanceAtClosingAmt.CurCode`||  |
|`DepositAcctInfo.BalanceAtClosingAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`DepositAcctInfo.BalanceAtClosingAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`DepositAcctInfo.LastContactDt`||  |
|`DepositAcctInfo.DateData`|||
|`DepositAcctInfo.DateData.DateType`|LastOverdraft||
|`DepositAcctInfo.DateData.DateValue`|||
|`DepositAcctInfo.RelationshipMgr`||  |
|`DepositAcctInfo.RelationshipMgr.RelationshipMgrIdent`||This field contains user-defined value (up to 5 digits) to identify the officer with a management responsibility of the account.<br>This field can be associated to each RelationshipRole as:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'<br><br>If responsibility code for 'Officer' RelationshipRole is provided in the request, provided value overrides the default value. If value is not provided, default value from the product is considered as responsibility code.<br>Referral responsibility code for 'ReferralOfficer' and opened by responsibility code for 'SecondOfficer' are applied to the account if, RelationshipMgrIdent is provided in the request along with the corresponding RelationshipRole.|
|`DepositAcctInfo.RelationshipMgr.RelationshipRole`|Officer<br>SecondOfficer<br>ReferralOfficer<br>|RelationshipMgrIdent is to be provided in the request along with the corresponding RelationshipRole.<br>RelationshipMgrIdent corresponding to values of RelationshipRole are:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'|
|`DepositAcctInfo.OriginatingBranch`||***Required**<br>This field refers to the branch region.|
|`DepositAcctInfo.ResponsibleBranch`||This field refers to the accouting branch.|
|`DepositAcctInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`DepositAcctInfo.Nickname`||  |
|`DepositAcctInfo.AcctTitleOption`||Values of this field are user-defined.|
|`DepositAcctInfo.AcctTitle`||  |
|`DepositAcctInfo.HandlingCodeOption`|Statements<br>StatementsNotices<br>Notices<br>DoNotPrint<br>UsePortfolio|  |
|`DepositAcctInfo.HandlingCode`||Values of this field are user-defined.|
|`DepositAcctInfo.OEDCode`||Values of this field are user-defined.|
|`DepositAcctInfo.ClassCode`||Values of this field are user-defined.|
|`DepositAcctInfo.AcctTypeCode`||This is an optional field.|
|`DepositAcctInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|Additional values can be user defined.|
|`DepositAcctInfo.ClientDefinedData`||It is required to send the flex data metdata (such as field size) along with the user-entered account data.<br>This is an optional aggregate and should be sent only if the client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataIdent`||***Conditionally Required**<br>This field refers to the field code and required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Value`||***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataLength`||***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.ExpDt`||***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Desc`||This field refers to the field label.|
|`DepositAcctInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`DepositAcctInfo.AcctStmtData`||***Conditionally Required**<br>This aggregate is required to be provided if statement data defaults are not configured in product specifications. If statement data defaults are set up under specifications, product defaults are applied to the account.<br>Statement data overrides product default values if provided in the request.<br>Alternate statement cycle functionality is supported in addition to the statement cycle and, additional set up is required to use alternate statement cycle.<br>If product is configured to use alternate statement cycle in product specifications then, by default, alternate statement cycle is used for an account of this product.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame`||Two instances of StmtTimeFrame can be provided if applicable. One for statement cycle and another to identify alternate statement cycle. Instance provided for alternate statement cycle should have AlternateStmtInd set to true.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurType`|Cycle|  |
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurInterval`||This field is used to identify user-defined statement cycle number/alternate statement cycle number.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtInd`|true<br>false|This field is used to identify alternate statement cycle.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtOption`|None<br>Stmt<br>SmtAndInt<br>StmtAndSvcChg<br>StmtAndIntAndSvcChg|  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtIdent`||  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtCode`|Primary<br>Secondary<br>|  |
|`DepositAcctInfo.AcctStmtData.SpecialStmtCode`|Transcript<br>FinalStmt<br>None<br>DropTransactions|  |
|`DepositAcctInfo.AcctStmtData.StmtFormat`|||
|`DepositAcctInfo.AcctStmtData.StmtTruncationOption`|||
|`DepositAcctInfo.NoticeData`||  |
|`DepositAcctInfo.NoticeData.NoticeType`|ChargeBack<br>RegCCNotice<br>ACHNotice<br>BalanceOnReceipt<br>PayeeChanges<br>RegularNotice<br>|Values provided in this field are:<br>ACHNotice - Refers to ACH Notification Code Override.<br>ChargeBack - Refers to EIM Charge Back Notice Detail. <br>PayeeChanges - Refers to Payee List Request Code. <br>BalanceOnReceipt - Refers to ReceiptBalanceOverride.<br>RegularNotice - Refers to NotificationCode.|
|`DepositAcctInfo.NoticeData.NoticeOption`||  |
|`DepositAcctInfo.ProdIntRateId`||This field refers to deposit rate index and is used to indicate the structures (defined in deposit rate specifications) used to calculate interest of an account. |
|`DepositAcctInfo.IntRateData`||  |
|`DepositAcctInfo.IntRateData.AccrualFrequency`|||
|`DepositAcctInfo.IntRateData.AccrualFrequency.RecurType`|Cycle||
|`DepositAcctInfo.IntRateData.AccrualFrequency.RecurInterval`|||
|`DepositAcctInfo.RateChangeData`||  |
|`DepositAcctInfo.RateChangeData.VarianceFactorType`|Variance<br>Factor|This field is used to indicate the interest rate change based on a factor or variance percentage.|
|`DepositAcctInfo.RateChangeData.RateFactor`|||
|`DepositAcctInfo.RateChangeData.RateVariance`||Field is to be used if VarianceFactorType = Variance.|
|`DepositAcctInfo.PostAddr`||***Required**<br>At least one account address is required to be provided.<br>Account can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.<br>Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if account can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only primary address type and AddrUse as Inquiry is to be provided.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, secondary address type and AddrUse as Mailing and Names is to be provided.<br>If existing address is to be linked to an account then, AddressIdent including AddrType, AddrUse and AdddrFormatType are required to be provided.<br>If new address is to be created for an account, address details including AddrType, AddrUse and AdddrFormatType is required to be provided and AddressIdent should not be provided in the request.|
|`DepositAcctInfo.PostAddr.OpenDt`||***Conditionally Required**<br>This field is not applicable to the seasonal address type and required to be provided if new address record is to be created.|
|`DepositAcctInfo.PostAddr.RelationshipMgr`||Value of AddrUse for primary and related seasonal address is 'Inquiry'.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`||This field is not applicable to the seasonal address type. Values in this field are user-defined.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to responsibility code, whereas referral officer refers to referral responsibility code.|
|`DepositAcctInfo.PostAddr.OriginatingBranch`||This field is not applicable for seasonal address type and is required to be provided if new address record os to be created. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.ResponsibleBranch`||This field is not applicable for seasonal address type and refers to the accounting branch associated to the address record. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.NameIdent`||Applicable if AddrType is secondary and AddrUse is mailing and, not applicable for seasonal address type.<br>Only up to 3 name identifiers can be provided if financial institution is configured to use different Primary/Inquiry and Secondary/Mailing addresses and names. If provided for Primary/Inquiry address it will be ignored as name relationships for inquiry are established using information provided in PartyCardRelInfo.<br>Only names which have a relationship to the safe deposit box or account portfolio can be associated to safe deposit box for mailing purpose.<br>|
|`DepositAcctInfo.PostAddr.AddressIdent`||If new address is to be created for a card, address details including AddrType, AddrUse and AdddrFormatType is required to be provided.|
|`DepositAcctInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|***Required**<br>AddrUse for primary and related seasonal address is 'Inquiry', whereas for secondary and related seasonal address is 'Mailing'.<br>Account can have different inquiry and mailing addresses.<br> - If parameter is set to N, both inquiry and mailing addresses are same therefore, primary/inquiry address information is supported.<br> - If parameter is set to Y, then secondary/mailing and primary/inquiry addresses are supported whereas, inquiry and mailing address data can be provided in request.<br>AddrUse for seasonal address is always same as primary/secondary address.|
|`DepositAcctInfo.PostAddr.AddrFormatType`|Label|Label address format is supported.|
|`DepositAcctInfo.PostAddr.Addr1`||***Conditionally Required**<br>To be provided in request if new address record is created.|
|`DepositAcctInfo.PostAddr.Addr2`||Addr2 is valid if enabled in the CIS Miscellaneous (Institution) specifications.|
|`DepositAcctInfo.PostAddr.City`||***Conditionally Required**<br>It is mandatory to provide this field if a new address record is to be created.<br>Field length is 20 characters long (including spaces). It is recommended for consumer to abbreviate the value sent in the EFX request to prevent truncation (For example, City name "Rancho Santa Margarita" exceeds 20 characters and can be abbreviated to "Rancho S Margarita" to avoid truncation). Total length of 40 characters is supported for city, StateProv and PostalCode (appended together) including spaces.<br>|
|`DepositAcctInfo.PostAddr.StateProv`||It is mandatory to provide this field if new address record is created and country is United States.|
|`DepositAcctInfo.PostAddr.PostalCode`||***Conditionally Required**<br>It is required to provide this field if, a new address record is to be created with country as United States.<br><br>Postal Code provides information about the ZIP code if, address is from United States and, provides information about postal code if, address is not from United States.  This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code of four digits is optional and provides a more specific location within a given ZIP code. If additional code is not provided, it can be represented with value as '0000'. For example, 32714-1234 or 32714-0000.<br><br>Postal codes are string of characters for non-US addresses.|
|`DepositAcctInfo.PostAddr.CountryCode`||  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeValue`||Values in this field are user-defined.|
|`DepositAcctInfo.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|***Required**<br>Account can have one primary, one secondary and two seasonal addresses. <br>However, seasonal address cannot exist as a single address record hence, it is always related to a primary/secondary address. Therefore, seasonal address always shares AddressIdent and AddrUse with primary or the secondary address.<br>In order to relate the primary/secondary address with seasonal address, present the seasonal address right after the primary/secondary address.<br>It is required to provide the TimeFrame for seasonal address.|
|`DepositAcctInfo.PostAddr.TimeFrame`||  |
|`DepositAcctInfo.PostAddr.TimeFrame.StartDt`||This field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.TimeFrame.EndDt`||This field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.Retention`|true<br>false|Retention code indicates if the address record is to be retained, or deleted if no accounts, tax addenda or any other relationship exists on an address record.|
|`DepositAcctInfo.PostAddr.CensusTract`||  |
|`DepositAcctInfo.PostAddr.CensusBlock`||  |
|`DepositAcctInfo.PostAddr.ForeignFlag`|true<br>false|  |
|`DepositAcctInfo.PostAddr.HandlingCode`||Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.MSACode`||  |
|`DepositAcctInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`DepositAcctInfo.WithholdingData`||  |
|`DepositAcctInfo.WithholdingData.WithholdingType`|FederalTax<br>StateTax|  |
|`DepositAcctInfo.WithholdingData.WithholdingPercent`||  |
|`DepositAcctInfo.IntReportingInd`|true<br>false|  |
|`DepositAcctInfo.Fee`|||
|`DepositAcctInfo.Fee.FeeIdent`|||
|`DepositAcctInfo.Fee.FeePlan`|||
|`DepositAcctInfo.Fee.Desc`|||
|`DepositAcctInfo.Fee.FeeType`|ATMFee<br>BillPmt<br>DormantFee<br>EIM<br>FDIC<br>FeeCharge<br>NSFFee<br>Other<br>OtherNonTax<br>OverdraftInt<br>OverdraftFee<br>Recurring||
|`DepositAcctInfo.Fee.FeeOption`|Waive<br>Charge<br>Analysis<br>SvcChgCreditBack<br>SvcChg||
|`DepositAcctInfo.Fee.CurAmt`|||
|`DepositAcctInfo.Fee.CurAmt.Amt`|||
|`DepositAcctInfo.Fee.CurAmt.CurCode`|||
|`DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.Fee.TimeFrame`|||
|`DepositAcctInfo.Fee.TimeFrame.StartDt`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurType`|Cycle<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>SvcChgCycle<br>||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurInterval`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.Occurrences`|||
|`DepositAcctInfo.Fee.FeeWaiver`|||
|`DepositAcctInfo.Fee.FeeWaiver.WaiverCode`|||
|`DepositAcctInfo.CreditRisk`||  |
|`DepositAcctInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>|  |
|`DepositAcctInfo.CreditRisk.InternalScore`||Field indicates the risk score based on account profile. Avlues of this field are client-defined.|
|`DepositAcctInfo.RiskRanking`||Field indicates risk level of the account (Low to High). Additional values of this field can be client defined.|
|`DepositAcctInfo.TrnRestriction`||Field is used to determine the restrictions applicable on trnasactions of an account.|
|`DepositAcctInfo.TrnRestrictionOvrd`||Values of this field are client-defined.|
|`DepositAcctInfo.MemoPostProcessOptOvrd`|None<br>Summary<br>Detail||
|`DepositAcctInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disable|Field refers to electronic banking restriction.|
|`DepositAcctInfo.ReportGroupCode`||Values of this field are client-defined.|
|`DepositAcctInfo.DocDistributionOption`||Values of this field are client-defined.|
|`DepositAcctInfo.NAICS`||  |
|`DepositAcctInfo.CostCenter`||Values of this field are client-defined.|
|`DepositAcctInfo.RetentionOption`|None<br>DoNotRetain<br>Retain||
|`DepositAcctInfo.AcctMemoData`||  |
|`DepositAcctInfo.AcctMemoData.AcctMemoIdent`||***Conditionally Required**<br>Field is required if AcctMemoType is Teller.<br>Up to 3 teller alerts are supported.|
|`DepositAcctInfo.AcctMemoData.AcctMemoType`|Teller<br>Warning|Only one warning can be sent in the request.|
|`DepositAcctInfo.AcctMemoData.AcctMemoText`||Values of this field are client-defined.|
|`DepositAcctInfo.IntDispData`||  |
|`DepositAcctInfo.IntDispData.IntDisposition`|TransferToAcct<br>Capitalize|  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctId`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctType`|DDA<br>SDA|  |
|`DepositAcctInfo.OverdraftData`|||
|`DepositAcctInfo.OverdraftData.OverdraftEnrollOpt`|NoODPAccount<br>ODPAccount<br>OptIn<br>OptOut<br>InstutionOptOut||
|`DepositAcctInfo.OverdraftData.OverdraftAutoTrnInd`|true<br>false||
|`DepositAcctInfo.OverdraftData.OverdraftLimitPriority`|PriorXfer<br>AfterXfer||
|`DepositAcctInfo.OverdraftData.OverdraftLimitAmt`|||
|`DepositAcctInfo.OverdraftData.OverdraftLimitAmt.Amt`|||
|`DepositAcctInfo.OverdraftData.OverdraftLimitAmt.CurCode`|||
|`DepositAcctInfo.OverdraftData.OverdraftLimitAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.OverdraftData.OverdraftLimitAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.OverdraftData.OverdraftReviewDt`|||
|`DepositAcctInfo.OverdraftData.OverdraftRatingCode`|||
|`DepositAcctInfo.OverdraftData.OverdraftTypeCode`|||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft`|||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitOption`|NoAuthorized<br>OptInAtmAuthLimit<br>OptInAtmODLimit<br>OptInAtmPosAuthLimit<br>OptInAtmPosODLimit<br>OptInPosAuthLimit<br>OptInPosODLimit<br>OptOut<br>OptOutCourtesy<br>OptOutNoReply||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.OptInOutDt`|||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.Amt`|||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.CurCode`|||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.NoticeOption`|NoNotice<br>GenerateNotice<br>NoticeSent||
|`DepositAcctInfo.FloatData`|||
|`DepositAcctInfo.FloatData.FloatType`|RegCC||
|`DepositAcctInfo.FloatData.FloatDetails`|||
|`DepositAcctInfo.FloatData.FloatDetails.FloatDays`|1  through 12||
|`DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt`|||
|`DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.Amt`|||
|`DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode`|||
|`DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.FloatData.FloatDetails.CheckFloatAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt`|||
|`DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.Amt`|||
|`DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.CurCode`|||
|`DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.FloatData.FloatDetails.CashFloatAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.SvcChgData`|||
|`DepositAcctInfo.SvcChgData.SvcChgMethod`|||
|`DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodType`|Activity<br>Maintenance <br>||
|`DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodOpt`|||
|`DepositAcctInfo.SvcChgData.CreditBackMethod`|||
|`DepositAcctInfo.SvcChgData.CreditBackAcct`||  |
|`DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackIdent`||  |
|`DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackType`|AllPrimaryDDA<br>AllPrimarySDA<br>AllPrimaryCDA<br>AllPrimaryDeposit<br>AllPrimarySecondaryDeposit<br>AllPrimaryDepositLoan<br>AllPrimarySecondaryDepositLoan<br>AllPrimaryLoan<br>AllPrimarySecondaryLoan<br>PrimaryDDA<br>PrimarySDA<br>PrimaryCDA<br>PrimaryLoan||
|`DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackAcctId`|||
|`DepositAcctInfo.SvcChgData.CreditBackGroupIdent`|1<br>2|Field refers to DDA credit back identification. If client-defined credit back identification matches the credit back identification on DDA account, certificate for calculation of credit back on DDA service charges is included.|
|`DepositAcctInfo.SvcChgData.SvcChgFlatFee`|||
|`DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeType`|ActivityItem<br>DepositItem||
|`DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeIdent`|1 thru 18||
|`DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeAmt`|||
|`DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeAmt.Amt`|||
|`DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeAmt.CurCode`|||
|`DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.SvcChgData.SvcChgFlatFee.SvcChgFlatFeeAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctId`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>||
|`DepositAcctInfo.SvcChgData.SvcChgWaiveCode`|||
|`DepositAcctInfo.SvcChgData.SvcChgWaiveTaxInd`|true<br>false||
|`DepositAcctInfo.SvcChgData.SvcChgTimeFrame`|||
|`DepositAcctInfo.SvcChgData.SvcChgTimeFrame.RecurType`|Cycle||
|`DepositAcctInfo.SvcChgData.SvcChgTimeFrame.RecurInterval`|||
|`DepositAcctInfo.CommercialAnalysisData`|||
|`DepositAcctInfo.CommercialAnalysisData.AnalysisCode`|||
|`DepositAcctInfo.CommercialAnalysisData.AnalysisGroup`|||
|`DepositAcctInfo.CommercialAnalysisData.AnalysisChargeAcct`|||
|`DepositAcctInfo.CommercialAnalysisData.AnalysisChargeAcct.AcctKeys`|||
|`DepositAcctInfo.CommercialAnalysisData.AnalysisChargeAcct.AcctKeys.AcctId`|||
|`DepositAcctInfo.CommercialAnalysisData.AnalysisChargeAcct.AcctKeys.AcctType`|DDA||
|`DepositAcctInfo.EscheatDt`||  |
|`DepositAcctInfo.CollateralPledgeCode`||Values of this field are client-defined|
|`DepositAcctInfo.EIM_NSFInstruction`|Specification<br>Post<br>Return<br>PostandReturnNSF||
|`DepositAcctInfo.AutoNSFDecision`|||

The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`||This is an optional aggregate to override warnings from core system and continue the processing.|
|`AcctKeys`||  |
|`AcctKeys.AcctId`||  |
|`AcctKeys.AcctType`|SDA|  |
|`DepositAcctInfo`||  |
|`DepositAcctInfo.AcctDtlStatus`|Active<br>Inactive<br>Dormant<br>ClientControlled<br>Closed|Values are client-defined.|
|`DepositAcctInfo.AcctPref`||  |
|`DepositAcctInfo.AcctPref.Language`|UsePortfolio<br>English<br>Spanish<br>|This is an optional field and user can send value of UserInstitution in the request, if no specific language preference exists.|
|`DepositAcctInfo.TaxIncentiveType`|HSAFamily<br>HSAIndividual<br>None|Values of HSAFamily and HSAIndividual indicate that the account is a Health Savings Account and refers to special reporting code. <br>IRA indicates that the account is a retirement account. <br>Value of 'None' should be provided if no tax benefits are associated to the account.|
|`DepositAcctInfo.RelationshipMgr`||  |
|`DepositAcctInfo.RelationshipMgr.RelationshipMgrIdent`||This field contains user-defined value (up to 5 digits) to identify the officer with a management responsibility of the account.<br>This field can be associated to each RelationshipRole as:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'<br><br>If responsibility code for 'Officer' RelationshipRole is provided in the request, provided value overrides the default value. If value is not provided, default value from the product is considered as responsibility code.<br>Referral responsibility code for 'ReferralOfficer' and opened by responsibility code for 'SecondOfficer' are applied to the account if, RelationshipMgrIdent is provided in the request along with the corresponding RelationshipRole.|
|`DepositAcctInfo.RelationshipMgr.RelationshipRole`|Officer<br>SecondOfficer<br>ReferralOfficer<br>|RelationshipMgrIdent is to be provided in the request along with the corresponding RelationshipRole.<br>RelationshipMgrIdent corresponding to values of RelationshipRole are:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'|
|`DepositAcctInfo.OriginatingBranch`||***Required**<br>This field refers to the branch region.|
|`DepositAcctInfo.ResponsibleBranch`||This field refers to the accouting branch.|
|`DepositAcctInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`DepositAcctInfo.Nickname`||  |
|`DepositAcctInfo.AcctTitleOption`|PrintAfter<br>PrintBefore<br>NotPrinted|Values of this field are user-defined.|
|`DepositAcctInfo.AcctTitle`||  |
|`DepositAcctInfo.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|  |
|`DepositAcctInfo.HandlingCode`||Values of this field are user-defined.|
|`DepositAcctInfo.OEDCode`||Values of this field are user-defined.|
|`DepositAcctInfo.AccountingMethod`|Class<br>CostCenter<br>AcctType|  |
|`DepositAcctInfo.ClassCode`||Values of this field are user-defined.|
|`DepositAcctInfo.AcctTypeCode`||This is an optional field.|
|`DepositAcctInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|Additional values can be user defined.|
|`DepositAcctInfo.ClientDefinedData`||It is required to send the flex data metdata (such as field size) along with the user-entered account data.<br>This is an optional aggregate and should be sent only if the client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataIdent`||***Conditionally Required**<br>This field refers to the field code and required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Value`||***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataLength`||***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.ExpDt`||***Conditionally Required**<br>This field is required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Desc`||This field refers to the field label.|
|`DepositAcctInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`DepositAcctInfo.AcctStmtData`||***Conditionally Required**<br>This aggregate is required to be provided if statement data defaults are not configured in product specifications. If statement data defaults are set up under specifications, product defaults are applied to the account.<br>Statement data overrides product default values if provided in the request.<br>Alternate statement cycle functionality is supported in addition to the statement cycle and, additional set up is required to use alternate statement cycle.<br>If product is configured to use alternate statement cycle in product specifications then, by default, alternate statement cycle is used for an account of this product.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame`||Two instances of StmtTimeFrame can be provided if applicable. One for statement cycle and another to identify alternate statement cycle. Instance provided for alternate statement cycle should have AlternateStmtInd set to true.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurType`|Cycle|  |
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurInterval`||This field is used to identify user-defined statement cycle number/alternate statement cycle number.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtInd`|true<br>false|This field is used to identify alternate statement cycle.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtOption`|None<br>Stmt<br>StmtAndInt<br>StmtAndSvcChg<br>StmtAndIntAndSvcchg|  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtIdent`||  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtCode`|Primary<br>SecondaryDDA<br>SecondarySDA<br>|  |
|`DepositAcctInfo.AcctStmtData.SpecialStmtCode`|Transcript<br>FinalStmt<br>None<br>DropTransactions|  |
|`DepositAcctInfo.NoticeData`||  |
|`DepositAcctInfo.NoticeData.NoticeType`|ACHNotice<br>BalanceOnReceipt<br>ChargeBack<br>IntNotice<br>MaturityNotice<br>PayeeChanges<br>RateChangeNotice<br>RegCCNotice<br>RegularNotice<br>|Values provided in this field are:<br>ACHNotice - Refers to ACH Notification Code Override.<br>ChargeBack - Refers to EIM Charge Back Notice Detail. <br>PayeeChanges - Refers to Payee List Request Code. <br>BalanceOnReceipt - Refers to ReceiptBalanceOverride.<br>RegularNotice - Refers to NotificationCode.|
|`DepositAcctInfo.NoticeData.NoticeOption`||  |
|`DepositAcctInfo.ProdIntRateId`||This field refers to deposit rate index and is used to indicate the structures (defined in deposit rate specifications) used to calculate interest of an account. |
|`DepositAcctInfo.IntRateData`||  |
|`DepositAcctInfo.IntRateData.APYRecurType`|IntPmtFrequency<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>Weekly<br>BiWeekly<br>Maturity<br>|If interest rate data is added to an account, and funds are not withdrawn during the year, then APYRecurType should be provided for calculation of the total interest that can be earned.|
|`DepositAcctInfo.IntRateData.AccrualMethod`|Simple<br>Daily|If interest rate data is added to the account, then AccrualMethod should be provided to specify the method used to compound/accrue interest.|
|`DepositAcctInfo.MaturityIntCalcData`||This is an optional aggregate and should be provided for calculation on accounts after maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRateType`|CurrentRate<br>CurrentRateInPeriod<br>MaturityIntRate|This is an optional field and used to identify interest calculation/processing on deposits or other accounts post maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRate`||This is an optional field and should be provided if, interest calculation/processing is required on deposits or other accounts post maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRecurType`|Daily<br>|Maturity rate period is expressed in days.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntInterval`||This is an optional field and should be provided if, interest calculation/processing is required on deposits or other accounts post maturity.|
|`DepositAcctInfo.RateChangeData`||  |
|`DepositAcctInfo.RateChangeData.RateChangeControl`|Fixed<br>StepFreq<br>RateIndex<br>IndexFreq|This field is used to indicate if the base rate is used and if the rate is fixed or variable. Should be provided if the interest rate is adjusted/changed at specified frequency.|
|`DepositAcctInfo.RateChangeData.VarianceFactorType`|Variance<br>Factor|This field is used to indicate the interest rate change based on a factor or variance percentage.|
|`DepositAcctInfo.RateChangeData.RateVariance`||Field is to be used if VarianceFactorType = Variance.|
|`DepositAcctInfo.RateChangeData.IncreaseOnlyInd`|true<br>false|This field indicates if the interest revision can be increment only.|
|`DepositAcctInfo.RateChangeData.FloorRate`||  |
|`DepositAcctInfo.RateChangeData.CeilingRate`||  |
|`DepositAcctInfo.RateChangeData.RateChangeRecurType`|Daily<br>Maturity<br>Monthly<br>Weekly<br>Yearly<br>SemiYearly<br>InterestCycle<br>None<br>Quarterly<br>BiWeekly<br>|This is an optional field to indicate the recurrence type (period) of the rate change.|
|`DepositAcctInfo.RateChangeData.RecurInterval`||  |
|`DepositAcctInfo.RateChangeData.DayOfMonth`||  |
|`DepositAcctInfo.RateChangeData.LeadDays`||  |
|`DepositAcctInfo.RateChangeData.NextRateChangeDt`||  |
|`DepositAcctInfo.PostAddr`||***Required**<br>At least one account address is required to be provided.<br>Account can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.<br>Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if account can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only primary address type and AddrUse as Inquiry is to be provided.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, secondary address type and AddrUse as Mailing and Names is to be provided.<br>If existing address is to be linked to an account then, AddressIdent including AddrType, AddrUse and AdddrFormatType are required to be provided.<br>If new address is to be created for an account, address details including AddrType, AddrUse and AdddrFormatType is required to be provided and AddressIdent should not be provided in the request.|
|`DepositAcctInfo.PostAddr.OpenDt`||***Conditionally Required**<br>This field is not applicable to the seasonal address type and required to be provided if new address record is to be created.|
|`DepositAcctInfo.PostAddr.RelationshipMgr`||Value of AddrUse for primary and related seasonal address is 'Inquiry'.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`||This field is not applicable to the seasonal address type. Values in this field are user-defined.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Officer refers to responsibility code, whereas referral officer refers to referral responsibility code.|
|`DepositAcctInfo.PostAddr.OriginatingBranch`||This field is not applicable for seasonal address type and is required to be provided if new address record os to be created. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.ResponsibleBranch`||This field is not applicable for seasonal address type and refers to the accounting branch associated to the address record. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.NameIdent`||Applicable if AddrType is secondary and AddrUse is mailing and, not applicable for seasonal address type.<br>Only up to 3 name identifiers can be provided if financial institution is configured to use different Primary/Inquiry and Secondary/Mailing addresses and names. If provided for Primary/Inquiry address it will be ignored as name relationships for inquiry are established using information provided in PartyCardRelInfo.<br>Only names which have a relationship to the safe deposit box or account portfolio can be associated to safe deposit box for mailing purpose.<br>|
|`DepositAcctInfo.PostAddr.AddressIdent`||If new address is to be created for a card, address details including AddrType, AddrUse and AdddrFormatType is required to be provided.|
|`DepositAcctInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|***Required**<br>AddrUse for primary and related seasonal address is 'Inquiry', whereas for secondary and related seasonal address is 'Mailing'.<br>Account can have different inquiry and mailing addresses.<br> - If parameter is set to N, both inquiry and mailing addresses are same therefore, primary/inquiry address information is supported.<br> - If parameter is set to Y, then secondary/mailing and primary/inquiry addresses are supported whereas, inquiry and mailing address data can be provided in request.<br>AddrUse for seasonal address is always same as primary/secondary address.|
|`DepositAcctInfo.PostAddr.AddrFormatType`|Label|Label address format is supported.|
|`DepositAcctInfo.PostAddr.Addr1`||***Conditionally Required**<br>To be provided in request if new address record is created.|
|`DepositAcctInfo.PostAddr.Addr2`||Addr2 is valid if enabled in the CIS Miscellaneous (Institution) specifications.|
|`DepositAcctInfo.PostAddr.City`||***Conditionally Required**<br>It is mandatory to provide this field if a new address record is to be created.<br>Field length is 20 characters long (including spaces). It is recommended for consumer to abbreviate the value sent in the EFX request to prevent truncation (For example, City name "Rancho Santa Margarita" exceeds 20 characters and can be abbreviated to "Rancho S Margarita" to avoid truncation). Total length of 40 characters is supported for city, StateProv and PostalCode (appended together) including spaces.<br>|
|`DepositAcctInfo.PostAddr.StateProv`||It is mandatory to provide this field if new address record is created and country is United States.|
|`DepositAcctInfo.PostAddr.PostalCode`||***Conditionally Required**<br>It is required to provide this field if, a new address record is to be created with country as United States.<br><br>Postal Code provides information about the ZIP code if, address is from United States and, provides information about postal code if, address is not from United States.  This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code of four digits is optional and provides a more specific location within a given ZIP code. If additional code is not provided, it can be represented with value as '0000'. For example, 32714-1234 or 32714-0000.<br><br>Postal codes are string of characters for non-US addresses.|
|`DepositAcctInfo.PostAddr.CountryCode`||  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeValue`||Values in this field are user-defined.|
|`DepositAcctInfo.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|***Required**<br>Account can have one primary, one secondary and two seasonal addresses. <br>However, seasonal address cannot exist as a single address record hence, it is always related to a primary/secondary address. Therefore, seasonal address always shares AddressIdent and AddrUse with primary or the secondary address.<br>In order to relate the primary/secondary address with seasonal address, present the seasonal address right after the primary/secondary address.<br>It is required to provide the TimeFrame for seasonal address.|
|`DepositAcctInfo.PostAddr.TimeFrame`||  |
|`DepositAcctInfo.PostAddr.TimeFrame.StartDt`||This field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.TimeFrame.EndDt`||This field is applicable only if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.Retention`||Retention code indicates if the address record is to be retained, or deleted if no accounts, tax addenda or any other relationship exists on an address record.|
|`DepositAcctInfo.PostAddr.CensusTract`||  |
|`DepositAcctInfo.PostAddr.CensusBlock`||  |
|`DepositAcctInfo.PostAddr.ForeignFlag`|true<br>false|  |
|`DepositAcctInfo.PostAddr.HandlingCode`||Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.MSACode`||  |
|`DepositAcctInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`DepositAcctInfo.WithholdingData`||  |
|`DepositAcctInfo.WithholdingData.WithholdingType`|FederalTax<br>StateTax|  |
|`DepositAcctInfo.WithholdingData.WithholdingPercent`||  |
|`DepositAcctInfo.IntReportingInd`|true<br>false|  |
|`DepositAcctInfo.Fee`|||
|`DepositAcctInfo.Fee.FeeIdent`|||
|`DepositAcctInfo.Fee.FeePlan`|||
|`DepositAcctInfo.Fee.Desc`|||
|`DepositAcctInfo.Fee.FeeType`|ATMFee<br>BillPmt<br>DormantFee<br>EIM<br>FDIC<br>Other<br>OtherNonTax<br>OverdraftFee<br>OverdraftInt<br>Recurring||
|`DepositAcctInfo.Fee.FeeOption`|Charge<br>Waive<br>||
|`DepositAcctInfo.Fee.CurAmt`|||
|`DepositAcctInfo.Fee.CurAmt.Amt`|||
|`DepositAcctInfo.Fee.CurAmt.CurCode`|||
|`DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeValue`|||
|`DepositAcctInfo.Fee.TimeFrame`|||
|`DepositAcctInfo.Fee.TimeFrame.StartDt`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurType`|Cycle<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>SvcChgCycle||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurInterval`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.Occurrences`|||
|`DepositAcctInfo.Fee.FeeWaiver`|||
|`DepositAcctInfo.Fee.FeeWaiver.WaiverCode`|||
|`DepositAcctInfo.CreditRisk`||  |
|`DepositAcctInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>|  |
|`DepositAcctInfo.CreditRisk.InternalScore`||Field indicates the risk score based on account profile. Avlues of this field are client-defined.|
|`DepositAcctInfo.RiskRanking`|None<br>Low<br>Medium<br>High|Field indicates risk level of the account (Low to High). Additional values of this field can be client defined.|
|`DepositAcctInfo.TrnRestriction`||Field is used to determine the restrictions applicable on trnasactions of an account.|
|`DepositAcctInfo.TrnRestrictionOvrd`||Values of this field are client-defined.|
|`DepositAcctInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disable|Field refers to electronic banking restriction.|
|`DepositAcctInfo.ReportGroupCode`||Values of this field are client-defined.|
|`DepositAcctInfo.DocDistributionOption`||Values of this field are client-defined.|
|`DepositAcctInfo.NAICS`||  |
|`DepositAcctInfo.CostCenter`||Values of this field are client-defined.|
|`DepositAcctInfo.RetentionOption`|None<br>DoNotRetain<br>Retain||
|`DepositAcctInfo.AcctMemoData`||  |
|`DepositAcctInfo.AcctMemoData.AcctMemoIdent`|1<br>2<br>3|***Conditionally Required**<br>Field is required if AcctMemoType is Teller.<br>Up to 3 teller alerts are supported.|
|`DepositAcctInfo.AcctMemoData.AcctMemoType`|Teller<br>Warning|Only one warning can be sent in the request.|
|`DepositAcctInfo.AcctMemoData.AcctMemoText`||Values of this field are client-defined.|
|`DepositAcctInfo.RenewalData`||  |
|`DepositAcctInfo.RenewalData.RenewalOption`|None<br>AutomaticRenewal<br>NoRenewalAllowed|  |
|`DepositAcctInfo.RenewalData.RenewalFrequency`||  |
|`DepositAcctInfo.RenewalData.RenewalFrequency.RecurType`|Daily<br>Monthly|  |
|`DepositAcctInfo.RenewalData.RenewalFrequency.RecurInterval`||  |
|`DepositAcctInfo.RenewalData.RenewalProductIdent`||  |
|`DepositAcctInfo.IntDispData`||  |
|`DepositAcctInfo.IntDispData.IntDisposition`|TransferToAcct<br>Check<br>Capitalize<br>None<br>|  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctId`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctType`|DDA<br>SDA|  |
|`DepositAcctInfo.IntDispData.DistributionAmt`||  |
|`DepositAcctInfo.IntDispData.DistributionAmt.Amt`||  |
|`DepositAcctInfo.IntDispData.DistributionAmt.CurCode`||  |
|`DepositAcctInfo.IntDispData.DistributionAmt.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`DepositAcctInfo.IntDispData.DistributionAmt.CurCode.CurCodeValue`|USD|Only USD is supported.|
|`DepositAcctInfo.IntDispData.WithholdingOption`|None<br>FederalTax<br>StateTax<br>FederalAndState|  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency`||  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.RecurType`|Cycle<br>Monthly<br>BiWeekly<br>Quarterly<br>Yearly<br>SemiYearly<br>Weekly<br>Maturity<br>Daily<br><br>|  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.RecurInterval`||  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.DayOfMonth`||Day of the month when interest is paid is not valid if Interest Payment Frequency of Cycle is used.|
|`DepositAcctInfo.IntDispData.NextIntPmtDt`||  |
|`DepositAcctInfo.RetirementAcctData`||If product type is set up as IRA account at the time of opening a new account, data specific to retirement account (Retirement Plan Type, Default Contirbution and Distribution Types) is set up by default as per the product level parameters.|
|`DepositAcctInfo.RetirementAcctData.RetirementPlanType`||Field refers to IRA plan. <br>Values are client-defined and can be set up under Certificate of Deposits/IRA specifications.<br>Range of values supported is 01 -20.<br>If value is not provided for product type set up as IRA account, by default, values of RetirementPlanType set up under product are considered.|
|`DepositAcctInfo.RetirementAcctData.RetirementStatus`|NotEligible<br>Eligible<br>DistributionDisability<br>DistributionDeath<br>DistributionNormal|Field refers to IRA status code that indicates the distribution status of retirement account. If value is not provided, default value of NotEligible is considered.|
|`DepositAcctInfo.ClubPayoffData`|||
|`DepositAcctInfo.ClubPayoffData.ClubPayoffOption`|TransferToAcct<br>Check<br>None||
|`DepositAcctInfo.ClubPayoffData.ClubPayoffAcctRef`|||
|`DepositAcctInfo.ClubPayoffData.ClubPayoffAcctRef.AcctKeys`|||
|`DepositAcctInfo.ClubPayoffData.ClubPayoffAcctRef.AcctKeys.AcctId`|||
|`DepositAcctInfo.ClubPayoffData.ClubPayoffAcctRef.AcctKeys.AcctType`|SDA<br>DDA<br>||
|`DepositAcctInfo.SvcChgData`|||
|`DepositAcctInfo.SvcChgData.SvcChgMethod`|||
|`DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodType`|Activity<br>Maintenance||
|`DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodOpt`|||
|`DepositAcctInfo.SvcChgData.CreditBackGroupIdent`||Field refers to DDA credit back identification. If client-defined credit back identification matches the credit back identification on DDA account, certificate for calculation of credit back on DDA service charges is included.|
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctId`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctType`|DDA<br>SDA||
|`DepositAcctInfo.SvcChgData.SvcChgWaiveCode`|||
|`DepositAcctInfo.SvcChgData.SvcChgWaiveTaxInd`|true<br>false||
|`DepositAcctInfo.SvcChgData.SvcChgTimeFrame`|||
|`DepositAcctInfo.SvcChgData.SvcChgTimeFrame.RecurType`|Cycle||
|`DepositAcctInfo.SvcChgData.SvcChgTimeFrame.RecurInterval`|||
|`DepositAcctInfo.EscheatDt`||  |
|`DepositAcctInfo.CollateralPledgeCode`||Values of this field are client-defined|
|`DepositAcctInfo.CheckNameOption`|JointAnd<br>JointOr<br>None|  |
|`DepositAcctInfo.ForfeitureCalcMethod`|Forfeiture1<br>Forfeiture2<br>Forfeiture3|Overrides the forfeiture method in miscellaneous-1 specifications.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||This aggregate is returned in the response and indicates the high-level status code and description of the operation. Error details/code are returned in case of a failure.|
|`AcctStatusRec`||  |
|`AcctStatusRec.AcctKeys`||  |
|`AcctStatusRec.AcctKeys.AcctId`||  |
|`AcctStatusRec.AcctKeys.AcctType`|SDA|  |
|`AcctStatusRec.AcctKeys.BranchIdent`|||
|`AcctStatusRec.AcctStatus`||This aggregate contains the status and last updated date/time details  of an account.|
|`AcctStatusRec.AcctStatus.AcctStatusCode`|Valid|Field refers to status of an account.|
|`AcctStatusRec.AcctStatus.EffDt`||  |

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


<!-- type: tab-end -->
