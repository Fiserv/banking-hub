# Release Notes 
### 2023_Q1
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch
-->


<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span>


- Added **Get Indirect Liability** API endpoint to retrieve indirect liability relationship to a loan account. *(API Explorer > Accounts > Loan Indirect Liability Service)*


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Add Account_LOAN</span> *API Explorer > Accounts > Account Service*

- Added the following fields in the LoanAcctInfo aggregate to add rate adjuster, credit bureau, payment split override, final payment amount and deferral addenda record:
	- RateChangeData/RateVarianceTwo
	- CreditBureauAcctData/BureauAcctType
	- CreditBureauAcctData/BureauStatus
	- LoanPmtOption
	- LateFee/FinalPmtLateFeeInd
	- LateFee/SchedPmtLateFeeInd
	- LateFee/IntPmtLateFeeInd
	- DeferredFee/DeferredLoanRate
	- DeferredFee/DeferredFirstPmtDt
	- DeferredFee/DeferredPmtFreq<br>

- Added the following fields in the LoanAcctInfo aggregate to add records for AutoDraftAmount and AutoPymtDraftDate fields:
	- LoanBilling/AutoPmtDraftAmtOption
	- LoanBilling/AutoPmtDraftAmt
	- LoanBilling/AutoPmtDraftAmt/Amt
	- LoanBilling/AutoPmtDraftAmt/CurCode
	- LoanBilling/AutoPmtDraftAmt/CurCode/CurCodeType
	- LoanBilling/AutoPmtDraftAmt/CurCode/CurCodeValue
	- LoanBilling/NextAutoPmtDraftDt<br>

- Added an aggregate LoanAccctInfo/DishonoredFee to support adding dishonoredfFee through AcctAdd_Loan message<br>

- Added LoanAcctInfo/StatedAPR and LoanAcctInfo/OriginationFee/AdvanceOption fields to add record for stated APR field and to support advance option through AcctAdd_Loan message, respectively<br>

- Updated the flow to include the case PORT/CreditLine are created using values sent in the request<br>

- Added new call GetPortfolio to implement functionality when bank pass their sequenced number in Portfolio number field

<span style="font-size: 22px; ">Get Account_LOAN</span> *API Explorer > Accounts > Account Service*

- Updated to return the customer account type code that will allow an account to be identified as either a consumer or a corporate account when a customer has both under the same profile

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

Information is not available at the moment. Stay tuned for the updates.


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

Information is not available at the moment. Stay tuned for the updates.

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

Information is not available at the moment. Stay tuned for the updates.

<!-- type: tab-end -->
