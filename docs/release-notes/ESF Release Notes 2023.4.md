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
- Fixed the error in response when DeferCost is added through product defaults


<span style="font-size: 22px; ">Update Account-SDA</span> *API Explorer > Accounts > Account Service*


- Fixed the error encountered while updating the address


<span style="font-size: 22px; ">Update Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Fixed the error for credit bureau data


<span style="font-size: 22px; ">Get Account Details-LOAN</span> *API Explorer > Accounts > Account Service*


- Fixed the issue with the "OriginatingBranchEnumDesc" field that was fetching the wrong values


<span style="font-size: 22px; ">Get Account Transaction History-DDL</span> *API Explorer > Transactions > Account Transaction Service*


- Fixed the inquiry error in AMS 2.0 when inquiry was made on DDL account type


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Enhancements </p>

<span style="font-size: 22px; ">Update Account-DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Added the following new XPATHs that provides information about financial literacy feature settings:
	- AcctRec/DepositAcctInfo/FinancialLiteracy
	- AcctRec/DepositAcctInfo/FinancialLiteracy/IsRoundUp
	- AcctRec/DepositAcctInfo/FinancialLiteracy/IsFunding


<span style="font-size: 22px; ">Get Accounts-DDA_SDA</span> *API Explorer > Accounts > Account Service*


- Added the following new XPATHs that provides information about financial literacy feature settings:
	- DepositAcctInfo/FinancialLiteracy
	- DepositAcctInfo/FinancialLiteracy/IsRoundUp
	- DepositAcctInfo/FinancialLiteracy/IsFunding


<span style="font-size: 22px; ">Add Transfer-Immediate</span> *API Explorer > Transfers > Transfer Service*


- Added the following enum values to support the feature of financial literacy in the "XferInfo/TransferType" XPATH:
	- Funding
	- Rounding
	- Fee


<!-- type: tab -->
<p style="font-size: 24px; font-weight: bold;">Fixed </p>

<span style="font-size: 22px; ">Add Account-LOAN</span> *API Explorer > Accounts > Account Service*


- Fixed the inquiry error, which was displaying only the first payment schedule even when the inquiry is made for multiple payment schedules<br>
- Fixed the invalid notice errors when the "NoticeData" aggregate is passed<br>
- Fixed the issue of account creation when SBA Data is provided


<span style="font-size: 22px; ">Get Account Details-DDA</span> *API Explorer > Accounts > Account Service*


- Fixed the "AcctDtlStatus" field issue, which was not getting returned with the status as "NoDebitPost"


<span style="font-size: 22px; ">Get Account Transaction History</span> *API Explorer > Transactions > Account Transaction Service*


- Fixed the internal server error in response when the "RecCtrlIn" field is not provided in the request


<span style="font-size: 22px; ">Get Account Transaction History-LOAN</span> *API Explorer > Transactions > Account Transaction Service*


- Fixed the issue of returning 15 records irrespective of the limit defined in the "MaxRecLimit" field


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
- Get Multiple Accounts *(API Explorer > Accounts > Multi Account Service)*
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
	- PartyAcctRelInfo/Nickname
	- PartyAcctRelInfo/TaxReportingSignerInd
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
	- PartyAcctRelInfo/PartyAcctRelData/HasAccessRights
- Updated exception handling for the "PartyAcctRelInfo/AcctRef/AcctKeys/AcctType" XPATH
- Removed the enum value "CMA" for the following XPATHs:
	- PartyAcctRelInfo/AcctRef/AcctKeys/AcctType
	- PartyAcctRelStatusRec/PartyAcctRelKeys/AcctKeys/AcctType
- Removed the "PartyAcctRelInfo/PartyAcctRelData/HasAccessRights" XPATH


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
