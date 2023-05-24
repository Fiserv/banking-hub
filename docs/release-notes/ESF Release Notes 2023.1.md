# Release Notes 
### 2023_Q1
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch
-->

<p style="font-size: 24px; font-weight: bold;">What's New </p>

**Get Indirect Liability  `POST /indirectLiability/secured`**


- Added new API in Indirect Liability service.


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

**Add Account `POST /accounts`**


Deleted below mapping fields as they were incorrectly mapped:
- PartyAcctRelInfo/AcctRef/AcctKeys/AcctIdent
- PartyAcctRelInfo/AcctRef/AcctKeys/AcctIdent/AcctIdentType
- PartyAcctRelInfo/AcctRef/AcctKeys/AcctIdent/AcctIdentValue

Updated the flow to include the case PORT/CreditLine are created using values sent in the request.

Added new call GetPortfolio to implement functionality when bank pass their sequenced number in Portfolio number field.



**Add Account `POST /accounts`**


Mapped new fields to introduce functionality to add rate adjuster, Credit Bureau, PaymentSplitOverride and Final Payment Amount to a loan account.
- LoanAcctInfo/RateChangeData/RateVarianceTwo
- LoanAcctInfo/CreditBureauAcctData/BureauAcctType
- LoanAcctInfo/CreditBureauAcctData/BureauStatus
- LoanAcctInfo/LoanPmtOption
- LoanAcctInfo/LateFee/FinalPmtLateFeeInd
- LoanAcctInfo/LateFee/SchedPmtLateFeeInd
- LoanAcctInfo/LateFee/IntPmtLateFeeInd


**Add Account `POST /accounts`**


- Mapped new aggregate LoanAccctInfo/DishonoredFee to support adding Dishonored Fee through AcctAdd_Loan message.


**Add Account `POST /accounts`**


Mapped new fields to add Deferral Addenda record:
- LoanAcctInfo/DeferredFee/DeferredLoanRate
- LoanAcctInfo/DeferredFee/DeferredFirstPmtDt
- LoanAcctInfo/DeferredFee/DeferredPmtFreq


**Add Account `POST /accounts`**


Mapped new fields to add record for AutoDraftAmount and AutoPymtDraftDate fields through AcctAdd_Loan message:
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmtOption
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/Amt
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode/CurCodeType
- LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode/CurCodeValue
- LoanAcctInfo/LoanBilling/NextAutoPmtDraftDt


**Add Account `POST /accounts`**


- Mapped LoanAcctInfo/StatedAPR field to add record for Stated APR field through AcctAdd_Loan message  


**Add Account `POST /accounts`**


- Mapped new fieldLoanAcctInfo/OriginationFee/AdvanceOption to support advance option through AcctAdd_Loan message. 


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
