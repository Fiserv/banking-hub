# Implementation Notes for Update Collateral
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`CollateralKeys`|| |
|`CollateralKeys.CollateralId`||***Required**<br>This field is required to be provided for modification operation.|
|`CollateralInfo`|| |
|`CollateralInfo.CollateralDesc`||This field could be CUSIP number, a vehicle identification number or registration number|
|`CollateralInfo.CollateralValueAmt`|| |
|`CollateralInfo.CollateralValueAmt.CurCode`|| |
|`CollateralInfo.CollateralValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.CollateralValueAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.PledgeInd`|true<br>false| |
|`CollateralInfo.ImpairedAmt`|| |
|`CollateralInfo.ImpairedAmt.Amt`||This field refers to the non-lien amount that the system subtracts from the collateral value, depending upon the calculation method used for calculating the maxmimum credit amount and the non-lien amount that the system subtracts from the collateral value to calculate the available pledge amount.|
|`CollateralInfo.ImpairedAmt.CurCode`|| |
|`CollateralInfo.ImpairedAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.ImpairedAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.PropertyTypeCode`||This field applicable to collateral type as "Basic". <br>Integer value is accepted by the core indicating property type code as "Basic".|
|`CollateralInfo.CollateralDetailStatus`||For this field, values are client-defined indicating description of the collateral status. This field is applicable for collateral type "Basic".|
|`CollateralInfo.CollateralLocation`||This field is applicable for collateral type "Basic". <br>Please note for this field you should have predefined list of codes for referral.<br>For example: "v" could indicate the collateral is located in an institution vault.|
|`CollateralInfo.PostAddr`||Implementation for FI should have ESF AddrAdd and ESF AddrDel service opertions onboarded.<br>AddrAdd is called to add address details of the collateral property where as AddrDel is called in case CollateralAdd has failed and the address added needs to be deleted.|
|`CollateralInfo.PostAddr.AddressIdent`||***Conditionally Required**<br>This field is required to be sent in the request if an existing address is associated with the collateral.<br>If an new address needs to be added, then this field is not required to be sent in the request. ESF will add the address using the AddrAdd operation.<br>Please note multiple address can be associated with the address record.|
|`CollateralInfo.PostAddr.AddrUse`||This field indicates address usage related to the collateral. One address can have multiple relationships. <br>Please note relationships between a party and an address may have client-defined values and when appropriate address usage is not found, the value of the user-defined relationship code is be provided. |
|`CollateralInfo.PostAddr.AddrType`|Primary<br>|Only primary address type is supported to be associated with the collateral record. |
|`CollateralInfo.Desc`||The field length for this field is 120 characters.|
|`CollateralInfo.CollateralValueData`|| |
|`CollateralInfo.CollateralValueData.UnitPrice`|| |
|`CollateralInfo.CollateralValueData.UnitPrice.UnitNum`||This field is used to specify the property in units or lots.<br>For example to specify investment collateral in terms of shares (say 100 shares) or to specify in case of property in terms of lots (say 10).|
|`CollateralInfo.CollateralValueData.ValueUpdateOpt`|None<br>Always<br>ApraisalDecrease<br>ApraisalIncrese|This field is used to specify whether the system |
|`CollateralInfo.CollateralValueData.MarginPercent`||This refers to disposal cost in relation to the collateral value. The system multiplies the margin percent by the collateral value to determine the margin value. <br>Core needs either MarginPercent field or MarginAmt field, not both. If provided, margin percent should not be greater than 100.|
|`CollateralInfo.CollateralValueData.MarginAmt`|| |
|`CollateralInfo.CollateralValueData.MarginAmt.Amt`||This field refers to the disposal cost in relation to the collateral value. <br>The system subtracts this amount from the collateral value to determine the margin value of the collateral.<br>Please note in the core, you can define either the MarginPercent field or MarginAmt field, not both.|
|`CollateralInfo.CollateralValueData.MarginAmt.CurCode`|| |
|`CollateralInfo.CollateralValueData.MarginAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.CollateralValueData.MarginAmt.CurCode.CurCodeValue`|| |
|`CollateralInfo.CollateralValueData.MarginInd`|true<br>false| |
|`CollateralInfo.CollateralValueData.PurchasePriceAmt`|| |
|`CollateralInfo.CollateralValueData.PurchasePriceAmt.Amt`||This refers to the amount the borrower paid for the property.<br>This field is applicable for "Basic" collateral type.|
|`CollateralInfo.CollateralValueData.PurchasePriceAmt.CurCode`|| |
|`CollateralInfo.CollateralValueData.PurchasePriceAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.CollateralValueData.PurchasePriceAmt.CurCode.CurCodeValue`|| |
|`CollateralInfo.CollateralValueData.MarketPricingCode`||Applicable for collateral type "Basic".|
|`CollateralInfo.CollateralValueData.MarketMarginPercent`||Applicable for collateral type "Basic".|
|`CollateralInfo.AppraisalData`|| |
|`CollateralInfo.AppraisalData.OriginalAppraisalAmt`|| |
|`CollateralInfo.AppraisalData.OriginalAppraisalAmt.Amt`||Refers to original appraisal value of the collateral.|
|`CollateralInfo.AppraisalData.OriginalAppraisalAmt.CurCode`|| |
|`CollateralInfo.AppraisalData.OriginalAppraisalAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.AppraisalData.OriginalAppraisalAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.AppraisalData.LastAppraisalDt`|| |
|`CollateralInfo.AppraisalData.NextAppraisalDt`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalIdent`||Please note AppraisalHistory instance start with number 1. If multiple exists, then increase each new instance by 1.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.Amt`||This field is required when additional appraisal details are added.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.CurCode`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueDt`||This field is required when additional appraisal details are added.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.Amt`||This field is required when additional appraisal details are added.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.CurCode`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraiserIdent`||This field is used to populate company appraiser indentification.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraiserPostAddr.AddressIdent`||This field is used to populate company appraiser indentification.|
|`CollateralInfo.AppraisalData.AppraisalHistory.AppraiserPostAddr.AddrType`|Primary| |
|`CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData.DataIdent`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData.Value`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData.ExpDt`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData`||Please note each UCC filing can have multiple comments and can be added based on the AppraisalIdent. <br>By default core behaviour, multiple comments against a ResponsibilityCode for the same AppraisalIdent may not be allowed.|
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.CommentIdent`||Please note CommentIdent starts with number 1. If multiple instance exists, then increase each new instance by 1.|
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.CommentDt`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.CommentDesc`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.PriorityInd`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.RelationshipMgr`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.CommentData.ExpDt`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.RelationshipMgr`|| |
|`CollateralInfo.AppraisalData.AppraisalHistory.RelationshipMgr.RelationshipMgrIdent`||Refers to the responsibility code associated with the appraisal|
|`CollateralInfo.AppraisalData.AppraisalHistory.ExpDt`||This refers to the date after which system automatically deletes additional information. <br>Also system automatically deletes expired information during the update after this date. |
|`CollateralInfo.RepriceData`|| |
|`CollateralInfo.RepriceData.PriceHistory`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceHistoryIdent`||Please note the PriceHistory instance start with number 1. If multiple exists, then increase each new instance by 1.|
|`CollateralInfo.RepriceData.PriceHistory.PriceAmt`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceAmt.Amt`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceAmt.CurCode`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceAmt.CurCode.CurCodeType`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceAmt.CurCode.CurCodeValue`|| |
|`CollateralInfo.RepriceData.PriceHistory.PriceDt`|| |
|`CollateralInfo.RepriceData.PriceHistory.Desc`||The field length for this field is 40 characters.|
|`CollateralInfo.RepriceData.PriceHistory.CommentData`||Only one comment on price history can exist.|
|`CollateralInfo.RepriceData.PriceHistory.CommentData.CommentDesc`|| |
|`CollateralInfo.RepriceData.PriceHistory.CommentData.RelationshipMgr`|| |
|`CollateralInfo.RepriceData.PriceHistory.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.RepriceData.PriceHistory.CommentData.ExpDt`|| |
|`CollateralInfo.CollateralLoanToValueData`|| |
|`CollateralInfo.CollateralLoanToValueData.CombinedLTVExceptionRatio`|| |
|`CollateralInfo.CollateralInsuranceData`|| |
|`CollateralInfo.CollateralInsuranceData.InsuranceIdent`||Please note the CollateralInsuranceData instance start with number 1. If multiple exists, then increase each new instance by 1. |
|`CollateralInfo.CollateralInsuranceData.InsuranceType`|Other<br>RealEstate|Note:<br>- Use "Other" for any type of insurance <br>- Use "RealEstate" for insurance of real estate specific property as collateral.|
|`CollateralInfo.CollateralInsuranceData.CompanyIdent`||This field is used to populate company indentification.|
|`CollateralInfo.CollateralInsuranceData.CompanyPostAddr`|| |
|`CollateralInfo.CollateralInsuranceData.CompanyPostAddr.AddressIdent`||This field is used to populate company appraiser indentification.|
|`CollateralInfo.CollateralInsuranceData.AgentIdent`||This field is used to populate agent identification.|
|`CollateralInfo.CollateralInsuranceData.AgencyIdent`||This field is used to populate agency identification.|
|`CollateralInfo.CollateralInsuranceData.AgencyPostAddr`|| |
|`CollateralInfo.CollateralInsuranceData.AgencyPostAddr.AddressIdent`||This field is used to populate agency address identification.|
|`CollateralInfo.CollateralInsuranceData.AgencyPostAddr.AddrType`|Primary| |
|`CollateralInfo.CollateralInsuranceData.PolicyNum`|| |
|`CollateralInfo.CollateralInsuranceData.PolicyAmt`|| |
|`CollateralInfo.CollateralInsuranceData.PolicyAmt.Amt`||This field is applicable in case of additional insurance details, used to secure the different type of collateral.|
|`CollateralInfo.CollateralInsuranceData.PolicyAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.PolicyAmt.CurCode.CurCodeType`|ISO4217-Alpha|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.PolicyAmt.CurCode.CurCodeValue`|USD|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.PolicyDeductAmt`|| |
|`CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.Amt`||This field is applicable in case of additional insurance details, used to secure the different type of collateral.<br><br>This amount referes to the out-of-pocket expenses incurred by the customer before insurance covers the remaining expenses as determined by the insurance policy.|
|`CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.CurCode.CurCodeType`|ISO4217-Alpha|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.CurCode.CurCodeValue`|USD|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt`|| |
|`CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.Amt`||This field is applicable in case of additional insurance details, used to secure the different type of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.CurCode.CurCodeType`|ISO4217-Alpha|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.CurCode.CurCodeValue`|USD|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageDeductAmt`|| |
|`CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.Amt`||This field is applicable in case of additional insurance details, used to secure the different type of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.CurCode.CurCodeType`|ISO4217-Alpha|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.CurCode.CurCodeValue`|USD|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt`|| |
|`CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.Amt`||This field is applicable in case of additional insurance details, used to secure the different type of collateral.|
|`CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.CurCode.CurCodeType`|ISO4217-Alpha|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.CurCode.CurCodeValue`|USD|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.OtherCoverageDesc`|| |
|`CollateralInfo.CollateralInsuranceData.CoverageTerm`|| |
|`CollateralInfo.CollateralInsuranceData.CoverageTerm.Count`||This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageTerm.TermUnits`|Unknown|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.InsuranceEffDt`||This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.InsuranceExpDt`||This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.VSIPremiumAmt`|| |
|`CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.Amt`||This field is applicable in case of additional insurance details, used to secure the different type of collateral.|
|`CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.CurCode`|| |
|`CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.CollateralInsuranceData.VSITerm`|| |
|`CollateralInfo.CollateralInsuranceData.VSITerm.Count`||This field is applicable for additional insurance details that is used to secure different types of collateral.<br>Refers to vendor interest insurance policy.|
|`CollateralInfo.CollateralInsuranceData.VSITerm.TermUnits`|Unknown|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.LastInsurReviewDt`||This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.NextInsurReviewDt`||This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageData`|| |
|`CollateralInfo.CollateralInsuranceData.CoverageData.CoverageType`|AllHullRisk<br>Collision<br>Comprehensive<br>Fire<br>Liability<br>Theft<br>Homeowners<br>Flood|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.CoverageData.CoverageInd`|true<br>false|This field is applicable for additional insurance details that is used to secure different types of collateral.|
|`CollateralInfo.CollateralInsuranceData.RelationshipMgr`|| |
|`CollateralInfo.CollateralInsuranceData.RelationshipMgr.RelationshipMgrIdent`||Refers to responsibility code associated with the collateral insurance history record.|
|`CollateralInfo.CollateralInsuranceData.ExpDt`||This refers to the date after which system automatically deletes additional information. <br>Also system automatically deletes expired information during the update after this date.|
|`CollateralInfo.CollateralInsuranceData.ClientDefinedData`|| |
|`CollateralInfo.CollateralInsuranceData.ClientDefinedData.DataIdent`|| |
|`CollateralInfo.CollateralInsuranceData.ClientDefinedData.Value`|| |
|`CollateralInfo.CollateralInsuranceData.ClientDefinedData.ExpDt`|| |
|`CollateralInfo.CollateralInsuranceData.CommentData`||Please note each insurance can have multiple comments and are based on the InsuranceIdent. <br>By default core behaviour, multiple comments against a ResponsibilityCode for the same InsuranceIdent may not be allowed.|
|`CollateralInfo.CollateralInsuranceData.CommentData.CommentIdent`||Please note CommentIdent starts with number 1. If multiple instance exists, then increase each new instance by 1.|
|`CollateralInfo.CollateralInsuranceData.CommentData.CommentDt`|| |
|`CollateralInfo.CollateralInsuranceData.CommentData.CommentDesc`|| |
|`CollateralInfo.CollateralInsuranceData.CommentData.PriorityInd`|| |
|`CollateralInfo.CollateralInsuranceData.CommentData.RelationshipMgr`|| |
|`CollateralInfo.CollateralInsuranceData.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.CollateralInsuranceData.CommentData.ExpDt`|| |
|`CollateralInfo.LastReviewDt`||Please note the last date of review cannot be greater than the current run date.|
|`CollateralInfo.NextReviewDt`||This refers to the date when system will review the collateral status and prior to this date, based on the CAS general specifications system prints the collateral information on a tickler report as a reminder of the collateral next review date. <br>This date must be greater than the current run.|
|`CollateralInfo.CreateDt`|| |
|`CollateralInfo.CollateralFilingData`||Please note only 1 instance is allowed for CollateralFilingData. However, FilingHistory can have multiple instances.|
|`CollateralInfo.CollateralFilingData.FilingDesc`|| |
|`CollateralInfo.CollateralFilingData.FilingDt`||This refers to the date when first financing statement for a borrower is filed.  <br>Six months prior to every five-year increment from this date, the system requires a new statement and the collateral appears on a tickler report.|
|`CollateralInfo.CollateralFilingData.LastFilingDt`|| |
|`CollateralInfo.CollateralFilingData.OrigFilingNum`|| |
|`CollateralInfo.CollateralFilingData.FilingNum`||Refers to last UCC file number.|
|`CollateralInfo.CollateralFilingData.FilingAmendmentType`|None<br>Assignment<br>Termination<br>Continuation<br>CollateralAmendment<br>PartyAmendment| |
|`CollateralInfo.CollateralFilingData.FilingHistory`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.FilingIdent`||Please note FilingHistory instance start with number 1. If multiple exists, then increase each new instance by 1.|
|`CollateralInfo.CollateralFilingData.FilingHistory.FilingNum`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.FilingDt`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.FilingAmendmentType`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData.DataIdent`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData.Value`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData.ExpDt`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData`||Please note each UCC filing can have multiple comments and are related  based on the FilingIdent. <br>By default core behaviour, multiple comments against a ResponsibilityCode for the same FilingIdent may not be allowed.|
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.CommentIdent`||Please note only 1 instance is allowed for CollateralFilingData. However, FilingHistory can have multiple instances.|
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.CommentDt`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.CommentDesc`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.PriorityInd`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.RelationshipMgr`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.CommentData.ExpDt`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.RelationshipMgr`|| |
|`CollateralInfo.CollateralFilingData.FilingHistory.RelationshipMgr.RelationshipMgrIdent`||Refers to responsibility code associated with UCC filing history records.|
|`CollateralInfo.CollateralFilingData.FilingHistory.ExpDt`||This refers to the date after which system automatically deletes additional information. <br>Also system automatically deletes expired information during the update after this date.|
|`CollateralInfo.OEDCode`|| |
|`CollateralInfo.RelationshipMgr`|| |
|`CollateralInfo.RelationshipMgr.RelationshipMgrIdent`||Referes to responsibility code of an officer.<br>0 value indicate that an officer has not been assigned to the account and through this code, an account can be defined as sensitive for online inquiry and reference journal reporting. Additional details can found in the PRM Institution Specifications and the SCM User Code Specifications.|
|`CollateralInfo.RelationshipMgr.RelationshipRole`|Officer<br>SecondOfficer<br>|Valid values, Officer refers to Responsibility Code and  SecondOfficer refers to Opened By Responsibility Code.|
|`CollateralInfo.OriginatingBranch`||***Required**|
|`CollateralInfo.ResponsibleBranch`|| |
|`CollateralInfo.LienHolderData`|| |
|`CollateralInfo.LienHolderData.LienHolderIdent`||Please note LienholderData instance start with number 1. If multiple exists, then increase each new instance by 1.|
|`CollateralInfo.LienHolderData.LienHolderNameIdent`||This field is used to populate lien holder identification.|
|`CollateralInfo.LienHolderData.LienHolderPostAddr.AddressIdent`||This field is used to populate lienholder address identification.|
|`CollateralInfo.LienHolderData.LienHolderPostAddr.AddrType`|Primary| |
|`CollateralInfo.LienHolderData.LienHolderType`|None<br>Corporation<br>Partnership<br>LLC<br>SoleProprietorship<br>Individual<br>CorporateTrust<br>Association<br>LimitedPartnership<br>LimitedLiabilityPartnership<br>IndividualTrust<br>ProfessionalLLC<br>ProfessionalLimitedLiabilityPartnership<br>NonProfitCorporation<br>NonProfitAssociation<br>GovernmentEntity| |
|`CollateralInfo.LienHolderData.LienSignersNum`|| |
|`CollateralInfo.LienHolderData.LienAcct`||Loan number for the loan included in the lien.|
|`CollateralInfo.LienHolderData.LienAmt`|| |
|`CollateralInfo.LienHolderData.LienAmt.Amt`||This refers to the amount that the system automatically subtracts from the collateral value when calculating the loan maximum credit amount and that the system uses to calculate loan to value (LTV) ratios.|
|`CollateralInfo.LienHolderData.LienAmt.CurCode`|| |
|`CollateralInfo.LienHolderData.LienAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.LienHolderData.LienAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.LienHolderData.LienAcctDt`|| |
|`CollateralInfo.LienHolderData.LienAcctMatDt`|| |
|`CollateralInfo.LienHolderData.LienExpDt`||This refers to the date after which system automatically deletes additional information. <br>Also system automatically deletes expired information during the update after this date.|
|`CollateralInfo.LienHolderData.LienTransactionPurpose`|None<br>SubordinationOfRealEstate<br>NoticeOfSale<br>Default|Applicable for additional lien details on collateral.|
|`CollateralInfo.LienHolderData.PledgePriority`||***Required**|
|`CollateralInfo.LienHolderData.LienPosition`||***Required**|
|`CollateralInfo.LienHolderData.Book`|| |
|`CollateralInfo.LienHolderData.Trustee`|| |
|`CollateralInfo.LienHolderData.MortgageDt`|| |
|`CollateralInfo.LienHolderData.Reel`|| |
|`CollateralInfo.LienHolderData.Page`|| |
|`CollateralInfo.LienHolderData.RecordingDt`|| |
|`CollateralInfo.LienHolderData.RecordersEntry`|| |
|`CollateralInfo.LienHolderData.LienDesc`|| |
|`CollateralInfo.LienHolderData.FDICCertNum`|| |
|`CollateralInfo.LienHolderData.RelationshipMgr`|| |
|`CollateralInfo.LienHolderData.RelationshipMgr.RelationshipMgrIdent`||Refers to responsibility code associated with the lien holder history records.|
|`CollateralInfo.LienHolderData.ClientDefinedData`|| |
|`CollateralInfo.LienHolderData.ClientDefinedData.DataIdent`|| |
|`CollateralInfo.LienHolderData.ClientDefinedData.Value`|| |
|`CollateralInfo.LienHolderData.ClientDefinedData.ExpDt`|| |
|`CollateralInfo.LienHolderData.CommentData`||Please note each lien holder instance  can have multiple comments and are related based on the LienHolderIdent. <br>By default core behaviour, multiple comments against a ResponsibilityCode for the same LienHolderIdent may not be allowed.|
|`CollateralInfo.LienHolderData.CommentData.CommentIdent`||Please note CommentIdent starts with number 1. If multiple instance exists, then increase each new instance by 1.|
|`CollateralInfo.LienHolderData.CommentData.CommentDt`|| |
|`CollateralInfo.LienHolderData.CommentData.CommentDesc`|| |
|`CollateralInfo.LienHolderData.CommentData.PriorityInd`|| |
|`CollateralInfo.LienHolderData.CommentData.RelationshipMgr`|| |
|`CollateralInfo.LienHolderData.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.LienHolderData.CommentData.ExpDt`|| |
|`CollateralInfo.UnderwritingRatio`||Applicable for collateral type "Basic".|
|`CollateralInfo.Retention`|true<br>false| |
|`CollateralInfo.ReportGroupCode`||For this field values range from 000-999 and you can define the miscellaneous code as a data description in the administrator program of the core.|
|`CollateralInfo.LoanReason`||Applicable for collateral type "Basic".|
|`CollateralInfo.ClientDefinedData`|| |
|`CollateralInfo.ClientDefinedData.DataIdent`|| |
|`CollateralInfo.ClientDefinedData.Value`|| |
|`CollateralInfo.ClientDefinedData.ExpDt`|| |
|`CollateralInfo.OccupancyType`||Applicable for collateral type "Basic".|
|`CollateralInfo.CommentData`|| |
|`CollateralInfo.CommentData.CommentIdent`||Please note CommentIdent starts with number 1. If multiple instance exists, then increase each new instance by 1.|
|`CollateralInfo.CommentData.CommentDt`|| |
|`CollateralInfo.CommentData.CommentDesc`|| |
|`CollateralInfo.CommentData.PriorityInd`|| |
|`CollateralInfo.CommentData.RelationshipMgr`|| |
|`CollateralInfo.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralInfo.CommentData.ExpDt`|| |
|`CollateralInfo.VehicleData`|| |
|`CollateralInfo.VehicleData.VehicleIdentificationNum`||Applicable for collateral type "Vehicle".|
|`CollateralInfo.VehicleData.Make`||Applicable for collateral type "Vehicle"|
|`CollateralInfo.VehicleData.Model`||Applicable for collateral type "Vehicle"|
|`CollateralInfo.VehicleData.ModelYear`||Applicable for collateral type "Vehicle"|
|`CollateralInfo.VehicleData.TitleNum`||Applicable for collateral type "Vehicle".|
|`CollateralInfo.VehicleData.PurchasePriceAmt`|| |
|`CollateralInfo.VehicleData.PurchasePriceAmt.Amt`||Refers to the amount paid by the borrower for the property.<br>This field is applicable for collateral type "Vehicle".|
|`CollateralInfo.VehicleData.PurchasePriceAmt.CurCode`|| |
|`CollateralInfo.VehicleData.PurchasePriceAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.VehicleData.PurchasePriceAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.PropertyData`|| |
|`CollateralInfo.PropertyData.MarketValueAmt`|| |
|`CollateralInfo.PropertyData.MarketValueAmt.Amt`||Refers to the value of the collateral measured as the amount a buyer is willing to pay at a specific point of time ( market value of the collateral).<br>This field is applicable for collateral type "Real Estate".|
|`CollateralInfo.PropertyData.MarketValueAmt.CurCode`|| |
|`CollateralInfo.PropertyData.MarketValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.PropertyData.MarketValueAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.PropertyData.PurchasePriceAmt`|| |
|`CollateralInfo.PropertyData.PurchasePriceAmt.Amt`||Refers to the amount paid by the borrower for the property.<br>This field is applicable for collateral type "Other Property".|
|`CollateralInfo.PropertyData.PurchasePriceAmt.CurCode`|| |
|`CollateralInfo.PropertyData.PurchasePriceAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.PropertyData.PurchasePriceAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.PropertyData.PropertyType`|Family1_4<br>MultiFamily<br>MultiFamily_2_4<br>MultiFamily_5Plus<br>ManufactedHousing<br>Cooperative<br>Condominium<br>PUD<br>MixedUsed<br>Commercial<br>Land<br>SingleFamily<br>HighRiseCondominium<br>DetachedCondominium<br>ManufactedHousingSingleWide<br>ManufactedHousingDoubleWide<br>ManufactedHousingMultiWide<br>None|Applicable for collateral type "Real Estate".|
|`CollateralInfo.PropertyData.PrimaryResidenceInd`|true<br>false|Applicable for collateral type "Real Estate".|
|`CollateralInfo.PropertyData.BuildingStat`|None<br>Existing<br>Proposed<br>AlterationImprovement<br>SubstantiallyRehabilitated<br>UnderConstruction|Applicable for collateral type "Real Estate"|
|`CollateralInfo.PropertyData.NumberOfUnits`||Applicable for collateral type "Real Estate".|
|`CollateralInfo.PropertyData.LegalData`|| |
|`CollateralInfo.PropertyData.LegalData.LegalDesc`||Applicable for collateral type "Real Estate"|
|`CollateralInfo.PropertyData.LegalData.Parcel`||Applicable for collateral type "Real Estate".<br>This field refers to tax assessor's designation of the property|
|`CollateralInfo.PropertyData.LegalData.Block`||Applicable for collateral type "Real Estate".|
|`CollateralInfo.PropertyData.LegalData.Lot`||Applicable for collateral type "Real Estate"|
|`CollateralInfo.PropertyData.LegalData.Subdivision`||Applicable for collateral type "Real Estate"|
|`CollateralInfo.DepositAcctCollateralData`|| |
|`CollateralInfo.DepositAcctCollateralData.IssuerIdent`||This field is used to populate deposit account issuer identification.|
|`CollateralInfo.DepositAcctCollateralData.IssuerPostalAddr`|| |
|`CollateralInfo.DepositAcctCollateralData.IssuerPostalAddr.AddressIdent`||This field is used to populate deposit issuer address identification.|
|`CollateralInfo.DepositAcctCollateralData.AcctId`||This field is applicable for collateral type "Deposit Accounts". |
|`CollateralInfo.DepositAcctCollateralData.AcctType`|DDA<br>SDA<br>CDA|This field is applicable for collateral type "Deposit Accounts".  <br>This field indicates the type of deposit account used as collateral.|
|`CollateralInfo.DepositAcctCollateralData.HoldAmt`|| |
|`CollateralInfo.DepositAcctCollateralData.HoldAmt.Amt`||This field is applicable for collateral type "Deposit Accounts". |
|`CollateralInfo.DepositAcctCollateralData.HoldAmt.CurCode`|| |
|`CollateralInfo.DepositAcctCollateralData.HoldAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.DepositAcctCollateralData.HoldAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.DepositAcctCollateralData.VaryHoldAmtFlag`|true<br>false|Applicable for collateral type "Deposit Accounts"|
|`CollateralInfo.DepositAcctCollateralData.ExternalInd`|true<br>false|Applicable for collateral type "Deposit Accounts"|
|`CollateralInfo.DepositAcctCollateralData.MaturityDt`||Applicable for collateral type "Deposit Accounts"|
|`CollateralInfo.CommodityData`|| |
|`CollateralInfo.CommodityData.IssuerIdent`||This field is used to populate commodity issuer identification.|
|`CollateralInfo.CommodityData.BrokerIdent`||This is field is used to populate commodity broker identification.|
|`CollateralInfo.CommodityData.BrokerPostAddr`|| |
|`CollateralInfo.CommodityData.BrokerPostAddr.AddressIdent`||This field is used to populate commodity broker address identification.|
|`CollateralInfo.CommodityData.BrokerPostAddr.AddrType`|Primary| |
|`CollateralInfo.CommodityData.CommodityType`|CommonStock<br>PreferredStock<br>MutualFund<br>Bond<br>Other|This field indicates the investment account type kept as collateral.<br>Applicable for collateral type "Investments".|
|`CollateralInfo.CommodityData.CUSIPNum`||Applicable for collateral type "Investments".|
|`CollateralInfo.CommodityData.Name`||Applicable for collateral type "Investments".|
|`CollateralInfo.CommodityData.Symbol`||Applicable for collateral type " Investments".<br>Stock symbol or ticker symbol is an abbreviation that the system uses to uniquely identify publicly traded shares of a particular stock on a particular stock market.|
|`CollateralInfo.CommodityData.CommodityAcctNum`||Applicable for collateral type "Investments".|
|`CollateralInfo.CommodityData.SharesNum`||Applicable for collateral type " Investments".|
|`CollateralInfo.LifeInsuranceData`|| |
|`CollateralInfo.LifeInsuranceData.PolicyNum`||Applicable for collateral type "Life Insurance".|
|`CollateralInfo.LifeInsuranceData.CompanyIdent`||This field is used to populate life insurance company identification.|
|`CollateralInfo.LifeInsuranceData.CompanyPostAddr`|| |
|`CollateralInfo.LifeInsuranceData.CompanyPostAddr.AddressIdent`||This field is used to populate life insurance company address identification.|
|`CollateralInfo.LifeInsuranceData.PurchaserIdent`||This field is used to populate life insurance purchaser identification.|
|`CollateralInfo.LifeInsuranceData.PurchaserPostAddr`|| |
|`CollateralInfo.LifeInsuranceData.PurchaserPostAddr.AddressIdent`||This field is used to populate life insurance purchaser address identification.|
|`CollateralInfo.LifeInsuranceData.PurchaserPostAddr.AddrUse`|Mailing|This field indicate address corresponds to the mailing address of the policy owner.|
|`CollateralInfo.LifeInsuranceData.PurchaserPostAddr.AddrType`|Primary| |
|`CollateralInfo.LifeInsuranceData.BeneficiaryData`|| |
|`CollateralInfo.LifeInsuranceData.BeneficiaryData.PartyKeys`|| |
|`CollateralInfo.LifeInsuranceData.BeneficiaryData.PartyKeys.PartyId`||This field is used to populate life insurance beneficiary identification.|
|`CollateralInfo.LifeInsuranceData.BeneficiaryData.PostAddr.AddressIdent`||This field is used to populate life insurance beneficiary identification.|
|`CollateralInfo.LifeInsuranceData.BeneficiaryData.PostAddr.AddrType`|Primary| |
|`CollateralInfo.LifeInsuranceData.Desc`||Applicable for collateral type "Life Insurance"|
|`CollateralInfo.LifeInsuranceData.FaceValueAmt`|| |
|`CollateralInfo.LifeInsuranceData.FaceValueAmt.Amt`||This refers to the value of the life insurance policy marked on the document kept as collateral.<br>Applicable to collateral type " Life Insurance"|
|`CollateralInfo.LifeInsuranceData.FaceValueAmt.CurCode`|| |
|`CollateralInfo.LifeInsuranceData.FaceValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.LifeInsuranceData.FaceValueAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.LifeInsuranceData.CashValueAmt`|| |
|`CollateralInfo.LifeInsuranceData.CashValueAmt.Amt`||Refers to the amount of cash paid out if the borrower cancels the policy.|
|`CollateralInfo.LifeInsuranceData.CashValueAmt.CurCode`|| |
|`CollateralInfo.LifeInsuranceData.CashValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralInfo.LifeInsuranceData.CashValueAmt.CurCode.CurCodeValue`|USD| |
|`CollateralInfo.LifeInsuranceData.InsuranceEffDt`||Applicable for collateral type "Life Insurance"|
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


<!-- type: tab-end -->
