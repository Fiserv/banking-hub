# Release Notes 
### 2023_Q3
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA, Finxact
-->

<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Transfer List</span> *API Explorer > Transfers > Transfer Service*


- Updated the API to return pending transfers and the future/recurring transfers that are currently returned for DDA, SDA and CDA accounts


<span style="font-size: 22px; ">Get Party Account Relationship-ByAcct</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the following new XPATHs for multi system environment feature:
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent/SvcNbr
	- PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctKeys/SvcIdent
	- PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctKeys/SvcIdent/SvcNbr


<span style="font-size: 22px; ">Get Party Account Relationship-ByParty</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Updated the allowed enum values to "Person" and "Business" for the PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/Email/EmailType XPATH


<span style="font-size: 22px; ">Get Account Details-LOAN</span> *API Explorer > Accounts > Account Service*


- Added the LoanAcctInfo/DirectIndirectCode field <br>

- AvailCredit Balance type (AcctBal) is now being retrieved from LASCalculations/ CurrAvailCredit. Prior to this change this balance type was  retrieved from LASCalculations/CurrAvailCreditAdvance


<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Added the following new XPATHs:
	- LoanAcctInfo/DeferredFeesAmt/Amt
	- LoanAcctInfo/DeferredFee/EffDt
	- LoanAcctInfo/DeferredFee/EarningMethod
	- LoanAcctInfo/DeferredFee/Term/Count
	- LoanAcctInfo/DeferredFee/DeferredLoanBalance
	- LoanAcctInfo/DeferredFee/DeferredLoanRate
	- LoanAcctInfo/DeferredFee/DeferredFirstPmtDt
	- LoanAcctInfo/DeferredFee/DeferredPmtFreq
	- LoanAcctInfo/DeferredFee/DeferredFeeData/Amt
	- LoanAcctInfo/DeferredFee/DeferredFeeData/PriorEarningAmt
	- LoanAcctInfo/DeferredFee/DeferredFeeData/Rate
	- LoanAcctInfo/DeferredFee/FeeCostData/Amt
	- LoanAcctInfo/DeferredFee/FeeCostData/PriorCostAmt
	- LoanAcctInfo/DeferredFee/FeeCostData/Rate
	- LoanAcctInfo/LoanBilling/AutoPmtDraftAmtOption
	- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt
	- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/Amt
	- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode
	- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode/CurCodeType
	- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode/CurCodeValue
	- LoanAcctInfo/LoanBilling/NextAutoPmtDraftDt
	- LoanAcctInfo/DishonoredFee
	- LoanAcctInfo/DishonoredFee/FeeIdent
	- LoanAcctInfo/DishonoredFee/FeeCalcOption
	- LoanAcctInfo/DishonoredFee/CurAmt
	- LoanAcctInfo/DishonoredFee/CurAmt/Amt
	- LoanAcctInfo/DishonoredFee/CurAmt/CurCode
	- LoanAcctInfo/DishonoredFee/CurAmt/CurCode/CurCodeType
	- LoanAcctInfo/DishonoredFee/CurAmt/CurCode/CurCodeValue
	- LoanAcctInfo/DishonoredFee/BalPercent
	- LoanAcctInfo/DishonoredFee/MinCurAmt
	- LoanAcctInfo/DishonoredFee/MinCurAmt/Amt
	- LoanAcctInfo/DishonoredFee/MinCurAmt/CurCode
	- LoanAcctInfo/DishonoredFee/MinCurAmt/CurCode/CurCodeType
	- LoanAcctInfo/DishonoredFee/MinCurAmt/CurCode/CurCodeValue
	- LoanAcctInfo/DishonoredFee/MaxCurAmt
	- LoanAcctInfo/DishonoredFee/MaxCurAmt/Amt
	- LoanAcctInfo/DishonoredFee/MaxCurAmt/CurCode
	- LoanAcctInfo/DishonoredFee/MaxCurAmt/CurCode/CurCodeType
	- LoanAcctInfo/DishonoredFee/MaxCurAmt/CurCode/CurCodeValue
	- LoanAcctInfo/DishonoredFee/FeeTier
	- LoanAcctInfo/DishonoredFee/FeeTier/LowCurAmt
	- LoanAcctInfo/DishonoredFee/FeeTier/LowCurAmt/Amt
	- LoanAcctInfo/DishonoredFee/FeeTier/LowCurAmt/CurCode
	- LoanAcctInfo/DishonoredFee/FeeTier/LowCurAmt/CurCode/CurCodeType
	- LoanAcctInfo/DishonoredFee/FeeTier/LowCurAmt/CurCode/CurCodeValue
	- LoanAcctInfo/DishonoredFee/FeeTier/HighCurAmt
	- LoanAcctInfo/DishonoredFee/FeeTier/HighCurAmt/Amt
	- LoanAcctInfo/DishonoredFee/FeeTier/HighCurAmt/CurCode
	- LoanAcctInfo/DishonoredFee/FeeTier/HighCurAmt/CurCode/CurCodeType
	- LoanAcctInfo/DishonoredFee/FeeTier/HighCurAmt/CurCode/CurCodeValue
	- LoanAcctInfo/DishonoredFee/FeeTier/CurAmt
	- LoanAcctInfo/DishonoredFee/FeeTier/CurAmt/Amt
	- LoanAcctInfo/DishonoredFee/FeeTier/CurAmt/CurCode
	- LoanAcctInfo/DishonoredFee/FeeTier/CurAmt/CurCode/CurCodeType
	- LoanAcctInfo/DishonoredFee/FeeTier/CurAmt/CurCode/CurCodeValue
	- LoanAcctInfo/DishonoredFee/FeeTier/BalPercent
 
- Updated the allowed enum values to "16" and "45" for the LoanAcctInfo/RateChangeData/RoundingOption XPATH
 
- Updated the allowed enum value to "FactorPlusVariance" for the LoanAcctInfo/RateChangeData/VarianceFactorType XPATH 
   
- Updated the allowed enum values to the following values for the LoanAcctInfo/RateChangeData/RoundingFactor XPATH:
   	- 0.5000
   	- 0.2000
   	- 0.0500
   	- 0.0400
   	- 0.0313
   	- 0.0250
   	- 0.0200
   	- 0.0156
   	- 0.0125
   	- 0.0010



<span style="font-size: 22px; ">Update Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Added the following new XPATHs:
	- LoanAcctInfo/CreditBureauAcctData
	- LoanAcctInfo/CreditBureauAcctData/CreditBureauPartyData
	- LoanAcctInfo/CreditBureauAcctData/CreditBureauPartyData/PartyKeys
	- LoanAcctInfo/CreditBureauAcctData/CreditBureauPartyData/PartyKeys/PartyId
	- LoanAcctInfo/CreditBureauAcctData/CreditBureauPartyData/ECOACode


<span style="font-size: 22px; ">Get Account Transaction History-LAS and AMS</span> *API Explorer > Transactions > Account Transaction Service*


- Added the following new XPATHs in response for memo posted transactions, which are applicable for client applications that the financial institution selected:
	- AcctTrnRec/AcctTrnInfo/TrnCode
	- AcctTrnRec/AcctTrnInfo/ExternalTrnCode


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Update Account-DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Added the following aggregates in the API that provides information about financial literacy feature settings: 
	- AcctRec/DepositAcctInfo/FinancialLiteracy
	- AcctRec/DepositAcctInfo/FinancialLiteracy/IsRoundUp
	- AcctRec/DepositAcctInfo/FinancialLiteracy/IsFunding


<span style="font-size: 22px; ">Get Accounts-DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Added the following aggregates in the API that provides information about financial literacy feature settings: 
	- DepositAcctInfo/FinancialLiteracy
	- DepositAcctInfo/FinancialLiteracy/IsRoundUp
	- DepositAcctInfo/FinancialLiteracy/IsFunding


<span style="font-size: 22px; ">Add Transfer-Immediate</span> *API Explorer > Transfers > Transfer Service*


- Added the following new values or the XferInfo/TransferType path to support the feature of financial literacy:
	- Funding
	- RoundUp
	- Fee  


<span style="font-size: 22px; ">Get Party Account Relationship-ByAcct</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the followed new XPATHs for multi system environment:
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent/SvcNbr


<span style="font-size: 22px; ">Add Party</span> *API Explorer > Accountholder > Party Service*


- Added the following new XPATHs in the request:
	- PersonPartyInfo/LastContactDt
	- OrgPartyInfo/LastContactDt

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span>

Added the following API endpoints:
- Add Reinvestment *(API Explorer > Accounts > Reinvestment Service)*
- Update Reinvestment Instruction *(API Explorer > Accounts > Reinvestment Service)*
- Get Reinvestment Instruction *(API Explorer > Accounts > Reinvestment Service)*
- Delete Reinvestment Instruction *(API Explorer > Accounts > Reinvestment Service)*

<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Add Transfer</span> *API Explorer > Transfers > Transfer Service*


- Updated the API to allow a client to send a customized description (FromDesc) in the request for immediate transfers based on the client's configuration. A change to the Signature is required to send a customized description (FromDesc) for future dated or recurring transfers.        


<span style="font-size: 22px; ">Get Party Account Relationship-ByAcct</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the following new XPATHs for multi system environment:
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent/SvcNbr
	- PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctKeys/SvcIdent
	- PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctKeys/SvcIdent/SvcNbr


<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Added the following new XPATHs:
	- LoanAcctInfo/SBAData/FeeCalcOption
	- LoanAcctInfo/ColsonReportInd


<span style="font-size: 22px; ">Get Account Details-LOAN</span> *API Explorer > Accounts > Account Service*


- Added the new AcctRec/LoanAcctInfo/CollateralCode XPATH


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Party Account Relationship-ByAcct</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the following new XPATHs for multi system environment:
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent/SvcNbr


<span style="font-size: 22px; ">Get Card Account Relationship</span> *API Explorer > Debit Cards > Card Account Relationship Service*


- Added the new CardAcctRelRec/CardAcctRelInfo/OtherAcctRel XPATH in the response


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New</p>

Information is not available at the moment. Stay tuned for the updates.

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New</p>

<span style="font-size: 22px; ">General</span>

Added the following API endpoints:
- Add Card *(API Explorer > Debit Cards > Card Token Service)*
- Update Card *(API Explorer > Debit Cards > Card Token Service)*
- Get Card *(API Explorer > Debit Cards > Card Token Service)*

<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Party Account Relationship-ByAcct</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the following new XPATHs for multi system environment:
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent/SvcNbr

<!-- type: tab-end -->
