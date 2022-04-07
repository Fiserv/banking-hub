# Implementation Notes for CreditLine Del
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Notes
> 
> - To view the descriptions of fields listed in the below tables, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`CreditLineKeys`|||
|`CreditLineKeys.AcctKeys`|||
|`CreditLineKeys.AcctKeys.AcctId`||This field refers to the account number of line record.<br>|
|`CreditLineKeys.AcctKeys.AcctType`|CLOC||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`CreditLineStatusRec`|||
|`CreditLineStatusRec.CreditLineKeys`|||
|`CreditLineStatusRec.CreditLineKeys.AcctKeys`|||
|`CreditLineStatusRec.CreditLineKeys.AcctKeys.AcctId`||This field refers to the account number of the line entered by the user.<br>|
|`CreditLineStatusRec.CreditLineKeys.AcctKeys.AcctType`|CLOC||
|`CreditLineStatusRec.CreditLineStatus`|||
|`CreditLineStatusRec.CreditLineStatus.CreditLineStatusCode`|Valid||
|`CreditLineStatusRec.CreditLineStatus.EffDt`|||
<!-- type: tab-end -->
