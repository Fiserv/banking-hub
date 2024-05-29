# Release Notes 
### 2024_Q2
V 11.0.0
<!-- 
type: tab 
titles: Premier, Premier, Precision, Signature
-->

## May 23, 2024

### Enhancements
| API Name | Description | Deployment |
| --- | ----------- | -------- |
| API Specification| We updated the API Specifications.|
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN_INET</a> | We updated the `BalType` field to reflect the current available credit balance instantly. Previously, when a bank updates the current available credit on navigator, the credit balance was updating after the nightly batch process.<br>**Impacted Field:**<br> `AcctRec/LoanAcctInfo/AcctBal/BalType`| PROD |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-LOAN</a> | We updated the `NextRateChangeDt` field with correct path to process the request successfully. Previously, the `NextRateChangeDt` field was not getting updated due to incorrect path.<br>**Impacted Field:**<br>`LoanAcctInfo/RateChangeData/NextRateChangeDt`| PROD |

### Fixed
| API Name | Description | Deployement |
| --- | ----------- | ------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | The system no longer displays an internal server error message when the accrual method value is not included in the request under the interest rate data aggregate. <br> **Impacted Field:** <br> `LoanAcctInfo/IntRateData/AccrualMethod` | PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-DDA</a>,<br> <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-DDA</a> |  We resolved an internal server error issue that used to occur when the analysis group value was not included in the request.<br>**Impacted Field:**<br>`DepositAcctInfo/CommercialAnalysisData/AnalysisGroup` | PROD |
|<a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-LOAN</a> | The system no longer displays an internal server error message when the Accrual Method value is not included in the request under the Interest Rate Data (`IntRateData`) aggregate.<br>**Impacted Fields:**<br>`LoanAcctInfo/IntRateData`<br>`LoanAcctInfo/IntRateData/AccrualMethod`| PROD |
| <a href="../api/?type=post&path=/epreferenceservice/epreference/ePreferences/secured" title="Click to open">Get ePreferences</a>|  We resolved an issue by updating the xref rule for the `StmtPrepCode` field that was not sent to the core for the DDA accounts.<br>**Impacted Field:**<br>`ePreferenceRec/ePreferenceInfo/StmtPrepCode`| PROD |
| <a href="../api/?type=post&path=/accttranservice/acctmgmt/acctTrn/secured" title="Click to open">Get Account Transaction History-WithAMS2.0</a> | Memo posted transaction now returns only in the first instance of the API request as per the pagination logic. Previously, both memo posted and posted transactions used to return in every response message. <br> **Impacted Fields:**<br>`RecCtrlIn/MaxRecLimit` <br>`RecCtrlIn/Cursor` | PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Account Service</a> | We updated the security fix for all account management APIs. | PROD |
| <a href="../api/?type=put&path=/partyservice/parties/parties" title="Click to open">Update Party</a> | We resolved the exception handling error. Now, this API can add phone number and/or email address for the party successfully. | PROD |
| <a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open">Get Party</a> | We resolved the issue where the "NameSuffix" field was not retrieved correctly. <br>**Impacted Field:** <br>`PartyRec/PersonPartyInfo/PersonData/PersonName/NameSuffix` | PROD | 
| <a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open">Get Party</a> | We resolved the issue with the "PreferredPhone" field where the phone flag was not rendered correctly. Now users can retrieve valid values in the response.<br>**Impacted Fields:** <br>`PartyRec/PersonPartyInfo/PersonData/Contact/PhoneNum/PreferredPhone`<br>`PartyRec/OrgPartyInfo/OrgData/Contact/PhoneNum/PreferredPhone`| PROD |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a>| The revolving loan indicator information now displays correctly in the response message. <br>**Impacted Field:** <br>`AcctRec/LoanAcctInfo/RevolvingLoanInd`| PROD |

<!--type: tab-->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">General</span> *Resources > Downloads > API Specifications*
- We updated the API Specifications in the Resources section 

<span style="font-size: 22px; ">Get Account Details-LOAN_INET</span> *API Explorer > Accounts > Account Service*


- We updated the "BalType" field to reflect the current available credit balance instantly. Previously, when a bank updates the current available credit on navigator, the credit balance was updating after the nightly batch process<br>
**Impacted Field:**
	- AcctRec/LoanAcctInfo/AcctBal/BalType


<span style="font-size: 22px; ">Update Account-LOAN</span> *API Explorer > Accounts > Account Service*


- We updated the "NextRateChangeDt" field with correct path to process the request successfully. Previously, the "NextRateChangeDt" field was not getting updated due to incorrect path<br>
**Impacted Field:**
	- LoanAcctInfo/RateChangeData/NextRateChangeDt


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*


- The system no longer displays an internal server error message when the accrual method value is not included in the request under the interest rate data aggregate<br>
**Impacted Field:**
	- LoanAcctInfo/IntRateData/AccrualMethod


<span style="font-size: 22px; ">Add Account-DDA, Update Account-DDA</span> *API Explorer > Accounts > Account Service*


- We resolved an internal server error issue that used to occur when the analysis group value was not included in the request<br>
**Impacted Field:**
	- DepositAcctInfo/CommercialAnalysisData/AnalysisGroup


<span style="font-size: 22px; ">Update Account-LOAN</span> *API Explorer > Accounts > Account Service*


- The system no longer displays an internal server error message when the Accrual Method value is not included in the request under the Interest Rate Data (IntRateData) aggregate<br>
**Impacted Fields:**
	- LoanAcctInfo/IntRateData
	- LoanAcctInfo/IntRateData/AccrualMethod



<span style="font-size: 22px; ">Get ePreferences</span> *API Explorer > Accounts > Document Preferences Service*


- We resolved an issue by updating the xref rule for the "StmtPrepCode" field that was not sent to the core for the DDA accounts<br>
**Impacted Field:**
	- ePreferenceRec/ePreferenceInfo/StmtPrepCode


<span style="font-size: 22px; ">Get Account Transaction History-WithAMS2.0</span> *API Explorer > Transactions > Account Transaction Service*


- Memo posted transaction now returns only in the first instance of the API request as per the pagination logic. Previously, both memo posted and posted transactions used to return in every response message<br>
**Impacted Fields:**
	- RecCtrlIn/MaxRecLimit
	- RecCtrlIn/Cursor


<span style="font-size: 22px; ">Account Service</span> *API Explorer > Accounts > Account Service*


- We updated the security fix for all account management APIs


<span style="font-size: 22px; ">Update Party</span> *API Explorer > Accountholder > Party Service*


- We resolved the exception handling error. Now, this API can add phone number and/or email address for the party successfully 


<span style="font-size: 22px; ">Get Party</span> *API Explorer > Accountholder > Party Service*


- We resolved the issue where the "NameSuffix" field was not retrieved correctly<br>
**Impacted Field:**
  - PartyRec/PersonPartyInfo/PersonData/PersonName/NameSuffix

- We resolved the issue with the "PreferredPhone" field where the phone flag was not rendered correctly. Now users can retrieve valid values in the response<br>
**Impacted Fields:**
  - PartyRec/PersonPartyInfo/PersonData/Contact/PhoneNum/PreferredPhone
  - PartyRec/OrgPartyInfo/OrgData/Contact/PhoneNum/PreferredPhone


<span style="font-size: 22px; ">Get Account Details-LOAN</span> *API Explorer > Accounts > Account Service*


- The revolving loan indicator information now displays correctly in the response message<br>
**Impacted Field:**
  - AcctRec/LoanAcctInfo/RevolvingLoanInd


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">General</span> *Resources > Downloads > API Specifications*
- We updated the API Specifications in the Resources section

<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Get Party Account Relationship</span> *API Explorer > Accountholder > Party Account Relationship Service*


- We resolved the issue where the correct number of records were not returned in the response message when filtered by the internet banking party identifier

- The fields OwnerInd, PrimaryOwnerInd and TaxReportingOwnerInd were not rendering as expected in the response. To resolve this issue, we added correct values for owner indicator, primary owner indicator and tax reporting owner indicator<br>
**Impacted Fields:**
  - PartyAcctRelRec/PartyAcctRelInfo/OwnerInd
  - PartyAcctRelRec/PartyAcctRelInfo/PrimaryOwnerInd
  - PartyAcctRelRec/PartyAcctRelInfo/TaxReportingOwnerInd

- We resolved the error exception issue that was occurring in the response message when retrieving party account relationships using the party identifier

- We updated the configurations so that the API successfully retrieves the accounts whose secondary ownership type is "Direct" and "Fiduciary"


<span style="font-size: 22px; ">Get Memo Tickler-Acct, Get Memo Tickler-Party</span> *API Explorer > Transactions > Memo Tickler Service*


- Previously, the response message failed to retrieve multiple memo ticklers associated with an account or party record. We resolved this issue so that users can retrieve all the memo ticklers successfully

- We resolved the issue in which the system does not generate "HTTP 200-OK 1120- No Records Match Selection Criteria" response, if a user sent the request with the MemoTicklerIdent as blank or with an invalid value

- We resolved the issue in which the system does not generate "HTTP 200-OK 1120-No Records Match Selection Criteria" response, when the memo ticker usage was "Memo" or "MemoRequired" in the request


<span style="font-size: 22px; ">Add Stop Check</span> *API Explorer > Transactions > Stop Check Service*


- The system generated an error exception in the response even when the configuration of fee amount code, fee option and fee waive reason code is correct for the associated organization and client application. To resolve this issue, we have corrected the code


<span style="font-size: 22px; ">Update Account-DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Previously, in the request, the value "UserCode1" of the "DataIdent" field for the Saving Deposit Account (SDA) was not updated with the value that client defines. We resolved the issue so that the client defined value gets updated successfully<br>
**Impacted Fields:**
  - LoanAcctInfo/ClientDefinedData
  - LoanAcctInfo/ClientDefinedData/DataClassType
  - LoanAcctInfo/ClientDefinedData/DataIdent
  - LoanAcctInfo/ClientDefinedData/DataType
  - LoanAcctInfo/ClientDefinedData/Value


<span style="font-size: 22px; ">Get Party Account Relationship-ByParty</span> *API Explorer > Accountholder > Party Account Relationship Service*


- The API now retrieves the correct relationship type. Previously, the API retrieves the relationship type as "Owner" for all the records irrespective of the actual relationship type

- We improved the API configuration to retrieve the response message within 30 seconds. Previously, there was a latency in response while using internet banking



<span style="font-size: 22px; ">Add Party</span> *API Explorer > Accountholder > Party Service*


- We resolved the internal server error for client defined boolean values sent in the request. Now, users can expect correct values in the API response  

<span style="font-size: 22px; ">Add Account- DDA_SDA</span> *API Explorer > Accounts > Account Service*

- Previously, in request, the numeric value (udi-1, which specifies the region code) of the client defined data aggregate was added incorrectly while account creation. We resolved this issue to send the correct value<br>
**Impacted Fields:**
  - DepositAcctInfo/ClientDefinedData
  - DepositAcctInfo/ClientDefinedData/DataClassType
  - DepositAcctInfo/ClientDefinedData/DataIdent
  - DepositAcctInfo/ClientDefinedData/DataType
  - DepositAcctInfo/ClientDefinedData/Value


<span style="font-size: 22px; ">Add Account Hold</span> *API Explorer > Transactions > Account Hold Service*


- We resolved the issue of internal server error while account hold creation. Now, the user can successfully place a hold on an account

<span style="font-size: 22px; ">Add Account</span> *API Explorer > Accounts > Account Service*


- We resolved an issue to get the correct error message in response when user provides the invalid value for data identifier in the request. Previously, user gets "HTTP 999 - General Error 1011 - Invalid User" message instead of "HTTP 400 - Bad Request 1090 - Invalid Value"<br>
**Impacted Field:**
  - DepositAcctInfo/ClientDefinedData/DataIdent

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span>
- In the API Explorer, we enabled a dropdown to select Signature APIs. When you select '**Signature**' from the dropdown, the API Explorer dynamically displays only Signature APIs. The '**11.0.0 (latest)**' continues to display all APIs including Signature<br>
![image](https://github.com/Fiserv/banking-hub/assets/85101648/9efbbe40-9682-4b18-9676-fa980ecdc32a)

<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">General</span> *Resources > Downloads > API Specifications*
- We updated the API Specifications in the Resources section

<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">General</span>
- We resolved the status code synchronization issue for all APIs

<span style="font-size: 22px; ">Get Party</span> *API Explorer > Accountholder > Party Service*


- We updated the service contract to make the aggregate "Secretdata" as an optional aggregate as this information can be optional on the core


<span style="font-size: 22px; ">Add Party</span> *API Explorer > Accountholder > Party Service*


- We resolved the null pointer exception error in the response when the value of the "CountryCodeValue" field was null in the request. Now, even if the value is null, the API adds the party record successfully without any error<br>
**Impacted Fields:**
  - PersonPartyInfo/PersonData/Contact/PostAddr/CountryCode/CountryCodeValue
  - OrgPartyInfo/OrgData/Contact/PostAddr/CountryCode/CountryCodeValue

- We resolved the issue in the "PostalCode" field where the postal codes are not passed to the core when adding the Non-US addresses<br>
**Impacted Fields:**
  - PersonPartyInfo/Employment/PostAddr/PostalCode
  - OrgPartyInfo/OrgData/Contact/PostAddr/PostalCode

- We resolved an internal server error when the optional "PostalCode" field was not sent in the request. Now users can create a party record with the required fields in the request

- Previously, the API displayed error in response and failed to create a party even if the value of the optional "PreferredPhone" filed is not provided. To resolve this issue, we fixed the code and updated the "PreferredPhone" field. Now, user can create the party records successfully <br>
**Impacted Fields:**
  - PersonPartyInfo/PersonData/Contact/PhoneNum/PreferredPhone
  - OrgPartyInfo/OrgData/Contact/PhoneNum/PreferredPhone

- We resolved the issue where the "SecretData" aggregate provided in the request was not stored in the core although the API was returning successful response 


<span style="font-size: 22px; ">Update Party</span> *API Explorer > Accountholder > Party Service*


- We resolved the issue in the "PostalCode" field where the postal codes are not passed to the core when adding the Non-US addresses<br>
**Impacted Fields:**
  - PersonPartyInfo/Employment/PostAddr/PostalCode
  - OrgPartyInfo/OrgData/Contact/PostAddr/PostalCode


<span style="font-size: 22px; ">Get Party Account Relationship</span> *API Explorer > Accountholder > Party Account Relationship Service*


- We resolved the internal server error when the API retrieves party account relationship using account keys (PartyAcctRelSel/AcctKeys) in the request. Now users can retrieve a valid API response message

- We resolved an issue where null tags are returned in the response when the "IncAddtlAcctInfoInd" field was sent in the request<br> 
**Impacted Field:**
  - PartyAcctRelSel/IncAddtlAcctInfoInd

<!-- type: tab-end -->
