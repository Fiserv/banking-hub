# Implementation Notes for Add Account
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, , ,Precision, Signature, DNA, 
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
|`OvrdExceptionData`||Optional aggregate to override warnings from core system and continue the processing.|
|`PartyAcctRelInfo`||***Required**<br>Information provided in this aggregate is used to establish relationship between a party(s) and new account. One PartyAcctRelInfo aggregate should be provided for each party to be associated to an account. Party can have multiple relationships with an account and in this case, PartyAcctRelData aggregate should be provided multiple times within the PartyAcctRelInfo aggregate. For example, a party can have both power of attorney and trustee relationship with an account.|
|`PartyAcctRelInfo.PartyRef`||  |
|`PartyAcctRelInfo.PartyRef.PartyKeys`||  |
|`PartyAcctRelInfo.PartyRef.PartyKeys.PartyId`||***Required**<br>Unique identifier of party associated with an account.|
|`PartyAcctRelInfo.PartyAcctRelData`||***Required**<br>Multiple PartyAcctRelData aggregates can be provided in  the request if a party is intended to have multiple relationships with an account.|
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelType`|Owner<br>Signer<br>OwnerSigner<br>JointTenancy<br>Executor<br>Trustee<br>Borrower<br>CoBorrower<br>Custodian<br>DoingBusinessAs<br>Fiduciary|In addition to the values defined by service provider, financial institutions can create user defined relationship types. Each party should have at least one relationship type with the associated account, whereas party can have multiple relationship types with the account.<br>OwnerSigner, Owner and Signer relationships are commonly used for PartyAcctRelOrders with values First, Second or Third and, for party that is tax reporting owner.|
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelOrder`|First<br>Second<br>Third<br>Other|***Required**<br>Parties having first, second and third relationship order are considered to be the main names and, only one party can be associated with first/second/third relationship order on the account. Relationship order value of 'Other' is commonly used for relationships other than OwnerSigner, Signer and Owner. One party can have multiple 'Other' type of relationship orders on account. If Mailing Name Option parameter is set up at financial institution, then first, second and third names can be used for inquiry or account related mailing purpose. If Mailing Name Option parameter is set to Y, account can have up to 3 names for mailing purpose which can be provided in PostAddr aggregate.|
|`PartyAcctRelInfo.OwnerInd`|true<br>false|ESF has introduced a new data element PartyAcctRelOrder to identify first 3 names displayed on the account. This element is available in ESF release prior to 9.2 and will be deprecated in future.|
|`PartyAcctRelInfo.TaxReportingOwnerInd`|true<br>false|Used to identify the party that has tax responsibility of an account. At least one tax relationship is required to create an account and, there cannot be more than one tax relationships associated to an account. If primary tax reporting indicator is not provided, by default, first party will be considered as tax reporting owner.|
|`DepositAcctInfo`||  |
|`DepositAcctInfo.AcctPref`||  |
|`DepositAcctInfo.AcctPref.Language`|UserInstitution<br>English<br>Spanish<br>|Optional field and user can send value of UserInstitution in the request, if no specific language preference exists.|
|`DepositAcctInfo.AcctIdent`||  |
|`DepositAcctInfo.AcctIdent.AcctIdentType`|PORT<br>AcctNum|Value of PORT refers to the portfolio number. If portfolio number is provided in the request, ESF will relate the new account created to existing portfolio and if portfolio number is not provided, ESF will create a portfolio account and related it with the new account that is created. It is required to provide the portfolio number if exists, to avoid creating multiple portfolios.<br><br>AcctNum refers to the account number associated with the new account that is created. Account number can be provided if it is known prior to creating an account else, new account number will be generated for the account.|
|`DepositAcctInfo.AcctIdent.AcctIdentValue`||If value of AcctIdentType is 'AcctNum' then, this field identifies the account number to use for the CDA account type. If account number is not sent in request, system will get the next account number to use.<br><br>If value of AcctIdentType is 'PORT' then it denotes the portfolio number that is associated to the new account to be created. If a portfolio is not sent, then system will create the next available portfolio number and associate it to the customer.<br>Portfolio number can be retrieved by ESF AddrInq operation by providing the AddressIdent associated to an account. All the portfolios associated to the customer can be retreieved with ESF PartyAcctRelInq operation by providing the PartyId.|
|`DepositAcctInfo.ProductIdent`||***Required**<br>Values are user-defined.|
|`DepositAcctInfo.AcctType`|CDA<br>|***Required**<br>Value of CDA should be provided in this field if certificate deposit account or an individual retirement account is to be created. Value of AcctType returned by ESF (i.e., AcctStatusRec/AcctKeys/AcctType) is same as DepositAcctInfo/AcctType as provided in the request.<br>To create an individual retirement account, DepositAcctInfo/RetirementAcctData aggregates should be provided in the request.|
|`DepositAcctInfo.TaxIncentiveType`|HSAFamily<br>HSAIndividual<br>None<br>IRA|Values of HSAFamily and HSAIndividual indicate that the account is a Health Savings Account and refers to special reporting code. <br>IRA indicates that the account is a retirement account. <br>Value of 'None' should be provided if no tax benefits are associated to the account.|
|`DepositAcctInfo.InitialAmount`||***Conditionally Required**<br>Initial deposit amount is required to be provided for time account.|
|`DepositAcctInfo.InitialAmount.Amt`||  |
|`DepositAcctInfo.InitialAmount.CurCode`||  |
|`DepositAcctInfo.InitialAmount.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`DepositAcctInfo.InitialAmount.CurCode.CurCodeValue`||  |
|`DepositAcctInfo.OpenDt`||***Required**|
|`DepositAcctInfo.Term`||***Required**|
|`DepositAcctInfo.Term.Count`||  |
|`DepositAcctInfo.Term.TermUnits`|Months<br>Days|  |
|`DepositAcctInfo.MaturityDt`||  |
|`DepositAcctInfo.RelationshipMgr`||  |
|`DepositAcctInfo.RelationshipMgr.RelationshipMgrIdent`||User-defined value (up to five digits) to identify the officer with a management responsibility of the account.<br>This field can be associated to each RelationshipRole as:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'<br><br>If responsibility code for 'Officer' RelationshipRole is provided in the request, provided value overrides the default value. If value is not provided, default value from the product is considered as responsibility code.<br>Referral responsibility code for 'ReferralOfficer' and opened by responsibility code for 'SecondOfficer' are applied to the account if, RelationshipMgrIdent is provided in the request along with the corresponding RelationshipRole.|
|`DepositAcctInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer<br>SecondOfficer<br>|RelationshipMgrIdent is to be provided in the request along with the corresponding RelationshipRole.<br>RelationshipMgrIdent corresponding to values of RelationshipRole are:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'|
|`DepositAcctInfo.OriginatingBranch`||***Required**<br>Branch region of an account.|
|`DepositAcctInfo.ResponsibleBranch`||Accouting branch of an account.|
|`DepositAcctInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`DepositAcctInfo.Nickname`||  |
|`DepositAcctInfo.AcctTitleOption`||Values are user-defined.|
|`DepositAcctInfo.AcctTitle`||  |
|`DepositAcctInfo.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|  |
|`DepositAcctInfo.HandlingCode`||Values are user-defined.|
|`DepositAcctInfo.OEDCode`||Values are user-defined.|
|`DepositAcctInfo.AccountingMethod`|Class<br>CostCenter<br>AcctType|  |
|`DepositAcctInfo.ClassCode`||Values are user-defined.|
|`DepositAcctInfo.AcctTypeCode`||Optional field.|
|`DepositAcctInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|Additional values can be user defined.|
|`DepositAcctInfo.ClientDefinedData`||It is required to send the flex data metdata (such as field size) along with the user-entered account data.<br>Optional aggregate and should be sent only if the client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataIdent`||***Conditionally Required**<br>This field refers to field code and required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|***Conditionally Required**<br>Should be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Value`||***Conditionally Required**<br>It is required to provide this field if, client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataLength`||***Conditionally Required**<br>It is required to provide this field if, client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.ExpDt`||***Conditionally Required**<br>It is required to provide this field if, client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Desc`||Field label.|
|`DepositAcctInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`DepositAcctInfo.AcctStmtData`||***Conditionally Required**<br>Aggregate is required to be provided if statement data defaults are not configured in product specifications. If statement data defaults are set up under specifications, product defaults are applied to the account.<br>Statement data overrides product default values if provided in the request.<br>Alternate statement cycle functionality is supported in addition to the statement cycle and, additional set up is required to use alternate statement cycle.<br>If product is configured to use alternate statement cycle in product specifications then, by default, alternate statement cycle is used for an account of this product.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame`||Two instances of StmtTimeFrame can be provided if applicable. One for statement cycle and another to identify alternate statement cycle. Instance provided for alternate statement cycle should have AlternateStmtInd set to true.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurType`|Cycle|  |
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurInterval`||This field is used to identify user-defined statement cycle number/alternate statement cycle number.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtInd`|true<br>false|Used to identify alternate statement cycle.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtOption`|None<br>Stmt<br>SmtAndInt<br>StmtAndSvcChg<br>StmtAndIntAndSvcChg|  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtIdent`||  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtCode`|DoNotCombine<br>SecondaryDDA<br>SecondarySDA|  |
|`DepositAcctInfo.AcctStmtData.SpecialStmtCode`|Transcript<br>FinalStmt<br>None<br>DropTransactions|  |
|`DepositAcctInfo.AcctStmtData.StmtGroup`||Used to indicate if an inquiry can be done to retrieve the relationship of an account with other accounts attached to a portfolio. This will indicate the combined statement relationship code.|
|`DepositAcctInfo.NoticeData`||  |
|`DepositAcctInfo.NoticeData.NoticeType`|RegularNotice<br>BalanceOnReceipt<br>IntNotice<br>MaturityNotice<br>RateChangeNotice|Values provided in this field are:<br>ACHNotice - Refers to ACH Notification Code Override.<br>ChargeBack - Refers to EIM Charge Back Notice Detail. <br>PayeeChanges - Refers to Payee List Request Code. <br>BalanceOnReceipt - Refers to ReceiptBalanceOverride.<br>RegularNotice - Refers to NotificationCode.|
|`DepositAcctInfo.NoticeData.NoticeOption`|NoNotice<br>GenerateNotice<br>NoticeSent<br>NoOverride|  |
|`DepositAcctInfo.NoticeData.GenLastUpDtInd`|true<br>false|Change notification request code. |
|`DepositAcctInfo.ProdIntRateId`||Deposit rate index used to indicate the structures (defined in deposit rate specifications) used to calculate interest of an account. |
|`DepositAcctInfo.Rate`||Base rate that is applicable when the rate change control is StepFreq.<br>|
|`DepositAcctInfo.IntRateData`||  |
|`DepositAcctInfo.IntRateData.APYRecurType`|IntPmtFrequency<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>Weekly<br>BiWeekly<br>Maturity|If interest rate data is added to an account, and funds are not withdrawn during the year, then APYRecurType should be provided for calculation of the total interest that can be earned.|
|`DepositAcctInfo.IntRateData.AccrualMethod`|Simple<br>Daily<br>Continuous|If interest rate data is added to the account, then AccrualMethod should be provided to specify the method used to compound/accrue interest.|
|`DepositAcctInfo.IntRateData.AccrualCode`||***Conditionally Required**<br>This field is required if, AccrualMethod is provided to classify/group the information.|
|`DepositAcctInfo.IntRateData.EffDt`||  |
|`DepositAcctInfo.MaturityIntCalcData`||Optional aggregate and should be provided for calculation on accounts after maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRateType`|CurrentRate<br>CurrentRateInPeriod<br>MaturityIntRate|Optional field and used to identify interest calculation/processing on deposits or other accounts post maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRate`||Optional field and should be provided if, interest calculation/processing is required on deposits or other accounts post maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntInterval`||Optional field and should be provided if, interest calculation/processing is required on deposits or other accounts post maturity.|
|`DepositAcctInfo.RateChangeData`||  |
|`DepositAcctInfo.RateChangeData.RateChangeControl`|Fixed<br>StepFreq<br>IndexFreq<br>|Used to indicate if the base rate is used and if the rate is fixed or variable. Should be provided if the interest rate is adjusted/changed at specified frequency.|
|`DepositAcctInfo.RateChangeData.VarianceFactorType`|Variance<br>Factor|Used to indicate the interest rate change based on a factor or variance percentage.|
|`DepositAcctInfo.RateChangeData.RateVariance`||Field is to be used if VarianceFactorType = Variance.|
|`DepositAcctInfo.RateChangeData.PendingRate`||Optional field and should be provided if required. Pending rate information is not stored under product type so, default value from product is not available.|
|`DepositAcctInfo.RateChangeData.PendingRate.EffDt`||***Conditionally Required**<br>This field indicates the effective date of pending interest cycle and pending rate. Cycle and rate changes are effective after completion of current interest cycle, beginning with the first full cycle after the pending rate effective date.<br>This field is required if pending rate information is applicable on an account.|
|`DepositAcctInfo.RateChangeData.PendingRate.ProdIntRateId`||This field refers to pending deposit rate index. If ProdIntRateId is to be provided in request, pending interest payment frequency should also be sent. Values in this field are user-defined.|
|`DepositAcctInfo.RateChangeData.PendingRate.VarianceFactorType`|Variance<br>Factor|  |
|`DepositAcctInfo.RateChangeData.PendingRate.RateVariance`||This field is applicable if variance factor type is 'Variance' and refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateVariance.<br>Either RateFactor or RateVariance can be provided in  the request and both the fields cannot be sent.|
|`DepositAcctInfo.RateChangeData.PendingRate.RateFactor`||This field is applicable if variance factor type is 'Factor' and refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateFactor.<br>Either RateFactor or RateVariance can be provided in  the request and both the fields cannot be sent.|
|`DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency`||  |
|`DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurType`|Cycle|  |
|`DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurInterval`||Field refers to the pending interest cycle that is pending frequency of interest credit to the customer.|
|`DepositAcctInfo.RateChangeData.IncreaseOnlyInd`|true<br>false|Field indicates if the interest revision can only be increased.|
|`DepositAcctInfo.RateChangeData.FloorRate`||  |
|`DepositAcctInfo.RateChangeData.CeilingRate`||  |
|`DepositAcctInfo.RateChangeData.RateChangeRecurType`|Maturity<br>Monthly<br>Quarterly <br>SemiYearly<br>BiWeekly<br>Weekly<br>Yearly<br>InterestCycle<br>None<br>|Optional field to indicate the recurrence type (period) of the rate change.|
|`DepositAcctInfo.RateChangeData.RecurInterval`||  |
|`DepositAcctInfo.RateChangeData.LeadDays`||  |
|`DepositAcctInfo.RateChangeData.NextRateChangeDt`||  |
|`DepositAcctInfo.PostAddr`||***Required**<br>At least one account address is required to be provided.<br>Account can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.<br>Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if account can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only primary address type and AddrUse as Inquiry is to be provided.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, secondary address type and AddrUse as Mailing and Names is to be provided.<br>If existing address is to be linked to an account then, AddressIdent including AddrType, AddrUse and AdddrFormatType are required to be provided.<br>If new address is to be created for an account, address details including AddrType, AddrUse and AdddrFormatType is required to be provided and AddressIdent should not be provided in the request.|
|`DepositAcctInfo.PostAddr.OpenDt`||***Conditionally Required**<br>This field is not applicable to the seasonal address type and required to be provided if new address record is to be created.|
|`DepositAcctInfo.PostAddr.RelationshipMgr`||Value of AddrUse for primary and related seasonal address is 'Inquiry'.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`||This field is not applicable to the seasonal address type. Values in this field are user-defined.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipRole`||Value of Officer refers to responsibility code, whereas Referral Officer refers to referral responsibility code.|
|`DepositAcctInfo.PostAddr.OriginatingBranch`||This field is not applicable for seasonal address type and is required to be provided if new address record os to be created. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.ResponsibleBranch`||Not applicable for seasonal address type and refers to the accounting branch associated to the address record. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.NameIdent`||Applicable if AddrType is secondary and AddrUse is mailing and, not applicable for seasonal address type.<br>Only up to 3 name identifiers can be provided if financial institution is configured to use different Primary/Inquiry and Secondary/Mailing addresses and names. If provided for Primary/Inquiry address it will be ignored as name relationships for inquiry are established using information provided in PartyCardRelInfo.<br>Only names which have a relationship to the safe deposit box or account portfolio can be associated to safe deposit box for mailing purpose.<br>|
|`DepositAcctInfo.PostAddr.AddressIdent`||AddressIdent is shared by primary and related seasonal address whereas, secondary and related seasonal address. Is is required to be provided if existing address is to be added to new account.<br>Do not provide this field is new address is to be created for an account.|
|`DepositAcctInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|***Required**<br>AddrUse for primary and related seasonal address is 'Inquiry', whereas for secondary and related seasonal address is 'Mailing'.<br>Account can have different inquiry and mailing addresses.<br> - If parameter is set to N, both inquiry and mailing addresses are same therefore, primary/inquiry address information is supported.<br> - If parameter is set to Y, then secondary/mailing and primary/inquiry addresses are supported whereas, inquiry and mailing address data can be provided in request.<br>AddrUse for seasonal address is always same as primary/secondary address.|
|`DepositAcctInfo.PostAddr.AddrFormatType`|Label|Label address format is supported.|
|`DepositAcctInfo.PostAddr.Addr1`||***Conditionally Required**<br>To be provided in request if new address record is to be created.|
|`DepositAcctInfo.PostAddr.Addr2`||Addr2 is valid if enabled in the CIS Miscellaneous (Institution) specifications.|
|`DepositAcctInfo.PostAddr.City`||***Conditionally Required**<br>It is mandatory to provide this field if a new address record is to be created.<br>Field length is 20 characters long (including spaces). It is recommended for consumer to abbreviate the value sent in the EFX request to prevent truncation (For example, City name "Rancho Santa Margarita" exceeds 20 characters and can be abbreviated to "Rancho S Margarita" to avoid truncation). Total length of 40 characters is supported for city, StateProv and PostalCode (appended together) including spaces.<br>|
|`DepositAcctInfo.PostAddr.StateProv`||It is mandatory to provide this field if new address record is created and country is United States.|
|`DepositAcctInfo.PostAddr.PostalCode`||***Conditionally Required**<br>It is required to provide this field if, a new address record is to be created with country as United States.<br><br>Postal Code provides information about the ZIP code if, address is from United States and, provides information about postal code if, address is not from United States.  This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code of four digits is optional and provides a more specific location within a given ZIP code. If additional code is not provided, it can be represented with value as '0000'. For example, 32714-1234 or 32714-0000.<br><br>Postal codes are string of characters for non-US addresses.|
|`DepositAcctInfo.PostAddr.CountryCode`||  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeSource`||  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeValue`||Values are user-defined.|
|`DepositAcctInfo.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|***Required**<br>Account can have one primary, one secondary and two seasonal addresses. <br>However, seasonal address cannot exist as a single address record hence, it is always related to a primary/secondary address. Therefore, seasonal address always shares AddressIdent and AddrUse with primary or the secondary address.<br>In order to relate the primary/secondary address with seasonal address, present the seasonal address right after the primary/secondary address.<br>It is required to provide the TimeFrame for seasonal address.|
|`DepositAcctInfo.PostAddr.TimeFrame`||  |
|`DepositAcctInfo.PostAddr.TimeFrame.StartDt`||Applicable if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.TimeFrame.EndDt`||Applicable if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.Retention`||Retention code indicates if the address record is to be retained, or deleted if no accounts, tax addenda or any other relationship exists on an address record.|
|`DepositAcctInfo.PostAddr.CensusTract`||  |
|`DepositAcctInfo.PostAddr.CensusBlock`||  |
|`DepositAcctInfo.PostAddr.ForeignFlag`||  |
|`DepositAcctInfo.PostAddr.HandlingCode`||Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint|Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.MSACode`||  |
|`DepositAcctInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`DepositAcctInfo.WithholdingData`||  |
|`DepositAcctInfo.WithholdingData.WithholdingType`|FederalTax<br>StateTax|  |
|`DepositAcctInfo.WithholdingData.WithholdingPercent`||  |
|`DepositAcctInfo.IntReportingInd`|true<br>false|  |
|`DepositAcctInfo.CreditRisk`||  |
|`DepositAcctInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>|  |
|`DepositAcctInfo.CreditRisk.InternalScore`||Risk score based on account profile is indicated. Values are client-defined.|
|`DepositAcctInfo.RiskRanking`||Risk level of an account (Low to High) is indicated. Additional values of this field can be client defined.|
|`DepositAcctInfo.TrnRestriction`||Field is used to determine the restrictions applicable on trnasactions of an account.|
|`DepositAcctInfo.TrnRestrictionOvrd`||Values are client-defined.|
|`DepositAcctInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disable|Field refers to electronic banking restriction.|
|`DepositAcctInfo.ReportGroupCode`||Values are client-defined.|
|`DepositAcctInfo.DocDistributionOption`||Values are client-defined.|
|`DepositAcctInfo.NAICS`||  |
|`DepositAcctInfo.AcctMemoData`||  |
|`DepositAcctInfo.AcctMemoData.AcctMemoIdent`|1<br>2<br>3|***Conditionally Required**<br>Should be provided if AcctMemoType is Teller.<br>Up to three teller alerts are supported.|
|`DepositAcctInfo.AcctMemoData.AcctMemoType`|Teller<br>Warning|Only one warning can be sent in the request.|
|`DepositAcctInfo.AcctMemoData.AcctMemoText`||Values are client-defined.|
|`DepositAcctInfo.RenewalData`||  |
|`DepositAcctInfo.RenewalData.RenewalOption`|AutomaticRenewal<br>NoRenewalAllowed<br>None|  |
|`DepositAcctInfo.RenewalData.RenewalFrequency`||  |
|`DepositAcctInfo.RenewalData.RenewalFrequency.RecurType`|Daily<br>Monthly|  |
|`DepositAcctInfo.RenewalData.RenewalFrequency.RecurInterval`||  |
|`DepositAcctInfo.RenewalData.RenewalProductIdent`||  |
|`DepositAcctInfo.RenewalData.RenewalRate`||Field is used to indicate the applicable rate of interest (base rate) after renewal.|
|`DepositAcctInfo.NegotiableInstrumentInd`|true<br>false|  |
|`DepositAcctInfo.IntDispData`||  |
|`DepositAcctInfo.IntDispData.IntDisposition`|TransferToAcct<br>Check<br>Capitalize|  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctId`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctType`|DDA<br>SDA|  |
|`DepositAcctInfo.IntDispData.DistributionAmt`||  |
|`DepositAcctInfo.IntDispData.DistributionAmt.Amt`||  |
|`DepositAcctInfo.IntDispData.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency`||  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.RecurType`|Maturity<br>Monthly<br>Weekly<br>Yearly<br>Cycle<br>SemiYearly<br>BiWeekly<br>Quarterly<br><br>|  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.RecurInterval`||  |
|`DepositAcctInfo.IntDispData.NextIntPmtDt`||  |
|`DepositAcctInfo.RetirementAcctData`||If product type is set up as IRA account at the time of opening a new account, data specific to retirement account (Retirement Plan Type, Default Contirbution and Distribution Types) is set up by default as per the product level parameters.|
|`DepositAcctInfo.RetirementAcctData.RetirementPlanType`||IRA plan of an account. <br>Values are client-defined and can be set up under Certificate of Deposits/IRA specifications.<br>Range of values supported is 01 -20.<br>If value is not provided for product type set up as IRA account, by default, values of RetirementPlanType set up under product are considered.|
|`DepositAcctInfo.RetirementAcctData.RetirementStatus`|NotEligible<br>Eligible<br>DistributionDisability<br>DistributionDeath<br>DistributionNormal|IRA status code that indicates the distribution status of retirement account. If value is not provided, default value of NotEligible is considered.|
|`DepositAcctInfo.RetirementAcctData.LastRolloverDt`||  |
|`DepositAcctInfo.SvcChgData.CreditBackAcct`||  |
|`DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackIdent`||  |
|`DepositAcctInfo.EscheatDt`||  |
|`DepositAcctInfo.CollateralPledgeCode`||Values are client-defined|
|`DepositAcctInfo.CheckNameOption`|JointAnd<br>JointOr<br>None|  |
|`DepositAcctInfo.ForfeitureCalcMethod`||Overrides the forfeiture method in miscellaneous-1 specifications.|
|`DepositAcctInfo.BeneficiaryData`||Multiple beneficiaries can be associated to an account with total share of 100%.|
|`DepositAcctInfo.BeneficiaryData.PartyKeys`||  |
|`DepositAcctInfo.BeneficiaryData.PartyKeys.PartyId`||Field refers to an existing party that is to be added as beneficiary.|
|`DepositAcctInfo.BeneficiaryData.PostAddr`||  |
|`DepositAcctInfo.BeneficiaryData.PostAddr.AddressIdent`||***Conditionally Required**<br>Existing address that is to be added as beneficiary address. This field is required to be provided if beneficiary is to be added to an account.|
|`DepositAcctInfo.BeneficiaryData.BeneficiaryType`||***Conditionally Required**<br>Beneficiary relationship with an account and, should be provided if beneficiary is to be added to an account.|
|`DepositAcctInfo.BeneficiaryData.BeneficiaryPercent`||***Conditionally Required**<br>Portion of an account balance that is conditionally assigned to the beneficiary.<br>This field is required to be provided if beneficiary is to be added to an account.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||Aggregate is returned in the response and indicates the high-level status code and description of the operation. Error details/code are returned in case of a failure.|
|`AcctStatusRec`||  |
|`AcctStatusRec.AcctKeys`||  |
|`AcctStatusRec.AcctKeys.AcctId`||  |
|`AcctStatusRec.AcctKeys.AcctType`|CDA<br>|  |
|`AcctStatusRec.AcctStatus`||Aggregate contains the status and last updated date/time details of an account.|
|`AcctStatusRec.AcctStatus.AcctStatusCode`|Valid|Status of an account.|
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
|`OvrdExceptionData`||Optional aggregate to override warnings from core system and continue the processing.|
|`PartyAcctRelInfo`||***Required**<br>Information provided in this aggregate is used to establish relationship between a party(s) and new account. One PartyAcctRelInfo aggregate should be provided for each party to be associated to an account. Party can have multiple relationships with an account and in this case, PartyAcctRelData aggregate should be provided multiple times within the PartyAcctRelInfo aggregate. For example, a party can have both power of attorney and trustee relationship with an account.|
|`PartyAcctRelInfo.PartyRef`||  |
|`PartyAcctRelInfo.PartyRef.PartyKeys`||  |
|`PartyAcctRelInfo.PartyRef.PartyKeys.PartyId`||***Required**<br>Unique identifier of party associated with an account.|
|`PartyAcctRelInfo.PartyAcctRelData`||***Required**<br>Multiple PartyAcctRelData aggregates can be provided in  the request if a party is intended to have multiple relationships with an account.|
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelType`|Owner<br>Signer<br>OwnerSigner<br>JointTenancy<br>Executor<br>Trustee<br>Borrower<br>CoBorrower<br>Custodian<br>DoingBusinessAs<br>Fiduciary|In addition to the values defined by service provider, financial institutions can create user defined relationship types. Each party should have at least one relationship type with the associated account, whereas party can have multiple relationship types with the account.<br>OwnerSigner, Owner and Signer relationships are commonly used for PartyAcctRelOrders with values First, Second or Third and, for party that is tax reporting owner.|
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelOrder`|First<br>Second<br>Third<br>Other|***Required**<br>Parties having first, second and third relationship order are considered to be the main names and, only one party can be associated with first/second/third relationship order on the account. Relationship order value of 'Other' is commonly used for relationships other than OwnerSigner, Signer and Owner. One party can have multiple 'Other' type of relationship orders on account. If Mailing Name Option parameter is set up at financial institution, then first, second and third names can be used for inquiry or account related mailing purpose. If Mailing Name Option parameter is set to Y, account can have up to 3 names for mailing purpose which can be provided in PostAddr aggregate.|
|`PartyAcctRelInfo.OwnerInd`|true<br>false|ESF has introduced a new data element PartyAcctRelOrder to identify first 3 names displayed on the account. This element is available in ESF release prior to 9.2 and will be deprecated in future.|
|`PartyAcctRelInfo.TaxReportingOwnerInd`||Used to identify the party that has tax responsibility of an account. At least one tax relationship is required to create an account and, there cannot be more than one tax relationships associated to an account. If primary tax reporting indicator is not provided, by default, first party will be considered as tax reporting owner.|
|`DepositAcctInfo`||  |
|`DepositAcctInfo.AcctPref`||  |
|`DepositAcctInfo.AcctPref.Language`|UsePortfolio<br>English<br>Spanish<br>|Optional field and user can send value of UserInstitution in the request, if no specific language preference exists.|
|`DepositAcctInfo.AcctIdent`||  |
|`DepositAcctInfo.AcctIdent.AcctIdentType`|PORT<br>AcctNum|Value of PORT refers to the portfolio number. If portfolio number is provided in the request, ESF will relate the new account created to existing portfolio and if portfolio number is not provided, ESF will create a portfolio account and related it with the new account that is created. It is required to provide the portfolio number if exists, to avoid creating multiple portfolios.<br><br>AcctNum refers to the account number associated with the new account that is created. Account number can be provided if it is known prior to creating an account else, new account number will be generated for the account.|
|`DepositAcctInfo.AcctIdent.AcctIdentValue`||If value of AcctIdentType is 'AcctNum' then, this field identifies the account number to use for the CDA account type. If account number is not sent in request, system will get the next account number to use.<br><br>If value of AcctIdentType is 'PORT' then it denotes the portfolio number that is associated to the new account to be created. If a portfolio is not sent, then system will create the next available portfolio number and associate it to the customer.<br>Portfolio number can be retrieved by ESF AddrInq operation by providing the AddressIdent associated to an account. All the portfolios associated to the customer can be retreieved with ESF PartyAcctRelInq operation by providing the PartyId.|
|`DepositAcctInfo.ProductIdent`||***Required**<br>Values are user-defined.|
|`DepositAcctInfo.AcctType`|DDA|***Required**<br>Value of CDA should be provided in this field if certificate deposit account or an individual retirement account is to be created. Value of AcctType returned by ESF (i.e., AcctStatusRec/AcctKeys/AcctType) is same as DepositAcctInfo/AcctType as provided in the request.<br>To create an individual retirement account, DepositAcctInfo/RetirementAcctData aggregates should be provided in the request.|
|`DepositAcctInfo.TaxIncentiveType`|HSAFamily<br>HSAIndividual<br>None|Values of HSAFamily and HSAIndividual indicate that the account is a Health Savings Account and refers to special reporting code. <br>IRA indicates that the account is a retirement account. <br>Value of 'None' should be provided if no tax benefits are associated to the account.|
|`DepositAcctInfo.InitialAmount`||***Conditionally Required**<br>Initial deposit amount is required to be provided for time account.|
|`DepositAcctInfo.InitialAmount.Amt`||  |
|`DepositAcctInfo.InitialAmount.CurCode`||  |
|`DepositAcctInfo.InitialAmount.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`DepositAcctInfo.InitialAmount.CurCode.CurCodeValue`|USD|  |
|`DepositAcctInfo.OpenDt`||***Required**|
|`DepositAcctInfo.RelationshipMgr`||  |
|`DepositAcctInfo.RelationshipMgr.RelationshipMgrIdent`||User-defined value (up to five digits) to identify the officer with a management responsibility of the account.<br>This field can be associated to each RelationshipRole as:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'<br><br>If responsibility code for 'Officer' RelationshipRole is provided in the request, provided value overrides the default value. If value is not provided, default value from the product is considered as responsibility code.<br>Referral responsibility code for 'ReferralOfficer' and opened by responsibility code for 'SecondOfficer' are applied to the account if, RelationshipMgrIdent is provided in the request along with the corresponding RelationshipRole.|
|`DepositAcctInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer<br>SecondOfficer<br>|RelationshipMgrIdent is to be provided in the request along with the corresponding RelationshipRole.<br>RelationshipMgrIdent corresponding to values of RelationshipRole are:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'|
|`DepositAcctInfo.OriginatingBranch`||***Required**<br>Branch region of an account.|
|`DepositAcctInfo.ResponsibleBranch`||Accouting branch of an account.|
|`DepositAcctInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`DepositAcctInfo.Nickname`||  |
|`DepositAcctInfo.AcctTitleOption`||Values are user-defined.|
|`DepositAcctInfo.AcctTitle`||  |
|`DepositAcctInfo.HandlingCodeOption`|Statements<br>StatementsNotices<br>Notices<br>DoNotPrint<br>UsePortfolio|  |
|`DepositAcctInfo.HandlingCode`||Values are user-defined.|
|`DepositAcctInfo.OEDCode`||Values are user-defined.|
|`DepositAcctInfo.AccountingMethod`|Class<br>CostCenter<br>AcctType|  |
|`DepositAcctInfo.ClassCode`||Values are user-defined.|
|`DepositAcctInfo.AcctTypeCode`||Optional field.|
|`DepositAcctInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|Additional values can be user defined.|
|`DepositAcctInfo.ClientDefinedData`||It is required to send the flex data metdata (such as field size) along with the user-entered account data.<br>Optional aggregate and should be sent only if the client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataIdent`||***Conditionally Required**<br>This field refers to field code and required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|***Conditionally Required**<br>Should be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Value`||***Conditionally Required**<br>It is required to provide this field if, client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataLength`||***Conditionally Required**<br>It is required to provide this field if, client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.ExpDt`||***Conditionally Required**<br>It is required to provide this field if, client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Desc`||Field label.|
|`DepositAcctInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`DepositAcctInfo.AcctStmtData`||***Conditionally Required**<br>Aggregate is required to be provided if statement data defaults are not configured in product specifications. If statement data defaults are set up under specifications, product defaults are applied to the account.<br>Statement data overrides product default values if provided in the request.<br>Alternate statement cycle functionality is supported in addition to the statement cycle and, additional set up is required to use alternate statement cycle.<br>If product is configured to use alternate statement cycle in product specifications then, by default, alternate statement cycle is used for an account of this product.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame`||Two instances of StmtTimeFrame can be provided if applicable. One for statement cycle and another to identify alternate statement cycle. Instance provided for alternate statement cycle should have AlternateStmtInd set to true.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurType`|Cycle|  |
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurInterval`||This field is used to identify user-defined statement cycle number/alternate statement cycle number.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtInd`||Used to identify alternate statement cycle.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtOption`|None<br>Stmt<br>SmtAndInt<br>StmtAndSvcChg<br>StmtAndIntAndSvcChg|  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtIdent`||  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtCode`|Primary<br>Secondary<br>|  |
|`DepositAcctInfo.AcctStmtData.SpecialStmtCode`|Transcript<br>FinalStmt<br>None<br>DropTransactions|  |
|`DepositAcctInfo.AcctStmtData.StmtFormat`|||
|`DepositAcctInfo.AcctStmtData.StmtTruncationOption`|||
|`DepositAcctInfo.AcctStmtData.StmtGroup+B263:C263`|||
|`DepositAcctInfo.NoticeData`||  |
|`DepositAcctInfo.NoticeData.NoticeType`|ChargeBack<br>RegCCNotice<br>ACHNotice<br>BalanceOnReceipt<br>PayeeChanges<br>RegularNotice<br>|Values provided in this field are:<br>ACHNotice - Refers to ACH Notification Code Override.<br>ChargeBack - Refers to EIM Charge Back Notice Detail. <br>PayeeChanges - Refers to Payee List Request Code. <br>BalanceOnReceipt - Refers to ReceiptBalanceOverride.<br>RegularNotice - Refers to NotificationCode.|
|`DepositAcctInfo.NoticeData.NoticeOption`||  |
|`DepositAcctInfo.ProdIntRateId`||Deposit rate index used to indicate the structures (defined in deposit rate specifications) used to calculate interest of an account. |
|`DepositAcctInfo.IntRateData`||  |
|`DepositAcctInfo.IntRateData.AccrualFrequency`|||
|`DepositAcctInfo.IntRateData.AccrualFrequency.RecurType`|Cycle||
|`DepositAcctInfo.IntRateData.AccrualFrequency.RecurInterval`|||
|`DepositAcctInfo.IntRateData.AccrualMethod`|Simple<br>Daily<br>|If interest rate data is added to the account, then AccrualMethod should be provided to specify the method used to compound/accrue interest.|
|`DepositAcctInfo.IntRateData.BalCutOffData`|||
|`DepositAcctInfo.IntRateData.BalCutOffData.BalCutOffType`|Avail<br>AvgAvail<br>AvgLedger<br>AvgMinLedger<br>Ledger<br>MinLedger<br>None||
|`DepositAcctInfo.IntRateData.BalCutOffData.BalCutOffAmt`|||
|`DepositAcctInfo.RateChangeData`||  |
|`DepositAcctInfo.RateChangeData.VarianceFactorType`|Variance<br>Factor|Used to indicate the interest rate change based on a factor or variance percentage.|
|`DepositAcctInfo.RateChangeData.RateFactor`|||
|`DepositAcctInfo.RateChangeData.RateVariance`||Field is to be used if VarianceFactorType = Variance.|
|`DepositAcctInfo.RateChangeData.PendingRate`||Optional field and should be provided if required. Pending rate information is not stored under product type so, default value from product is not available.|
|`DepositAcctInfo.RateChangeData.PendingRate.EffDt`||***Conditionally Required**<br>This field indicates the effective date of pending interest cycle and pending rate. Cycle and rate changes are effective after completion of current interest cycle, beginning with the first full cycle after the pending rate effective date.<br>This field is required if pending rate information is applicable on an account.|
|`DepositAcctInfo.RateChangeData.PendingRate.ProdIntRateId`||This field refers to pending deposit rate index. If ProdIntRateId is to be provided in request, pending interest payment frequency should also be sent. Values in this field are user-defined.|
|`DepositAcctInfo.RateChangeData.PendingRate.VarianceFactorType`|Variance<br>Factor|  |
|`DepositAcctInfo.RateChangeData.PendingRate.RateVariance`||This field is applicable if variance factor type is 'Variance' and refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateVariance.<br>Either RateFactor or RateVariance can be provided in  the request and both the fields cannot be sent.|
|`DepositAcctInfo.RateChangeData.PendingRate.RateFactor`||This field is applicable if variance factor type is 'Factor' and refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateFactor.<br>Either RateFactor or RateVariance can be provided in  the request and both the fields cannot be sent.|
|`DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency`||  |
|`DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurType`|Cycle|  |
|`DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurInterval`||Field refers to the pending interest cycle that is pending frequency of interest credit to the customer.|
|`DepositAcctInfo.PostAddr`||***Required**<br>At least one account address is required to be provided.<br>Account can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.<br>Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if account can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only primary address type and AddrUse as Inquiry is to be provided.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, secondary address type and AddrUse as Mailing and Names is to be provided.<br>If existing address is to be linked to an account then, AddressIdent including AddrType, AddrUse and AdddrFormatType are required to be provided.<br>If new address is to be created for an account, address details including AddrType, AddrUse and AdddrFormatType is required to be provided and AddressIdent should not be provided in the request.|
|`DepositAcctInfo.PostAddr.OpenDt`||***Conditionally Required**<br>This field is not applicable to the seasonal address type and required to be provided if new address record is to be created.|
|`DepositAcctInfo.PostAddr.RelationshipMgr`||Value of AddrUse for primary and related seasonal address is 'Inquiry'.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`||This field is not applicable to the seasonal address type. Values in this field are user-defined.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Value of Officer refers to responsibility code, whereas Referral Officer refers to referral responsibility code.|
|`DepositAcctInfo.PostAddr.OriginatingBranch`||This field is not applicable for seasonal address type and is required to be provided if new address record os to be created. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.ResponsibleBranch`||Not applicable for seasonal address type and refers to the accounting branch associated to the address record. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.NameIdent`||Applicable if AddrType is secondary and AddrUse is mailing and, not applicable for seasonal address type.<br>Only up to 3 name identifiers can be provided if financial institution is configured to use different Primary/Inquiry and Secondary/Mailing addresses and names. If provided for Primary/Inquiry address it will be ignored as name relationships for inquiry are established using information provided in PartyCardRelInfo.<br>Only names which have a relationship to the safe deposit box or account portfolio can be associated to safe deposit box for mailing purpose.<br>|
|`DepositAcctInfo.PostAddr.AddressIdent`||AddressIdent is shared by primary and related seasonal address whereas, secondary and related seasonal address. Is is required to be provided if existing address is to be added to new account.<br>Do not provide this field is new address is to be created for an account.|
|`DepositAcctInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|***Required**<br>AddrUse for primary and related seasonal address is 'Inquiry', whereas for secondary and related seasonal address is 'Mailing'.<br>Account can have different inquiry and mailing addresses.<br> - If parameter is set to N, both inquiry and mailing addresses are same therefore, primary/inquiry address information is supported.<br> - If parameter is set to Y, then secondary/mailing and primary/inquiry addresses are supported whereas, inquiry and mailing address data can be provided in request.<br>AddrUse for seasonal address is always same as primary/secondary address.|
|`DepositAcctInfo.PostAddr.AddrFormatType`|Label|Label address format is supported.|
|`DepositAcctInfo.PostAddr.Addr1`||***Conditionally Required**<br>To be provided in request if new address record is to be created.|
|`DepositAcctInfo.PostAddr.Addr2`||Addr2 is valid if enabled in the CIS Miscellaneous (Institution) specifications.|
|`DepositAcctInfo.PostAddr.City`||***Conditionally Required**<br>It is mandatory to provide this field if a new address record is to be created.<br>Field length is 20 characters long (including spaces). It is recommended for consumer to abbreviate the value sent in the EFX request to prevent truncation (For example, City name "Rancho Santa Margarita" exceeds 20 characters and can be abbreviated to "Rancho S Margarita" to avoid truncation). Total length of 40 characters is supported for city, StateProv and PostalCode (appended together) including spaces.<br>|
|`DepositAcctInfo.PostAddr.StateProv`||It is mandatory to provide this field if new address record is created and country is United States.|
|`DepositAcctInfo.PostAddr.PostalCode`||***Conditionally Required**<br>It is required to provide this field if, a new address record is to be created with country as United States.<br><br>Postal Code provides information about the ZIP code if, address is from United States and, provides information about postal code if, address is not from United States.  This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code of four digits is optional and provides a more specific location within a given ZIP code. If additional code is not provided, it can be represented with value as '0000'. For example, 32714-1234 or 32714-0000.<br><br>Postal codes are string of characters for non-US addresses.|
|`DepositAcctInfo.PostAddr.CountryCode`||  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode|  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeValue`||Values are user-defined.|
|`DepositAcctInfo.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|***Required**<br>Account can have one primary, one secondary and two seasonal addresses. <br>However, seasonal address cannot exist as a single address record hence, it is always related to a primary/secondary address. Therefore, seasonal address always shares AddressIdent and AddrUse with primary or the secondary address.<br>In order to relate the primary/secondary address with seasonal address, present the seasonal address right after the primary/secondary address.<br>It is required to provide the TimeFrame for seasonal address.|
|`DepositAcctInfo.PostAddr.TimeFrame`||  |
|`DepositAcctInfo.PostAddr.TimeFrame.StartDt`||Applicable if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.TimeFrame.EndDt`||Applicable if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.Retention`||Retention code indicates if the address record is to be retained, or deleted if no accounts, tax addenda or any other relationship exists on an address record.|
|`DepositAcctInfo.PostAddr.CensusTract`||  |
|`DepositAcctInfo.PostAddr.CensusBlock`||  |
|`DepositAcctInfo.PostAddr.ForeignFlag`||  |
|`DepositAcctInfo.PostAddr.HandlingCode`||Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint|Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.MSACode`||  |
|`DepositAcctInfo.WithholdingOption`|None<br>StateTax<br>FederalTax<br>StateFederalTax|  |
|`DepositAcctInfo.WithholdingData`||  |
|`DepositAcctInfo.WithholdingData.WithholdingType`|FederalTax<br>StateTax|  |
|`DepositAcctInfo.WithholdingData.WithholdingPercent`||  |
|`DepositAcctInfo.IntReportingInd`||  |
|`DepositAcctInfo.Fee`|||
|`DepositAcctInfo.Fee.FeeIdent`|||
|`DepositAcctInfo.Fee.FeePlan`|||
|`DepositAcctInfo.Fee.Desc`|||
|`DepositAcctInfo.Fee.FeeType`|DormantFee<br>EIM<br>ATMFee<br>BillPmt<br>FDIC<br>FeeCharge<br>Other<br>OtherNonTax<br>OverdraftFee<br>OverdraftInt<br>Recurring<br><br>||
|`DepositAcctInfo.Fee.FeeOption`|Charge<br>Waive<br>Analysis<br>SvcChg<br>SvcChgCreditBack<br>||
|`DepositAcctInfo.Fee.CurAmt`|||
|`DepositAcctInfo.Fee.CurAmt.Amt`|||
|`DepositAcctInfo.Fee.CurAmt.CurCode`|||
|`DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.Fee.TimeFrame`|||
|`DepositAcctInfo.Fee.TimeFrame.StartDt`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurType`|Daily<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>SvcChgCycle<br>Once||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurInterval`|||
|`DepositAcctInfo.Fee.FeeWaiver`|||
|`DepositAcctInfo.Fee.FeeWaiver.WaiverCode`|||
|`DepositAcctInfo.CreditRisk`||  |
|`DepositAcctInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>|  |
|`DepositAcctInfo.CreditRisk.InternalScore`||Risk score based on account profile is indicated. Values are client-defined.|
|`DepositAcctInfo.RiskRanking`|None<br>Low<br>Medium<br>High|Risk level of an account (Low to High) is indicated. Additional values of this field can be client defined.|
|`DepositAcctInfo.TrnRestriction`||Field is used to determine the restrictions applicable on trnasactions of an account.|
|`DepositAcctInfo.TrnRestrictionOvrd`||Values are client-defined.|
|`DepositAcctInfo.MemoPostProcessOptOvrd`|Detail<br>Summary<br>None||
|`DepositAcctInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disable|Field refers to electronic banking restriction.|
|`DepositAcctInfo.ReportGroupCode`||Values are client-defined.|
|`DepositAcctInfo.DocDistributionOption`||Values are client-defined.|
|`DepositAcctInfo.NAICS`||  |
|`DepositAcctInfo.CostCenter`||Values are client-defined.|
|`DepositAcctInfo.RetentionOption`|None<br>DoNotRetain<br>Retain||
|`DepositAcctInfo.AcctMemoData`||  |
|`DepositAcctInfo.AcctMemoData.AcctMemoIdent`|1<br>2<br>3|***Conditionally Required**<br>Should be provided if AcctMemoType is Teller.<br>Up to three teller alerts are supported.|
|`DepositAcctInfo.AcctMemoData.AcctMemoType`|Teller<br>Warning|Only one warning can be sent in the request.|
|`DepositAcctInfo.AcctMemoData.AcctMemoText`||Values are client-defined.|
|`DepositAcctInfo.IntDispData`||  |
|`DepositAcctInfo.IntDispData.IntDisposition`|TransferToAcct<br>Capitalize|  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctId`||  |
|`DepositAcctInfo.IntDispData.IntDistAcctRef.AcctKeys.AcctType`|DDA<br>SDA|  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency`||  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.RecurType`|Cycle|  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.RecurInterval`||  |
|`DepositAcctInfo.OverdraftData`|||
|`DepositAcctInfo.OverdraftData.OverdraftEnrollOpt`|NoODPAccount<br>ODPAccount<br>OptIn<br>OptOut<br>InstitutionOptOut||
|`DepositAcctInfo.OverdraftData.OverdraftEnrollOptDt`|||
|`DepositAcctInfo.OverdraftData.OverdraftAutoTrnInd`|true<br>false||
|`DepositAcctInfo.OverdraftData.OverdraftLimitPriority`|PriorXfer<br>AfterXfer||
|`DepositAcctInfo.OverdraftData.OverdraftLimitAmt`|||
|`DepositAcctInfo.OverdraftData.OverdraftLimitAmt.Amt`|||
|`DepositAcctInfo.OverdraftData.OverdraftLimitAmt.CurCode`|||
|`DepositAcctInfo.OverdraftData.OverdraftLimitAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.OverdraftData.OverdraftLimitAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.OverdraftData.OverdraftRatingCode`|||
|`DepositAcctInfo.OverdraftData.OverdraftTypeCode`|||
|`DepositAcctInfo.OverdraftData.OverdraftNotificationOpt`|NoNotice<br>GenerateException<br>GenerateStmt<br>NoticeAndStmt<br>StmtAndException<br>NoticeAndException<br>NoticeAndStmtAndException<br>Notice||
|`DepositAcctInfo.OverdraftData.ContactType`|None<br>Phone<br>InPerson<br>Email<br>Text<br>Notice<br>Statement<br>Other<br>NoFurtherContact<br><br>||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft`|||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitOption`|NoAuthorized<br>OptInAtmAuthLimit<br>OptInAtmODLimit<br>OptInAtmPosAuthLimit<br>OptInAtmPosODLimit<br>OptInPosAuthLimit<br>OptInPosODLimit<br>OptOut<br>OptOutCourtesy<br>OptOutNoReply||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.OptInOutDt`|||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt`|||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.Amt`|||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.CurCode`|||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.AuthLimitAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.OverdraftData.AtmPosOverdraft.NoticeOption`|NoNotice<br>GenerateNotice<br><br>||
|`DepositAcctInfo.SvcChgData`|||
|`DepositAcctInfo.SvcChgData.SvcChgMethod`|||
|`DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodType`|Activity<br>Maintenance||
|`DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodOpt`|||
|`DepositAcctInfo.SvcChgData.CreditBackMethod`|||
|`DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackIdent`||  |
|`DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackType`|PrimaryDDA<br>PrimarySDA<br>PrimaryCDA<br>AllPrimaryDDA<br>AllPrimarySDA<br>AllPrimaryCDA<br>AllPrimaryDeposit<br>AllPrimarySecondaryDeposit<br>AllPrimaryDepositLoan<br>AllPrimarySecondaryDepositLoan<br>PrimaryLoan<br>AllPrimaryLoan<br>AllPrimarySecondaryLoan||
|`DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackAcctId`|||
|`DepositAcctInfo.SvcChgData.CreditBackGroupIdent`|1<br>2|Identification of DDA credit back. If client-defined credit back identification matches the credit back identification on DDA account, certificate for calculation of credit back on DDA service charges is included.|
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctId`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctType`|DDA<br>SDA||
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
|`DepositAcctInfo.RegCCData`|||
|`DepositAcctInfo.RegCCData.RegCCStatusDt`|||
|`DepositAcctInfo.CollateralPledgeCode`||Values are client-defined|
|`DepositAcctInfo.EIM_NSFInstruction`|Specification<br>Post<br>Return<br>PostandReturnNSF||
|`DepositAcctInfo.AutoNSFDecision`|||
|`DepositAcctInfo.BeneficiaryData`||Multiple beneficiaries can be associated to an account with total share of 100%.|
|`DepositAcctInfo.BeneficiaryData.PartyKeys`||  |
|`DepositAcctInfo.BeneficiaryData.PartyKeys.PartyId`||Field refers to an existing party that is to be added as beneficiary.|
|`DepositAcctInfo.BeneficiaryData.PostAddr`||  |
|`DepositAcctInfo.BeneficiaryData.PostAddr.AddressIdent`||***Conditionally Required**<br>Existing address that is to be added as beneficiary address. This field is required to be provided if beneficiary is to be added to an account.|
|`DepositAcctInfo.BeneficiaryData.BeneficiaryType`||***Conditionally Required**<br>Beneficiary relationship with an account and, should be provided if beneficiary is to be added to an account.|
|`DepositAcctInfo.BeneficiaryData.BeneficiaryPercent`||***Conditionally Required**<br>Portion of an account balance that is conditionally assigned to the beneficiary.<br>This field is required to be provided if beneficiary is to be added to an account.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||Aggregate is returned in the response and indicates the high-level status code and description of the operation. Error details/code are returned in case of a failure.|
|`AcctStatusRec`||  |
|`AcctStatusRec.AcctKeys`||  |
|`AcctStatusRec.AcctKeys.AcctId`||  |
|`AcctStatusRec.AcctKeys.AcctType`|DDA|  |
|`AcctStatusRec.AcctStatus`||Aggregate contains the status and last updated date/time details of an account.|
|`AcctStatusRec.AcctStatus.AcctStatusCode`|Valid|Status of an account.|
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
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurType`|Cycle|  |
|`DepositAcctInfo.ProdIntRateId`||Deposit rate index used to indicate the structures (defined in deposit rate specifications) used to calculate interest of an account. |
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurType`|Cycle<br>None<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>SvcChgCycle||
|`DepositAcctInfo.RenewalData.RenewalFrequency.RecurType`|Daily<br>Monthly|  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency`||  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.RecurType`|Cycle<br>Monthly<br>BiWeekly<br>Quarterly<br>Yearly<br>SemiYearly<br>Weekly<br>Maturity<br><br>|  |
|`DepositAcctInfo.SvcChgData.SvcChgTimeFrame.RecurType`|Cycle||
|`OvrdExceptionData`||Optional aggregate to override warnings from core system and continue the processing.|
|`PartyAcctRelInfo`||***Required**<br>Information provided in this aggregate is used to establish relationship between a party(s) and new account. One PartyAcctRelInfo aggregate should be provided for each party to be associated to an account. Party can have multiple relationships with an account and in this case, PartyAcctRelData aggregate should be provided multiple times within the PartyAcctRelInfo aggregate. For example, a party can have both power of attorney and trustee relationship with an account.|
|`PartyAcctRelInfo.PartyRef`||  |
|`PartyAcctRelInfo.PartyRef.PartyKeys`||  |
|`PartyAcctRelInfo.PartyRef.PartyKeys.PartyId`||***Required**<br>Unique identifier of party associated with an account.|
|`PartyAcctRelInfo.PartyAcctRelData`||***Required**<br>Multiple PartyAcctRelData aggregates can be provided in  the request if a party is intended to have multiple relationships with an account.|
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelType`|Owner<br>Signer<br>OwnerSigner<br>JointTenancy<br>Executor<br>Trustee<br>Borrower<br>CoBorrower<br>Custodian<br>DoingBusinessAs<br>Fiduciary|In addition to the values defined by service provider, financial institutions can create user defined relationship types. Each party should have at least one relationship type with the associated account, whereas party can have multiple relationship types with the account.<br>OwnerSigner, Owner and Signer relationships are commonly used for PartyAcctRelOrders with values First, Second or Third and, for party that is tax reporting owner.|
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelOrder`|First<br>Second<br>Third<br>Other|***Required**<br>Parties having first, second and third relationship order are considered to be the main names and, only one party can be associated with first/second/third relationship order on the account. Relationship order value of 'Other' is commonly used for relationships other than OwnerSigner, Signer and Owner. One party can have multiple 'Other' type of relationship orders on account. If Mailing Name Option parameter is set up at financial institution, then first, second and third names can be used for inquiry or account related mailing purpose. If Mailing Name Option parameter is set to Y, account can have up to 3 names for mailing purpose which can be provided in PostAddr aggregate.|
|`PartyAcctRelInfo.OwnerInd`|true<br>false|ESF has introduced a new data element PartyAcctRelOrder to identify first 3 names displayed on the account. This element is available in ESF release prior to 9.2 and will be deprecated in future.|
|`PartyAcctRelInfo.TaxReportingOwnerInd`|true<br>false|Used to identify the party that has tax responsibility of an account. At least one tax relationship is required to create an account and, there cannot be more than one tax relationships associated to an account. If primary tax reporting indicator is not provided, by default, first party will be considered as tax reporting owner.|
|`DepositAcctInfo`||  |
|`DepositAcctInfo.AcctPref`||  |
|`DepositAcctInfo.AcctPref.Language`|UsePortfolio<br>English<br>Spanish<br>|Optional field and user can send value of UserInstitution in the request, if no specific language preference exists.|
|`DepositAcctInfo.AcctIdent`||  |
|`DepositAcctInfo.AcctIdent.AcctIdentType`|PORT<br>AcctNum|Value of PORT refers to the portfolio number. If portfolio number is provided in the request, ESF will relate the new account created to existing portfolio and if portfolio number is not provided, ESF will create a portfolio account and related it with the new account that is created. It is required to provide the portfolio number if exists, to avoid creating multiple portfolios.<br><br>AcctNum refers to the account number associated with the new account that is created. Account number can be provided if it is known prior to creating an account else, new account number will be generated for the account.|
|`DepositAcctInfo.AcctIdent.AcctIdentValue`||If value of AcctIdentType is 'AcctNum' then, this field identifies the account number to use for the CDA account type. If account number is not sent in request, system will get the next account number to use.<br><br>If value of AcctIdentType is 'PORT' then it denotes the portfolio number that is associated to the new account to be created. If a portfolio is not sent, then system will create the next available portfolio number and associate it to the customer.<br>Portfolio number can be retrieved by ESF AddrInq operation by providing the AddressIdent associated to an account. All the portfolios associated to the customer can be retreieved with ESF PartyAcctRelInq operation by providing the PartyId.|
|`DepositAcctInfo.ProductIdent`||***Required**<br>Values are user-defined.|
|`DepositAcctInfo.AcctType`|SDA|***Required**<br>Value of CDA should be provided in this field if certificate deposit account or an individual retirement account is to be created. Value of AcctType returned by ESF (i.e., AcctStatusRec/AcctKeys/AcctType) is same as DepositAcctInfo/AcctType as provided in the request.<br>To create an individual retirement account, DepositAcctInfo/RetirementAcctData aggregates should be provided in the request.|
|`DepositAcctInfo.TaxIncentiveType`|HSAFamily<br>HSAIndividual<br>None<br>None<br>IRA|Values of HSAFamily and HSAIndividual indicate that the account is a Health Savings Account and refers to special reporting code. <br>IRA indicates that the account is a retirement account. <br>Value of 'None' should be provided if no tax benefits are associated to the account.|
|`DepositAcctInfo.InitialAmount`||***Conditionally Required**<br>Initial deposit amount is required to be provided for time account.|
|`DepositAcctInfo.InitialAmount.Amt`||  |
|`DepositAcctInfo.InitialAmount.CurCode`||  |
|`DepositAcctInfo.InitialAmount.CurCode.CurCodeType`|ISO4217-Alpha|  |
|`DepositAcctInfo.InitialAmount.CurCode.CurCodeValue`|USD|  |
|`DepositAcctInfo.OpenDt`||***Required**|
|`DepositAcctInfo.Term`||***Required**|
|`DepositAcctInfo.Term.Count`||  |
|`DepositAcctInfo.Term.TermUnits`|Months<br>Days|  |
|`DepositAcctInfo.MaturityDt`||  |
|`DepositAcctInfo.RelationshipMgr`||  |
|`DepositAcctInfo.RelationshipMgr.RelationshipMgrIdent`||User-defined value (up to five digits) to identify the officer with a management responsibility of the account.<br>This field can be associated to each RelationshipRole as:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'<br><br>If responsibility code for 'Officer' RelationshipRole is provided in the request, provided value overrides the default value. If value is not provided, default value from the product is considered as responsibility code.<br>Referral responsibility code for 'ReferralOfficer' and opened by responsibility code for 'SecondOfficer' are applied to the account if, RelationshipMgrIdent is provided in the request along with the corresponding RelationshipRole.|
|`DepositAcctInfo.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer<br>SecondOfficer<br>|RelationshipMgrIdent is to be provided in the request along with the corresponding RelationshipRole.<br>RelationshipMgrIdent corresponding to values of RelationshipRole are:<br>- Responsibility code for 'Officer'<br>- Referral responsibility code for 'Referral Officer'<br>- Opened by responsibility code for 'SecondOfficer'|
|`DepositAcctInfo.OriginatingBranch`||***Required**<br>Branch region of an account.|
|`DepositAcctInfo.ResponsibleBranch`||Accouting branch of an account.|
|`DepositAcctInfo.NicknameOption`|Printed<br>NotPrinted|  |
|`DepositAcctInfo.Nickname`||  |
|`DepositAcctInfo.AcctTitleOption`||Values are user-defined.|
|`DepositAcctInfo.AcctTitle`||  |
|`DepositAcctInfo.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>UsePortfolio|  |
|`DepositAcctInfo.HandlingCode`||Values are user-defined.|
|`DepositAcctInfo.OEDCode`||Values are user-defined.|
|`DepositAcctInfo.AccountingMethod`|Class<br>CostCenter<br>AcctType|  |
|`DepositAcctInfo.ClassCode`||Values are user-defined.|
|`DepositAcctInfo.AcctTypeCode`||Optional field.|
|`DepositAcctInfo.AcctOpenMethod`|InPerson<br>Internet<br>Mail<br>Phone|Additional values can be user defined.|
|`DepositAcctInfo.ClientDefinedData`||It is required to send the flex data metdata (such as field size) along with the user-entered account data.<br>Optional aggregate and should be sent only if the client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataIdent`||***Conditionally Required**<br>This field refers to field code and required to be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataType`|Alpha<br>Boolean<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|***Conditionally Required**<br>Should be provided if client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Value`||***Conditionally Required**<br>It is required to provide this field if, client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.DataLength`||***Conditionally Required**<br>It is required to provide this field if, client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.ExpDt`||***Conditionally Required**<br>It is required to provide this field if, client needs to define custom data on an account.|
|`DepositAcctInfo.ClientDefinedData.Desc`||Field label.|
|`DepositAcctInfo.ClientDefinedData.RequiredFlag`|true<br>false|  |
|`DepositAcctInfo.AcctStmtData`||***Conditionally Required**<br>Aggregate is required to be provided if statement data defaults are not configured in product specifications. If statement data defaults are set up under specifications, product defaults are applied to the account.<br>Statement data overrides product default values if provided in the request.<br>Alternate statement cycle functionality is supported in addition to the statement cycle and, additional set up is required to use alternate statement cycle.<br>If product is configured to use alternate statement cycle in product specifications then, by default, alternate statement cycle is used for an account of this product.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame`||Two instances of StmtTimeFrame can be provided if applicable. One for statement cycle and another to identify alternate statement cycle. Instance provided for alternate statement cycle should have AlternateStmtInd set to true.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.RecurInterval`||This field is used to identify user-defined statement cycle number/alternate statement cycle number.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtInd`|true<br>false|Used to identify alternate statement cycle.|
|`DepositAcctInfo.AcctStmtData.StmtTimeFrame.AlternateStmtOption`|None<br>Stmt<br>SmtAndInt<br>StmtAndSvcChg<br>StmtAndIntAndSvcChg|  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtIdent`||  |
|`DepositAcctInfo.AcctStmtData.CombinedStmtCode`|Primary<br>SecondaryDDA<br>SecondarySDA<br>|  |
|`DepositAcctInfo.AcctStmtData.SpecialStmtCode`|Transcript<br>FinalStmt<br>None<br>DropTransactions|  |
|`DepositAcctInfo.AcctStmtData.StmtGroup`||Used to indicate if an inquiry can be done to retrieve the relationship of an account with other accounts attached to a portfolio. This will indicate the combined statement relationship code.|
|`DepositAcctInfo.NoticeData`||  |
|`DepositAcctInfo.NoticeData.NoticeType`|ACHNotice<br>ChargeBack<br>BalanceOnReceipt<br>RegCCNotice<br>RateChangeNotice<br>MaturityNotice<br>IntNotice<br>|Values provided in this field are:<br>ACHNotice - Refers to ACH Notification Code Override.<br>ChargeBack - Refers to EIM Charge Back Notice Detail. <br>PayeeChanges - Refers to Payee List Request Code. <br>BalanceOnReceipt - Refers to ReceiptBalanceOverride.<br>RegularNotice - Refers to NotificationCode.|
|`DepositAcctInfo.NoticeData.NoticeOption`|NoNotice<br>GenerateNotice<br>NoticeSent<br>NoOverride|  |
|`DepositAcctInfo.NoticeData.GenLastUpDtInd`|true<br>false|Change notification request code. |
|`DepositAcctInfo.Rate`||Base rate that is applicable when the rate change control is StepFreq.<br>|
|`DepositAcctInfo.IntRateData`||  |
|`DepositAcctInfo.IntRateData.RateMatrixTier`|||
|`DepositAcctInfo.IntRateData.RateMatrixTier.Tier`|||
|`DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt`|||
|`DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.Amt`|||
|`DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.CurCode`|||
|`DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.IntRateData.RateMatrixTier.HighCurAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.IntRateData.RateMatrixTier.Rate`|||
|`DepositAcctInfo.IntRateData.APYRecurType`|IntPmtFrequency<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly<br>Weekly<br>BiWeekly<br>Maturity|If interest rate data is added to an account, and funds are not withdrawn during the year, then APYRecurType should be provided for calculation of the total interest that can be earned.|
|`DepositAcctInfo.IntRateData.AccrualMethod`|Simple<br>Daily<br>|If interest rate data is added to the account, then AccrualMethod should be provided to specify the method used to compound/accrue interest.|
|`DepositAcctInfo.IntRateData.EffDt`||  |
|`DepositAcctInfo.IntRateData.TierType`|None<br>Whole<br>Split<br>Dynamic||
|`DepositAcctInfo.IntRateData.TierAmtType`|None<br>Ledger<br>Avail<br>MinAvail<br>MinLedger||
|`DepositAcctInfo.IntRateData.BalCutOffData`|||
|`DepositAcctInfo.IntRateData.BalCutOffData.BalCutOffType`|Avail<br>AvgAvail<br>AvgLedger<br>AvgMinLedger<br>Ledger<br>MinLedger<br>None||
|`DepositAcctInfo.IntRateData.BalCutOffData.BalCutOffAmt`|||
|`DepositAcctInfo.MaturityIntCalcData`||Optional aggregate and should be provided for calculation on accounts after maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRateType`|CurrentRate<br>CurrentRateInPeriod<br>MaturityIntRate|Optional field and used to identify interest calculation/processing on deposits or other accounts post maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRate`||Optional field and should be provided if, interest calculation/processing is required on deposits or other accounts post maturity.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntRecurType`|Daily|Maturity rate period is expressed in days.|
|`DepositAcctInfo.MaturityIntCalcData.MaturityIntInterval`||Optional field and should be provided if, interest calculation/processing is required on deposits or other accounts post maturity.|
|`DepositAcctInfo.RateChangeData`||  |
|`DepositAcctInfo.RateChangeData.RateChangeControl`|Fixed<br>StepFreq<br>RateIndex<br>IndexFreq|Used to indicate if the base rate is used and if the rate is fixed or variable. Should be provided if the interest rate is adjusted/changed at specified frequency.|
|`DepositAcctInfo.RateChangeData.VarianceFactorType`|Variance<br>Factor|Used to indicate the interest rate change based on a factor or variance percentage.|
|`DepositAcctInfo.RateChangeData.RateVariance`||Field is to be used if VarianceFactorType = Variance.|
|`DepositAcctInfo.RateChangeData.PendingRate`||Optional field and should be provided if required. Pending rate information is not stored under product type so, default value from product is not available.|
|`DepositAcctInfo.RateChangeData.PendingRate.EffDt`||***Conditionally Required**<br>This field indicates the effective date of pending interest cycle and pending rate. Cycle and rate changes are effective after completion of current interest cycle, beginning with the first full cycle after the pending rate effective date.<br>This field is required if pending rate information is applicable on an account.|
|`DepositAcctInfo.RateChangeData.PendingRate.ProdIntRateId`||This field refers to pending deposit rate index. If ProdIntRateId is to be provided in request, pending interest payment frequency should also be sent. Values in this field are user-defined.|
|`DepositAcctInfo.RateChangeData.PendingRate.VarianceFactorType`|Variance<br>Factor|  |
|`DepositAcctInfo.RateChangeData.PendingRate.RateVariance`||This field is applicable if variance factor type is 'Variance' and refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateVariance.<br>Either RateFactor or RateVariance can be provided in  the request and both the fields cannot be sent.|
|`DepositAcctInfo.RateChangeData.PendingRate.RateFactor`||This field is applicable if variance factor type is 'Factor' and refers to the rate adjuster, used to maintain the interest of an account at a level above or below the rate in deposit rate specifications.<br>For accounts assigned to interest rate structures with multiple interest rates, all the rates in the structure are adjusted by the RateFactor.<br>Either RateFactor or RateVariance can be provided in  the request and both the fields cannot be sent.|
|`DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency`||  |
|`DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurType`|Cycle|  |
|`DepositAcctInfo.RateChangeData.PendingRate.IntPmtFrequency.RecurInterval`||Field refers to the pending interest cycle that is pending frequency of interest credit to the customer.|
|`DepositAcctInfo.RateChangeData.IncreaseOnlyInd`||Field indicates if the interest revision can only be increased.|
|`DepositAcctInfo.RateChangeData.FloorRate`||  |
|`DepositAcctInfo.RateChangeData.CeilingRate`||  |
|`DepositAcctInfo.RateChangeData.RateChangeRecurType`|Maturity<br>BiWeekly<br>Monthly<br>Weekly<br>Yearly<br>SemiYearly<br>Quaterly<br>InterestCycle<br>None<br>|Optional field to indicate the recurrence type (period) of the rate change.|
|`DepositAcctInfo.RateChangeData.RecurInterval`||  |
|`DepositAcctInfo.RateChangeData.LeadDays`||  |
|`DepositAcctInfo.RateChangeData.NextRateChangeDt`||  |
|`DepositAcctInfo.PostAddr`||***Required**<br>At least one account address is required to be provided.<br>Account can have one primary, one secondary and two seasonal addresses associated to it.<br>Seasonal address cannot exist as a single address record and is related to either primary or secondary address. Therefore, seasonal address shares AddressIdent and AddrUse fields with primary and secondary address.<br>Value of AddrUse for primary and related seasonal address is 'Inquiry'.<br>Value of AddrUse for secondary and related seasonal address is 'Mailing'.<br>If "Mailing Name Options" parameter is configured at financial institution, it determines if account can have different inquiry and mailing address/names.<br>- If parameter is set to N, both inquiry and mailing addresses are same therefore, only primary address type and AddrUse as Inquiry is to be provided.<br>- If parameter is set to Y, both inquiry and mailing addresses can be different therefore, secondary address type and AddrUse as Mailing and Names is to be provided.<br>If existing address is to be linked to an account then, AddressIdent including AddrType, AddrUse and AdddrFormatType are required to be provided.<br>If new address is to be created for an account, address details including AddrType, AddrUse and AdddrFormatType is required to be provided and AddressIdent should not be provided in the request.|
|`DepositAcctInfo.PostAddr.OpenDt`||***Conditionally Required**<br>This field is not applicable to the seasonal address type and required to be provided if new address record is to be created.|
|`DepositAcctInfo.PostAddr.RelationshipMgr`||Value of AddrUse for primary and related seasonal address is 'Inquiry'.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`||This field is not applicable to the seasonal address type. Values in this field are user-defined.|
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipMgrIdentEnumDesc`|||
|`DepositAcctInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Value of Officer refers to responsibility code, whereas Referral Officer refers to referral responsibility code.|
|`DepositAcctInfo.PostAddr.OriginatingBranch`||This field is not applicable for seasonal address type and is required to be provided if new address record os to be created. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.ResponsibleBranch`||Not applicable for seasonal address type and refers to the accounting branch associated to the address record. Values of this field are user-defined.|
|`DepositAcctInfo.PostAddr.NameIdent`||Applicable if AddrType is secondary and AddrUse is mailing and, not applicable for seasonal address type.<br>Only up to 3 name identifiers can be provided if financial institution is configured to use different Primary/Inquiry and Secondary/Mailing addresses and names. If provided for Primary/Inquiry address it will be ignored as name relationships for inquiry are established using information provided in PartyCardRelInfo.<br>Only names which have a relationship to the safe deposit box or account portfolio can be associated to safe deposit box for mailing purpose.<br>|
|`DepositAcctInfo.PostAddr.AddressIdent`||AddressIdent is shared by primary and related seasonal address whereas, secondary and related seasonal address. Is is required to be provided if existing address is to be added to new account.<br>Do not provide this field is new address is to be created for an account.|
|`DepositAcctInfo.PostAddr.AddrUse`|Inquiry<br>Mailing|***Required**<br>AddrUse for primary and related seasonal address is 'Inquiry', whereas for secondary and related seasonal address is 'Mailing'.<br>Account can have different inquiry and mailing addresses.<br> - If parameter is set to N, both inquiry and mailing addresses are same therefore, primary/inquiry address information is supported.<br> - If parameter is set to Y, then secondary/mailing and primary/inquiry addresses are supported whereas, inquiry and mailing address data can be provided in request.<br>AddrUse for seasonal address is always same as primary/secondary address.|
|`DepositAcctInfo.PostAddr.AddrFormatType`|Label|Label address format is supported.|
|`DepositAcctInfo.PostAddr.Addr1`||***Conditionally Required**<br>To be provided in request if new address record is to be created.|
|`DepositAcctInfo.PostAddr.Addr2`||Addr2 is valid if enabled in the CIS Miscellaneous (Institution) specifications.|
|`DepositAcctInfo.PostAddr.City`||***Conditionally Required**<br>It is mandatory to provide this field if a new address record is to be created.<br>Field length is 20 characters long (including spaces). It is recommended for consumer to abbreviate the value sent in the EFX request to prevent truncation (For example, City name "Rancho Santa Margarita" exceeds 20 characters and can be abbreviated to "Rancho S Margarita" to avoid truncation). Total length of 40 characters is supported for city, StateProv and PostalCode (appended together) including spaces.<br>|
|`DepositAcctInfo.PostAddr.StateProv`||It is mandatory to provide this field if new address record is created and country is United States.|
|`DepositAcctInfo.PostAddr.PostalCode`||***Conditionally Required**<br>It is required to provide this field if, a new address record is to be created with country as United States.<br><br>Postal Code provides information about the ZIP code if, address is from United States and, provides information about postal code if, address is not from United States.  This field provides the information in ZIP Code (5 Digit)-Additional Code (4 Digit) format. Additional code of four digits is optional and provides a more specific location within a given ZIP code. If additional code is not provided, it can be represented with value as '0000'. For example, 32714-1234 or 32714-0000.<br><br>Postal codes are string of characters for non-US addresses.|
|`DepositAcctInfo.PostAddr.CountryCode`||  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeSource`||  |
|`DepositAcctInfo.PostAddr.CountryCode.CountryCodeValue`||Values are user-defined.|
|`DepositAcctInfo.PostAddr.AddrType`|Primary<br>Secondary<br>Seasonal|***Required**<br>Account can have one primary, one secondary and two seasonal addresses. <br>However, seasonal address cannot exist as a single address record hence, it is always related to a primary/secondary address. Therefore, seasonal address always shares AddressIdent and AddrUse with primary or the secondary address.<br>In order to relate the primary/secondary address with seasonal address, present the seasonal address right after the primary/secondary address.<br>It is required to provide the TimeFrame for seasonal address.|
|`DepositAcctInfo.PostAddr.TimeFrame`||  |
|`DepositAcctInfo.PostAddr.TimeFrame.StartDt`||Applicable if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.TimeFrame.EndDt`||Applicable if AddrType is seasonal. Seasonal address starts and ends on same start/end date every year, therefore, only start month and start day is stored and year can be provided as 9999.|
|`DepositAcctInfo.PostAddr.Retention`||Retention code indicates if the address record is to be retained, or deleted if no accounts, tax addenda or any other relationship exists on an address record.|
|`DepositAcctInfo.PostAddr.CensusTract`||  |
|`DepositAcctInfo.PostAddr.CensusBlock`||  |
|`DepositAcctInfo.PostAddr.ForeignFlag`||  |
|`DepositAcctInfo.PostAddr.HandlingCode`||Values of this field are client-defined and indicate special routing information for customer correspondence.|
|`DepositAcctInfo.PostAddr.HandlingCodeOption`||Values of this field are client-defined and indicate special routing information for customer correspondence.|
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
|`DepositAcctInfo.Fee.FeeType`|DormantFee<br>EIM<br>ATMFee<br>BillPmt<br>FDIC<br><br>Other<br>OtherNonTax<br>OverdraftFee<br>OverdraftInt<br>Recurring||
|`DepositAcctInfo.Fee.FeeOption`|Charge<br>Waive<br>||
|`DepositAcctInfo.Fee.CurAmt`|||
|`DepositAcctInfo.Fee.CurAmt.Amt`|||
|`DepositAcctInfo.Fee.CurAmt.CurCode`|||
|`DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`DepositAcctInfo.Fee.CurAmt.CurCode.CurCodeValue`|USD||
|`DepositAcctInfo.Fee.TimeFrame`|||
|`DepositAcctInfo.Fee.TimeFrame.StartDt`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.RecurInterval`|||
|`DepositAcctInfo.Fee.TimeFrame.RecurRule.Occurrences`|||
|`DepositAcctInfo.Fee.FeeWaiver`|||
|`DepositAcctInfo.Fee.FeeWaiver.WaiverCode`|||
|`DepositAcctInfo.CreditRisk`||  |
|`DepositAcctInfo.CreditRisk.RiskCategory`|RiskScore1<br>RiskScore2<br>|  |
|`DepositAcctInfo.CreditRisk.InternalScore`||Risk score based on account profile is indicated. Values are client-defined.|
|`DepositAcctInfo.RiskRanking`||Risk level of an account (Low to High) is indicated. Additional values of this field can be client defined.|
|`DepositAcctInfo.TrnRestriction`||Field is used to determine the restrictions applicable on trnasactions of an account.|
|`DepositAcctInfo.TrnRestrictionOvrd`||Values are client-defined.|
|`DepositAcctInfo.ElectronicBankingOpt`|InquiryOnly<br>Enabled<br>Disable|Field refers to electronic banking restriction.|
|`DepositAcctInfo.ReportGroupCode`||Values are client-defined.|
|`DepositAcctInfo.DocDistributionOption`||Values are client-defined.|
|`DepositAcctInfo.NAICS`||  |
|`DepositAcctInfo.RetentionOption`|None<br>DoNotRetain<br>Retain||
|`DepositAcctInfo.AcctMemoData`||  |
|`DepositAcctInfo.AcctMemoData.AcctMemoIdent`||***Conditionally Required**<br>Should be provided if AcctMemoType is Teller.<br>Up to three teller alerts are supported.|
|`DepositAcctInfo.AcctMemoData.AcctMemoType`|Teller<br>Warning|Only one warning can be sent in the request.|
|`DepositAcctInfo.AcctMemoData.AcctMemoText`||Values are client-defined.|
|`DepositAcctInfo.RenewalData`||  |
|`DepositAcctInfo.RenewalData.RenewalOption`|AutomaticRenewal<br>NoRenewalAllowed<br>None|  |
|`DepositAcctInfo.RenewalData.RenewalFrequency`||  |
|`DepositAcctInfo.RenewalData.RenewalFrequency.RecurInterval`||  |
|`DepositAcctInfo.RenewalData.RenewalProductIdent`||  |
|`DepositAcctInfo.RenewalData.RenewalRate`||Field is used to indicate the applicable rate of interest (base rate) after renewal.|
|`DepositAcctInfo.IntDispData`||  |
|`DepositAcctInfo.IntDispData.IntDisposition`|TransferToAcct<br>Check<br>Capitalize|  |
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
|`DepositAcctInfo.IntDispData.IntPmtFrequency.RecurInterval`||  |
|`DepositAcctInfo.IntDispData.IntPmtFrequency.DayOfMonth`|1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15<br>16<br>17<br>18<br>19<br>20<br>21<br>22<br>23<br>24<br>25<br>26<br>27<br>28<br>29<br>30<br>31|Day of the month when interest is paid is not valid if Interest Payment Frequency of Cycle is used.|
|`DepositAcctInfo.IntDispData.NextIntPmtDt`||  |
|`DepositAcctInfo.RetirementAcctData`||If product type is set up as IRA account at the time of opening a new account, data specific to retirement account (Retirement Plan Type, Default Contirbution and Distribution Types) is set up by default as per the product level parameters.|
|`DepositAcctInfo.RetirementAcctData.RetirementPlanType`||IRA plan of an account. <br>Values are client-defined and can be set up under Certificate of Deposits/IRA specifications.<br>Range of values supported is 01 -20.<br>If value is not provided for product type set up as IRA account, by default, values of RetirementPlanType set up under product are considered.|
|`DepositAcctInfo.RetirementAcctData.RetirementStatus`|NotEligible<br>Eligible<br>DistributionDisability<br>DistributionDeath<br>DistributionNormal|IRA status code that indicates the distribution status of retirement account. If value is not provided, default value of NotEligible is considered.|
|`DepositAcctInfo.RetirementAcctData.LastRolloverDt`||  |
|`DepositAcctInfo.SweepData`|||
|`DepositAcctInfo.SweepData.SweepGroupId`|||
|`DepositAcctInfo.SvcChgData`|||
|`DepositAcctInfo.SvcChgData.SvcChgMethod`|||
|`DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodType`|Activity<br>Maintenance||
|`DepositAcctInfo.SvcChgData.SvcChgMethod.SvcChgMethodOpt`|||
|`DepositAcctInfo.SvcChgData.CreditBackAcct`||  |
|`DepositAcctInfo.SvcChgData.CreditBackAcct.CreditBackIdent`||  |
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctId`|||
|`DepositAcctInfo.SvcChgData.SvcChgAcctRef.AcctKeys.AcctType`|DDA<br>SDA||
|`DepositAcctInfo.SvcChgData.SvcChgWaiveCode`|||
|`DepositAcctInfo.SvcChgData.SvcChgWaiveTaxInd`|true<br>false||
|`DepositAcctInfo.SvcChgData.SvcChgTimeFrame`|||
|`DepositAcctInfo.SvcChgData.SvcChgTimeFrame.RecurInterval`|||
|`DepositAcctInfo.EscheatDt`||  |
|`DepositAcctInfo.RegCCData`|||
|`DepositAcctInfo.RegCCData.RegCCStatus`|NewAccount<br>NormalAuto<br>NormalManual<br>OverdrafterManual<br>OverdrafterAuto||
|`DepositAcctInfo.RegCCData.RegCCStatusDt`|||
|`DepositAcctInfo.RegCCData.RegCCException`|||
|`DepositAcctInfo.RegCCData.RegCCExceptionExpDt`|||
|`DepositAcctInfo.CollateralPledgeCode`||Values are client-defined|
|`DepositAcctInfo.CheckNameOption`|JointAnd<br>JointOr<br>None|  |
|`DepositAcctInfo.BeneficiaryData`||Multiple beneficiaries can be associated to an account with total share of 100%.|
|`DepositAcctInfo.BeneficiaryData.PartyKeys`||  |
|`DepositAcctInfo.BeneficiaryData.PartyKeys.PartyId`||Field refers to an existing party that is to be added as beneficiary.|
|`DepositAcctInfo.BeneficiaryData.PostAddr`||  |
|`DepositAcctInfo.BeneficiaryData.PostAddr.AddressIdent`||***Conditionally Required**<br>Existing address that is to be added as beneficiary address. This field is required to be provided if beneficiary is to be added to an account.|
|`DepositAcctInfo.BeneficiaryData.BeneficiaryType`||***Conditionally Required**<br>Beneficiary relationship with an account and, should be provided if beneficiary is to be added to an account.|
|`DepositAcctInfo.BeneficiaryData.BeneficiaryPercent`||***Conditionally Required**<br>Portion of an account balance that is conditionally assigned to the beneficiary.<br>This field is required to be provided if beneficiary is to be added to an account.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||Aggregate is returned in the response and indicates the high-level status code and description of the operation. Error details/code are returned in case of a failure.|
|`AcctStatusRec`||  |
|`AcctStatusRec.AcctKeys`||  |
|`AcctStatusRec.AcctKeys.AcctId`||  |
|`AcctStatusRec.AcctKeys.AcctType`|SDA|  |
|`AcctStatusRec.AcctStatus`||Aggregate contains the status and last updated date/time details of an account.|
|`AcctStatusRec.AcctStatus.AcctStatusCode`|Valid|Status of an account.|
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
