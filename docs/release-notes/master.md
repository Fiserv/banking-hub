# Release Notes 2024_Q4
V 11.0.0

<details open>
<summary><b style="font-size: 20px; color: #ff6600;">Release Schedule </b> </summary>
<!-- 
type: tab 
titles: 2024_Q4.1, 2024_Q4.2, 2024_Q4.3
-->

|        Activity      |  Planned Schedule  |	  Status    |
| -------------- |----------------------------|---------|
| CERT Deployment      | October 10, 2024 - October 15, 2024 |  ![In Progress](https://github.com/user-attachments/assets/4c06d246-df65-49f9-abb7-60bdc2b8958b) |
| PROD Deployment      | October 24, 2024 - October 25, 2024 | ![Not-Started](https://github.com/user-attachments/assets/e75f3245-255d-436c-963a-b72c034036dc) |
| General Availability (GA) | October 31, 2024	             | ![Awaited](https://github.com/user-attachments/assets/c32700c4-6c84-49ba-b318-930a98b6fe64) |

<!-- type: tab -->

|        Activity      |  Planned Schedule  |	  Status    |
| -------------- |----------------------------|---------|
| CERT Deployment      | November 4, 2024 - November 6, 2024   | ![Not-Started](https://github.com/user-attachments/assets/e75f3245-255d-436c-963a-b72c034036dc) |
| PROD Deployment      | November 14, 2024 - November 18, 2024 | ![Not-Started](https://github.com/user-attachments/assets/e75f3245-255d-436c-963a-b72c034036dc) |
| General Availability (GA) | November 21, 2024	               | ![Awaited](https://github.com/user-attachments/assets/c32700c4-6c84-49ba-b318-930a98b6fe64) |

<!-- type: tab -->

|        Activity      |  Planned Schedule  |	  Status    |
| -------------- |----------------------------|---------|
| CERT Deployment      | December 9, 2024 - December 12, 2024 | ![Not-Started](https://github.com/user-attachments/assets/e75f3245-255d-436c-963a-b72c034036dc) |
| PROD Deployment      | January 7, 2025 - January 10, 2025 | ![Not-Started](https://github.com/user-attachments/assets/e75f3245-255d-436c-963a-b72c034036dc) |
| General Availability (GA) | January 10, 2025 | ![Awaited](https://github.com/user-attachments/assets/c32700c4-6c84-49ba-b318-930a98b6fe64) |

<!-- type: tab-end -->

</details>

<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch 
-->

## 2024_Q4.1

### Enhancements

| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-2160</span> We updated the `CRARevenueCode` field to accept a single-digit numeric code for estimated revenue under the Community Reinvestment Act for small businesses or small farms aggregate.<br><br>Impacted Field:<br>`AcctRec/LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode` | CERT |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-LOAN</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-2159</span> We updated the `CRARevenueCode` field to accept a single-digit numeric code for estimated revenue under the Community Reinvestment Act for small businesses or small farms aggregate.<br><br>Impacted Field:<br>`LoanAcctInfo/HomeMortgageDisclosure/CRAData/CRARevenueCode` | CERT |

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/partyservice/parties/parties/secured" title="Click to open"> Get Party</a> |  <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-4507</span> We resolved the issue where the `NAICS` field was retrieved twice in a different casing format instead of once in the response message. <br>**Impacted Fields:** <br> `PartyRec/PersonPartyInfo/NAICS` <br> `PartyRec/OrgPartyInfo/NAICS` | PROD | <!-- FETP-4507-moved from Preview to Active on 30 sept 24, as confirmed by Aknit & 10-09-24-marked as PROD as confirmed by Kavita -->
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-2655</span> We resolved an issue where the values of the `MinPmtChange` and `MaxPmtChange` fields were sent incorrectly through the request message. <br><br>**Impacted Fields:**<br>`LoanAcctInfo/PmtTermReview/MinPmtChange`<br>`LoanAcctInfo/PmtTermReview/MaxPmtChange` | CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-2654</span> We resolved the issue where the value of the `RecurInterval` field was always sent as "1" to service provider when the `PmtTermRecurType` field was set to "Yearly" and the `RecurInterval` field was set to any value.  <br><br>**Impacted Field:**<br>`LoanAcctInfo/PmtTermReview/RecurInterval` | CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-2661</span> We resolved the issue with the `RecurStartDate` field, which was sent incorrectly to the service provider. <br><br>**Impacted Field:**<br>`LoanAcctInfo/PmtSched/RecurModel/RecurRule/RecurStartDate` | CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-CDA</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-4454</span> We resolved the issue where users could not create the certificate when the `AcctType` field value was set to “SDA” in the request. <br><br>**Impacted Field:**<br>`DepositAcctInfo/IntDispData/IntDistAcctRef/AcctKeys/AcctType` | CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-3865</span> We fixed the issue where the `Fee` aggregate was not retrieved in the response message when the `FeeType` field value was set to “Payoff.” <br><br>Impacted Field:<br>`AcctRec/LoanAcctInfo/Fee/FeeType` | CERT |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-DDA</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-4719</span> We fixed the issue where the `OverdraftEnrollOptDt` field value was incorrectly updated regardless of the date sent in the request message. <br><br>Impacted Field: <br>`DepositAcctInfo/OverdraftData/OverdraftEnrollOptDt` | CERT |
| <a href="../api/?type=put&path=/acctservice/acctmgmt/accounts" title="Click to open">Update Account-DDA</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-4609</span> We fixed the issue where the users were unable to update the secondary name identifier (`NameIdent`) for the mailing address of an account.<br><br>Impacted Field:<br>`DepositAcctInfo/PostAddr/NameIdent` | CERT |
| <a href="../api/?type=post&path=/documentservice/document/document/secured/list" title="Click to open">Get Document List</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-3533</span> Organizations can now automatically add the “Institution Number” condition to retrieve a document list from Director. For configuration, organizations may require some special settings in the service. | CERT | <!-- ESFATIG-2836/FETP-3533, Moved from Q3.3 to Q4.1 -->
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts" title="Click to open">Add Account-LOAN </a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-3420</span> We resolved the issue where the value "0" was passed in the resquest regardless of any valid value provided in the `RestrictionReasonCode` field. Now, the expected value is passed in the request. <br> **Impacted Field:** <br> `LoanAcctInfo/PmtPostingRestrictions/RestrictionReasonCode` | CERT | <!-- ESFPAN-2643/ESFAMAX-10124/FETP-3420, Moved from Q3.3 to Q4.1 -->

<!-- type: tab -->

## 2024_Q4.1
### Enhancements
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/xferservice/payments/transfers" title="Click to open">Add Transfer</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-2521</span> We resolved an issue where the users were not able to make payment for loan from another loan account.  | CERT | <!-- ESFAUTO-5574, FETP-2521, Moved from Q3.3 to Q4.1 -->
| <a href="../api/?type=post&path=/partyacctrelservice/partyacctrel/partyacctrel/secured" title="Click to open"> Get Party Account Relationship-ByParty </a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-2387</span> We updated the value of the consumer credit card identifier (applicable only when the value of the `AcctType` field is "CCA", which is Credit Card Account) in the response to match the value of the card service provider. <br> **Impacted Field:** <br> `PartyAcctRelRec/PartyAcctRelInfo/AcctRef/AcctKeys/CardKeys/CardId` | CERT | <!-- ESFAUTO-5842/ESFATIG-2956/FETP-2387, Moved from Q3.3 to Q4.1 -->

### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/documentservice/document/document/secured/list" title="Click to open">Get Document List</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-3533</span> Organizations can now automatically add the “Institution Number” condition to retrieve a document list from Director. For configuration, organizations may require some special settings in the service. | CERT | <!-- ESFATIG-2836/FETP-3533, Moved from Q3.3 to Q4.1 -->

<!-- type: tab -->

## 2024_Q4.1
### Fixed
| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/partyservice/parties/parties" title="Click to open">Add Party</a> | <span style="font-size: small; color: gray; font-style: italic; text-align: right; display: block;">FETP-2487</span>We fixed the issue in `ShortName` field where its value was not saved in accordance with the maximum supported length of 18 characters. Now the field value is saved correctly when the client provides a `ShortName` field value with up to 18 characters is length. <br> **Impacted Fields:** <br> `PersonPartyInfo/ShortName` <br> `OrgPartyInfo/ShortName`| CERT | <!-- FETP-2487, Moved from Q3.3 to Q4.1 -->

<!-- type: tab -->

### What's New
Information is not available at the moment. Stay tuned for the updates. Added test line GN

<!-- type: tab-end -->
