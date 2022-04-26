# Implementation Notes for Del AcctHold
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
|`AcctHoldKeys`|||
|`AcctHoldKeys.AcctKeys`|||
|`AcctHoldKeys.AcctKeys.AcctId`|||
|`AcctHoldKeys.AcctKeys.AcctType`|CDA<br>DDA<br>SDA||
|`AcctHoldKeys.AcctHoldIdent`|||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|| |
|`AcctHoldStatusRec`|||
|`AcctHoldStatusRec.AcctHoldKeys`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys.AcctId`|||
|`AcctHoldStatusRec.AcctHoldKeys.AcctKeys.AcctType`|CDA<br>DDA<br>SDA||
|`AcctHoldStatusRec.AcctHoldKeys.AcctHoldIdent`|||
|`AcctHoldStatusRec.AcctHoldStatus`|||
|`AcctHoldStatusRec.AcctHoldStatus.AcctHoldStatusCode`|Deleted||
|`AcctHoldStatusRec.AcctHoldStatus.EffDt`|||
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
