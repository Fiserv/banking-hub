# Implementation Notes for Escrow Add
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
|`OvrdExceptionData`|||
|`EscrowInfo`|||
|`EscrowInfo.AcctKeys`|||
|`EscrowInfo.AcctKeys.AcctId`|||
|`EscrowInfo.AcctKeys.AcctType`|LOAN||
|`EscrowInfo.EscrowType`||This field is used to identify one of the 99 escrow type codes defined in LAS escrow type description specifications.|
|`EscrowInfo.Desc`|||
|`EscrowInfo.EscrowCategory`|Taxes<br>Insurance<br>Other|*Required<br>This field refers to the type of escrow record to be added (Taxes, Insurance and Other).<br>It is mandatory to provide this field.|
|`EscrowInfo.IncEscrowAnalysisInd`|true<br>false||
|`EscrowInfo.CushionPmtNum`|||
|`EscrowInfo.EscrowCoverageAmt`|||
|`EscrowInfo.EscrowCoverageAmt.Amt`||This field refers to the amount insured and applicable only when the escrow category is set to 'Insurance'.|
|`EscrowInfo.EscrowCoverageAmt.CurCode`|||
|`EscrowInfo.EscrowCoverageAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`EscrowInfo.EscrowCoverageAmt.CurCode.CurCodeValue`|USD||
|`EscrowInfo.EscrowExpDt`||This field is applicable only when the escrow category is set to 'Insurance'.|
|`EscrowInfo.ExpDt`|||
|`EscrowInfo.DisburseData`|||
|`EscrowInfo.DisburseData.DisburseTo`|||
|`EscrowInfo.DisburseData.AgentId`||This field is applicable only when the escrow category is set to 'Insurance'.|
|`EscrowInfo.DisburseData.DisburseRefNum`|||
|`EscrowInfo.DisburseData.DisburseMethod`|N<br>Y<br>R<br>P<br>S<br>F|*Required<br>This field is required by Service Provider.<br>Values supported by Service Provider are:<br>N -No Auto Disbursements (indicates that escrow disbursement transactions are not generated automatically)<br>Y-Auto Disbursements (indicates that escrow disbursement transactions are generated automatically)<br>R-Automatic When Released (indicates review and release)<br>P-Pending Disbursements (indicates pending disbursement, which means additional account information with option [R], and disbursement will be generated in the next update. The [P] Pending Disbursements value is automatically reset to [R] once the disbursement is generated)<br>S=Auto Disbursements Until Note Is Paid Off (indicates that escrow disbursement transactions are automatically generated until the note is paid off)<br>F- Disbursement This Update (indicates a force payout, which means, disbursement will be generated in the next update)|
|`EscrowInfo.DisburseData.DisburseAmt`|||
|`EscrowInfo.DisburseData.DisburseAmt.Amt`|||
|`EscrowInfo.DisburseData.DisburseAmt.CurCode`|||
|`EscrowInfo.DisburseData.DisburseAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`EscrowInfo.DisburseData.DisburseAmt.CurCode.CurCodeValue`|USD||
|`EscrowInfo.DisburseData.TimeFrame.RecurRule`||*Conditionally Required<br>Either RecurRule or DisburseSched is required to be provided.|
|`EscrowInfo.DisburseData.TimeFrame.RecurRule.RecurType`|None<br>Monthly<br>BiMonthly<br>SemiMonthly<br>Weekly<br>BiWeekly<br>Yearly<br>Quarterly<br>SemiYearly<br>|This field refers to the frequency of payout.|
|`EscrowInfo.DisburseData.TimeFrame.RecurRule.RecurInterval`|1 through 9||
|`EscrowInfo.DisburseData.NextDisburseDt`||This field refers to the current payout date for service provider. Either NextDisburseDt or DisburseSched is required to be provided.|
|`EscrowInfo.DisburseData.DisburseSched`||This aggregate is specific to service provider and refers to escrow disbursement frequency as defined by the table.<br>DisburseSched/RecurType, Next Disburse Amount and NextDisburseDt are required to be provided. If DisburseSched is provided, it will override RecurType, Next Disburse Amount and NextDisburseDt provided in DisburseData aggregate.|
|`EscrowInfo.DisburseData.DisburseSched.DisburseSchedIdent`|1 through 4|Service provider supports up to 4 disbursement schedules.|
|`EscrowInfo.DisburseData.DisburseSched.DisburseDt`|||
|`EscrowInfo.DisburseData.DisburseSched.DisburseAmt`|||
|`EscrowInfo.DisburseData.DisburseSched.DisburseAmt.Amt`|||
|`EscrowInfo.DisburseData.DisburseSched.DisburseAmt.CurCode`|||
|`EscrowInfo.DisburseData.DisburseSched.DisburseAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`EscrowInfo.DisburseData.DisburseSched.DisburseAmt.CurCode.CurCodeValue`|USD||
|`EscrowInfo.DisburseData.DisburseSched.DisburseStatus`|Completed<br>Pending||
|`EscrowInfo.DisburseData.DateUpdateOption`|NoUpdate<br>AtDisburse<br>Automatic<br>Forecast|*Required<br>This field is required by service provider.|
|`EscrowInfo.DisburseData.DisburseAmtUpdateOption`|NoUpdate<br>Automatic<br>AtDisburse|*Required<br>This field is required by service provider.|
|`EscrowInfo.EscrowInsuranceData`|||
|`EscrowInfo.EscrowInsuranceData.Term`||Applicable only when the escrow category is set to 'Insurance'.|
|`EscrowInfo.EscrowInsuranceData.Term.Count`|||
|`EscrowInfo.EscrowInsuranceData.Term.TermUnits`|Month<br>Years||
|`EscrowInfo.EscrowInsuranceData.PremiumPct`||Applicable only when the escrow category is set to 'Insurance'.|
|`EscrowInfo.PropertyValueAmt`|||
|`EscrowInfo.PropertyValueAmt.Amt`||This field refers to the stated value of property and applicable only when the escrow category is set to 'Taxes'.|
|`EscrowInfo.PropertyValueAmt.CurCode`|||
|`EscrowInfo.PropertyValueAmt.CurCode.CurCodeType`|ISO4217-Alpha||
|`EscrowInfo.PropertyValueAmt.CurCode.CurCodeValue`|USD||
|`EscrowInfo.EscrowTaxData`||Applicable only when the escrow category is set to 'Taxes'.|
|`EscrowInfo.EscrowTaxData.TownshipCode`|||
|`EscrowInfo.EscrowTaxData.County`|||
|`EscrowInfo.EscrowTaxData.StateProv`|||
|`EscrowInfo.EscrowTaxData.TaxServiceData`||Applicable only when the escrow category is set to 'Taxes'.|
|`EscrowInfo.EscrowTaxData.TaxServiceData.ServiceContract`|| This field is used for automatic reporting of additional tax escrow information on magnetic tape.|
|`EscrowInfo.EscrowTaxData.TaxServiceData.ServiceContractSuffix`|| This field is used for automatic reporting of additional tax escrow information on magnetic tape.|
|`EscrowInfo.RelationshipMgr`||This is an optional field and if not provided, relationship manager assigned to the loan account will be responsible for an escrow.|
|`EscrowInfo.RelationshipMgr.RelationshipMgrIdent`|||
|`EscrowInfo.RelationshipMgr.RelationshipRole`|Officer||
|`EscrowInfo.ReportGroupCode`|||
|`EscrowInfo.PostAddr`|||
|`EscrowInfo.PostAddr.AddressIdent`|||
|`EscrowInfo.PostAddr.AddrType`|Primary||
|`EscrowInfo.ReviewData`|||
|`EscrowInfo.ReviewData.ReviewFrequency`|||
|`EscrowInfo.ReviewData.ReviewFrequency.RecurType`|None<br>Monthly<br>Quarterly<br>SemiYearly<br>Yearly|This field indicates the frequency with which an escrow record will be reviewed and printed on the escrow review report.|
|`EscrowInfo.ReviewData.ReviewFrequency.RecurInterval`|1||
|`EscrowInfo.ReviewData.NextReviewDt`|||
|`EscrowInfo.ClientDefinedData`|||
|`EscrowInfo.ClientDefinedData.DataIdent`||This field refers to the client-defined field code as defined by service provider.|
|`EscrowInfo.ClientDefinedData.Value`|||
|`EscrowInfo.ClientDefinedData.ExpDt`|||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`EscrowStatusRec`|||
|`EscrowStatusRec.EscrowKeys`|||
|`EscrowStatusRec.EscrowKeys.AcctKeys`|||
|`EscrowStatusRec.EscrowKeys.AcctKeys.AcctId`|||
|`EscrowStatusRec.EscrowKeys.AcctKeys.AcctType`|LOAN||
|`EscrowStatusRec.EscrowKeys.EscrowCategory`|Taxes<br>Insurance<br>Other||
|`EscrowStatusRec.EscrowKeys.EscrowIdent`|||
|`EscrowStatusRec.EscrowStatus`|||
|`EscrowStatusRec.EscrowStatus.EscrowStatusCode`|||
|`EscrowStatusRec.EscrowStatus.EffDt`|||
<!-- type: tab-end -->
