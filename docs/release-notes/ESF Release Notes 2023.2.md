# Release Notes 
### 2023_Q2
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, Finxact
-->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

Information is not available at the moment. Stay tuned for the updates.
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
- Get Stop Item *(API Explorer > Transactions> Stop Item Service)*
- Get Enumeration Table -  PartyAcctRel *(API Explorer > Operations and Servicing> Enumeration Table Service)*
- Get Product Specifications *(API Explorer > Operations and Servicing > Product Specification Service)*
- Add Client Defined Field *(API Explorer > Accountholder > Client Defined Field Service)*
- Get Client Defined Field *(API Explorer > Accountholder > Client Defined Field Service)*
- Update Client Defined Field *(API Explorer > Accountholder > Client Defined Field Service)*
- Add Account Collateral Relationship *(API Explorer > Accounts > Account Collateral Service)*


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Party</span> *API Explorer > Accountholder > Party Service*


- Added the following fields in the API to return employment details in case of a person party and business establishment date in case of a business/organization party:
	- PartyRec/PersonPartyInfo/Employment/EmployerName
 	- PartyRec/PersonPartyInfo/Employment/Occupation
	- PartyRec/PersonPartyInfo/Employment/TimeFrame/StartDt
	- PartyRec/OrgPartyInfo/OrgEstablishDt


<span style="font-size: 22px; ">Get Card</span> *API Explorer > Debit Cards > Card Service*


- Added the CardRec/CardInfo/CardTrnLimit aggregate to return card transaction limits for the requested card


<span style="font-size: 22px; ">Get Party Account Relationship - ByAcct</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the following aggregates in the API to return issued identification information for person or organization customers:
  	- PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/IssuedIdent
  	- PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/IssuedIdent 

<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Get Account Transaction</span> *API Explorer > Transactions > Account Transaction Service*

- Fixed Get Account Transaction-LOAN to retrieve the transaction history for CLA accounts

<span style="font-size: 22px; ">Get Card Account Relationship</span> *API Explorer > Debit Cards > Card Account Relationship Service*

- Fixed the API to send AddrType field correctly to the Cleartouch core

<!-- type: tab -->
> #### Note
> Support for Finxact v1.21.
> 
<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span>


Added the following API endpoints:
- Add Account - Deposit *(API Explorer > Accounts > Account Service)*
- Get Account - Deposit *(API Explorer > Accounts > Account Service)*
- Get Account - Loan *(API Explorer > Accounts > Account Service)*
- Update Account *(API Explorer > Accounts > Account Service)*
- Add Account Hold *(API Explorer > Transactions > Account Hold Service)*
- Get Account Hold *(API Explorer > Transactions > Account Hold Service)*
- Update Account Hold *(API Explorer > Transactions > Account Hold Service)*
- Delete Account Hold *(API Explorer > Transactions > Account Hold Service)*
- Get Account Transaction *(API Explorer > Transactions > Account Transaction Service)*
- Get Address - ByAddrId *(API Explorer > Accountholder > Address Service)*
- Get Address - ByPartyrId *(API Explorer > Accountholder > Address Service)*
- Update Address *(API Explorer > Accountholder > Address Service)*
- Add Party Account Reltionship *(API Explorer > Accountholder > Party Account Relationship Service)*
- Get Party Account Relationship - ByAcct *(API Explorer > Accountholder > Party Account Relationship Service)*
- Get Party Account Relationship - ByParty *(API Explorer > Accountholder > Party Account Relationship Service)*
- Update Party Account Relationship *(API Explorer > Accountholder > Party Account Relationship Service)*
- Add Party *(API Explorer > Accountholder > Party Service)*
- Get Party *(API Explorer > Accountholder > Party Service)*
- Update Party *(API Explorer > Accountholder > Party Service)*
- Get Party List *(API Explorer > Accountholder > Party Service)*
- Get Portfolio *(API Explorer > Accounts > Portfolio Service)*
- Get Product List *(API Explorer > Operation and Servicing > Product Service)*
- Get Product Specification *(API Explorer > Operation and Servicing > Product Specification Service)*
- Add Stop Check *(API Explorer > Transactions > Stop Check Service)*
- Get Stop Check *(API Explorer > Transactions > Stop Check Service)*
- Update Stop Check *(API Explorer > Transactions > Stop Check Service)*
- Cancel Stop Check *(API Explorer > Transactions > Stop Check Service)*
- Add Stop Item *(API Explorer > Transactions > Stop Item Service)*
- Get Stop Item *(API Explorer > Transactions > Stop Item Service)*
- Update Stop Item *(API Explorer > Transactions > Stop Item Service)*
- Cancel Stop Item *(API Explorer > Transactions > Stop Item Service)*
- Add Transfer *(API Explorer > Transfers > Transfer Service)*
- Get Transfer *(API Explorer > Transfers > Transfer Service)*
- Update Transfer *(API Explorer > Transfers > Transfer Service)*
- Get Transfer List *(API Explorer > Transfers > Transfer Service)*
- Delete Transfer *(API Explorer > Transfers > Transfer Service)*
- Add ePreference *(API Explorer > Accounts > Document Preference Service)*
- Update ePreference *(API Explorer > Accounts > Document Preference Service)*


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Party Account Relationship - ByParty, Get Party Account Relationship - ByAcct </span> *API Explorer > Accountholder > Party Account Relationship Service*


- Updated the data type to C-130 of the following xpaths:
	- PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/PersonName/FullName
	- PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/OrgName/Name<br>

- Added the new enumeration value *MLA (Mortgage Loan Account)* for the following xpaths:
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/AcctType
	- PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctKeys/AcctType<br>

- Added the following new enumeration values for xpath PartyAcctRelRec/PartyAcctRelInfo/FDICOwnership:
	- DIT (Depository Institution)
	- ANC (Annuity Contract)
	- BIA (American Indian)
	- DOE (Department of Energy) 


<span style="font-size: 22px; ">Add Party Account Relationship</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the new enumeration value *MLA (Mortgage Loan Account)* for the PartyAcctRelInfo/AcctRef/AcctKeys/AcctType xpath<br>

- Added the following new enumeration values for xpath PartyAcctRelInfo/FDICOwnership:
	- DIT (Depository Institution)
	- ANC (Annuity Contract)
	- BIA (American Indian)
	- DOE (Department of Energy) 


<span style="font-size: 22px; ">Update Party Account Relationship</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the new enumeration value *MLA (Mortgage Loan Account)* for the following xpath:
	- PartyAcctRelKeys/AcctKeys/AcctType
	- PartyAcctRelStatusRec/PartyAcctRelKeys/AcctKeys/AcctType<br>

- Added the following new enumeration values for xpath PartyAcctRelInfo/FDICOwnership:
	- DIT (Depository Institution)
	- ANC (Annuity Contract)
	- BIA (American Indian)
	- DOE (Department of Energy) 


<span style="font-size: 22px; ">Get Account - Loan</span> *API Explorer > Accounts > Account Service*


- Added the new enumeration value *MLA (Mortgage Loan Account)* for the AcctSel/AcctKeys/AcctType AcctRec/AcctKeys/AcctType xpath


<span style="font-size: 22px; ">Add Account - Deposit</span> *API Explorer > Accounts > Account Service*


- Added the following new enumeration values for xpath PartyAcctRelInfo/FDICOwnership:
	- DIT (Depository Institution)
	- ANC (Annuity Contract)
	- BIA (American Indian)
	- DOE (Department of Energy) 


<span style="font-size: 22px; ">Add Transfer</span> *API Explorer > Transfers > Transfer Service*


- Added the new enumeration value *MLA (Mortgage Loan Account)* for the following xpath:
	- XferInfo/FromAcctRef/AcctKeys/AcctType
	- XferInfo/ToAcctRef/AcctKeys/AcctType
	- XferStatusRec/XferKeys/AcctKeys/AcctType


<span style="font-size: 22px; ">Update Transfer</span> *API Explorer > Transfers > Transfer Service*


- Added the new enumeration value *MLA (Mortgage Loan Account)* for the following xpath:
	- XferInfo/FromAcctRef/AcctKeys/AcctType
	- XferInfo/ToAcctRef/AcctKeys/AcctType


<span style="font-size: 22px; ">Get Transfer</span> *API Explorer > Transfers > Transfer Service*


- Added the new enumeration value *MLA (Mortgage Loan Account)* for the following xpath:
	- XferRec/XferInfo/FromAcctRef/AcctKeys/AcctType
	- XferRec/XferInfo/ToAcctRef/AcctKeys/AcctType


<span style="font-size: 22px; ">Get Transfer List</span> *API Explorer > Transfers > Transfer Service*


- Added the new enumeration value *MLA (Mortgage Loan Account)* for the following xpath:
	- XferListRec/XferListInfo/FromAcctRef/AcctKeys/AcctType
	- XferListRec/XferListInfo/ToAcctRef/AcctKeys/AcctType


<span style="font-size: 22px; ">Get Party, Get Party List</span> *API Explorer > Accountholder > Party Service*


- Updated the data type to C-130 of the following xpaths:
	- PartyRec/PersonPartyInfo/PersonData/PersonName/FullName
	- PartyRec/OrgPartyInfo/OrgData/OrgName/Name


<span style="font-size: 22px; ">Update Party, Add Party</span> *API Explorer > Accountholder > Party Service*


- Updated the data type to C-130 of the following xpaths:
	- PersonPartyInfo/PersonData/PersonName/FullName
	- OrgPartyInfo/OrgData/OrgName/Name


<span style="font-size: 22px; ">Get Account Transaction</span> *API Explorer > Transactions > Account Transaction Service*


- Added the new aggregate *AcctTrnRec/AcctTrnInfo/Checks* and following xpaths in it:
	- AcctTrnRec/AcctTrnInfo/Checks/ChkNum
	- AcctTrnRec/AcctTrnInfo/Checks/TrnImageId
	- AcctTrnRec/AcctTrnInfo/Checks/TrnImageBackId
 
- Added the new enumeration value *MLA (Mortgage Loan Account)* for the AcctTrnSel/AcctKeys/AcctType xpath
<!-- type: tab-end -->
