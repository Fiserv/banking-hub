# Release Notes 
### 2024_Q2
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA, Finxact
-->


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Accounts-LOAN</span> *API Explorer > Accounts > Account Service*


- Response message now includes the effective date of the home mortgages<br>
**Impacted Field:**
	- AcctRec/LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt<br>

- Estimated revenue code for the community reinvestment act for small business or small farm is now available as single-digit numeric code<br>
**Impacted Field:**
	- AcctRec/LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode


<span style="font-size: 22px; ">Get Accounts-LOAN, Get Account-LOAN_INET</span> *API Explorer > Accounts > Account Service*


- Accrual method field now uses the original interest method instead of the current interest method. This accrues the interest correctly<br>
**Impacted Field:**
	- AcctRec/LoanAcctInfo/IntRateData/AccrualMethod


<span style="font-size: 22px; ">Add Escrow</span> *API Explorer > Accounts > Escrow Service*


- Added new "DataLength" field under "ClientDefinedData" aggregate in the request message, to improve the API workflow<br>
**Impacted Field:**
	- EscrowInfo/ClientDefinedData/DataLength


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*


- We have fixed an issue where loan accounts were successfully created when the value of the RateChangeRecurType field was "Quarterly," which was not specified in the enum values. We added the "Quarterly" value as an enum value<br>
**Impacted Field:**
	- LoanAcctInfo/RateChangeData/RateChangeRecurType


<span style="font-size: 22px; ">Add Escrow</span> *API Explorer > Accounts > Escrow Service*


- Previously, the escrow expiry date was sent in an incorrect format as "MMddyyyy.juliandate". We updated the date format as "MM/DD/YYYY"<br>
**Impacted Field:**
	- EscrowInfo/EscrowExpDt


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Get Party Account Relationship</span> *API Explorer > Accountholder > Party Account Relationship Service*


- We resolved the issue where the correct number of records were not returned in the response message when filtered by the internet banking party identifier

- The fields OwnerInd, PrimaryOwnerInd and TaxReportingOwnerInd were not rendering as expected in the response. To resolve this issue, we added correct values for owner indicator, primary owner indicator and tax reporting owner indicator<br>
**Impacted Fields:**
	- PartyAcctRelRec/PartyAcctRelInfo/OwnerInd
	- PartyAcctRelRec/PartyAcctRelInfo/PrimaryOwnerInd
	- PartyAcctRelRec/PartyAcctRelInfo/TaxReportingOwnerInd

<span style="font-size: 22px; ">Get Party</span> *API Explorer > Accountholder > Party Service*


- Previously, the response message failed to retrieve multiple issued identifications (IssuedIdent) associated with the party record. We resolved this issue so that users can retrieve all (repeating IssuedIdents) successfully<br>
**Impacted Fields:**
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentType
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentValue
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssueDt
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent/ExpDt
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent/VerificationDetailText
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeSource
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeValue
	- PartyRec/PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/StateProv
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentType
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentValue
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssueDt
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent/ExpDt
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent/VerificationDetailText
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeSource
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeValue
	- PartyRec/OrgPartyInfo/OrgData/IssuedIdent/GovIssuedIdent/StateProv


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Credit-Remote Deposit</span> *API Explorer > Transactions > Credit Service*


- We resolved the issue to validate the client defined XREF rule "SCO_ClientTimeZone_Rule" while setting the AMPMCode tag in the request message


<span style="font-size: 22px; ">Add Party</span> *API Explorer > Accountholder > Party Service*


- We resolved the null pointer exception error in the response when the value of the "CountryCodeValue" field was null in the request. Now, even if the value is null, the API adds the party record successfully without any error<br>
**Impacted Fields:**
	- PersonPartyInfo/PersonData/Contact/PostAddr/CountryCode/CountryCodeValue
	- OrgPartyInfo/OrgData/Contact/PostAddr/CountryCode/CountryCodeValue


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Add Credit-DDA_Teller</span> *API Explorer > Transactions > Credit Service*


- Added the following new fields so that the teller or supervisor can override transactions as when required:
	- OvrdExceptionData
	- OvrdExceptionData/OverrideException
	- OvrdExceptionData/OverrideException/SubjectRole


<span style="font-size: 22px; ">Add Debit-DDA_Teller</span> *API Explorer > Transactions > Debit Service*


- Added the following new fields so that the teller or supervisor can override transactions as when required:
	- OvrdExceptionData
	- OvrdExceptionData/OverrideException
	- OvrdExceptionData/OverrideException/SubjectRole


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Update Party</span> *API Explorer > Accountholder > Party Service*


- We resolved an issue that occurred while updating the marital status to "NotApplicable"<br>
**Imacted Field:**
	- PersonPartyInfo/MaritalStat

- We resolved an issue that occurred while updating the gender status to "Unknown"<br>
**Impacted Field:**
	- PersonPartyInfo/Gender

- We resolved an issue that occurred while updating the race status to "Other", "NativeAmerican" or "NativeAlaskan"<br>
**Impacted Field:**
	- PersonPartyInfo/Race


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>
Information is not available at the moment. Stay tuned for the updates.

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>
Information is not available at the moment. Stay tuned for the updates.
<!-- type: tab-end -->
