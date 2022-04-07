# Implementation Notes for Addr Del
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Premier, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Notes:
> -	To view the descriptions of fields listed in the below tables, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`OvrdExceptionData`|||
|`AddrKeys`|||
|`AddrKeys.AddrId`|||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`AddrStatusRec`|||
|`AddrStatusRec.AddrKeys`|||
|`AddrStatusRec.AddrKeys.AddrId`|||
|`AddrStatusRec.AddrStatus`|||
|`AddrStatusRec.AddrStatus.AddrStatusCode`|Deleted||
|`AddrStatusRec.AddrStatus.EffDt`|||
<!-- type: tab-end -->
