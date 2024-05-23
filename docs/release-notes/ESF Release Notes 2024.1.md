# Release Notes 
### 2024_Q1
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA
-->


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

- We updated the Postman Collection of Premier core.   *Documentation > Resources > Postman Collection*

<span style="font-size: 22px; ">Get Transaction Account-LAS, Get Transaction Account-AMS</span> *API Explorer > Transactions > Account Transaction Service*

- Updated the "ChkNum" field to return the values of the client-defined "TrnCode" and "ExternalTrnCode" fields for memopost transactions

<span style="font-size: 22px; ">Add Document</span> *API Explorer > Accounts > Document Service*


- We added the new enum values "DOCX" and "XLSX" in the "DocumentInfo/PageData/PageFormat" field as new page formats


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*


- We removed the following enum values from the "CRARevenueCode" field (LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode) so that the "CRARevenueCode" field acts as a passthrough field while creating a loan account:
    - None
    - LessEqualOneMillion
    - MoreThanOneMillion
    - Unknown
    - Consumer Loan
    - NotApplicable

- We resolved an issue that used to occur for the revolving loan code value when enum values are provided for the SingleAdvance and AdvanceLimit fields<br>
**Impacted Field:**
  - LoanAcctInfo/RevolvingLoanCode 

- Fixed the error of the "OpenDt" field (LoanAcctInfo/PostAddr/OpenDt) which was marked as a required field and hence restricting to create a loan account. Now the field is marked as optional in request and does not restrict the user to create a loan account

- Effective date for the home mortgage now correctly displays in the response. Earlier, effective date value was showing different value in the response<br>
**Impacted Field:**
  - LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt

- We resolved an issue to successfully create an account when the billing method value is set to "DirectDebitDDAStmt" or "DirectDebitSDAStmt"<br>
**Impacted fields:**
    - LoanAcctInfo/LoanBilling/BillingMethod
    - LoanAcctInfo/LoanBilling/FromAcctKeys/AcctId
    - LoanAcctInfo/LoanBilling/FromAcctKeys/AcctType
    - LoanAcctInfo/LoanBilling/FromAcctKeys/FIIdentType
    - LoanAcctInfo/LoanBilling/FromAcctKeys/FIIdent
    - LoanAcctInfo/LoanBilling/ACHPayerId
    - LoanAcctInfo/LoanBilling/Desc
    - LoanAcctInfo/LoanBilling/AutoPmtOption
    - LoanAcctInfo/LoanBilling/AutoPmtDraftAmtOption
    - LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/Amt
    - LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode/CurCodeType
    - LoanAcctInfo/LoanBilling/AutoPmtDraftAmt/CurCode/CurCodeValue
    - LoanAcctInfo/LoanBilling/NextAutoPmtDraftDt



<span style="font-size: 22px; ">Update Account-LOAN</span> *API Explorer > Accounts > Account Service*


- We resolved an issue to correctly display the billing method value in the response<br>
**Impacted Field:**
  - LoanAcctInfo/LoanBilling/BillingMethod

- Changed the following enum values for the "LoanAcctInfo/LoanBilling/BillingMethod" field from:
    - "Debit Demand Deposit" to "DirectDebitDDA"
    - "Debit Savings" to "DirectDebitSDA"
    - "BillByStmt" to "BillingByStmt"

- Updated the field descriptions for the following fields:
    - LoanAcctInfo/LoanBilling/FromAcctKeys
    - LoanAcctInfo/LoanBilling/FromAcctKeys/FIIdentType
    - LoanAcctInfo/LoanBilling/FromAcctKeys/FIIdent
    - LoanAcctInfo/LoanBilling/ACHPayerId
    - LoanAcctInfo/LoanBilling/Desc

- We resolved an issue to correctly display the RevolvingLoanInd and RevolvingLoanCode values in the response<br>
**Impacted Fields:**
  - LoanAcctInfo/RevolvingLoanInd
  - LoanAcctInfo/RevolvingLoanCode

- Effective date for the home mortgage now correctly updates in the UI. Earlier, effective date value was showing different value in the UI<br>
**Impacted Field:**
  - LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt

- Fixed the error that occurred while modifying the "ClientDefined" aggregate in the requests. Updated the field description of the "LoanAcctInfo/ClientDefinedData/DataLength" field

- This API now correctly updates the information of the responsible branch, credit risk, and NAICS<br>
**Impacted Fields:**
  - LoanAcctInfo/ResponsibleBranch
  - LoanAcctInfo/CreditRisk
  - LoanAcctInfo/NAICS

<span style="font-size: 22px; ">Add Account Collateral Relationship</span> *API Explorer > Accounts > Account Collateral Service*


- Fixed the "PledgeDt" field to add the correct date while creating a relationship of a collateral with an account

- Fixed the issue of "DataType mismatch error"  returned in the response for "AcctCollateralRelInfo/LienPosition field", when not provided in the request. Error handling is done to return a valid error  in case this required field is not provided. Updated the "Note" for this field


<span style="font-size: 22px; ">Add Collateral</span> *API Explorer > Accounts > Collateral Service*


- Fixed the issue of adding an existing address while creating a new collateral record. Now, the existing address is visible on Navigator UI for the collateral record

- Fixed an issue in the "LienPosition" field (AcctCollateralRelInfo/LienPosition), where the API returned a data type mismatch error if this field was not included in the request. This field is required for the core. Error handling is done to return a valid error provided by the core in case this required field is not provided.   
    


<span style="font-size: 22px; ">Get Party</span> *API Explorer > Accountholder > Party Service*

- Fixed the issue in the EnumDesc fields where the value set for one tenant was getting assigned to the value set for another tenant on Premier<br>
**Impacted fields:**
    - PartyRec/PersonPartyInfo/RelationshipMgr/RelationshipMgrIdentEnumDesc
    - PartyRec/OrgPartyInfo/RelationshipMgr/RelationshipMgrIdentEnumDesc
    - PartyRec/PersonPartyInfo/OEDCodeEnumDesc
    - PartyRec/OrgPartyInfo/OEDCodeEnumDesc
    - PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentTypeEnumDesc
    - PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentTypeEnumDesc
    - PartyRec/PersonPartyInfo/PersonData/IssuedIdent/IssuerEnumDesc
    - PartyRec/OrgPartyInfo/OrgData/IssuedIdent/IssuerEnumDesc
    - PartyRec/PersonPartyInfo/OriginatingBranchEnumDesc
    - PartyRec/OrgPartyInfo/OriginatingBranchEnumDesc
    - PartyRec/PersonPartyInfo/ResponsibleBranchEnumDesc
    - PartyRec/OrgPartyInfo/ResponsibleBranchEnumDesc
    - PartyRec/PersonPartyInfo/PersonData/Contact/PostAddr/AddrUseEnumDesc
    - PartyRec/OrgPartyInfo/OrgData/Contact/PostAddr/AddrUseEnumDesc
    - PartyRec/PersonPartyInfo/PersonData/Contact/PostAddr/CountryCode/CountryCodeValueEnumDesc
    - PartyRec/OrgPartyInfo/OrgData/Contact/PostAddr/CountryCode/CountryCodeValueEnumDesc

- We resolved the issue with the "PostalCode" field where the "StatProv" field was not returned in response when the postal code was not available for the party address<br>
**Impacted Fields:**
    - PartyRec/PersonPartyInfo/PersonData/Contact/PostAddr/StateProv
    - PartyRec/OrgPartyInfo/OrgData/Contact/PostAddr/StateProv



<span style="font-size: 22px; ">Add Beneficial Owner</span> *API Explorer > Accountholder > Beneficial Owner Service*


- Fixed the issue in the "ControlCode" field (BeneficialOwnerInfo/BeneficialOwnerData/ControlCode) where the value was sent in the incorrect format causing Premier to return a data type error


<span style="font-size: 22px; ">Get Party Account Relationship-ByAcct, Get Party Account Relationship-ByParty</span> *API Explorer > Accountholder > Party Account Relationship Service*


- We resolved the issue with the "Phone" field where an invalid value as "+1-00-0000000" was returned in the response<br>
**Impacted Fields:**
  - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PhoneNum/Phone
  - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PhoneNum/Phone



<span style="font-size: 22px; ">Get Party Account Relationship-ByParty</span> *API Explorer > Accountholder > Party Account Relationship Service*


- We resolved the issue with the “PartyAcctRelDesc” field where numeric value was returned in the response instead of the actual description as per the premier relationship specifications

- Fixed the issue in the EnumDesc fields where the value set for one tenant on Premier was getting assigned to the value set for another tenant on Premier<br>
**Impacted fields:**
    - PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelDesc
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/CountryCode/CountryCodeValueEnumDesc
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/CountryCode/CountryCodeValueEnumDesc
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/IssuedIdent/IssuedIdentTypeEnumDesc
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/IssuedIdent/IssuedIdentTypeEnumDesc
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/AddrUseEnumDesc
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/AddrUseEnumDesc
    - PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/Desc
    - PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/AcctDtlStatusEnumDesc
    - PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/OriginatingBranchEnumDesc
    - PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/RelationshipMgr/RelationshipMgrIdentEnumDesc


<span style="font-size: 22px; ">Get Party Account Relationship-ByTaxId</span> *API Explorer > Accountholder > Party Account Relationship Service*


- We resolved the issue of additional space that was appended to the value of the "City" field in response<br>
**Impacted Fields:**
  - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/City
  - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/City

- We resolved an issue with the "City" field where space in the value as "Berkeley Heights" was appended in the response<br>
**Impacted Fields:**
  - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/City
  - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/City

- Fixed the issue in the optional "City" field where if the "City" field is not provided then other related fields "StateProv" and "PostalCode" were not returned in the response<br>
**Impacted fields:**
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/StateProv
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/StateProv
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/PostalCode
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/PostalCode



<span style="font-size: 22px; ">Add Party</span> *API Explorer > Accountholder > Party Service*


- Previously, when a party was created with the multiple "IssueIdent" aggregates, only the information related to the first aggregate was sent to the provider and rest were ignored. We resolved this issue with a code fix to create the correct information for the repeating "IssueIdent" aggregates<br>
**Impacted Fields:**
  - PersonPartyInfo/PersonData/IssuedIdent
    - PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentType
    - PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentId
    - PersonPartyInfo/PersonData/IssuedIdent/IssuedIdentValue
    - PersonPartyInfo/PersonData/IssuedIdent/Issuer
    - PersonPartyInfo/PersonData/IssuedIdent/IssueDt
    - PersonPartyInfo/PersonData/IssuedIdent/ExpDt
  - OrgPartyInfo/OrgData/IssuedIdent
    - OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentType
    - OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentId
    - OrgPartyInfo/OrgData/IssuedIdent/IssuedIdentValue
    - OrgPartyInfo/OrgData/IssuedIdent/Issuer
    - OrgPartyInfo/OrgData/IssuedIdent/IssueDt
    - OrgPartyInfo/OrgData/IssuedIdent/ExpDt


<span style="font-size: 22px; ">Add ePreference</span> *API Explorer > Accounts > Document Preferences Service*


- Fixed the issue in the "DocGroupName" field (ePreferenceInfo/DocGroupName) where the value was not passed to Premier when a request was made to create ePreference for LOAN, CDA or SDA account


<span style="font-size: 22px; ">Update ePreference</span> *API Explorer > Accounts > Document Preferences Service*


- Fixed the issue in the "AcctType" field (ePreferenceStatusRec/ePreferenceKeys/AcctKeys/AcctType) where the field was not returned in response


<span style="font-size: 22px; ">Get Product Interest Rate</span> *API Explorer > Operations and Servicing > Product Interest Rate Service*


- Fixed the issue of incorrect APY calculation when the "Term" (ProdIntRateSel/Term) field is provided in the request. Now, the calculation uses product term defaults


<span style="font-size: 22px; ">Update Address</span> *API Explorer > Party > Address Service*


- Fixed the issue in the "AddrType" field (AddrInfo/PostAddr/AddrType) where the address fields were not sent to the core when the value of the "AddrType" field is "Secondary". The support for AddrType value as Secondary is needed for the internal calls sent from the Update Party or Update Account API to update an address


<span style="font-size: 22px; ">Get Party List</span> *API Explorer > Accountholder > Party Service*


- Previously, in response, the "PostalCode" field was not returned when it has the zip extention as "0000". Also, if the postal code value was of 4-digits, it returned with an additional hyphen (-) in response. We resolved these issues with a code fix and configuration changes<br>
**Impacted Fields:**
    - PartyListRec/PersonPartyListInfo/Contact/PostAddr/PostalCode
    - PartyListRec/OrgPartyListInfo/Contact/PostAddr/PostalCode

- We resolved the issue with the "PostalCode" field where the "StatProv" field was not returned in response when the postal code was not available for the party address<br>
**Impacted Fields:**
    - PartyListRec/PersonPartyListInfo/Contact/PostAddr/StatProv
    - PartyListRec/OrgPartyListInfo/Contact/PostAddr/StatProv


<span style="font-size: 22px; ">Get Safe Deposit Box</span> *API Explorer > Accounts > SafeDepositBox Service*


- Fixed the issue in the EnumDesc fields where a tenant's value on Premier was being assigned to another tenant's value<br>
**Impacted fields:**
    - SafeDepositBoxRec/SafeDepositBoxInfo/BoxDtlStatusEnumDesc
    - SafeDepositBoxRec/SafeDepositBoxInfo/OriginatingBranchEnumDesc
    - SafeDepositBoxRec/SafeDepositBoxInfo/PostAddr/CountryCode/CountryCodeValueEnumDesc


<span style="font-size: 22px; ">Get Card</span> *API Explorer > Debit Cards > Card Service*


- Fixed the issue in the EnumDesc fields where a tenant's value on Premier was being assigned to another tenant's value<br>
**Impacted fields:**
    - CardRec/CardInfo/CardDtlStatusEnumDesc
    - CardRec/CardInfo/PostAddr/CountryCode/CountryCodeValueEnumDesc


<p style="font-size: 24px; font-weight: bold;">Known Issues </p>

<span style="font-size: 22px; ">Get Account-CDA</span> *API Explorer > Accounts > Account Service*


- Added the following enum values for the "AcctBal/BalType" field:
    - Avail
    - AvailCash
    - AvailChk
    - Closing
    - BalanceLastStatement
    - Current
    - ClosingInterest
    - InterestAccrued
    - Ledger 
    - MinLedger
    - OpeningOutstanding
    - OverdraftAtmPos
    - PrevAvailCash
    - PrevAvailChk
    - PrevInterestAccrued
    - PrevAvail
    - PrevSvcChg
    - PrevLedger 
    - SvcChg
    - Hold
    - OtherTransfers 
    - Sweep
    - Float
    - MemoLedger
    - Memo
    - AvailPending
    - LedgerPending


<!-- type: tab -->

<p style="font-size: 24px; font-weight: bold;">What's New </p>

- We added Postman collection for Precision core.   *Documentation > Resources > Postman Collection*

<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Transaction Account - Deposits</span> *API Explorer > Accounts > Account Transaction Service*


- Updated the "AcctTrnRec/AcctTrnInfo/Desc" field that returns the second line of the truncated description in the response


<span style="font-size: 22px; ">Add Document</span> *API Explorer > Accounts > Document Service*


- We added the new enum values "DOCX" and "XLSX" in the "DocumentInfo/PageData/PageFormat" field as new page formats


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account-DDA_SDA</span> *API Explorer > Accounts > Account Service*


- We resolved the issue where the account creation for account types DDA and SDA was failed due to incorrect value format of the "DataIdent" field sent in the request <br>
**Impacted Fields:**
    - DepositAcctInfo/ClientDefinedData/DataClassType
    - DepositAcctInfo/ClientDefinedData/DataIdent
    - DepositAcctInfo/ClientDefinedData/DataType
    - DepositAcctInfo/ClientDefinedData/Value


<span style="font-size: 22px; ">Add Account-DDA_SDA, Add Account-CDA</span> *API Explorer > Accounts > Account Service*


- Previously, in request, the numeric value (udi-1, which specifies the region code) of the client defined data aggregate was added incorrectly while account creation. We resolved this issue to send the correct value<br>
**Impacted Fields:**
    - DepositAcctInfo/ClientDefinedData/DataClassType
    - DepositAcctInfo/ClientDefinedData/DataIdent
    - DepositAcctInfo/ClientDefinedData/DataType
    - DepositAcctInfo/ClientDefinedData/Value


<span style="font-size: 22px; ">Update Account - DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Fixed the issue with the "DepositAcctInfo/ClientDefinedData/DataIdent" where the client-defined value was getting passed as "0" in the request

<span style="font-size: 22px; ">Update Party</span> *API Explorer > Accountholder > Party Service*


- We resolved an internal server error that the API returned even when the valid values for the "ClientDefinedData" aggregate with the data type as Date and Boolean was set in the request message<br>
**Impacted Fields:**
    - PersonPartyInfo/ClientDefinedData
    - PersonPartyInfo/ClientDefinedData/DataIdent
    - PersonPartyInfo/ClientDefinedData/DataType
    - PersonPartyInfo/ClientDefinedData/Value
    - OrgPartyInfo/ClientDefinedData
    - OrgPartyInfo/ClientDefinedData/DataIdent
    - OrgPartyInfo/ClientDefinedData/DataType
    - OrgPartyInfo/ClientDefinedData/Value

<span style="font-size: 22px; ">Add Party</span> *API Explorer > Accountholder > Party Service*


- We resolved the issue in the "InternetBankingFileOpt" aggregate where the field "AccessLevelCode" was not sent to the core for "AccessLevelType" field value as "Vendor2" or "Vendor3"<br>
**Impacted fields:**
    - PersonPartyInfo/InternetBankingIdent
    - PersonPartyInfo/InternetBankingFileOpt
    - PersonPartyInfo/InternetBankingFileOpt/Vendor
    - PersonPartyInfo/InternetBankingFileOpt/Vendor/AccessLevelType
    - PersonPartyInfo/InternetBankingFileOpt/Vendor/AccessLevelCode
    - OrgPartyInfo/InternetBankingIdent
    - OrgPartyInfo/InternetBankingFileOpt
    - OrgPartyInfo/InternetBankingFileOpt/Vendor
    - OrgPartyInfo/InternetBankingFileOpt/Vendor/AccessLevelType
    - OrgPartyInfo/InternetBankingFileOpt/Vendor/AccessLevelCode


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>


<span style="font-size: 22px; ">Add Document</span> *API Explorer > Accounts > Document Service*


- We added the new enum values "DOCX" and "XLSX" in the "DocumentInfo/PageData/PageFormat" field as new page formats


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Get Card</span> *API Explorer > Debit Cards > Card Service*


- Fixed the card number truncation issue in case the card sequence number is not passed in request<br>
**Impacted fields:**
    - CardRec/CardKeys/CardId
    - CardRec/CardKeys/CardSeqNum
 
<span style="font-size: 22px; ">Update Account-DDA_SDA</span> *API Explorer > Accounts > Account Service*

- We resolved the null pointer exception error that used to occur in the service charge data (SvcChgData) aggregate when the ProdIntRateId and AcctStmtData values are provided in the request. We removed the "AnalysisOffset" enumeration value from the "SvcChgMethodType" field<br>
**Impacted Field:**
  - DepositAcctInfo/SvcChgData/SvcChgMethod/SvcChgMethodType

<span style="font-size: 22px; ">Update Party</span> *API Explorer > Accountholder > Party Service*

- Previously, the updated combination of TaxIdentType and TaxExempt set for customer identification type was not retrieved correctly using the Get Party API. We fixed the code so that users can update and retrieve information for the non-profit, government and foreign customers

<span style="font-size: 22px; ">Add Party</span> *API Explorer > Accountholder > Party Service*

- Previously, the added combination of TaxIdentType and TaxExempt for customer identification type was not retrieved correctly using the Get Party API. We fixed the code so that users can add and retrieve information for the non-profit, government and foreign customers




<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Add Transfer</span> *API Explorer > Transfers > Transfer Service*

- Added the enum value "CLA" in the following fields to allow transfers from commercial loan accounts (CLA) to checking and savings accounts (DDA/SDA):
    - XferInfo/FromAcctRef/AcctKeys/AcctType
    - XferStatusRec/XferKeys/AcctKeys/AcctType


<span style="font-size: 22px; ">Add Document</span> *API Explorer > Accounts > Document Service*


- We added the new enum values "DOCX" and "XLSX" in the "DocumentInfo/PageData/PageFormat" field as new page formats


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Get Account Transaction History-DDA, Get Account Transaction History-SDA_CDA </span> *API Explorer > Transactions > Account Transaction Service*

- Fixed the format of the "PostedDt" and "TrnDt" field to ensure the values of these fields are converted into correct ESF date and time format<br>
**Impacted fields:**
    - AcctTrnRec/AcctTrnInfo/PostedDt
    - AcctTrnRec/AcctTrnInfo/TrnDt

<span style="font-size: 22px; ">Get Account Transaction History</span> *API Explorer > Transactions > Account Transaction Service*

- Effective date of account transaction now returns correctly in the response for INET integrations<br>
**Impacted Fields:**
  - AcctTrnRec/AcctTrnInfo/EffDt
  - AcctTrnRec/AcctTrnInfo/TrnDt
  - AcctTrnRec/AcctTrnInfo/PostedDt

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span>

We added the following API endpoints:
- Add Address *(API Explorer > Accountholder >  Address Service)*
- Get Address *(API Explorer > Accountholder > Address Service)*
- Delete Address *(API Explorer > Accountholder > Address Service)*
- Update Address *(API Explorer > Accountholder > Address Service)*
- Get Beneficiary *(API Explorer > Accountholder > Beneficiary Service)*
- Add Add Party Account Relationship *(API Explorer > Accountholder > Party Account Relationship Service)*
- Get Add Party Account Relationship - ByAccount *(API Explorer > Accountholder > Party Account Relationship Service)*
- Get Add Party Account Relationship - ByParty *(API Explorer > Accountholder > Party Account Relationship Service)*
- Update Add Party Account Relationship *(API Explorer > Accountholder > Party Account Relationship Service)*
- Add Party *(API Explorer > Accountholder > Party Service)*
- Delete Party Email *(API Explorer > Accountholder > Party Service)*
- Delete Party Phone Number *(API Explorer > Accountholder > Party Service)*
- Get Party *(API Explorer > Accountholder > Party Service)*
- Get Party List *(API Explorer > Accountholder > Party Service)*
- Update Party *(API Explorer > Accountholder > Party Service)*
- Add Account - DDA_SDA_CDA *(API Explorer > Accounts > Account Service)*
- Get Account - DDA_SDA_CDA *(API Explorer > Accounts > Account Service)*
- Get Account - Loan *(API Explorer > Accounts > Account Service)*
- Update Account - Deposits *(API Explorer > Accounts > Account Service)*
- Get Collateral *(API Explorer > Accounts > Collateral Service)*
- Add Document *(API Explorer > Accounts > Document Service)*
- Get Document *(API Explorer > Accounts > Document Service)*
- Get Document List *(API Explorer > Accounts > Document Service)*
- Update Document *(API Explorer > Accounts > Document Service)*
- Get GL Account Details *(API Explorer > Accounts > GL Account Service)*
- Add ePreference *(API Explorer > Accounts > Document Preferences Service)*
- Delete ePreference *(API Explorer > Accounts > Document Preferences Service)*
- Get ePreference *(API Explorer > Accounts > Document Preferences Service)*
- Update ePreference *(API Explorer > Accounts > Document Preferences Service)*
- Get Safe Deposit Box *(API Explorer > Accounts > Safe Deposit Box Service)*
- Get Card Account Relationship *(API Explorer > Debit Cards > Card Account Relationship Service)*
- Add Card *(API Explorer > Debit Cards > Card Service)*
- Get Card *(API Explorer > Debit Cards > Card Service)*
- Get Card List *(API Explorer > Debit Cards > Card Service)*
- Update Card *(API Explorer > Debit Cards > Card Service)*
- Add Branch *(API Explorer > Operations and Servicing > Branch Service)*
- Update Branch *(API Explorer > Operations and Servicing > Branch Service)*
- Get Branch *(API Explorer > Operations and Servicing > Branch Service)*
- Get Client Defined Field *(API Explorer > Operations and Servicing > Client Defined Field Service)*
- Update Client Defined Field *(API Explorer > Operations and Servicing > Client Defined Field Service)*
- Get Enumeration Table *(API Explorer > Operations and Servicing > Enumeration Table Service)*
- Get Host Logon *(API Explorer > Operations and Servicing > Host Logon Service)*
- Get Host System Status *(API Explorer > Operations and Servicing > Host System Service)*
- Get Product List *(API Explorer > Operations and Servicing > Product Service)*
- Get Product Specifications *(API Explorer > Operations and Servicing > Product Specification Service)*
- Add Account Hold *(API Explorer > Transactions > Account Hold Service)*
- Delete Account Hold *(API Explorer > Transactions > Account Hold Service)*
- Get Account Hold *(API Explorer > Transactions > Account Hold Service)*
- Update Account Hold *(API Explorer > Transactions > Account Hold Service)*
- Get Account Transaction History - Deposits *(API Explorer > Transactions > Account Transaction Service)*
- Get Account Transaction History - Loan *(API Explorer > Transactions > Account Transaction Service)*
- Get Account Transaction History - SDB *(API Explorer > Transactions > Account Transaction Service)*
- Add Credit *(API Explorer > Transactions > Credit Service)*
- Reverse Credit *(API Explorer > Transactions > Credit Service)*
- Add Debit *(API Explorer > Transactions > Debit Service)*
- Reverse Debit *(API Explorer > Transactions > Debit Service)*
- Add Memo Tickler *(API Explorer > Transactions > Memo Tickler Service)*
- Delete Memo Tickler *(API Explorer > Transactions > Memo Tickler Service)*
- Get Memo Tickler *(API Explorer > Transactions > Memo Tickler Service)*
- Update Memo Tickler *(API Explorer > Transactions > Memo Tickler Service)*
- Add Stop Check *(API Explorer > Transactions > Stop Check Service)*
- Cancel Stop Check *(API Explorer > Transactions > Stop Check Service)*
- Get Stop Check *(API Explorer > Transactions > Stop Check Service)*
- Add Stop Item *(API Explorer > Transactions > Stop Item Service)*
- Cancel Stop Item *(API Explorer > Transactions > Stop Item Service)*
- Get Stop Item *(API Explorer > Transactions > Stop Item Service)*
- Update Stop Item *(API Explorer > Transactions > Stop Item Service)*
- Add Transfer - Immediate *(API Explorer > Transfers > Transfer Service)*
- Get Transfer List *(API Explorer > Transfers > Transfer Service)*
<!-- type: tab-end -->
