# Implementation Notes for Update ePreference
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, Signature, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdEXceptionData`||  |
|`ePreferenceKeys`||  |
|`ePreferenceKeys.AcctKeys`||  |
|`ePreferenceKeys.AcctKeys.AcctId`||  |
|`ePreferenceKeys.AcctKeys.AcctType`|DDA<br>SDA<br>LOAN<br>CDA|  |
|`ePreferenceKeys.ePreferenceIdent`||  |
|`ePreferenceInfo`||For setting up additional  e-statement prference, the calling application(user) must ensure that the account has a valid primary address and name (party) associated otherwise the operation will return error|
|`ePreferenceInfo.PartyKeys`||Details that should be provided to update the email address on the primary contact of the PartyId sent in the request.<br>As a default behaviour if the aggregate is not sent or the PartyId is not valid or happens to be of secondary owner of the account, the email address would be updated on the primary contact. Therefore PartyId mut be sent to update the email on the respective owner  and to override the default behaviour. <br><br>Email address corresponding to secondary owner  is not supported by the core to receive the electronic statement and cannot be updated by this operation.|
|`ePreferenceInfo.PartyKeys.PartyId`||Only one PartyId can be sent in the request.|
|`ePreferenceInfo.DocGroupName`||Value for the DocGroup Name between the calling application and the core is passed without any transformation by the ESF. <br>The allowed values for this field is determined by the FI at the time of on-boarding with the integration team. The core allows three digit value ranging from 001 to 999 for the document distribution group.<br><br>Multiple mailing addenda functionality is not available for Loan account types. |
|`ePreferenceInfo.Pswd`||Field label: Electronic Banking Password|
|`ePreferenceInfo.StmtPrepCode`||Applicable for additional ePreference records.|
|`ePreferenceInfo.StmtTruncationOption`||Service provider does not provide ImageOption for SDA or CDA account types in multiple mailing addendas.|
|`ePreferenceInfo.NoticeData`||  |
|`ePreferenceInfo.NoticeData.NoticeType`|RegularNotice<br>ChargeBack<br>|Applicable for additional ePreference records. |
|`ePreferenceInfo.NoticeData.NoticeOption`|NoNotice<br>|Applicable for additional ePreference records.<br><br>EimOption is not available for CDA account type in multiple mailing addendas.|
|`ePreferenceInfo.EmailLink`||Details that are used to modify the email address for the primary owner of the account. Email address corresponding to secondary owner  is not supported by the core to receive the electronic statement and cannot be updated by this operation.<br><br>Only one email can be sent in the request.|
|`ePreferenceInfo.EmailLink.Email`||  |
|`ePreferenceInfo.EmailLink.Email.EmailType`|Business<br>Person|***Conditionally Required**<br>Required to be provided to specify the type when email address is sent in the request|
|`ePreferenceInfo.EmailLink.Email.EmailAddr`||In case PartyId is sent  in the request and is of the owner( First/Second/Third) of the account then the email address is updated on the primary contact record of the respective owner else by deafult the email is updated on the primary contact record of the First Name (primary owner) of the account.<br>If the email is not provided or sent blank in the request, the existing email address is retained by the service provider.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`ePreferenceInfo.PartyKeys`||Details that should be provided to update the email address on the primary contact of the PartyId sent in the request.<br>As a default behaviour if the aggregate is not sent or the PartyId is not valid or happens to be of secondary owner of the account, the email address would be updated on the primary contact. Therefore PartyId mut be sent to update the email on the respective owner  and to override the default behaviour. <br><br>Email address corresponding to secondary owner  is not supported by the core to receive the electronic statement and cannot be updated by this operation.|
|`ePreferenceInfo.PartyKeys.PartyId`||Only one PartyId can be sent in the request.|
|`ePreferenceStatusRec`||  |
|`ePreferenceStatusRec.ePreferenceKeys`||  |
|`ePreferenceStatusRec.ePreferenceKeys.AcctKeys`||  |
|`ePreferenceStatusRec.ePreferenceKeys.AcctKeys.AcctId`||  |
|`ePreferenceStatusRec.ePreferenceKeys.AcctKeys.AcctType`||  |
|`ePreferenceStatusRec.ePreferenceKeys.ePreferenceIdent`||  |
|`ePreferenceStatusRec.ePreferenceStatus`||  |
|`ePreferenceStatusRec.ePreferenceStatus.ePreferenceStatusCode`|Valid|  |
|`ePreferenceStatusRec.ePreferenceStatus.EffDt`||  |
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
