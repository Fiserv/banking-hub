# Implementation Notes for Delete CreditLine
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`CreditLineKeys`|||
|`CreditLineKeys.AcctKeys`|||
|`CreditLineKeys.AcctKeys.AcctId`||Account number of line record.<br>|
|`CreditLineKeys.AcctKeys.AcctType`|CLOC||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`CreditLineStatusRec`|||
|`CreditLineStatusRec.CreditLineKeys`|||
|`CreditLineStatusRec.CreditLineKeys.AcctKeys`|||
|`CreditLineStatusRec.CreditLineKeys.AcctKeys.AcctId`||Account number of the line entered by the user.<br>|
|`CreditLineStatusRec.CreditLineKeys.AcctKeys.AcctType`|CLOC||
|`CreditLineStatusRec.CreditLineStatus`|||
|`CreditLineStatusRec.CreditLineStatus.CreditLineStatusCode`|Valid||
|`CreditLineStatusRec.CreditLineStatus.EffDt`|||
<!-- type: tab-end -->
