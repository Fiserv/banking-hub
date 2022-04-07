# Implementation Notes for StopChk Can
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
|`StopChkKeys`||This service requires AcctKeys and StopChkIdent to identify the item to delete.|
|`StopChkKeys.AcctKeys`|||
|`StopChkKeys.AcctKeys.AcctId`|||
|`StopChkKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`StopChkKeys.StopChkIdent`|||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`StopChkStatusRec`|||
|`StopChkStatusRec.StopChkKeys`|||
|`StopChkStatusRec.StopChkKeys.AcctKeys`|||
|`StopChkStatusRec.StopChkKeys.AcctKeys.AcctId`|||
|`StopChkStatusRec.StopChkKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN||
|`StopChkStatusRec.StopChkKeys.StopChkIdent`|||
|`StopChkStatusRec.StopChkStatus`|||
|`StopChkStatusRec.StopChkStatus.StopChkStatusCode`|Deleted||
|`StopChkStatusRec.StopChkStatus.EffDt`|||
<!-- type: tab-end -->
