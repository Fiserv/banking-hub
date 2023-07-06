# Release Notes 
### 2023_Q2
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA
-->


<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span>


- Added **Get Indirect Liability** API endpoint to retrieve indirect liability relationship to a loan account. *(API Explorer > Accounts > Loan Indirect Liablity Service)*


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

- Added a aggregate LoanAccctInfo/DishonoredFee to support adding dishonoredfFee through AcctAdd_Loan message<br>

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

<span style="font-size: 22px; ">General</span>


Added the following API endpoints:
- Add Beneficial Owner *(API Explorer > Accountholder > Beneficial Owner Service)*
- Update Beneficial Owner *(API Explorer > Accountholder > Beneficial Owner Service)*
- Get Beneficial Owner  *(API Explorer > Accountholder > Beneficial Owner Service)*
- Delete Beneficial Owner *(API Explorer > Accountholder > Beneficial Owner Service)* 
- Update Address - Acct *(API Explorer > Accountholder > Address Service)*
- Update Address - Party *(API Explorer > Accountholder > Address Service)*
- Get Address - Acct *(API Explorer > Accountholder > Address Service)*
- Get Address - Party *(API Explorer > Accountholder > Address Service)*
- Delete Address - Acct *(API Explorer > Accountholder > Address Service)*
- Delete Address - Party *(API Explorer > Accountholder > Address Service)*
- Add Collateral *(API Explorer > Accounts > Collateral Service)*
- Add Account - Deposits *(API Explorer > Accounts > Account Service)*
- Add Account - LOC *(API Explorer > Accounts > Account Service)*
- Get Branch *(API Explorer > Operations and Servicing > Branch Service)*
- Get Product List *(API Explorer > Operations and Servicing > Product Service)*
- Add Stop Item *(API Explorer > Transactions> Stop Item Service)*
- Cancel Stop Item *(API Explorer > Transactions> Stop Item Service)*
- Get Enumeration Table -  PartyAcctRel *(API Explorer > Operations and Servicing> Enumeration Table Service)*
- Get Product Specifications *(API Explorer > Operations and Servicing > Product Specification Service)*


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Account_CDA, Get Account_LOAN</span> *API Explorer > Accounts > Account Service*


- Added the following fields:
	- LastDepositDt
	- LastDepositAmt
	- LastIntPaidDt
	- LastIntPaidAmt


<span style="font-size: 22px; ">Get Party</span> *API Explorer > Accountholder > Party Service*


- Updated the API to return employment details in case of a person party and business establishment date in case of a business/organization party


<span style="font-size: 22px; ">Get Card</span> *API Explorer > Cards > Card Service*


- Updated the API to return card transaction limits for the requested card


<span style="font-size: 22px; ">Get Party Account Relationship - ByAcct</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Updated the API to return issued identification information for person or organization customers

<!-- type: tab-end -->
