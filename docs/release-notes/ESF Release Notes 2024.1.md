# Release Notes 
### 2024_Q1
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA, Finxact
-->


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Fixed the issue in the "CRARevenueCode" field *(LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode)* where the values were not passed to Premier when a request was made to create a loan on Premier Core for MidPenn through the REST API<br>
- Fixed the error in the "LoanAcctInfo/RevolvingLoanInd" field when using the "SingleAdvance" and "AdvanceLimit" values<br>
- Fixed the code issue that occurred while account creation when the value of the "MSACode" field is 39740<br>
- Fixed the issue of the date format in the "LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt" XPATH
- Fixed the error "Date Opened is Required Error" that occurred while adding a LOAN account in CERT without providing the "OpenDt" field. Now the "OpenDt" field (LoanAcctInfo/OpenDt) is added and marked as required field to add a LOAN account


<span style="font-size: 22px; ">Update Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Fixed the error in the "BillingMethod" field, which was not returning the updated billing method
- Fixed the update issue with the following fields:
	- RevolvingLoanInd
	- RevolvingLoanCode
	- ResponsibleBranch
	- CreditRisk 
	- NAICS
	- RateIndex
- Fixed the issue with overriding the value of the "ReportPurposeCode" field sent in the request. The code was not updating in the "GetLASForChange" field
- Fixed the issue with date updates in the "LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt" XPATH


<span style="font-size: 22px; ">Add Account-CDA, Get Account Details-CDA</span> *API Explorer > Accounts > Account Service*


- Fixed the issue of returning an incorrect value for the "ClientdefinedData/ExpDt" field in Get Account Details-CDA API, which is being passed in Add Account-CDA API

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>
Information is not available at the moment. Stay tuned for the updates.

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Get Account Details-DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Fixed the issue of the missing aggregate (IntDispData) and its respective multiple fields in the ESF response for DDA and SDA accounts while inquiring about the account


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Add Credit-DDA_Teller</span> *API Explorer > Transactions > Credit Service*


- Added the following XPATHs in case the transaction requires a Teller or Supervisor override:
	- OvrdAutoAckInd
	- OvrdExceptionData
	- OvrdExceptionData/OverrideException
	- OvrdExceptionData/OverrideException/SubjectRole


<span style="font-size: 22px; ">Add Debit-DDA_Teller</span> *API Explorer > Transactions > Debit Service*


- Added the following XPATHs in case the transaction requires a Teller or Supervisor override:
	- OvrdAutoAckInd
	- OvrdExceptionData
	- OvrdExceptionData/OverrideException
	- OvrdExceptionData/OverrideException/SubjectRole


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>
Information is not available at the moment. Stay tuned for the updates.

<!-- type: tab -->
> #### Note
> Support for Finxact v1.21.
> 
<p style="font-size: 24px; font-weight: bold;">What's New </p>
Information is not available at the moment. Stay tuned for the updates.

<!-- type: tab-end -->
