# Implementation Notes for Get Collateral
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`|| |
|`RecCtrlIn.MaxRecLimit`|| |
|`RecCtrlIn.Cursor`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CompanyPostAddr.AddrType`|Primary| |
|`CollateralSel`||If multiple selection criteria are found in the request, then all are passed through.<br>If the collateralId is sent in the request as criteria, then the precedence is given to CollateralId and as result GetCollateralForInquiry is called.|
|`CollateralSel.CollateralKeys`|| |
|`CollateralSel.CollateralKeys.CollateralId`|| |
|`CollateralSel.PartyKeys`|| |
|`CollateralSel.PartyKeys.PartyId`|| |
|`CollateralSel.AcctId`|| |
|`CollateralSel.AcctType`|LOAN<br>CLOC| |
|`CollateralSel.AddrId`||If a given AddrId is linked to more than one collaterals, then the list of all collaterals is returned by GetCollateralListForInquiry operation. (Under all circumstances it goes to the GetCollateralListForInquiry.)|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|| |
|`RecCtrlIn`|| |
|`RecCtrlIn.MaxRecLimit`|| |
|`RecCtrlIn.Cursor`|| |
|`RecCtrlOut`|| |
|`CollateralRec`|| |
|`CollateralRec.CollateralKeys`|| |
|`CollateralRec.CollateralKeys.CollateralId`|| |
|`CollateralRec.CollateralInfo`|| |
|`CollateralRec.CollateralInfo.CollateralType`|Basic<br>Vehicle<br>Property<br>OtherProperty<br>Other<br>LifeInsurance<br>DepositAccount<br>Commodity<br><br>|Default collateral type is  Basic, unless the institution is set to allow other collateral types. |
|`CollateralRec.CollateralInfo.CollateralCode`|| |
|`CollateralRec.CollateralInfo.CollateralDesc`|| |
|`CollateralRec.CollateralInfo.Name`|| |
|`CollateralRec.CollateralInfo.CollateralValueAmt`|| |
|`CollateralRec.CollateralInfo.CollateralValueAmt.Amt`|| |
|`CollateralRec.CollateralInfo.CollateralValueAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralValueAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.MaxAvailPledgeAmt`|| |
|`CollateralRec.CollateralInfo.MaxAvailPledgeAmt.Amt`|| |
|`CollateralRec.CollateralInfo.MaxAvailPledgeAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.MaxAvailPledgeAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.MaxAvailPledgeAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.AvailPledgeAmt`|| |
|`CollateralRec.CollateralInfo.AvailPledgeAmt.Amt`|| |
|`CollateralRec.CollateralInfo.AvailPledgeAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.AvailPledgeAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.PledgedAmt`|| |
|`CollateralRec.CollateralInfo.PledgedAmt.Amt`|| |
|`CollateralRec.CollateralInfo.PledgedAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.PledgedAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.PledgedAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.PledgeInd`|| |
|`CollateralRec.CollateralInfo.ImpairedInd`||Collateral is imparied if the IneligibleAmount > 0 or if CollateralCalcMethod is 3 or 4.|
|`CollateralRec.CollateralInfo.ImpairedAmt`|| |
|`CollateralRec.CollateralInfo.ImpairedAmt.Amt`|| |
|`CollateralRec.CollateralInfo.ImpairedAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.ImpairedAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.ImpairedAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.PropertyTypeCode`|| |
|`CollateralRec.CollateralInfo.CollateralDetailStatus`|| |
|`CollateralRec.CollateralInfo.CollateralDetailStatusDt`|| |
|`CollateralRec.CollateralInfo.CollateralLocation`|| |
|`CollateralRec.CollateralInfo.PostAddr`|| |
|`CollateralRec.CollateralInfo.PostAddr.AddressIdent`|| |
|`CollateralRec.CollateralInfo.PostAddr.AddrUse`|Home<br>Business<br>Personal|Address usage related to the collateral.<br>Relationships between a party and an address may have client-defined values and when appropriate address usage is not found, the value of the user-defined relationship code is be provided. |
|`CollateralRec.CollateralInfo.PostAddr.AddrFormatType`|Label| |
|`CollateralRec.CollateralInfo.PostAddr.Addr1`|| |
|`CollateralRec.CollateralInfo.PostAddr.Addr2`|| |
|`CollateralRec.CollateralInfo.PostAddr.City`|| |
|`CollateralRec.CollateralInfo.PostAddr.StateProv`|| |
|`CollateralRec.CollateralInfo.PostAddr.PostalCode`||If address is a non-US address, PostalCode provides the information for the ZIP, as well as the +4 code.<br>The format of ZIP code consists of five digits for the ZIP code, a hyphen, and four additional digits that determine a more specific location within a given ZIP code. The four additional digits are optional and when not present they will be displayed as 0000.  Examples: 32714-1234 or 32714-0000<br>Postal codes that are not ZIP+4 codes are simply a string of characters.|
|`CollateralRec.CollateralInfo.PostAddr.CountryCode`|| |
|`CollateralRec.CollateralInfo.PostAddr.CountryCode.CountryCodeSource`|SPCountryCode| |
|`CollateralRec.CollateralInfo.PostAddr.CountryCode.CountryCodeValue`||Country code values for postal address are client-defined in the core.|
|`CollateralRec.CollateralInfo.PostAddr.AddrType`|Primary<br>Secondary| |
|`CollateralRec.CollateralInfo.PostAddr.TimeFrame`|| |
|`CollateralRec.CollateralInfo.PostAddr.Retention`|| |
|`CollateralRec.CollateralInfo.PostAddr.CensusTract`||CensusTract returned four-digit number, plus two decimal digit assigned by the U.S. Census Bureau.<br><br>For example:  "9999.99"|
|`CollateralRec.CollateralInfo.PostAddr.CensusBlock`||Census Block returned normally the last two numbers of the primary street number, P.O. box number or rural route.|
|`CollateralRec.CollateralInfo.PostAddr.ForeignFlag`|| |
|`CollateralRec.CollateralInfo.PostAddr.HandlingCode`|| |
|`CollateralRec.CollateralInfo.PostAddr.HandlingCodeOption`|StatementsNoticesChecks<br>Statements<br>StatementsNotices<br>StatementsChecks<br>Notices<br>NoticesChecks<br>Checks<br>DoNotPrint<br>| |
|`CollateralRec.CollateralInfo.PostAddr.MSACode`||   |
|`CollateralRec.CollateralInfo.Desc`|| |
|`CollateralRec.CollateralInfo.CollateralValueData`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.UnitPrice`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.UnitPrice.UnitNum`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.ValueUpdateOpt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginPercent`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginAmt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginAmt.Amt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginInd`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginValueAmt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginValueAmt.Amt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginValueAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralValueData.MarginValueAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralRec.CollateralInfo.CollateralValueData.OriginalValueAmt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.OriginalValueAmt.Amt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.OriginalValueAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.OriginalValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralValueData.OriginalValueAmt.CurCode.CurCodeValue`|USD|    |
|`CollateralRec.CollateralInfo.CollateralValueData.PreviousValueAmt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.PreviousValueAmt.Amt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.PreviousValueAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.PreviousValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralValueData.PreviousValueAmt.CurCode.CurCodeValue`|USD|    |
|`CollateralRec.CollateralInfo.CollateralValueData.PurchasePriceAmt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.PurchasePriceAmt.Amt`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.PurchasePriceAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralValueData.PurchasePriceAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralValueData.PurchasePriceAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralRec.CollateralInfo.CollateralValueData.MarketPricingCode`||Applicable for collateral type as "Basic".|
|`CollateralRec.CollateralInfo.CollateralValueData.MarketMarginPercent`||Applicable for collateral type as "Basic".|
|`CollateralRec.CollateralInfo.SellerData.Contact.PostAddr.AddrUse`|Home<br>Personal<br>Business| |
|`CollateralRec.CollateralInfo.AppraisalData`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisedValueAmt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisedValueAmt.Amt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisedValueAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisedValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisedValueAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisedValueDt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.OriginalAppraisalAmt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.OriginalAppraisalAmt.Amt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.OriginalAppraisalAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.AppraisalData.OriginalAppraisalAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.AppraisalData.OriginalAppraisalAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralRec.CollateralInfo.AppraisalData.LastAppraisalDt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.NextAppraisalDt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalFeeAmt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalFeeAmt.Amt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalFeeAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalFeeAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalFeeAmt.CurCode.CurCodeValue`|USD|    |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisalIdent`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.Amt`||Applicable when additional appraisal details are added.|
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisedValueDt`||Applicable when additional appraisal details are added.|
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.Amt`||Applicable when additional appraisal details are added.|
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraisalFeeAmt.CurCode.CurCodeValue`|USD|    |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraiserIdent`||This field is used to populate company appraiser indentification.|
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraiserPostAddr.AddressIdent`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.AppraiserPostAddr.AddrType`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData.DataIdent`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData.Value`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.ClientDefinedData.ExpDt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.CommentData`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.CommentData.CommentIdent`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.CommentData.CommentDt`||   |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.CommentData.CommentDesc`||   |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.CommentData.PriorityInd`|true<br>false|    |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.CommentData.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.CommentData.ExpDt`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.RelationshipMgr.RelationshipMgrIdent`||   |
|`CollateralRec.CollateralInfo.AppraisalData.AppraisalHistory.ExpDt`||Date after which system automatically deletes additional information. <br>Post this date, system automatically deletes expired information during the update.|
|`CollateralRec.CollateralInfo.RepriceData`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.PriceHistoryIdent`||   |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.PriceAmt`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.PriceAmt.Amt`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.PriceAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.PriceAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.PriceAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.PriceDt`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.Desc`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.CommentData`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.CommentData.CommentDesc`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.CommentData.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralRec.CollateralInfo.RepriceData.PriceHistory.CommentData.ExpDt`|| |
|`CollateralRec.CollateralInfo.CalculationMethod`|CollateralValue<br>AppraisalValue<br>CollValueMinusImpaired<br>ApprValueMinusImpaired<br>Other| |
|`CollateralRec.CollateralInfo.CollateralLoanToValueData`|| |
|`CollateralRec.CollateralInfo.CollateralLoanToValueData.CombinedLTVRatio`|| |
|`CollateralRec.CollateralInfo.CollateralLoanToValueData.CombinedLTVExceptionRatio`|| |
|`CollateralRec.CollateralInfo.CollateralLoanToValueData.CombinedLTVMarginRatio`|| |
|`CollateralRec.CollateralInfo.CollateralLoanToValueData.CombinedLTVCurrentBalAmt`|| |
|`CollateralRec.CollateralInfo.CollateralLoanToValueData.CombinedLTVCurrentBalAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralLoanToValueData.CombinedLTVCurrentBalAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralLoanToValueData.CombinedLTVCurrentBalAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralRec.CollateralInfo.CollateralInsuranceData`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.InsuranceIdent`||  |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.InsuranceType`|Other<br>RealEstate|Note:<br>- Use "Other" for any type of insurance <br>- Use "RealEstate" for insurance of real estate specific property as collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CompanyIdent`||This field is used to populate company indentification.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CompanyPostAddr`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CompanyPostAddr.AddressIdent`||Company address identification.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CompanyPostAddr.AddrType`|Primary| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.AgentIdent`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.AgencyIdent`||Agency identification.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.AgencyPostAddr`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.AgencyPostAddr.AddressIdent`||Agency address identification.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.AgencyPostAddr.AddrType`|Primary| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyNum`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyAmt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyDeductAmt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.PolicyDeductAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoveragePremiumAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageDeductAmt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageDeductAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.MinimumLimitsAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.OtherCoverageDesc`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageTerm`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageTerm.Count`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageTerm.TermUnits`|Unknown|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.InsuranceEffDt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.InsuranceExpDt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.VSIPremiumAmt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.Amt`||Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.VSIPremiumAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.VSITerm`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.VSITerm.Count`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.VSITerm.TermUnits`|Unknown| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.LastInsurReviewDt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.NextInsurReviewDt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageData`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageData.CoverageType`|AllHullRisk<br>Collision<br>Comprehensive<br>Fire<br>Liability<br>Theft<br>Homeowners<br>Flood|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CoverageData.CoverageInd`|true<br>false|Applicable in case of additional insurance details. Insurance can be used to secure the different types of collateral.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.RelationshipMgr.RelationshipMgrIdent`||Responsibility code associated with the collateral insurance history record.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.ExpDt`||Date after which system automatically deletes additional information. <br>Post this date, system automatically deletes expired information during the update.|
|`CollateralRec.CollateralInfo.CollateralInsuranceData.ClientDefinedData`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.ClientDefinedData.DataIdent`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.ClientDefinedData.Value`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.ClientDefinedData.ExpDt`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CommentData`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CommentData.CommentIdent`||   |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CommentData.CommentDt`||    |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CommentData.CommentDesc`||   |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CommentData.PriorityInd`||    |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CommentData.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralRec.CollateralInfo.CollateralInsuranceData.CommentData.ExpDt`|| |
|`CollateralRec.CollateralInfo.LastReviewDt`|| |
|`CollateralRec.CollateralInfo.NextReviewDt`|| |
|`CollateralRec.CollateralInfo.LastUpdateDt`|| |
|`CollateralRec.CollateralInfo.CreateDt`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingDesc`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingDt`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.NextFilingDt`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.LastFilingDt`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.OrigFilingNum`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingNum`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingAmendmentType`|None<br>Assignment<br>Termination<br>Continuation<br>CollateralAmendment<br>PartyAmendment| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.FilingIdent`||FilingHistory instance start with number 1. If multiple instance exists, then add 1 to each new instance.|
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.FilingNum`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.FilingDt`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.FilingAmendmentType`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData.DataIdent`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData.Value`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.ClientDefinedData.ExpDt`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.CommentData`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.CommentData.CommentIdent`||   |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.CommentData.CommentDt`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.CommentData.CommentDesc`||   |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.CommentData.PriorityInd`||    |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.CommentData.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.CommentData.ExpDt`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.RelationshipMgr.RelationshipMgrIdent`||Responsibility code associated with the UCC filing history record.|
|`CollateralRec.CollateralInfo.CollateralFilingData.FilingHistory.ExpDt`||Date after which system automatically deletes additional information. <br>Post this date, system automatically deletes expired information during the update.|
|`CollateralRec.CollateralInfo.OEDCode`|| |
|`CollateralRec.CollateralInfo.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.RelationshipMgr.RelationshipMgrIdent`||Responsibility code value 0 indicates that an officer has not been assigned to the account.|
|`CollateralRec.CollateralInfo.RelationshipMgr.RelationshipRole`|Officer<br>SecondOfficer<br>|Valid values: Officer, SecondOfficer. Officer refers to Responsibility Code and SecondOfficer refers to Opened By Responsibility Code.|
|`CollateralRec.CollateralInfo.OriginatingBranch`|| |
|`CollateralRec.CollateralInfo.ResponsibleBranch`|| |
|`CollateralRec.CollateralInfo.TotalLienAmt`|| |
|`CollateralRec.CollateralInfo.TotalLienAmt.Amt`|| |
|`CollateralRec.CollateralInfo.TotalLienAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.TotalLienAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.TotalLienAmt.CurCode.CurCodeValue`|USD|   |
|`CollateralRec.CollateralInfo.LienHolderData`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienHolderIdent`||   |
|`CollateralRec.CollateralInfo.LienHolderData.LienHolderNameIdent`||This field refers to lien holder identification |
|`CollateralRec.CollateralInfo.LienHolderData.LienHolderPostAddr.AddressIdent`||This field refers to lien holder's address identification|
|`CollateralRec.CollateralInfo.LienHolderData.LienHolderPostAddr.AddrType`|Primary| |
|`CollateralRec.CollateralInfo.LienHolderData.LienHolderType`|None<br>Corporation<br>Partnership<br>LLC<br>SoleProprietorship<br>Individual<br>CorporateTrust<br>Association<br>LimitedPartnership<br>LimitedLiabilityPartnership<br>IndividualTrust<br>ProfessionalLLC<br>ProfessionalLimitedLiabilityPartnership<br>NonProfitCorporation<br>NonProfitAssociation<br>GovernmentEntity| |
|`CollateralRec.CollateralInfo.LienHolderData.LienSignersNum`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienAcct`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienAmt`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienAmt.Amt`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.LienHolderData.LienAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.LienHolderData.LienAcctDt`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienAcctMatDt`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienExpDt`||Date after which system automatically deletes additional information. <br>Pos this date, system automatically deletes expired information during the update.|
|`CollateralRec.CollateralInfo.LienHolderData.ClientDefinedData`|| |
|`CollateralRec.CollateralInfo.LienHolderData.ClientDefinedData.DataIdent`|| |
|`CollateralRec.CollateralInfo.LienHolderData.ClientDefinedData.Value`|| |
|`CollateralRec.CollateralInfo.LienHolderData.ClientDefinedData.ExpDt`|| |
|`CollateralRec.CollateralInfo.LienHolderData.CommentData`||Each lien holder instance can have multiple comments. They are related based on the LienHolderIdent.|
|`CollateralRec.CollateralInfo.LienHolderData.CommentData.CommentIdent`||   |
|`CollateralRec.CollateralInfo.LienHolderData.CommentData.CommentDt`||   |
|`CollateralRec.CollateralInfo.LienHolderData.CommentData.CommentDesc`||   |
|`CollateralRec.CollateralInfo.LienHolderData.CommentData.PriorityInd`||    |
|`CollateralRec.CollateralInfo.LienHolderData.CommentData.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.LienHolderData.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralRec.CollateralInfo.LienHolderData.CommentData.ExpDt`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienTransactionPurpose`|None<br>SubordinationOfRealEstate<br>NoticeOfSale<br>Default| |
|`CollateralRec.CollateralInfo.LienHolderData.PledgePriority`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienPosition`||    |
|`CollateralRec.CollateralInfo.LienHolderData.Book`|| |
|`CollateralRec.CollateralInfo.LienHolderData.Trustee`|| |
|`CollateralRec.CollateralInfo.LienHolderData.MortgageDt`|| |
|`CollateralRec.CollateralInfo.LienHolderData.Reel`|| |
|`CollateralRec.CollateralInfo.LienHolderData.Page`|| |
|`CollateralRec.CollateralInfo.LienHolderData.RecordingDt`|| |
|`CollateralRec.CollateralInfo.LienHolderData.RecordersEntry`|| |
|`CollateralRec.CollateralInfo.LienHolderData.Image`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienExclusionOption`|| |
|`CollateralRec.CollateralInfo.LienHolderData.LienDesc`|| |
|`CollateralRec.CollateralInfo.LienHolderData.FDICCertNum`|| |
|`CollateralRec.CollateralInfo.LienHolderData.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.LienHolderData.RelationshipMgr.RelationshipMgrIdent`||Responsibility code associated with the lien holder history record.|
|`CollateralRec.CollateralInfo.UnderwritingRatio`|| |
|`CollateralRec.CollateralInfo.Retention`|| |
|`CollateralRec.CollateralInfo.ReportGroupCode`|| |
|`CollateralRec.CollateralInfo.LoanReason`|| |
|`CollateralRec.CollateralInfo.ActivityType`|None<br>New<br>Change<br>ReadyForDelete<br>LienPositionChanged| |
|`CollateralRec.CollateralInfo.DateData`|| |
|`CollateralRec.CollateralInfo.DateData.DateType`|LastFileMaint| |
|`CollateralRec.CollateralInfo.DateData.DateValue`|| |
|`CollateralRec.CollateralInfo.ClientDefinedData`|| |
|`CollateralRec.CollateralInfo.ClientDefinedData.DataIdent`|| |
|`CollateralRec.CollateralInfo.ClientDefinedData.Value`|| |
|`CollateralRec.CollateralInfo.ClientDefinedData.ExpDt`|| |
|`CollateralRec.CollateralInfo.OccupancyType`||Client-defined code that indicates how the borrower uses the collateral.<br>Applicable for collateral type as "Basic".|
|`CollateralRec.CollateralInfo.CommentData`|| |
|`CollateralRec.CollateralInfo.CommentData.CommentIdent`||   |
|`CollateralRec.CollateralInfo.CommentData.CommentDt`||   |
|`CollateralRec.CollateralInfo.CommentData.CommentDesc`||   |
|`CollateralRec.CollateralInfo.CommentData.PriorityInd`||   |
|`CollateralRec.CollateralInfo.CommentData.RelationshipMgr`|| |
|`CollateralRec.CollateralInfo.CommentData.RelationshipMgr.RelationshipMgrIdent`|| |
|`CollateralRec.CollateralInfo.CommentData.ExpDt`|| |
|`CollateralRec.CollateralInfo.VehicleData`|| |
|`CollateralRec.CollateralInfo.VehicleData.VehicleIdentificationNum`|| |
|`CollateralRec.CollateralInfo.VehicleData.Make`|| |
|`CollateralRec.CollateralInfo.VehicleData.Model`|| |
|`CollateralRec.CollateralInfo.VehicleData.ModelYear`|| |
|`CollateralRec.CollateralInfo.VehicleData.TitleNum`||   |
|`CollateralRec.CollateralInfo.VehicleData.PurchasePriceAmt`|| |
|`CollateralRec.CollateralInfo.VehicleData.PurchasePriceAmt.Amt`|| |
|`CollateralRec.CollateralInfo.VehicleData.PurchasePriceAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.VehicleData.PurchasePriceAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.VehicleData.PurchasePriceAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.PropertyData`|| |
|`CollateralRec.CollateralInfo.PropertyData.MarketValueAmt`|| |
|`CollateralRec.CollateralInfo.PropertyData.MarketValueAmt.Amt`|| |
|`CollateralRec.CollateralInfo.PropertyData.MarketValueAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.PropertyData.MarketValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.PropertyData.MarketValueAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.PropertyData.MarketPricingCode`|| |
|`CollateralRec.CollateralInfo.PropertyData.MarketMarginPercent`|| |
|`CollateralRec.CollateralInfo.PropertyData.PurchasePriceAmt`|| |
|`CollateralRec.CollateralInfo.PropertyData.PurchasePriceAmt.Amt`|| |
|`CollateralRec.CollateralInfo.PropertyData.PurchasePriceAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.PropertyData.PurchasePriceAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.PropertyData.PurchasePriceAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.PropertyData.PropertyType`|MultiFamily<br>ManufactedHousing<br>Family1_4| |
|`CollateralRec.CollateralInfo.PropertyData.PrimaryResidenceInd`|| |
|`CollateralRec.CollateralInfo.PropertyData.BuildingStat`|None<br>Existing<br>Proposed<br>AlterationImprovement<br>SubstantiallyRehabilitated<br>UnderConstruction|   |
|`CollateralRec.CollateralInfo.PropertyData.NumberOfUnits`|use 04| |
|`CollateralRec.CollateralInfo.PropertyData.LegalData`|| |
|`CollateralRec.CollateralInfo.PropertyData.LegalData.LegalDesc`|| |
|`CollateralRec.CollateralInfo.PropertyData.LegalData.Parcel`|| |
|`CollateralRec.CollateralInfo.PropertyData.LegalData.Block`|| |
|`CollateralRec.CollateralInfo.PropertyData.LegalData.Lot`|| |
|`CollateralRec.CollateralInfo.PropertyData.LegalData.Subdivision`|| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData`|| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.IssuerIdent`||This field refers to deposit account issuer identification.|
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.IssuerPostalAddr`|| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.IssuerPostalAddr.AddressIdent`||This field refers to deposit issuer address identification.|
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.AcctId`|| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.AcctType`|SDA<br>CDA<br>DDA| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.HoldAmt`|| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.HoldAmt.Amt`|| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.HoldAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.HoldAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.HoldAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.VaryHoldAmtFlag`|| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.ExternalInd`|| |
|`CollateralRec.CollateralInfo.DepositAcctCollateralData.MaturityDt`||Applicable for collateral type as "Deposit Accounts".|
|`CollateralRec.CollateralInfo.CommodityData`|| |
|`CollateralRec.CollateralInfo.CommodityData.IssuerIdent`||This field refers to commodity issuer identification.|
|`CollateralRec.CollateralInfo.CommodityData.BrokerIdent`||This is field refers to commodity broker identification.|
|`CollateralRec.CollateralInfo.CommodityData.BrokerPostAddr`|| |
|`CollateralRec.CollateralInfo.CommodityData.BrokerPostAddr.AddressIdent`||This field refers to commodity broker address identification|
|`CollateralRec.CollateralInfo.CommodityData.BrokerPostAddr.AddrType`|Primary| |
|`CollateralRec.CollateralInfo.CommodityData.CommodityType`|CommonStock<br>PreferredStock<br>MutualFund<br>Other| |
|`CollateralRec.CollateralInfo.CommodityData.CUSIPNum`|| |
|`CollateralRec.CollateralInfo.CommodityData.Name`|| |
|`CollateralRec.CollateralInfo.CommodityData.Symbol`|| |
|`CollateralRec.CollateralInfo.CommodityData.CommodityAcctNum`|| |
|`CollateralRec.CollateralInfo.CommodityData.SharesNum`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.PolicyNum`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.CompanyIdent`||This field refers to life insurance company identification.|
|`CollateralRec.CollateralInfo.LifeInsuranceData.CompanyPostAddr`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.CompanyPostAddr.AddressIdent`||This field refers to life insurance company address identification|
|`CollateralRec.CollateralInfo.LifeInsuranceData.PurchaserIdent`||This field refers to life insurance purchaser identification|
|`CollateralRec.CollateralInfo.LifeInsuranceData.PurchaserPostAddr`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.PurchaserPostAddr.AddressIdent`||This field refers to life insurance purchaser address identification|
|`CollateralRec.CollateralInfo.LifeInsuranceData.PurchaserPostAddr.AddrUse`|Mailing|This field indicate when address corresponds to the mailing address of the policy owner.|
|`CollateralRec.CollateralInfo.LifeInsuranceData.PurchaserPostAddr.AddrType`|Primary| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.BeneficiaryData`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.BeneficiaryData.PartyKeys`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.BeneficiaryData.PartyKeys.PartyId`||This field refers to life insurance beneficiary identification.|
|`CollateralRec.CollateralInfo.LifeInsuranceData.BeneficiaryData.PostAddr.AddressIdent`||This field refers to life insurance beneficiary address identification.|
|`CollateralRec.CollateralInfo.LifeInsuranceData.BeneficiaryData.PostAddr.AddrType`|Primary| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.Desc`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.FaceValueAmt`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.FaceValueAmt.Amt`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.FaceValueAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.FaceValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.FaceValueAmt.CurCode.CurCodeValue`|Set to USD| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.CashValueAmt`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.CashValueAmt.Amt`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.CashValueAmt.CurCode`|| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.CashValueAmt.CurCode.CurCodeType`|ISO4217-Alpha| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.CashValueAmt.CurCode.CurCodeValue`|USD| |
|`CollateralRec.CollateralInfo.LifeInsuranceData.InsuranceEffDt`|| |
|`CollateralRec.CollateralStatus`|| |
|`CollateralRec.CollateralStatus.CollateralStatusCode`|Valid|Refers to internal EFX status.|
|`CollateralRec.CollateralStatus.EffDt`||    |
|`CollateralSel`||If multiple selection criteria are found in the request, then all are passed through.<br>If the collateralId is sent in the request as criteria, then the precedence is given to CollateralId and as result GetCollateralForInquiry is called.|
|`CollateralSel.CollateralKeys`|| |
|`CollateralSel.CollateralKeys.CollateralId`|| |
|`CollateralSel.PartyKeys`|| |
|`CollateralSel.PartyKeys.PartyId`|| |
|`CollateralSel.AcctId`|| |
|`CollateralSel.AcctType`|LOAN<br>CLOC| |
|`CollateralSel.AddrId`||If a given AddrId is linked to more than one collaterals, then the list of all collaterals is returned by GetCollateralListForInquiry operation. (Under all circumstances it goes to the GetCollateralListForInquiry.)|
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
