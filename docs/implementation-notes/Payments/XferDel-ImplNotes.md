# Implementation Notes for Xfer Del
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field descriptions of below listed fields, please refer the API Explorer section of this API.


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`XferKeys`||For service provider, Transfer Identifier is the combination of Account Number (of account debited), Account Type and Addenda Number|
|`XferKeys.AcctKeys`|||
|`XferKeys.AcctKeys.AcctId`|||
|`XferKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferKeys.XferIdent`|||
# Response Schema
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
<!-- type: tab-end -->
