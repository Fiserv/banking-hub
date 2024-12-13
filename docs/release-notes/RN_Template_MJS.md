_Specimen for documentation Fixes (Code changes & Non Code changes)_
Ask by Rahul-Should be a separation or a category denoting code changes & noncode changes (mostly documentation-mapping sheet changes) in release notes. we need to thnik how to add and represent in existing release notes format.

<br>Specimen 1<br>
### Fixed
| API Name | Non Code Change | Description | Environment Availability |
| -------- | ------------------------------------------------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | <span style="color: green;">Specimen content for code/non code change. | <span style="color: gray; font-style: italic; display: block; position: relative;"> <span style=" color: #ff6600; font-style: normal; position: absolute; left: 0;">[*Backward-incompatible change - Updated Data Format (07)*](?path=docs/backward-incompatible-change-glossary.md "Click to open") </span><span style="position: absolute; right: 0;">FETP-1212 </span></span><br>We updated the `CRARevenueCode` field to accept a single-digit numeric code for estimated revenue under the Community Reinvestment Act for small businesses or small farms aggregate.<br> **Impacted Field:** <br>`AcctRec/LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode`| CERT |

<br>Specimen 2<br>
### Fixed
| API Name |  Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> <br> <span style="color: green; font-style: small">Specimen content for code/non code change. | <span style="color: gray; font-style: italic; display: block; position: relative;"> <span style=" color: #ff6600; font-style: normal; position: absolute; left: 0;">[*Backward-incompatible change - Updated Data Format (07)*](?path=docs/backward-incompatible-change-glossary.md "Click to open") </span><span style="position: absolute; right: 0;">FETP-1212 </span></span><br>We updated the `CRARevenueCode` field to accept a single-digit numeric code for estimated revenue under the Community Reinvestment Act for small businesses or small farms aggregate.<br> **Impacted Field:** <br>`AcctRec/LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode`| CERT |

<br>Specimen 3<br>
#### Fixed Documentation
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | <span style="color: gray; font-style: italic; display: block; position: relative;"> <span style=" color: #ff6600; font-style: normal; position: absolute; left: 0;">[*Backward-incompatible change - Updated Data Format (07)*](?path=docs/backward-incompatible-change-glossary.md "Click to open") </span><span style="position: absolute; right: 0;"> FETP-1212 </span></span><br><span style="color: green;"> Specimen content for code/non code changes <br> **Impacted Field:** <br>`AcctRec/LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode`| CERT |







<!--_following specimen was created for Veneela (SME-DPoP Error codes & their possible reasons). The format was approved by her on 6/12/24 in a teams call with team, ESF TWs._
The following table lists the standard status codes:

|     Error   Code             |     Error   Description                 |     Error Reason            |     
|------------------------------|-----------------------------------------|------------------------------|
|     1001   – Invalid DPoP    |     Expired DPoP Token                  |If the time difference between the 'issued at' timestamp and the current timestamp is more than 60 seconds.|
|     1002   – Invalid DPoP    |     Public Key Mismatch                 |If the combination of Public & Private key for applications (Integration and Certification) is mismatched.|
|     1003   – Invalid DPoP    |     Invalid HTTP method                 |If the signing method does not match the API call method.
|     1004   – Invalid DPoP    |     Invalid URL                         |
|     1005   – Invalid DPoP    |     Invalid Header                      |
|     1006   – Invalid DPoP    |     Invalid Request Body                |
|     1007   – Invalid DPoP    |     Invalid Selective Payload           |
|     1008   – Invalid DPoP    |     Invalid Form URL encoded            |
|     1009   – Invalid DPoP    |     NoSuchAlgorithmException            |
|     1010   – Invalid DPoP    |     InvalidKeySpecException             |
|     1011   – Invalid DPoP    |     Error generating JWK Thumbprint     |
|     1012   – Invalid DPoP    |     Unknown Error in Java Callout       |
|     1099   – Invalid DPoP    |     Unexpected generic error on APIM    |-->


<!-- # Release Notes


type: tab 
titles: Premier, Precision, Signature, Cleartouch, Finxact, DNA 

 April 12, 2025
  ### New in Premier
## 2024_Q3.2
Specimen for Breaking change placement
### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | <span style="color: gray; font-style: italic; display: block; position: relative;"> <span style=" color: #ff6600; font-style: normal; position: absolute; left: 0;">[*Backward-incompatible change - Updated Data Format (07)*](?path=docs/backward-incompatible-change-glossary.md "Click to open") </span><span style="position: absolute; right: 0;">FETP-1212 </span></span><br>We updated the `CRARevenueCode` field to accept a single-digit numeric code for estimated revenue under the Community Reinvestment Act for small businesses or small farms aggregate.<br> **Impacted Field:** <br>`AcctRec/LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode`| CERT |
|<a href="../api/?type=post&path=/collateralservice/collateral/collateral/secured" title="Click to open"> Get Collateral</a>|<span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">Backward-compatible changes (1) Code Other Non Breaking</span><br> We resolved the issue with the ` ExternalInd ` field where the correct value was not retrieved in the response message. <Br> **Impacted Field**: <br> CollateralRec/CollateralInfo/DepositAcctCollateralData/ExternalInd <br> **Impact Description**: <br>Description of why was this change and what impact does it have.|PROD <br><span style="font-size: small; color: gray; font-style: italic; text-align: left; display: block;">FETP-2563 |<!-- FETP-2563 PROD as on 25 Oct 24. -->
<!--|<a href="../api/?type=post&path=/collateralservice/collateral/collateral/secured" title="Click to open"> Get Collateral</a><br> <span style="font-size: small; color: gray; font-style: italic; text-align: left; display: block;">FETP-2563</span> | <span style="font-size: small; color: orange; font-style: italic; text-align: right; display: block;">Backward-compatible changes (1) Code Other Non Breaking</span><br> We resolved the issue with the ` ExternalInd ` field where the correct value was not retrieved in the response message. <Br> **Impacted Fields**: <br> CollateralRec/CollateralInfo/DepositAcctCollateralData/ExternalInd <br> CollateralRec/CollateralInfo/DepositAcctCollateralData/ExternalInd <br> CollateralRec/CollateralInfo/DepositAcctCollateralData/ExternalInd <br> CollateralRec/CollateralInfo/DepositAcctCollateralData/ExternalInd <br> **Impact Details**: <br> Description of why was this change and what impact does it have. | PROD | <!--  FETP-2563 PROD as on 25 Oct 24. 
|<a href="../api/?type=post&path=/collateralservice/collateral/collateral/secured" title="Click to open"> Get Collateral</a> <br> <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">Backward-compatible changes<br> (1) Code Other Non Breaking</span>|<span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-2563</span> We resolved the issue with the ` ExternalInd ` field where the correct value was not retrieved in the response message. <Br> **Impacted Field**: <br> CollateralRec/CollateralInfo/DepositAcctCollateralData/ExternalInd <br> **Impact Details**: <br> Description of why was this change and what impact does it have.| PROD | <!-- <!-- FETP-2563 PROD as on 25 Oct 24. -->


_Approved by Rahul_
### Enhancements
With this release, the following enhancements are made to improvise the user experience. 
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
|General | We updated the postman collection for Premier core in the <a href="../docs/?path=docs/resources/resources.md">Resources</a>.| PROD|
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open"> Get Account Details-DDA, Get Account Details-SDA</a> | <br> -:<span style="font-size: small; color: gray; font-style: italic;">-: FETP-2313-:</span>-: <br> We added the following fields to support the integration with a financial literacy feature. <br>  `DepositAcctInfo/FinancialLiteracy` <br>`DepositAcctInfo/FinancialLiteracy/IsRoundUp` <br>`DepositAcctInfo/FinancialLiteracy/IsFunding` <br>| CERT |


### Fixed
With this release, the following issues are resolved. 
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/documentservice/document/document/secured/list" title="Click to open">Get Document List</a> | **ESFATIG-2836** <br> Organizations can now automatically add the “Institution Number” condition to retrieve a document list from Director. For configuration, organizations may require some special settings in the service. | CERT | <!-- ESFATIG-2836 -->
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> |**FETP-2543** <br> We resolved the issue where `IRSNameControl` field was not added for the primary PersonParty or OrgParty even when the `LegalName` field is provided in the request. <br>**Impacted Fields:** <br> `PersonPartyInfo/PersonData/PersonName/LegalName` <br> `OrgPartyInfo/OrgData/OrgName/LegalName`| CERT | <!-- ESFACYC-11280/FETP-2543 -->
<!-- <!-- display of the landing content and breaking change at line 20  -->

_Specimen 1_
### Enhancements
With this release, the following enhancements are made to improvise the user experience. 
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
|General | We updated the postman collection for Premier core in the <a href="../docs/?path=docs/resources/resources.md">Resources</a>.| PROD|
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open"> Get Account Details-DDA, Get Account Details-SDA</a>|We added the following fields to support the integration with a financial literacy feature. <br>  `DepositAcctInfo/FinancialLiteracy` <br>`DepositAcctInfo/FinancialLiteracy/IsRoundUp` <br>`DepositAcctInfo/FinancialLiteracy/IsFunding` <br>| CERT |


### Fixed
With this release, the following issues are resolved. 
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/documentservice/document/document/secured/list" title="Click to open">Get Document List</a> | Organizations can now automatically add the “Institution Number” condition to retrieve a document list from Director. For configuration, organizations may require some special settings in the service. | CERT <br> ESFATIG-2836 | <!-- ESFATIG-2836 -->
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved the issue where `IRSNameControl` field was not added for the primary PersonParty or OrgParty even when the `LegalName` field is provided in the request. <br>**Impacted Fields:** <br> `PersonPartyInfo/PersonData/PersonName/LegalName` <br> `OrgPartyInfo/OrgData/OrgName/LegalName`| CERT <br> FETP-2543 | <!-- ESFACYC-11280/FETP-2543 -->


_Specimen 2_
### Enhancements
With this release, the following enhancements are made to improvise the user experience. 
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
|General | We updated the postman collection for Premier core in the <a href="../docs/?path=docs/resources/resources.md">Resources</a>.| PROD|
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open"> Get Account Details-DDA, Get Account Details-SDA</a> | **FETP-2313** <br>We added the following fields to support the integration with a financial literacy feature. <br>  `DepositAcctInfo/FinancialLiteracy` <br>`DepositAcctInfo/FinancialLiteracy/IsRoundUp` <br>`DepositAcctInfo/FinancialLiteracy/IsFunding` <br>| CERT |


### Fixed
With this release, the following issues are resolved. 
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/documentservice/document/document/secured/list" title="Click to open">Get Document List</a> | **ESFATIG-2836** <br> Organizations can now automatically add the “Institution Number” condition to retrieve a document list from Director. For configuration, organizations may require some special settings in the service. | CERT | <!-- ESFATIG-2836 -->
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> |**FETP-2543** <br> We resolved the issue where `IRSNameControl` field was not added for the primary PersonParty or OrgParty even when the `LegalName` field is provided in the request. <br>**Impacted Fields:** <br> `PersonPartyInfo/PersonData/PersonName/LegalName` <br> `OrgPartyInfo/OrgData/OrgName/LegalName`| CERT | <!-- ESFACYC-11280/FETP-2543 -->
<!-- <!-- display of the landing content and breaking change at line 20  -->

_Specimen 3_
### Enhancements
With this release, the following enhancements are made to improvise the user experience. 
| API Name | Description | Environment Availability |  JIRA Reference Number |
| -------- | ----------- | ------------------------ | -----------------------|
|General | We updated the postman collection for Premier core in the <a href="../docs/?path=docs/resources/resources.md">Resources</a>.| PROD| - |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open"> Get Account Details-DDA, Get Account Details-SDA</a> | We added the following fields to support the integration with a financial literacy feature. <br>  `DepositAcctInfo/FinancialLiteracy` <br>`DepositAcctInfo/FinancialLiteracy/IsRoundUp` <br>`DepositAcctInfo/FinancialLiteracy/IsFunding` <br>| CERT |FETP-2313 |


### Fixed
With this release, the following issues are resolved. 
| API Name | Description | Environment Availability |  JIRA Reference Number |
| -------- | ----------- | ------------------------ | -----------------------|
| <a href="../api/?type=post&path=/documentservice/document/document/secured/list" title="Click to open">Get Document List</a> | Organizations can now automatically add the “Institution Number” condition to retrieve a document list from Director. For configuration, organizations may require some special settings in the service. | CERT |ESFATIG-2836 | <!-- ESFATIG-2836 -->
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> |We resolved the issue where `IRSNameControl` field was not added for the primary PersonParty or OrgParty even when the `LegalName` field is provided in the request. <br>**Impacted Fields:** <br> `PersonPartyInfo/PersonData/PersonName/LegalName` <br> `OrgPartyInfo/OrgData/OrgName/LegalName`| CERT | FETP-2543 |<!-- ESFACYC-11280/FETP-2543 -->


_Specimen 4_
### Enhancements
With this release, the following enhancements are made to improvise the user experience. 
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
|General | We updated the postman collection for Premier core in the <a href="../docs/?path=docs/resources/resources.md">Resources</a>.| PROD|
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open"> Get Account Details-DDA, Get Account Details-SDA</a> <br> <span style="font-size: small; color: gray; font-style: italic;">FETP-2313</span> |We added the following fields to support the integration with a financial literacy feature. <br>  `DepositAcctInfo/FinancialLiteracy` <br>`DepositAcctInfo/FinancialLiteracy/IsRoundUp` <br>`DepositAcctInfo/FinancialLiteracy/IsFunding` <br>| CERT |


### Fixed
With this release, the following issues are resolved. 
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/documentservice/document/document/secured/list" title="Click to open">Get Document List</a> <br> <span style="font-size: small; color: gray; font-style: italic;">ESFATIG-2836</span> | Organizations can now automatically add the “Institution Number” condition to retrieve a document list from Director. For configuration, organizations may require some special settings in the service. | CERT | <!-- ESFATIG-2836 -->
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> <br> <span style="font-size: small; color: gray; font-style: italic;">FETP-2543</span> | We resolved the issue where `IRSNameControl` field was not added for the primary PersonParty or OrgParty even when the `LegalName` field is provided in the request. <br>**Impacted Fields:** <br> `PersonPartyInfo/PersonData/PersonName/LegalName` <br> `OrgPartyInfo/OrgData/OrgName/LegalName`| CERT| <!-- ESFACYC-11280/FETP-2543 -->












 
<!-- display of the landing content and breaking change at line 20 -->
<!--### New in Premier-->
<!--## 2024_Q3.2 -->

<!--### Enhancements-->
With this release, the following enhancements are made to improvise the user experience. 
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
|General | We updated the postman collection for Premier core in the <a href="../docs/?path=docs/resources/resources.md">Resources</a>.| PROD|
<!--| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open"> Get Account Details-DDA, Get Account Details-SDA</a> |We added the following fields to support the integration with a financial literacy feature. <br>  `DepositAcctInfo/FinancialLiteracy` <br>`DepositAcctInfo/FinancialLiteracy/IsRoundUp` <br>`DepositAcctInfo/FinancialLiteracy/IsFunding` <br>| CERT |-->
<!--| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open"> Update Account-DDA, Update Account-SDA</a> |We added the following fields to support the integration with a financial literacy feature. <br>  `DepositAcctInfo/FinancialLiteracy` <br>`DepositAcctInfo/FinancialLiteracy/IsRoundUp` <br>`DepositAcctInfo/FinancialLiteracy/IsFunding` <br>| CERT |-->
<!--| <a href="../api/?type=post&path=/epreferenceservice/epreference/ePreferences" title="Click to open"> Add ePreference, </a> <a href="../api/?type=put&path=/epreferenceservice/epreference/ePreferences" title="Click to open"> Update ePreference,</a> <a href="../api/?type=put&path=/epreferenceservice/epreference/ePreferences/secured" title="Click to open">Delete ePreference</a> | We added a new field `OvrdAutoAckInd` to override the warnings that are returned in the response by the core while performing add, update and delete of an ePreference record under these APIs.| CERT |<!-- ESF-1769, ESFACYC-9557, ESFACYC-9558, ESFACYC-7461 & ESFACYC-1110 -->
<!--|<a href="../api/?type=post&path=/epreferenceservice/epreference/ePreferences/secured" title="Click to open"> Get ePreference, </a> <a href="../api/?type=put&path=/epreferenceservice/epreference/ePreferences" title="Click to open"> Update ePreference,</a> <a href="../api/?type=put&path=/epreferenceservice/epreference/ePreferences/secured" title="Click to open">Delete ePreference</a> | We resolved an issue for the `DocGroupName` field where the default value as zero (0) was not returned while retrieving the ePreference record for an account.<details><summary>**Field Name Change/Integration Update/API Modification** </summary> Previously, the API was returning *No record found* error when account was not enrolled for eStatements. After this fix, the API returns successful response with single record having default `DocGroupName` value in the response.</details> | CERT |<!-- ESF-1692/ESFACYC-8243 --> 


<!--### Fixed
With this release, the following issues are resolved. 
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/documentservice/document/document/secured/list" title="Click to open">Get Document List</a> | Organizations can now automatically add the “Institution Number” condition to retrieve a document list from Director. For configuration, organizations may require some special settings in the service. | CERT | <!-- ESFATIG-2836 
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | We resolved the issue where `IRSNameControl` field was not added for the primary PersonParty or OrgParty even when the `LegalName` field is provided in the request. <br>**Impacted Field:** <br> `PersonPartyInfo/PersonData/PersonName/LegalName` <br> `OrgPartyInfo/OrgData/OrgName/LegalName`| CERT | <!-- ESFACYC-11280 
-->

<!-- | API Name/Core | Description |
| --- | ----------- |
| [Add Party](https://google.com "View Link") | Added [Postman collection](https://github.com/Fiserv/banking-hub/files/14896028/Banking.Hub.-.Precision-.Trial.Plan.Postman.Collection.postman_collection.zip) for better linking of API elements together for easy editing, sharing, testing, and reuse. |
| [Update Party](https://google.com "View Link") | The following API endpoints are newly added.<br> [Add Address](Google.com) <br> [Get Address](Google.com) <br> [UpdateAddress](Google.com) <br>  [Delete Address](Google.com) <br> [Get Beneficiary](Google.com) <br> [Add Party Account Relationship](Google.com)| 

 
### Enhancements
With this release, the following enhancements are made to improvise the user experience. 
| API Name | Details of the Enhancement |
| --- | ----------- |
| [Add Document](https://google.com "View Link")| Added the new enum values **DOC** and **XLSX** in the *DocumentInfo/PageData/PageFormat* field as new page formats. This will support more page formats while adding as a document. <br><br>**Impacted Field**: <br> `PageData/PageFormats` | 
| [Update Stop Item](https://google.com "View Link")|  For better API performance, you can extend enumeration values for the field *StopItemReasonCode*. You can define these values using the *ClientDefined_StopChkReasonCode_Rule*. <br><br>**Impacted Field(s)**: <br> `StopChkKeys/AcctKeys/AcctType`  <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType` </li> <br> <br> Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>**Impacted Field(s)**: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType`|


### Fixed
With this release, the following issues are resolved. 
| API Name | Issue and Resolution |
| --- | ----------- |
| [Add Escrow](https://google.com "View Link") | We resolved an issue where the Escrow Expiry Date was sent in an incorrect format.  <br><br>**Impacted Field**: <br> *EscrowInfo/EscrowExpDt*|
|[Add Account-LOAN-INET](https://google.com "View Link")| We resolved an issue where loan accounts were successfully created when the value of the *RateChangeRecurType* field was quarterly which was not specified in the enum values. We have added the **Quarterly** value as an enum value. <br> <br>**Impacted Field**:<br>`LoanAcctInfo/RateChangeData/RateChangeRecurType`|
| [Update Party](https://google.com "View Link")  | While modifying the **Gender** field from existing value or some other allowed value to **Unknown**, the request was not returning the *Gender* field's changed value in the response. To resolve this issue, we updated the gender value **Unknown** in the *XrefTable List_Gender_Rule.* </li> <br><br>**Impacted Field(s)**:<br>`PersonPartyInfo/Gender`|
|[Get Party Account Relationship-ByParty](https://google.com "View Link") |We resolved the issue in the **PartyAcctRelDesc** field (PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelDesc) where numeric value was getting assigned instead of the description from Premier Relationship Specifications. <br><br>**Impacted Field(s)**:<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelDesc` <br> <br>We resolved the issue in the EnumDesc fields where the value set for one tenant on Premier was getting assigned to the value set for another tenant on Premier. <br><br>**Impacted Field(s)**:<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyAcctRelData/PartyAcctRelDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/CountryCode/CountryCodeValueEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/CountryCode/CountryCodeValueEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/IssuedIdent/IssuedIdentTypeEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/IssuedIdent/IssuedIdentTypeEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/PersonPartyListInfo/Contact/PostAddr/AddrUseEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/PartyRef/OrgPartyListInfo/Contact/PostAddr/AddrUseEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/Desc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/AcctDtlStatusEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/OriginatingBranchEnumDesc`<br>`PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctSummInfo/RelationshipMgr/RelationshipMgrIdentEnumDesc`|
 -->

### Known Issues
| API Name | Description |
| --- | ----------- |
|[Get Account-CDA](https://google.com "View Link") | The following enum values for the *AcctBal/BalType* field are not yet updated:<br> Avail <br> AvailCash <br> AvailChk <br> Closing <br> |-->
