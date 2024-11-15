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
| CERT Deployment      | October 10, 2024 - October 16, 2024 | ![Done](https://github.com/user-attachments/assets/4b33bfc3-7017-49d1-af32-d7ba7d57e6c1) |
| PROD Deployment      | October 24, 2024 - October 25, 2024 | ![Done](https://github.com/user-attachments/assets/4b33bfc3-7017-49d1-af32-d7ba7d57e6c1)|
| General Availability (GA) | October 31, 2024	             | ![Available](https://github.com/user-attachments/assets/fe369b6c-5b0a-4cdd-bd48-27ecbc38ba59) |

<!-- type: tab -->

|        Activity      |  Planned Schedule  |	  Status    |
| -------------- |----------------------------|---------|
| CERT Deployment      | November 4, 2024 - November 14, 2024   | ![In Progress](https://github.com/user-attachments/assets/56f02287-e9bd-4835-85f4-4c9b3f9cf186) |
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
titles: Layout 1
-->

## 2024_Q4.2

### Enhancements

| API Name | Description | Environment Availability |
| -------- | ----------- | ------------------------ |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> |<span style="color: gray; font-style: italic; display: block; position: relative;"> <span style="font-size: small; color: dark gray; font-style: italics; position: absolute; right: 0;">Backward-incompatible change: [Updated Enumerations (04)](?path=docs/backward-incompatible-change-glossary.md "Click to know more") </span><span style="font-size: small; color: gray; font-style: italic; text-align: left; display: block;">FETP-2563</span></span>We resolved the issue in the `EnumDesc` fields, where value configured for one "OrganizationId" was assigned to the value set for another "OrganizationId". Previously, the incorrect enumeration description was assigned from cache that caused the issue in service operation.  <br> **Impacted Fields:** <br> `PartyRec/PersonPartyInfo/RelationshipMgr/RelationshipMgrIdentEnumDesc` <br> `PartyRec/OrgPartyInfo/RelationshipMgr/RelationshipMgrIdentEnumDesc` <br> `PartyRec/PersonPartyInfo/OEDCodeEnumDesc` | CERT |
| <a href="../api/?type=post&path=/acctservice/acctmgmt/accounts/secured" title="Click to open">Get Account Details-LOAN</a> |<!--[BCH_PLACEHOLDER]--><span style="font-size: small; color: gray; font-style: italic; text-align: left; display: block;">FETP-2563</span></span>We resolved the issue in the `EnumDesc` fields, where value configured for one "OrganizationId" was assigned to the value set for another "OrganizationId". Previously, the incorrect enumeration description was assigned from cache that caused the issue in service operation.  <br> **Impacted Fields:** <br> `PartyRec/PersonPartyInfo/RelationshipMgr/RelationshipMgrIdentEnumDesc` <br> `PartyRec/OrgPartyInfo/RelationshipMgr/RelationshipMgrIdentEnumDesc` <br> `PartyRec/PersonPartyInfo/OEDCodeEnumDesc` | CERT |
<!-- type: tab-end -->
