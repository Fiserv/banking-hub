# Release Notes 
### 2024_Q1
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, Finxact, DNA
-->


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

- Updated Postman collection of Premier core.   *Documentation > Resources > Postman Collection*

<span style="font-size: 22px; ">Get Transaction Account-LAS, Get Transaction Account-AMS</span> *API Explorer > Transactions > Account Transaction Service*

- Updated the "ChkNum" field to return the values of the client-defined "TrnCode" and "ExternalTrnCode" fields for memopost transactions

<span style="font-size: 22px; ">Add Document</span> *API Explorer > Accounts > Document Service*


- Added the new enum values "DOCX" and "XLSX" in the "DocumentInfo/PageData/PageFormat" field as new page formats


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Removed the following enum values from the "CRARevenueCode" field *(LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode)* so that the "CRARevenueCode" field acts as a passthrough field while creating a loan account:
    - None
    - LessEqualOneMillion
    - MoreThanOneMillion
    - Unknown
    - Consumer Loan
    - NotApplicable

- Fixed the error in the "LoanAcctInfo/RevolvingLoanInd" field when using the "SingleAdvance" and "AdvanceLimit" values. Updated the field description of the "LoanAcctInfo/RevolvingLoanInd" field

- Fixed the error of the "OpenDt" field (LoanAcctInfo/PostAddr/OpenDt) which was marked as a required field and hence restricting to create a loan account. Now the field is marked as optional in request and does not restrict the user to create a loan account

- Fixed the date format for the "LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt" field. Now, clients can view the date sent in the request

- Fixed account creation issue when the value of the "BillingMethod" field is "DirectDebitDDAStmt" or "DirectDebitSDAStmt"<br>
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


- Added the "LoanAcctInfo/LoanBilling/ACHPayerId" field so that the billing method gets modified as per the request

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

- Fixed the issue with the following fields, which were not getting modified as per the request:
    - RevolvingLoanInd (LoanAcctInfo/RevolvingLoanInd)
    - RevolvingLoanCode (LoanAcctInfo/RevolvingLoanInd)

- Fixed the issue in the "LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt" field so that the modified effective date is returned in the Get Account-LOAN API

- Fixed the error that occurred while modifying the "ClientDefined" aggregate in the requests. Updated the field description of the "LoanAcctInfo/ClientDefinedData/DataLength" field



<span style="font-size: 22px; ">Add Account Collateral Relationship</span> *API Explorer > Accounts > Account Collateral Service*


- Fixed the "PledgeDt" field to add the correct date while creating a relationship of a collateral with an account


<span style="font-size: 22px; ">Add Collateral</span> *API Explorer > Accounts > Collateral Service*


- Fixed the issue of address visibility. Now, the existing address is visible on the Navigator UI for the new collateral record


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



<span style="font-size: 22px; ">Add Beneficial Owner</span> *API Explorer > Accountholder > Beneficial Owner Service*


- Fixed the issue in the "ControlCode" field (BeneficialOwnerInfo/BeneficialOwnerData/ControlCode) where the value was sent in the incorrect format causing Premier to return a data type error


<span style="font-size: 22px; ">Get Party Account Relationship-ByAcct, Get Party Account Relationship-ByParty</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Fixed the issue in the "Phone" field where an invalid value such as +1-00-0000000 was returned in the response<br>
**Impacted fields:**
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PhoneNum/Phone
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PhoneNum/Phone



<span style="font-size: 22px; ">Get Party Account Relationship-ByParty</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Fixed the issue in the "PartyAcctRelDesc" field (PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelDesc) where numeric value was getting assigned instead of the description from Premier Relationship Specifications

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


- Fixed the issue in the "City" field where additional space was appended at the end of the value such as "FALLS CITY " in the response<br>
**Impacted fields:**
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/City
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/City

- Fixed the issue in the "City" field where space between the value such as "Berkeley Heights" was removed<br>
**Impacted fields:**
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/City
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/City

- Fixed the issue in the optional "City" field where if the "City" field is not provided then other related fields "StateProv" and "PostalCode" were not returned in the response<br>
**Impacted fields:**
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/StateProv
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/StateProv
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/PostalCode
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/PostalCode



<span style="font-size: 22px; ">Add Party</span> *API Explorer > Accountholder > Party Service*


- Fixed issue in the repeating "IssuedIdent" aggregate where second "IssuedIdent" information was not sent to the core<br>
**Impacted fields:**
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


- Fixed the issue in the "PostalCode" field where the postal codes, which has zip extension digits as "0000" were not returned in the response<br>
**Impacted fields:**
    - PartyListRec/PersonPartyListInfo/Contact/PostAddr/PostalCode
    - PartyListRec/OrgPartyListInfo/Contact/PostAddr/PostalCode

- Fixed the issue in the "PostalCode" field where the field "StatProv" was not returned in the response when the postal code was not available for the party address<br>
**Impacted fields:**
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

<span style="font-size: 22px; ">Get Account-LOAN</span> *API Explorer > Accounts > Account Service*


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

- Added Postman collection of Precision core.   *Documentation > Resources > Postman Collection*

<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Transaction Account - Deposits</span> *API Explorer > Accounts > Account Transaction Service*


- Updated the "AcctTrnRec/AcctTrnInfo/Desc" field that returns the second line of the truncated description in the response


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account - DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Fixed the issue where the Add Account API for DDA and SDA was failing for all banks<br>
**Impacted fields:**
    - DepositAcctInfo/ClientDefinedData/DataClassType
    - DepositAcctInfo/ClientDefinedData/DataIdent
    - DepositAcctInfo/ClientDefinedData/DataType
    - DepositAcctInfo/ClientDefinedData/Value


<span style="font-size: 22px; ">Add Account - DDA_SDA, Add Account - CDA</span> *API Explorer > Accounts > Account Service*


- Fixed the issue where the Add Account API for DDA, SDA and CDA was not working for region code when the client-defined field was passed as "udi-1"<br>
**Impacted fields:**
    - DepositAcctInfo/ClientDefinedData/DataClassType
    - DepositAcctInfo/ClientDefinedData/DataIdent
    - DepositAcctInfo/ClientDefinedData/DataType
    - DepositAcctInfo/ClientDefinedData/Value


<span style="font-size: 22px; ">Update Account - DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Fixed the issue with the "DepositAcctInfo/ClientDefinedData/DataIdent" where the client-defined value was getting passed as "0" in the request


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Get Card</span> *API Explorer > Debit Cards > Card Service*


- Fixed the card number truncation issue in case the card sequence number is not passed in request<br>
**Impacted fields:**
    - CardRec/CardKeys/CardId
    - CardRec/CardKeys/CardSeqNum


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Card</span> *API Explorer > Transfers > Transfer Service*

- Added the enum value "CLA" in the following fields to allow transfers from commercial loan accounts (CLA) to checking and savings accounts (DDA/SDA):
    - XferInfo/FromAcctRef/AcctKeys/AcctType
    - XferStatusRec/XferKeys/AcctKeys/AcctType

<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Get Account Transaction History - DDA, Get Account Transaction History - SDA_CDA </span> *API Explorer > Transactions > Account Transaction Service*

- Fixed the format of the "PostedDt" and "TrnDt" field to ensure the values of these fields are converted into correct ESF date and time format<br>
**Impacted fields:**
    - AcctTrnRec/AcctTrnInfo/PostedDt
    - AcctTrnRec/AcctTrnInfo/TrnDt

<!-- type: tab -->
> #### Note
> Support for Finxact v1.21.
<p style="font-size: 24px; font-weight: bold;">What's New </p>

Information is not available at the moment. Stay tuned for the updates.

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span>

Added the following API endpoints:
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
