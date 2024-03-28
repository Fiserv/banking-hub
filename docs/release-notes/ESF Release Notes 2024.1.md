# Release Notes 
### 2024_Q1
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, DNA, Finxact
-->


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Transaction Account-LAS, Get Transaction Account-AMS</span> *API Explorer > Transactions > Account Transaction Service*
- Updated the "ChkNum" field to return the values of the client-defined "TrnCode" and "ExternalTrnCode" fields for memopost transactions


<span style="font-size: 22px; ">Add Document</span> *API Explorer > Accounts > Document Service*
- Added the new enum values "DOCX" and "XLSX" in the "DocumentInfo/PageData/PageFormat" field as new page formats


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*
- Removed the enum values from the "CRARevenueCode" field *(LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode)* so that values are passed in request while creating a loan account for MidPenn bank
- Fixed the error in the "LoanAcctInfo/RevolvingLoanInd" field when using the "SingleAdvance" and "AdvanceLimit" values
- Fixed the error of "OpenDt" field (LoanAcctInfo/PostAddr/OpenDt) which was marked as required field and hence restricting to create a loan account. Now the field is marked as optional in request and does not restrict the user to create a loan account
- Fixed the date format for the  "LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt" XPATH. Now, clients can view the date sent in the request
- Fixed account creation issue when the value of the "BillingMethod" field is "DirectDebitDDAStmt" or "DirectDebitSDAStmt"<br>**Impacted fields:**
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


- Added the "LoanAcctInfo/LoanBilling/ACHPayerId" XPATH so that the billing method gets modified as per the request
- Updated EFX Allowed Values for the "LoanAcctInfo/LoanBilling/BillingMethod" field
- Fixed the issue with the following fields which were not getting modified as per the request:
    - RevolvingLoanInd (LoanAcctInfo/RevolvingLoanInd)
    - RevolvingLoanCode (LoanAcctInfo/RevolvingLoanInd)
- Fixed the issue in the "LoanAcctInfo/HomeMortgageDisclosure/HAMPData/EffDt" XPATH so that the modified effective date is returned in the Get Account-LOAN API
- Fixed the error that occurred while modifying the "ClientDefined" aggregate in the requests




<span style="font-size: 22px; ">Add Account Collateral Relationship</span> *API Explorer > Accounts > Account Collateral Service*


- Fixed the "PledgeDt" field to add the correct date while creating a relationship of a collateral with an account


<span style="font-size: 22px; ">Add Collateral</span> *API Explorer > Accounts > Collateral Service*


- Fixed the issue of address visibility. Now, the existing address is visible on Navigator UI for the new collateral record


<span style="font-size: 22px; ">Get Party</span> *API Explorer > Accountholder > Party Service*


- Fixed the issue in the EnumDesc fields where the value set for one tenant was getting assigned to the value set for another tenant on Premier<br>**Impacted Fields:**
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


- Fixed the issue in the "ControlCode" field (BeneficialOwnerInfo/BeneficialOwnerData/ControlCode) where the value was sent in the incorrect format causing Premier to return data type error


<span style="font-size: 22px; ">Get Party Account Relationship-ByAcct, Get Party Account Relationship-ByParty</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Fixed the issue in the "Phone" field where an invalid value such as +1-00-0000000 was returned in the response<br>**Impacted fields:**
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PhoneNum/Phone
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PhoneNum/Phone



<span style="font-size: 22px; ">Get Party Account Relationship-ByParty</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Fixed the issue in the "PartyAcctRelDesc" field (PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelDesc) where numeric value was getting assigned instead of the description from Premier Relationship Specifications

- Fixed the issue in the EnumDesc fields where the value set for one tenant on Premier was getting assigned to the value set for another tenant on Premier<br>**Impacted fields:**
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


- Fixed the issue in the "City" field where additional space was appended at the end of the value such as "FALLS CITY " in the response<br>**Impacted fields:**
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/City
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/City

- Fixed the issue in the "City" field where space between the value such as "Berkeley Heights" was removed<br>**Impacted fields:**
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/City
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/City

- Fixed the issue in the optional "City" field where if the "City" field is not provided then other related fields "StateProv" and "PostalCode" were not returned in the response<br>**Impacted fields:**
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/StateProv
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/StateProv
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/PostalCode
    - PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/PostalCode



<span style="font-size: 22px; ">Add Party</span> *API Explorer > Accountholder > Party Service*


- Fixed issue in the repeating "IssuedIdent" aggregate where second "IssuedIdent" information was not sent to the core<br>**Impacted fields:**
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


<p style="font-size: 24px; font-weight: bold;">Known Issues </p>

<span style="font-size: 22px; ">Get Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Added the enum values for the "AcctBal/BalType" XPATH

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
