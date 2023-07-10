# Release Notes 
### 2023_Q2
V 11.0.0
<!-- 
type: tab 
titles: Finxact, DNA
-->

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
- Get Party Account Relatioship - ByAcct *(API Explorer > Accountholder > Party Account Relationship Service)*
- Get Party Account Relationship - ByParty *(API Explorer > Accountholder > Party Account Relationship Service)*
- Update Party Account Relatioship *(API Explorer > Accountholder > Party Account Relationship Service)*
- Add Party *(API Explorer > Accountholder > Party Service)*
- Get Party *(API Explorer > Accountholder > Party Service)*
- Update Party *(API Explorer > Accountholder > Party Service)*
- Get Party List *(API Explorer > Accountholder > Party Service)*
- Get Port *(API Explorer > Accounts > Port Service)*
- Get Product List *(API Explorer > Operation and Servicing > Product Service)*
- Get Prodeuct Specification *(API Explorer > Operation and Servicing > Product Specification Service)*
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

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span>


Added the following API endpoints:
- Get Account Details *(API Explorer > Accounts > Account Service)*
- Update Account - Deposits *(API Explorer > Accounts > Account Service)*
- Get Party *(API Explorer > Accountholder > Party Service)*
- Get Party Account Relationship - ByParty *(API Explorer > Accountholder > Party Account Relationship Service)*
- Add Credit *(API Explorer > Transactions >  Credit Service)*
- Reverse Credit *(API Explorer > Transactions > Credit Service)*
- Add Debit *(API Explorer > Transactions >  Debit Service)*
- Reverse Debit *(API Explorer > Transactions > Debit Service)*

<!-- type: tab-end -->
