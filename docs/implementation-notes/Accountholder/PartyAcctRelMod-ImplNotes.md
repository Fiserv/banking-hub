# Implementation Notes for Mod PartyAcctRel
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, DNA, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`||  |
|`PartyAcctRelKeys`||  |
|`PartyAcctRelKeys.AcctKeys`||  |
|`PartyAcctRelKeys.AcctKeys.AcctId`||  |
|`PartyAcctRelKeys.AcctKeys.AcctType`|CDA<br>CRD<br>DDA<br>LOAN<br>SDA<br>SDB<br>CLOC<br> |  |
|`PartyAcctRelInfo`||Multiple aggregate can be sent in the request, the service expects the end state of the customer relationship with the account to be sent in the request, if not sent will assume that the relationship is no longer needed and will be removed from the account.|
|`PartyAcctRelInfo.PartyRef`||  |
|`PartyAcctRelInfo.PartyRef.PartyKeys`||  |
|`PartyAcctRelInfo.PartyRef.PartyKeys.PartyId`||  |
|`PartyAcctRelInfo.PartyAcctRelData`||This aggregate sent in the request, modifies display or inquiry names as well as order of theses names, tax ownership and relationship of the party with the account.<br>Statement or mailing address relationships are not modified within this service.<br><br>|
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelType`|Owner<br>Signer<br>OwnerSigner<br>JointTenancy<br>Executor<br>Trustee<br>Borrower<br>CoBorrower<br>Custodian<br>DoingBusinessAs|Values are client-defined and valid value Trustee is interchangeable with Fiduciary.|
|`PartyAcctRelInfo.PartyAcctRelData.PartyAcctRelOrder`|First<br>Second<br>Third<br>Other|Party Account Relationship Order as "First", "Second", and "Third" are considered to be main names on the account and most commonly applies to Party Relationship Types as OwnerSigner and Signer, Owner while "other" is used for relationships other then OwnerSigner, Signer, Owner.|
|`PartyAcctRelInfo.TaxReportingOwnerInd`|true<br>false|***Required**<br>For this field only one name can be denoted per account. If marked as true for multiple names, only the first one with the indicator will be consider as tax reporting owner.<br>By default if no party has the indicator set to true, the first party will be selected as the tax owner indicator.<br><br>Please note Tax Reporting Party can only be set as Owner or a Signer. |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`PartyAcctRelStatusRec`||  |
|`PartyAcctRelStatusRec.PartyAcctRelKeys.AcctKeys`||  |
|`PartyAcctRelStatusRec.PartyAcctRelKeys.AcctKeys.AcctId`||  |
|`PartyAcctRelStatusRec.PartyAcctRelKeys.AcctKeys.AcctType`|CDA<br>CRD<br>DDA<br>LOAN<br>SDA<br>SDB<br>CLOC<br> |  |
|`PartyAcctRelStatusRec.PartyAcctRelStatus`||  |
|`PartyAcctRelStatusRec.PartyAcctRelStatus.PartyAcctRelStatusCode`|Valid|  |
|`PartyAcctRelStatusRec.PartyAcctRelStatus.EffDt`||  |
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
