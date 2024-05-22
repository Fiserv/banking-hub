# Release Notes 
### 2024_Q2
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch
-->


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Account Details-LOAN</span> *API Explorer > Accounts > Account Service*


- Response message now includes the effective date of the home mortgages<br>
**Impacted Field:**
  - AcctRec/LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt
- Estimated revenue code for the community reinvestment act for small business or small farm is now available as single-digit numeric code<br>
**Impacted Field:**
  - AcctRec/LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode

<span style="font-size: 22px; ">Get Account Details-LOAN, Get Account Details-LOAN_INET</span> *API Explorer > Accounts > Account Service*


- Accrual method field now uses the original interest method instead of the current interest method. This accrues the interest correctly<br>
**Impacted Field:**
  - AcctRec/LoanAcctInfo/IntRateData/AccrualMethod


<span style="font-size: 22px; ">Add Escrow</span> *API Explorer > Accounts > Escrow Service*


- Added a new field "DataLength" under the "ClientDefinedData" aggregate in the request message, to improve the API workflow<br>
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

<span style="font-size: 22px; ">Add ePreferences</span> *API Explorer > Accounts > Document Preferences Service*

- We resolved an issue in the “DocGroupName” field where the value was not set while creating ePreference record in a request during creation of ePreference record for LOAN or SDA account<br>
**Impacted Field:**
  - ePreferenceInfo/DocGroupName


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Fixed </p>

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

<span style="font-size: 22px; ">Add Credit</span> *API Explorer > Transactions > Credit Service*


- We resolved the issue to validate the client defined XREF rule "SCO_ClientTimeZone_Rule" while setting the AMPMCode tag in the request message

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Add Credit-DDA_Teller</span> *API Explorer > Transactions > Credit Service*


- Added the following new fields so that a teller or supervisor can override the transaction when required:
	- OvrdExceptionData
	- OvrdExceptionData/OverrideException
	- OvrdExceptionData/OverrideException/SubjectRole


<span style="font-size: 22px; ">Add Debit-DDA_Teller</span> *API Explorer > Transactions > Debit Service*


- Added the following new fields so that a teller or supervisor can override the transaction when required:
	- OvrdExceptionData
	- OvrdExceptionData/OverrideException
	- OvrdExceptionData/OverrideException/SubjectRole


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Update Party</span> *API Explorer > Accountholder > Party Service*


- We resolved an issue that occurred while updating the marital status to "NotApplicable"<br>
**Impacted Field:**
  - PersonPartyInfo/MaritalStat

- We resolved an issue that occurred while updating the gender status to "Unknown"<br>
**Impacted Field:**
  - PersonPartyInfo/Gender

- We resolved an issue that occurred while updating the race status to "Other", "NativeAmerican" or "NativeAlaskan"<br>
**Impacted Field:**
  - PersonPartyInfo/Race

<!-- type: tab-end -->
