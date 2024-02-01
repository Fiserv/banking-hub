# Release Notes 
### 2023_Q4
V 11.0.0
<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, Finxact
-->


<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Fixed the error occurring while adding Deferral Addenda<br>
- Fixed the response error that occurred while adding DeferCost through product defaults


<span style="font-size: 22px; ">Update Account-SDA</span> *API Explorer > Accounts > Account Service*


- Fixed the error that occurred during address update


<span style="font-size: 22px; ">Update Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Fixed an error related to credit bureau data


<span style="font-size: 22px; ">Get Account Details-LOAN</span> *API Explorer > Accounts > Account Service*


- Fixed the issue with the "OriginatingBranchEnumDesc" field so that it displays the correct value


<span style="font-size: 22px; ">Get Account Transaction History-DDL</span> *API Explorer > Transactions > Account Transaction Service*


- Fixed an inquiry error that occurred in AMS 2.0 while inquiring on DDL account types


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>
Information is not available at the moment. Stay tuned for the updates.

<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Fixed the inquiry error, which was displaying only the first payment schedule even when the inquiry is made for multiple payment schedules<br>
- Fixed the invalid notice error. This error was occuring when the "NoticeData" aggregate is passed<br>
- Fixed an issue where the account was not getting created when SBA data is provided


<span style="font-size: 22px; ">Get Account Details-DDA</span> *API Explorer > Accounts > Account Service*


- Fixed the "AcctDtlStatus" field issue, which was not getting returned with the status as "NoDebitPost"


<span style="font-size: 22px; ">Get Account Transaction History</span> *API Explorer > Transactions > Account Transaction Service*


- Fixed an internal server error in response when the "RecCtrlIn" field is not provided in the request


<span style="font-size: 22px; ">Get Account Transaction History-LOAN</span> *API Explorer > Transactions > Account Transaction Service*


- Fixed the issue that was returning 15 records despite the limit defined in the "MaxRecLimit" field


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">What's New </p>
Information is not available at the moment. Stay tuned for the updates.

<!-- type: tab -->
> #### Note
> Support for Finxact v1.21.
> 
<p style="font-size: 24px; font-weight: bold;">What's New </p>

<span style="font-size: 22px; ">General</span>


Added the following API endpoints:
- Update Beneficial Owner *(API Explorer > Accountholder > Beneficial Owner Service)*
- Add Beneficial Owner *(API Explorer > Accountholder > Beneficial Owner Service)*
- Delete Beneficial Owner *(API Explorer > Accountholder > Beneficial Owner Service)*
- Get Beneficial Owner *(API Explorer > Accountholder > Beneficial Owner Service)*
- Add Beneficiary *(API Explorer > Accountholder > Beneficiary Service)*
- Delete Beneficiary *(API Explorer > Accountholder > Beneficiary Service)*
- Get Beneficiary *(API Explorer > Accountholder > Beneficiary Service)*
- Update Beneficiary *(API Explorer > Accountholder > Beneficiary Service)*
- Delete Party Address *(API Explorer > Accountholder > Party Service)*
- Delete Party Email *(API Explorer > Accountholder > Party Service)*
- Delete Party Phone *(API Explorer > Accountholder > Party Service)*


<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Get Party Account Relationship-ByParty</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the following new XPATHs:
	- PartyAcctRelInfo/PartyAcctRelData/HasAccessRights
	- PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/DateData
	- PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/DateData/DateType
	- PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/DateData/DateValue
	- PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/OEDCode
	- PartyAcctRelRec/PartyAcctRelInfo/Beneficiary
	- PartyAcctRelRec/PartyAcctRelInfo/Beneficiary/BeneficiaryPercent
	- PartyAcctRelRec/PartyAcctRelInfo/Liability
	- PartyAcctRelRec/PartyAcctRelInfo/Liability/LiabilityAmt
	- PartyAcctRelRec/PartyAcctRelInfo/OwnerPercent
	- PartyAcctRelSel/IncAddtlAcctInfoInd
- Removed the enum value "CMA" for the "PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/AcctType" XPATH


<span style="font-size: 22px; ">Get Party Account Relationship-ByAcct</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the following new API endpoints:
	- PartyAcctRelRec/PartyAcctRelInfo/Nickname
	- PartyAcctRelRec/PartyAcctRelInfo/Beneficiary
	- PartyAcctRelRec/PartyAcctRelInfo/Beneficiary/BeneficiaryPercent
	- PartyAcctRelRec/PartyAcctRelInfo/Liability
	- PartyAcctRelRec/PartyAcctRelInfo/Liability/LiabilityAmt
	- PartyAcctRelRec/PartyAcctRelInfo/OwnerPercent
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/SvcIdent/SvcNbr
	- PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/OEDCode
- Added the "MultiSystemInd" header field
- Removed the enum value "CMA" for the following XPATHs:
	- PartyAcctRelSel/AcctKeys/AcctType
	- PartyAcctRelRec/PartyAcctRelKeys/AcctKeys/AcctType


<span style="font-size: 22px; ">Update Party Account Relationship</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the following new API endpoints:
	- PartyAcctRelInfo/Beneficiary
	- PartyAcctRelInfo/Beneficiary/BeneficiaryPercent
	- PartyAcctRelInfo/Liability
	- PartyAcctRelInfo/Liability/LiabilityAmt
	- PartyAcctRelInfo/Nickname
	- PartyAcctRelInfo/TaxReportingSignerInd
- Updated exception handling for the following XPATHs:
	- PartyAcctRelInfo/Beneficiary/BeneficiaryPercent
	- PartyAcctRelInfo/FDICOwnership
	- PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelType
	- PartyAcctRelKeys/PartyKeys/PartyId
- Removed exception handling for the "PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelOrder" XPATH
- Removed the enum value "CMA" for the following XPATHs:
	- PartyAcctRelStatusRec/PartyAcctRelKeys/AcctKeys/AcctType
	- PartyAcctRelKeys/AcctKeys/AcctType


<span style="font-size: 22px; ">Add Party Account Relationship</span> *API Explorer > Accountholder > Party Account Relationship Service*


- Added the following new API endpoints:
	- PartyAcctRelInfo/Beneficiary
	- PartyAcctRelInfo/Beneficiary/BeneficiaryPercent
	- PartyAcctRelInfo/Liability
	- PartyAcctRelInfo/Liability/LiabilityAmt
	- PartyAcctRelInfo/Nickname	
- Updated exception handling for the "PartyAcctRelInfo/AcctRef/AcctKeys/AcctType" XPATH
- Removed the enum value "CMA" for the following XPATHs:
	- PartyAcctRelInfo/AcctRef/AcctKeys/AcctType
	- PartyAcctRelStatusRec/PartyAcctRelKeys/AcctKeys/AcctType


<span style="font-size: 22px; ">Add Party</span> *API Explorer > Accountholder > Party Service*


- Added the following new XPATHs:
	- OrgPartyInfo/DisclosureData
	- OrgPartyInfo/DisclosureData/DisclosureAckType
	- OrgPartyInfo/DisclosureData/DisclosureIdent
	- OrgPartyInfo/NAICS
	- OrgPartyInfo/OrgData/Contact/PostAddr/PreferredAddr
	- OrgPartyInfo/TaxDataInfo/ForeignTaxData/W8FormSignedInd
	- OrgPartyInfo/WithholdingOption
	- PersonPartyInfo/DisclosureData/DisclosureAckType
	- PersonPartyInfo/DisclosureData/DisclosureIdent
	- PersonPartyInfo/NAICS
	- PersonPartyInfo/PersonData/Contact/PostAddr/PreferredAddr
	- PersonPartyInfo/TaxDataInfo/ForeignTaxData/W8FormSignedInd
	- PersonPartyInfo/WithholdingOption
- Updated exception handling for the following XPATHs:
	- OrgPartyInfo/NAICS
	- OrgPartyInfo/OrgData/Contact/PhoneNum/Phone
	- OrgPartyInfo/OrgData/Contact/PostAddr/AddrType
	- OrgPartyInfo/OrgData/Contact/PostAddr/PostalCode
	- OrgPartyInfo/TaxDataInfo/TaxIdent
	- PersonPartyInfo/OEDCode
	- PersonPartyInfo/PersonData/Contact/PhoneNum/Phone
	- PersonPartyInfo/PersonData/Contact/PostAddr/AddrType
	- PersonPartyInfo/PersonData/Contact/PostAddr/PostalCode
	- PersonPartyInfo/SecretData/SecretIdent
	- PersonPartyInfo/TaxDataInfo/TaxIdent
- Removed the "OrgPartyInfo/OEDCode" XPATH


<span style="font-size: 22px; ">Get Party</span> *API Explorer > Accountholder > Party Service*


- Added the following new XPATHs:
	- OrgPartyInfo/DisclosureData
	- OrgPartyInfo/DisclosureData/DisclosureAckType
	- OrgPartyInfo/DisclosureData/DisclosureIdent
	- OrgPartyInfo/NAICS
	- OrgPartyInfo/OrgData/Contact/PostAddr/InvalidAddrInd
	- OrgPartyInfo/OrgData/Contact/PostAddr/PreferredAddr
	- OrgPartyInfo/TaxDataInfo/ForeignTaxData/W8FormSignedInd
	- OrgPartyInfo/WithholdingOption
	- PersonPartyInfo/DisclosureData
	- PersonPartyInfo/DisclosureData/DisclosureAckType
	- PersonPartyInfo/DisclosureData/DisclosureIdent
	- PersonPartyInfo/NAICS
	- PersonPartyInfo/PersonData/Contact/PostAddr/InvalidAddrInd
	- PersonPartyInfo/PersonData/Contact/PostAddr/PreferredAddr
	- PersonPartyInfo/TaxDataInfo/ForeignTaxData/W8FormSignedInd
	- PersonPartyInfo/WithholdingOption
- Updated exception handling for the following XPATHs:
	- OrgPartyInfo/OrgData/Contact/PhoneNum/Phone
	- OrgPartyInfo/OrgData/Contact/PostAddr/AddrUse
	- OrgPartyInfo/OrgData/Contact/PostAddr/PostalCode
	- OrgPartyInfo/ResidenceCountry/CountryCodeSource
	- OrgPartyInfo/TaxDataInfo/TaxIdent
	- PartyKeys/PartyId
	- PersonPartyInfo/OEDCode
	- PersonPartyInfo/PersonData/Contact/PhoneNum/Phone
	- PersonPartyInfo/PersonData/Contact/PostAddr/AddrUse
	- PersonPartyInfo/PersonData/Contact/PostAddr/PostalCode
	- PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeSource
	- PersonPartyInfo/ResidenceCountry/CountryCodeSource
	- PersonPartyInfo/SecretData/SecretIdent
	- PersonPartyInfo/TaxDataInfo/TaxIdent


<span style="font-size: 22px; ">Update Party</span> *API Explorer > Accountholder > Party Service*


- Added the following new XPATHs:
	- OrgPartyInfo/DisclosureData
	- OrgPartyInfo/DisclosureData/DisclosureAckType
	- OrgPartyInfo/DisclosureData/DisclosureIdent
	- OrgPartyInfo/NAICS
	- OrgPartyInfo/OrgData/Contact/PostAddr/InvalidAddrInd
	- OrgPartyInfo/OrgData/Contact/PostAddr/PreferredAddr
	- OrgPartyInfo/TaxDataInfo/ForeignTaxData/W8FormSignedInd
	- OrgPartyInfo/WithholdingOption
	- PersonPartyInfo/DisclosureData
	- PersonPartyInfo/DisclosureData/DisclosureAckType
	- PersonPartyInfo/DisclosureData/DisclosureIdent
	- PersonPartyInfo/NAICS
	- PersonPartyInfo/PersonData/Contact/PostAddr/InvalidAddrInd
	- PersonPartyInfo/PersonData/Contact/PostAddr/PreferredAddr
	- PersonPartyInfo/TaxDataInfo/ForeignTaxData/W8FormSignedInd
	- PersonPartyInfo/WithholdingOption
- Updated exception handling for the following XPATHs:
	- OrgPartyInfo/OrgData/Contact/PhoneNum/Phone
	- OrgPartyInfo/OrgData/Contact/PostAddr/AddrUse
	- OrgPartyInfo/OrgData/Contact/PostAddr/PostalCode
	- OrgPartyInfo/ResidenceCountry/CountryCodeSource
	- OrgPartyInfo/TaxDataInfo/TaxIdent
	- PartyKeys/PartyId
	- PersonPartyInfo/OEDCode
	- PersonPartyInfo/PersonData/Contact/PhoneNum/Phone
	- PersonPartyInfo/PersonData/Contact/PostAddr/AddrUse
	- PersonPartyInfo/PersonData/Contact/PostAddr/PostalCode
	- PersonPartyInfo/PersonData/IssuedIdent/GovIssuedIdent/CountryCode/CountryCodeSource
	- PersonPartyInfo/ResidenceCountry/CountryCodeSource
	- PersonPartyInfo/SecretData/SecretIdent
	- PersonPartyInfo/TaxDataInfo/TaxIdent


<!-- type: tab-end -->
