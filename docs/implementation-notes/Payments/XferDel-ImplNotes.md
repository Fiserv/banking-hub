# Implementation Notes for Del Xfer
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, Precision, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`XferKeys`||For service provider, Transfer Identifier is the combination of Account Number (of account debited), Account Type and Addenda Number|
|`XferKeys.AcctKeys`|||
|`XferKeys.AcctKeys.AcctId`|||
|`XferKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferKeys.XferIdent`|||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`XferStatusRec`|||
|`XferStatusRec.XferKeys`|||
|`XferStatusRec.XferKeys.AcctKeys`|||
|`XferStatusRec.XferKeys.AcctKeys.AcctId`|||
|`XferStatusRec.XferKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferStatusRec.XferKeys.XferIdent`|||
|`XferStatusRec.XferStatus`|||
|`XferStatusRec.XferStatus.XferStatusCode`|||
|`XferStatusRec.XferStatus.EffDt`|||
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
