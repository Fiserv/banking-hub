# Implementation Notes for Update ClientDefinedField

This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.

<!-- 
type: tab 
titles: Premier, Signature, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`ClientDefinedFieldKeys`||Details of either party keys or account keys. <br>Only any one of the two aggregate is sent in the request, failing to which would lead to error in the operation.|
|`ClientDefinedFieldKeys.AcctKeys`||Details used to pass account information in the request.|
|`ClientDefinedFieldKeys.AcctKeys.AcctId`||***Conditionally Required**<br>Required when modifying client defined fields.|
|`ClientDefinedFieldKeys.AcctKeys.AcctType`||***Conditionally Required**<br>Required when modifying account client-defined fields.|
|`ClientDefinedFieldKeys.PartyKeys`||Details used to pass party information in the request.|
|`ClientDefinedFieldKeys.PartyKeys.PartyId`||***Conditionally Required**<br>Name identification, required when modifying party client defined fields.|
|`ClientDefinedFieldInfo`||Details that includes all the client defined fields of the party or account.|
|`ClientDefinedFieldInfo.ClientDefinedData`||This aggregate may repeat many times. In the request there should be one ClientDefinedData aggregate for each client-defined field related to the party or account. <br><br>The modification request will delete a client-defined field from the party or account if this field (currently in use by the party or account) is not included in the modification request.<br><br>The modification request will add a client-defined field to the party or account if the field (not currently in use by the party or account) is included in the modification request<br><br>The modification request will modify a client-defined field of the party or account if the field is currently in use by the party or account. <br><br>Client applications typically perform a ClientDefinedFieldInq prior executing a modification request to obtain the list of all client-defined fields associated to the party or account.|
|`ClientDefinedFieldInfo.ClientDefinedData.DataIdent`||Field Code that has to exist in the Flex Data Specifications provided by the service provider.  The service will issue an error when more than one ClientDefinedData aggregate is sent with the same DataIdent.|
|`ClientDefinedFieldInfo.ClientDefinedData.Value`||***Conditionally Required**<br>Required to be provided in the request while adding or updating the client-defined data.|
|`ClientDefinedFieldInfo.ClientDefinedData.ExpDt`||Optional field.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`ClientDefinedFieldStatusRec`|||
|`ClientDefinedFieldStatusRec.ClientDefinedFieldKeys`|||
|`ClientDefinedFieldStatusRec.ClientDefinedFieldKeys.AcctKeys`|||
|`ClientDefinedFieldStatusRec.ClientDefinedFieldKeys.AcctKeys.AcctId`|||
|`ClientDefinedFieldStatusRec.ClientDefinedFieldKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN<br>|Account type corresponding to the account identifier at the financial institute.|
|`ClientDefinedFieldStatusRec.ClientDefinedFieldKeys.PartyKeys`|||
|`ClientDefinedFieldStatusRec.ClientDefinedFieldKeys.PartyKeys.PartyId`||Name identification for the party.|
|`ClientDefinedFieldStatusRec.ClientDefinedFieldStatus`|||
|`ClientDefinedFieldStatusRec.ClientDefinedFieldStatus.ClientDefinedFieldStatusCode`|Valid|Status of the party or account record as a result of the modification request.|
|`ClientDefinedFieldStatusRec.ClientDefinedFieldStatus.EffDt`||Effective date and time when the client defined field modification request was serviced.|
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
