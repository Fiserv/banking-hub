# Release Notes 
### 2023_Q3
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, DNA, Finxact
-->


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Transfer List</span> *API Explorer > Transfers > Transfer Service*


- Updated the API to return pending transfers, as well as, the future/recurring transfer that are currently returned for DDA, SDA and CDA accounts


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Update Account_DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Added the following aggregates in the API that provides information about financial literacy feature settings: 
	- AcctRec/DepositAcctInfo/FinancialLiteracy
	- AcctRec/DepositAcctInfo/FinancialLiteracy/IsRoundUp
	- AcctRec/DepositAcctInfo/FinancialLiteracy/IsFunding


<span style="font-size: 22px; ">Get Accounts_DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Added the following aggregates in the API that provides information about financial literacy feature settings: 
	- DepositAcctInfo/FinancialLiteracy
	- DepositAcctInfo/FinancialLiteracy/IsRoundUp
	- DepositAcctInfo/FinancialLiteracy/IsFunding


<span style="font-size: 22px; ">Add Transfer_Immediate</span> *API Explorer > Transfers > Transfer Service*


- Added the following new values or the XferInfo/TransferType path to support the feature of financial literacy:
	- Funding
	- RoundUp
	- Fee  


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span> **


Added the following API endpoints:
- Add Reinvestment *(API Explorer > Accounts > Reinvestment Service > Add Reinvestment)*
- Update Reinvestment Instruction *(API Explorer > Accounts > Reinvestment Service > Update Reinvestment Instruction)*
- Get Reinvestment Instruction *(API Explorer > Accounts > Reinvestment Service > Get Reinvestment Instruction)*
- Delete Reinvestment Instruction *(API Explorer > Accounts > Reinvestment Service > Delete Reinvestment Instruction)*


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Add Transfer</span> *API Explorer > Transfers > Transfer Service*


- Updated the API to allow a client to send a customized description (FromDesc) in the request for immediate transfers based on the client's configuration. A change to the Signature core would be required to send a customized description (FromDesc) for future dated or recurring transfers.        


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span> **


Added the following API endpoint:
- Add Account Hold *(API Explorer > Transactions > Account Hold Service)*


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Add Payment Notification</span> **


- Added the following new XPATHs to remove dependencies for a specific client so that the implementation can be used by all clients: 
	- PmtNtfctnInfo/AvailBalMethod
	- OvrdExceptionData/OverrideException/SubjectIdent

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span> **


Added the following API endpoints:
- Add Card *(Cards > Card Service > Add Card)*
- Update Card *(Cards > Card Service > Update Card)*
- Get Card *(Cards > Card Service > Get Card)*
<!-- type: tab-end -->
