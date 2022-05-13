# Implementation Notes for Add Collateral
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
|`PartyCollateralRelInfo`|| |
|`PartyCollateralRelInfo.PartyRef`|| |
|`PartyCollateralRelInfo.PartyRef.PartyKeys`|| |
|`PartyCollateralRelInfo.PartyRef.PartyKeys.PartyId`||Multiple parties can be associated with the collateral and party must exist in the system before the association with the collateral.|
|`PartyCollateralRelInfo.PartyCollateralRelType`|Appraiser<br>Beneficiary<br>Borrower<br>Broker<br>Builder<br>CoBorrower<br>Custodian<br>DoingBusinessAs<br>Executor<br>Fiduciary<br>InsuranceAgent<br>InsuranceCompany<br>Issuer<br>JointWithRights<br>Landlord<br>LienHolder<br>Owner<br>OwnerNonBorrower<br>PolicyHolder<br>Seller<br>Signer<br>Signer/Owner<br>Tenant<br>Trustee|Service provider supports additional client-defined values.<br>Also, party can have multiple relationship with a collateral record.|
|`PartyCollateralRelInfo.PartyCollateralRelOrder`|First<br>Second<br>Third<br>Other|"First", "Second" and "Third" values can exist only once while "Other" can exist multiple times.|
|`PartyCollateralRelInfo.OwnerPercent`||    |
|`CollateralInfo`|| |
|`CollateralInfo.CollateralType`|Basic<br>OtherProperty<br>Property<br>LifeInsurance<br>DepositAccount<br>Vehicle<br>Commodity|***Required**<br>Required in the request and the provided value must match the definition for the collateral code. |
|`CollateralInfo.CollateralCode`||***Required**<br>Required in the request and is defined in service provider specification for collateral.|
|`CollateralInfo.CollateralDesc`||Applicable value can be a CUSIP number, a vehicle identification number or registration number|
|`CollateralInfo.CollateralValueAmt`|| |
|`CollateralInfo.CollateralValueAmt.Amt`||Current collateral value.|
|`CollateralInfo.CollateralValueAmt.CurCode`|| |
|`CollateralInfo.CollateralValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.CollateralValueAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralInfo.PledgeInd`|true<br>false| |
|`CollateralInfo.ImpairedAmt`|| |
|`CollateralInfo.ImpairedAmt.Amt`||The non-lien amount (in dollars) that the system subtracts from the collateral value, depending upon the calculation method used for calculating the maxmimum credit amount and the non-lien amount that the system subtracts from the collateral value to calculate the available pledge amount.|
|`CollateralInfo.ImpairedAmt.CurCode`|| |
|`CollateralInfo.ImpairedAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.ImpairedAmt.CurCode.CurCodeValue`|USD|    |
|`CollateralInfo.CollateralSpecCode`||***Required**<br>Similar to the internal number to which the collateral code is associated. <br>Collateral code is not unique, when combined with the specification code, it forms a unique key to associate with the collateral record.<br>This is a required field and even a financial institute does not have duplicate collateral codes.<br>Service provider accepts only integer values|
|`CollateralInfo.PropertyTypeCode`||Applicable for collateral type as "Basic". <br>Service provider accepts the integer value and indicates the property type code as "Basic".|
|`CollateralInfo.CollateralDetailStatus`||Applicable for collateral type as "Basic". It refers to the client-defined description of the collateral status. |
|`CollateralInfo.CollateralLocation`||Applicable for collateral type as "Basic". <br>Predefined list of codes is required prior for referral.<br>For example: "v" could indicate the collateral is located in an institution vault.|
|`CollateralInfo.PostAddr`||Implementation for FI should have ESF AddrAdd and ESF AddrDel service opertions onboarded.<br>AddrAdd is called to add address details of the collateral property where as AddrDel is called in case CollateralAdd has failed and the address added needs to be deleted.|
|`CollateralInfo.PostAddr.OpenDt`||***Required**|
|`CollateralInfo.PostAddr.RelationshipMgr`|| |
|`CollateralInfo.PostAddr.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.PostAddr.RelationshipMgr.RelationshipRole`|Officer<br>ReferralOfficer|Valid values: Officer, ReferralOfficer. Officer refers to Responsibility Code and ReferralOfficer refers to Referral Responsibility Code.|
|`CollateralInfo.PostAddr.OriginatingBranch`||***Required**|
|`CollateralInfo.PostAddr.ResponsibleBranch`|| |
|`CollateralInfo.PostAddr.AddressIdent`||***Conditionally Required**<br>Required to be sent in the request if an existing address is associated with the collateral.<br>If a new address needs to be added, then this field is not required to be sent in the request. ESF will add the address using the AddrAdd operation.<br>Please note multiple address can be associated with the address record.|
|`CollateralInfo.PostAddr.AddrUse`|Appraiser<br>Beneficiary<br>Broker<br>Builder<br>Business<br>CollateralLocation<br>Home<br>InsuranceAgency<br>InsuranceCompany<br>Landlord<br>LienHolder<br>Issuer<br>Mailing<br>Personal<br>PolicyHolder<br>Property<br>Seller<br>Trustee|Usage of the address related to the collateral. One address can have multiple relationships. <br>Please note relationships between a party and an address may have client-defined values and when appropriate address usage is not found, the value of the user-defined relationship code is provided. |
|`CollateralInfo.PostAddr.AddrFormatType`||Label is the supported address format.|
|`CollateralInfo.PostAddr.Addr1`|| |
|`CollateralInfo.PostAddr.Addr2`|| |
|`CollateralInfo.PostAddr.City`|| |
|`CollateralInfo.PostAddr.StateProv`|| |
|`CollateralInfo.PostAddr.PostalCode`|| |
|`CollateralInfo.PostAddr.CountryCode`|| |
|`CollateralInfo.PostAddr.CountryCode.CountryCodeSource`|| |
|`CollateralInfo.PostAddr.CountryCode.CountryCodeValue`|| |
|`CollateralInfo.PostAddr.AddrType`|Primary<br>|Only primary address type is supported to be associated with the collateral record. |
|`CollateralInfo.PostAddr.Retention`|true<br>false|Address Retention Code indicates if the address record (including secondary address, if any) is automatically deleted when no accounts, tax addenda, or relationships are attached to the address record.|
|`CollateralInfo.PostAddr.CensusTract`||   |
|`CollateralInfo.PostAddr.CensusBlock`||   |
|`CollateralInfo.PostAddr.ForeignFlag`|true<br>false| |
|`CollateralInfo.PostAddr.HandlingCode`||   |
|`CollateralInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>|   |
|`CollateralInfo.PostAddr.MSACode`||   |
|`CollateralInfo.Desc`||Maximum field length: 120 characters|
|`CollateralInfo.CollateralValueData`|| |
|`CollateralInfo.CollateralValueData.UnitPrice`|| |
|`CollateralInfo.CollateralValueData.UnitPrice.UnitNum`||Number of units or lots.<br>For example to specify investment collateral in terms of shares (say 100 shares) or to specify in case of property in terms of lots (say 10).|
|`CollateralInfo.CollateralValueData.ValueUpdateOpt`|None<br>Always<br>ApraisalDecrease<br>ApraisalIncrese|According to the provided value, the system updates the collateral value automatically when an appraisal occurrence is added. The values should be listed in the table.|
|`CollateralInfo.CollateralValueData.MarginPercent`||Disposal cost in relation to the collateral value. The system multiplies the margin percent by the collateral value to determine the margin value. <br>Service provider needs either the MarginPercent field or MarginAmt field. If provided, margin percent should not be greater than 100.|
|`CollateralInfo.CollateralValueData.MarginAmt`|| |
|`CollateralInfo.CollateralValueData.MarginAmt.Amt`||Disposal cost in relation to the collateral value. <br>The system subtracts the amount from the collateral value to determine the margin value of the collateral.<br>Service provider needs either the MarginPercent field or MarginAmt field|
|`CollateralInfo.CollateralValueData.MarginAmt.CurCode`|| |
|`CollateralInfo.CollateralValueData.MarginAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.CollateralValueData.MarginAmt.CurCode.CurCodeValue`||   |
|`CollateralInfo.CollateralValueData.MarginInd`|true<br>false|   |
|`CollateralInfo.CollateralValueData.PurchasePriceAmt`|| |
|`CollateralInfo.CollateralValueData.PurchasePriceAmt.Amt`||Borrower's amount paid for the property.<br>Applicable for collateral type as "Basic".|
|`CollateralInfo.CollateralValueData.PurchasePriceAmt.CurCode`|| |
|`CollateralInfo.CollateralValueData.PurchasePriceAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.CollateralValueData.PurchasePriceAmt.CurCode.CurCodeValue`||    |
|`CollateralInfo.CollateralValueData.MarketPricingCode`||Applicable for collateral type as "Basic".|
|`CollateralInfo.CollateralValueData.MarketMarginPercent`||Applicable for collateral type as "Basic".|
|`CollateralInfo.AppraisalData`|| |
|`CollateralInfo.AppraisalData.OriginalAppraisalAmt`|| |
|`CollateralInfo.AppraisalData.OriginalAppraisalAmt.Amt`||Original appraisal value of the collateral.|
|`CollateralInfo.AppraisalData.OriginalAppraisalAmt.CurCode`|| |
|`CollateralInfo.AppraisalData.OriginalAppraisalAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.AppraisalData.OriginalAppraisalAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.AppraisalData.LastAppraisalDt`||    |
|`CollateralInfo.AppraisalData.NextAppraisalDt`||    |
|`CollateralInfo.AppraisalData.AppraisalHistory`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalIdent`||AppraisalHistory instance starts with number 1. If multiple instance exists, then add 1 to each new instance.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.Amt`||***Conditionally Required**<br><br>Required when additional appraisal details are added.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.CurCode`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.CurCode.CurCodeValue`|USD|    |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueDt`||***Conditionally Required**<br><br>Required when additional appraisal details are added.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.Amt`||***Conditionally Required**<br><br>Required when additional appraisal details are added.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.CurCode`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraiserIdent`||This field is used to populate company appraiser indentification.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraiserPostAddr.AddressIdent`||This field is used to populate company appraiser indentification.|
|`CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData.DataIdent`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData.Value`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData.ExpDt`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData`||Each UCC filing can have multiple comments and can be added based on the AppraisalIdent. <br>By default, service provider may not allow multiple comments against a ResponsibilityCode for the same AppraisalIdent.|
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.CommentIdent`||CommentIdent starts with number 1. If multiple instance exists, then add 1 to each new instance.|
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.CommentDt`||   |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.CommentDesc`||   |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.PriorityInd`||   |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.RelationshipMgr`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.ExpDt`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.RelationshipMgr`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.RelationshipMgr.RelationshipMgrIdent`||Responsibility code associated with the appraisal|
|`CollateralInfo.AppraisalData.AppraisalHistory.ExpDt`||Date after which system automatically deletes additional information. <br>Post this date, system automatically deletes expired information during the update. |
|`CollateralInfo.RepriceData`|| |
|`CollateralInfo.RepriceData.PriceHistory`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceHistoryIdent`||PriceHistory instance start with number 1. If multiple instance exists, then add 1 to each new instance.|
|`CollateralInfo.RepriceData.PriceHistory.PriceAmt`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceAmt.Amt`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceAmt.CurCode`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceAmt.CurCode.CurCodeType`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceAmt.CurCode.CurCodeValue`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceDt`|| |
|`CollateralInfo.RepriceData.PriceHistory.Desc`||Maximum field length: 40 characters|
|`CollateralInfo.RepriceData.PriceHistory.CommentData`||Only one comment on price history can exist.|
|`CollateralInfo.RepriceData.PriceHistory.CommentData.CommentDesc`||   |
|`CollateralInfo.RepriceData.PriceHistory.CommentData.RelationshipMgr`|| |
|`CollateralInfo.RepriceData.PriceHistory.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.RepriceData.PriceHistory.CommentData.ExpDt`|| |
|`CollateralInfo.CollateralLoanToValueData`|| |
|`CollateralInfo.CollateralLoanToValueData.CombinedLTVExceptionRatio`||    |
|`CollateralInfo.CollateralInsuranceData`|| |
|`CollateralInfo.CollateralInsuranceData.InsuranceIdent`||CollateralInsuranceData instance start with number 1. If multiple instance exists, then add 1 to each new instance. |
|`CollateralInfo.CollateralInsuranceData.InsuranceType`|Other<br>RealEstate|Note:<br>- Use "Other" for any type of insurance <br>- Use "RealEstate" for insurance of real estate specific property as collateral.|
|`CollateralInfo.CollateralInsuranceData.CompanyIdent`||This field is used to populate company indentification.|
|`CollateralInfo.CollateralInsuranceData.CompanyPostAddr`|| |
|`CollateralInfo.CollateralInsuranceData.CompanyPostAddr.AddressIdent`||This field is used to populate company appraiser indentification.|
|`CollateralInfo.CollateralInsuranceData.AgentIdent`||This field is used to populate agent identification.|
|`CollateralInfo.CollateralInsuranceData.AgencyIdent`||This field is used to populate agency identification.|
|`CollateralInfo.CollateralInsuranceData.AgencyPostAddr`|| |
|`CollateralInfo.CollateralInsuranceData.AgencyPostAddr.AddressIdent`||This field is used to populate agency address identification.|
|`CollateralInfo.CollateralInsuranceData.PolicyNum`||Unique ID of the policy.<br><br>Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.PolicyAmt`|| |
|`CollateralInfo.CollateralInsuranceData.PolicyAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.PolicyAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.PolicyAmt.CurCode.CurCodeType`|ISO4217-Alpha|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.PolicyAmt.CurCode.CurCodeValue`|USD|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.PolicyDeductAmt`|| |
|`CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.<br><br>Amount of the out-of-pocket expenses incurred by the customer before insurance covers the remaining expenses as determined by the insurance policy.|
|`CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.CurCode.CurCodeType`|ISO4217-Alpha|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.CurCode.CurCodeValue`|USD|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt`|| |
|`CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.CurCode.CurCodeType`|ISO4217-Alpha|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.CurCode.CurCodeValue`|USD|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageDeductAmt`|| |
|`CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.CurCode.CurCodeType`|ISO4217-Alpha|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.CurCode.CurCodeValue`|USD|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt`|| |
|`CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.CurCode.CurCodeType`|ISO4217-Alpha|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.CurCode.CurCodeValue`|USD|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.OtherCoverageDesc`|| |
|`CollateralInfo.CollateralInsuranceData.CoverageTerm`|| |
|`CollateralInfo.CollateralInsuranceData.CoverageTerm.Count`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageTerm.TermUnits`|Unknown|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.InsuranceEffDt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.InsuranceExpDt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.VSIPremiumAmt`|| |
|`CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralInfo.CollateralInsuranceData.VSITerm`|| |
|`CollateralInfo.CollateralInsuranceData.VSITerm.Count`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.<br>Also knows as vendor single interest insurance policy.|
|`CollateralInfo.CollateralInsuranceData.VSITerm.TermUnits`|Unknown|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.LastInsurReviewDt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.NextInsurReviewDt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageData`|| |
|`CollateralInfo.CollateralInsuranceData.CoverageData.CoverageType`|AllHullRisk<br>Collision<br>Comprehensive<br>Fire<br>Liability<br>Theft<br>Homeowners<br>Flood|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageData.CoverageInd`|true<br>false|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.RelationshipMgr`|| |
|`CollateralInfo.CollateralInsuranceData.RelationshipMgr.RelationshipMgrIdent`||Responsibility code associated with the collateral insurance history record.|
|`CollateralInfo.CollateralInsuranceData.ExpDt`||Date after which system automatically deletes additional information. <br>Post this date, system automatically deletes expired information during the update. |
|`CollateralInfo.CollateralInsuranceData.ClientDefinedData`|| |
|`CollateralInfo.CollateralInsuranceData.ClientDefinedData.DataIdent`|| |
|`CollateralInfo.CollateralInsuranceData.ClientDefinedData.Value`|| |
|`CollateralInfo.CollateralInsuranceData.ClientDefinedData.ExpDt`|| |
|`CollateralInfo.CollateralInsuranceData.CommentData`||Each insurance can have multiple comments and are based on the InsuranceIdent. <br>By default, service provider may not allow multiple comments against a ResponsibilityCode for the same InsuranceIdent.|
|`CollateralInfo.CollateralInsuranceData.CommentData.CommentIdent`||CommentIdent instance starts with number 1. If multiple instance exists, then add 1 to each new instance.|
|`CollateralInfo.CollateralInsuranceData.CommentData.CommentDt`||   |
|`CollateralInfo.CollateralInsuranceData.CommentData.CommentDesc`||   |
|`CollateralInfo.CollateralInsuranceData.CommentData.PriorityInd`||   |
|`CollateralInfo.CollateralInsuranceData.CommentData.RelationshipMgr`|| |
|`CollateralInfo.CollateralInsuranceData.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.CollateralInsuranceData.CommentData.ExpDt`|| |
|`CollateralInfo.LastReviewDt`||Last date of review cannot be greater than the current run date.|
|`CollateralInfo.NextReviewDt`||Date on which the system will review the collateral status and prior to this date, based on the CAS general specifications, system prints the collateral information on a tickler report as a reminder for the collateral next review date. <br>This date must be greater than the current run date.|
|`CollateralInfo.CreateDt`|| |
|`CollateralInfo.CollateralFilingData`||Only single instance is allowed for CollateralFilingData. However, FilingHistory can have multiple instances.|
|`CollateralInfo.CollateralFilingData.FilingDesc`||   |
|`CollateralInfo.CollateralFilingData.FilingDt`||Date on which first financing statement for a borrower is filed.  <br>Six months prior to every five-year increment from this date, the system requires a new statement and the collateral appears on a tickler report.|
|`CollateralInfo.CollateralFilingData.LastFilingDt`||   |
|`CollateralInfo.CollateralFilingData.OrigFilingNum`||   |
|`CollateralInfo.CollateralFilingData.FilingNum`||Last UCC file number.|
|`CollateralInfo.CollateralFilingData.FilingAmendmentType`|None<br>Assignment<br>Termination<br>Continuation<br>CollateralAmendment<br>PartyAmendment| |
|`CollateralInfo.CollateralFilingData.FilingHistory`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.FilingIdent`||FilingHistory instance start with number 1. If multiple instance exists, then add 1 to each new instance.|
|`CollateralInfo.CollateralFilingData.FilingHistory.FilingNum`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.FilingDt`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.FilingAmendmentType`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData.DataIdent`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData.Value`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData.ExpDt`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData`||Each UCC filing can have multiple comments and are related  based on the FilingIdent. <br>By default, service provider may not allow multiple comments against a ResponsibilityCode for the same FilingIdent.|
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.CommentIdent`||CommentData instance starts with numer 1. If multiple instance exists, then add 1 to each new instance.|
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.CommentDt`||    |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.CommentDesc`||   |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.PriorityInd`||    |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.RelationshipMgr`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.ExpDt`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.RelationshipMgr`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.RelationshipMgr.RelationshipMgrIdent`||Responsibility code associated with UCC filing history records.|
|`CollateralInfo.CollateralFilingData.FilingHistory.ExpDt`||Date after which system automatically deletes additional information. <br>Post this date, system automatically deletes expired information during the update.|
|`CollateralInfo.OEDCode`|| |
|`CollateralInfo.RelationshipMgr`|| |
|`CollateralInfo.RelationshipMgr.RelationshipMgrIdent`||Responsibility code of an officer.<br>The value '0' indicates that an officer has not been assigned to the account and through this code, an account can be defined as sensitive for online inquiry and reference journal reporting. Additional details can be found in the PRM Institution Specifications and the SCM User Code Specifications.|
|`CollateralInfo.RelationshipMgr.RelationshipRole`|Officer<br>SecondOfficer<br>|Valid values: Officer and SecondOfficer. Officer refers to Responsibility Code and SecondOfficer refers to Opened By Responsibility Code.|
|`CollateralInfo.OriginatingBranch`||***Required**|
|`CollateralInfo.ResponsibleBranch`|| |
|`CollateralInfo.LienHolderData`|| |
|`CollateralInfo.LienHolderData.LienHolderNameIdent`||This field is used to populate lien holder identification.|
|`CollateralInfo.LienHolderData.LienHolderIdent`||LienholderData instance start with number 1. If multiple intance exists, then add 1 to each new instance.|
|`CollateralInfo.LienHolderData.LienHolderPostAddr.AddressIdent`||This field is used to populate lienholder address identification.|
|`CollateralInfo.LienHolderData.LienHolderType`|None<br>Corporation<br>Partnership<br>LLC<br>SoleProprietorship<br>Individual<br>CorporateTrust<br>Association<br>LimitedPartnership<br>LimitedLiabilityPartnership<br>IndividualTrust<br>ProfessionalLLC<br>ProfessionalLimitedLiabilityPartnership<br>NonProfitCorporation<br>NonProfitAssociation<br>GovernmentEntity| |
|`CollateralInfo.LienHolderData.LienSignersNum`|| |
|`CollateralInfo.LienHolderData.LienAcct`||Loan number for the loan included in the lien.|
|`CollateralInfo.LienHolderData.LienAmt`|| |
|`CollateralInfo.LienHolderData.LienAmt.Amt`||Amount that the system automatically subtracts from the collateral value while calculating the maximum loan credit amount and that the system uses to calculate loan to value (LTV) ratios.|
|`CollateralInfo.LienHolderData.LienAmt.CurCode`|| |
|`CollateralInfo.LienHolderData.LienAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.LienHolderData.LienAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralInfo.LienHolderData.LienAcctDt`|| |
|`CollateralInfo.LienHolderData.LienAcctMatDt`|| |
|`CollateralInfo.LienHolderData.ExpDt`||Date after which system automatically deletes additional information. <br>Post this date, system automatically deletes expired information during the update.|
|`CollateralInfo.LienHolderData.LienTransactionPurpose`|None<br>SubordinationOfRealEstate<br>NoticeOfSale<br>Default|Applicable for additional lien details on collateral.|
|`CollateralInfo.LienHolderData.PledgePriority`||***Required**|
|`CollateralInfo.LienHolderData.LienPosition`||***Required**|
|`CollateralInfo.LienHolderData.Book`||   |
|`CollateralInfo.LienHolderData.Trustee`||   |
|`CollateralInfo.LienHolderData.MortgageDt`|| |
|`CollateralInfo.LienHolderData.Reel`||   |
|`CollateralInfo.LienHolderData.Page`||   |
|`CollateralInfo.LienHolderData.RecordingDt`||   |
|`CollateralInfo.LienHolderData.RecordersEntry`||   |
|`CollateralInfo.LienHolderData.LienDesc`|| |
|`CollateralInfo.LienHolderData.FDICCertNum`||   |
|`CollateralInfo.LienHolderData.RelationshipMgr`|| |
|`CollateralInfo.LienHolderData.RelationshipMgr.RelationshipMgrIdent`||Responsibility code associated with the lien holder history records.|
|`CollateralInfo.LienHolderData.ClientDefinedData`|| |
|`CollateralInfo.LienHolderData.ClientDefinedData.DataIdent`|| |
|`CollateralInfo.LienHolderData.ClientDefinedData.Value`|| |
|`CollateralInfo.LienHolderData.ClientDefinedData.ExpDt`|| |
|`CollateralInfo.LienHolderData.CommentData`||Each lien holder instance can have multiple comments and are based on the LienHolderIdent. <br>By default, service provider may not allow multiple comments against a ResponsibilityCode for the same LienHolderIdent.|
|`CollateralInfo.LienHolderData.CommentData.CommentIdent`||CommentIdent instnace starts with number 1. If multiple instance exists, then add 1 to each new instance.|
|`CollateralInfo.LienHolderData.CommentData.CommentDt`||   |
|`CollateralInfo.LienHolderData.CommentData.CommentDesc`||   |
|`CollateralInfo.LienHolderData.CommentData.PriorityInd`||   |
|`CollateralInfo.LienHolderData.CommentData.RelationshipMgr`|| |
|`CollateralInfo.LienHolderData.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.LienHolderData.CommentData.ExpDt`|| |
|`CollateralInfo.UnderwritingRatio`||Applicable for collateral type as "Basic".|
|`CollateralInfo.Retention`|true<br>false|   |
|`CollateralInfo.ReportGroupCode`||Value ranges from 000-999. Miscellaneous code can be defined as a data description in the administrator program of the service provider.|
|`CollateralInfo.LoanReason`||Applicable for collateral type as "Basic".|
|`CollateralInfo.ClientDefinedData`|| |
|`CollateralInfo.ClientDefinedData.DataIdent`|| |
|`CollateralInfo.ClientDefinedData.Value`|| |
|`CollateralInfo.ClientDefinedData.ExpDt`|| |
|`CollateralInfo.OccupancyType`||Applicable for collateral type as "Basic".|
|`CollateralInfo.CommentData`||   |
|`CollateralInfo.CommentData.CommentIdent`||CommentIdent instance starts with number 1. If multiple instance exists, then add 1 to each new instance.|
|`CollateralInfo.CommentData.CommentDt`||   |
|`CollateralInfo.CommentData.CommentDesc`||   |
|`CollateralInfo.CommentData.PriorityInd`||   |
|`CollateralInfo.CommentData.RelationshipMgr`|| |
|`CollateralInfo.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.CommentData.ExpDt`|| |
|`CollateralInfo.VehicleData`|| |
|`CollateralInfo.VehicleData.VehicleIdentificationNum`||Applicable for collateral type as "Vehicle".|
|`CollateralInfo.VehicleData.Make`||Applicable for collateral type as "Vehicle"|
|`CollateralInfo.VehicleData.Model`||Applicable for collateral type as "Vehicle"|
|`CollateralInfo.VehicleData.ModelYear`||Applicable for collateral type as "Vehicle"|
|`CollateralInfo.VehicleData.TitleNum`||Applicable for collateral type as "Vehicle".|
|`CollateralInfo.VehicleData.PurchasePriceAmt`|| |
|`CollateralInfo.VehicleData.PurchasePriceAmt.Amt`||Amount that a borrower pays for the property.<br>Applicable for collateral type as "Vehicle".|
|`CollateralInfo.VehicleData.PurchasePriceAmt.CurCode`|| |
|`CollateralInfo.VehicleData.PurchasePriceAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.VehicleData.PurchasePriceAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.PropertyData`|| |
|`CollateralInfo.PropertyData.MarketValueAmt`|| |
|`CollateralInfo.PropertyData.MarketValueAmt.Amt`||Value of the collateral measured as the amount a buyer is willing to pay at a specific point of time (market value of the collateral).<br>Applicable for collateral type as "Real Estate".|
|`CollateralInfo.PropertyData.MarketValueAmt.CurCode`|| |
|`CollateralInfo.PropertyData.MarketValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.PropertyData.MarketValueAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.PropertyData.PurchasePriceAmt`|| |
|`CollateralInfo.PropertyData.PurchasePriceAmt.Amt`||Amount that a borrower pays for the property.<br>Applicable for collateral type as "Other Property".|
|`CollateralInfo.PropertyData.PurchasePriceAmt.CurCode`|| |
|`CollateralInfo.PropertyData.PurchasePriceAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.PropertyData.PurchasePriceAmt.CurCode.CurCodeValue`|USD|Service provider supports only U.S. currency.|
|`CollateralInfo.PropertyData.PropertyType`|Family1_4<br>MultiFamily<br>MultiFamily_2_4<br>MultiFamily_5Plus<br>ManufactedHousing<br>Cooperative<br>Condominium<br>PUD<br>MixedUsed<br>Commercial<br>Land<br>SingleFamily<br>HighRiseCondominium<br>DetachedCondominium<br>ManufactedHousingSingleWide<br>ManufactedHousingDoubleWide<br>ManufactedHousingMultiWide<br>None|Applicable for collateral type as "Real Estate".|
|`CollateralInfo.PropertyData.PrimaryResidenceInd`|true<br>false|Applicable for collateral type as "Real Estate".|
|`CollateralInfo.PropertyData.BuildingStat`|None<br>Existing<br>Proposed<br>AlterationImprovement<br>SubstantiallyRehabilitated<br>UnderConstruction|Applicable for collateral type as "Real Estate"|
|`CollateralInfo.PropertyData.NumberOfUnits`||Applicable for collateral type as "Real Estate".|
|`CollateralInfo.PropertyData.LegalData`|| |
|`CollateralInfo.PropertyData.LegalData.LegalDesc`||Applicable for collateral type as "Real Estate"|
|`CollateralInfo.PropertyData.LegalData.Parcel`||Applicable for collateral type as "Real Estate".<br>Tax assessor's designation of the property|
|`CollateralInfo.PropertyData.LegalData.Block`||Applicable for collateral type as "Real Estate".|
|`CollateralInfo.PropertyData.LegalData.Lot`||Applicable for collateral type as "Real Estate"|
|`CollateralInfo.PropertyData.LegalData.Subdivision`||Applicable for collateral type as "Real Estate"|
|`CollateralInfo.DepositAcctCollateralData`|| |
|`CollateralInfo.DepositAcctCollateralData.IssuerIdent`||This field is used to populate deposit account issuer identification.|
|`CollateralInfo.DepositAcctCollateralData.IssuerPostalAddr`|| |
|`CollateralInfo.DepositAcctCollateralData.IssuerPostalAddr.AddressIdent`||This field is used to populate deposit issuer address identification.|
|`CollateralInfo.DepositAcctCollateralData.AcctId`||Applicable for collateral type as "Deposit Accounts". |
|`CollateralInfo.DepositAcctCollateralData.AcctType`|DDA<br>SDA<br>CDA|Applicable for collateral type as "Deposit Accounts".  <br>This field indicates the type of deposit account used as collateral.|
|`CollateralInfo.DepositAcctCollateralData.HoldAmt`|| |
|`CollateralInfo.DepositAcctCollateralData.HoldAmt.Amt`||Applicable for collateral type as "Deposit Accounts". |
|`CollateralInfo.DepositAcctCollateralData.HoldAmt.CurCode`|| |
|`CollateralInfo.DepositAcctCollateralData.HoldAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.DepositAcctCollateralData.HoldAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralInfo.DepositAcctCollateralData.VaryHoldAmtFlag`|true<br>false|Applicable for collateral type as "Deposit Accounts".|
|`CollateralInfo.DepositAcctCollateralData.ExternalInd`|true<br>false|Applicable for collateral type as "Deposit Accounts".|
|`CollateralInfo.DepositAcctCollateralData.MaturityDt`||Applicable for collateral type as "Deposit Accounts".|
|`CollateralInfo.CommodityData`|| |
|`CollateralInfo.CommodityData.IssuerIdent`||This field is used to populate commodity issuer identification.|
|`CollateralInfo.CommodityData.BrokerIdent`||This field is used to populate commodity broker identification.|
|`CollateralInfo.CommodityData.BrokerPostAddr`|| |
|`CollateralInfo.CommodityData.BrokerPostAddr.AddressIdent`||This field is used to populate commodity broker address identification.|
|`CollateralInfo.CommodityData.CommodityType`|CommonStock<br>PreferredStock<br>MutualFund<br>Bond<br>Other|Applicable for collateral type as "Investments".|
|`CollateralInfo.CommodityData.CUSIPNum`||Applicable for collateral type as "Investments".|
|`CollateralInfo.CommodityData.Name`||Applicable for collateral type as "Investments".|
|`CollateralInfo.CommodityData.Symbol`||Applicable for collateral type as "Investments".<br>Stock symbol or ticker symbol is an abbreviation that the system uses to uniquely identify publicly traded shares of a particular stock on a particular stock market.|
|`CollateralInfo.CommodityData.CommodityAcctNum`||Applicable for collateral type as "Investments".|
|`CollateralInfo.CommodityData.SharesNum`||Applicable for collateral type  as "Investments".|
|`CollateralInfo.LifeInsuranceData`|| |
|`CollateralInfo.LifeInsuranceData.PolicyNum`||Applicable for collateral type as "Life Insurance".|
|`CollateralInfo.LifeInsuranceData.CompanyIdent`||This field is used to populate life insurance company identification.|
|`CollateralInfo.LifeInsuranceData.CompanyPostAddr`|| |
|`CollateralInfo.LifeInsuranceData.CompanyPostAddr.AddressIdent`||This field is used to populate life insurance company address identification.|
|`CollateralInfo.LifeInsuranceData.PurchaserIdent`||This field is used to populate life insurance purchaser identification.|
|`CollateralInfo.LifeInsuranceData.PurchaserPostAddr`|| |
|`CollateralInfo.LifeInsuranceData.PurchaserPostAddr.AddressIdent`||This field is used to populate life insurance purchaser address identification.|
|`CollateralInfo.LifeInsuranceData.PurchaserPostAddr.AddrUse`|Mailing|Use to indicate when address corresponds to the mailing address of the policy owner.|
|`CollateralInfo.LifeInsuranceData.BeneficiaryData`|| |
|`CollateralInfo.LifeInsuranceData.BeneficiaryData.PartyKeys`|| |
|`CollateralInfo.LifeInsuranceData.BeneficiaryData.PartyKeys.PartyId`||This field is used to populate life insurance beneficiary identification.|
|`CollateralInfo.LifeInsuranceData.BeneficiaryData.PostAddr.AddressIdent`||This field is used to populate life insurance beneficiary identification.|
|`CollateralInfo.LifeInsuranceData.Desc`||Applicable for collateral type as "Life Insurance".|
|`CollateralInfo.LifeInsuranceData.FaceValueAmt`|| |
|`CollateralInfo.LifeInsuranceData.FaceValueAmt.Amt`||Value of the life insurance policy marked on the document kept as collateral.<br>Applicable to collateral type as "Life Insurance".|
|`CollateralInfo.LifeInsuranceData.FaceValueAmt.CurCode`|| |
|`CollateralInfo.LifeInsuranceData.FaceValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.LifeInsuranceData.FaceValueAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralInfo.LifeInsuranceData.CashValueAmt`|| |
|`CollateralInfo.LifeInsuranceData.CashValueAmt.Amt`||Amount of cash paid out if the borrower cancels the policy.|
|`CollateralInfo.LifeInsuranceData.CashValueAmt.CurCode`|| |
|`CollateralInfo.LifeInsuranceData.CashValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.LifeInsuranceData.CashValueAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralInfo.LifeInsuranceData.InsuranceEffDt`||Applicable for collateral type as "Life Insurance".|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|| |
|`CollateralStatusRec`|| |
|`CollateralStatusRec.CollateralKeys`|| |
|`CollateralStatusRec.CollateralKeys.CollateralId`|| |
|`CollateralStatusRec.CollateralStatus`|| |
|`CollateralStatusRec.CollateralStatus.CollateralStatusCode`|Valid| |
|`CollateralStatusRec.CollateralStatus.EffDt`|| |
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
