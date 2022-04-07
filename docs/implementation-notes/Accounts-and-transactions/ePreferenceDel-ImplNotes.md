# Implementation Notes for ePreference Del
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
|`ePreferenceKeys`||  |
|`ePreferenceKeys.AcctKeys`||  |
|`ePreferenceKeys.AcctKeys.AcctId`||  |
|`ePreferenceKeys.AcctKeys.AcctType`|DDA<br>SDA<br>LOAN<br>CDA|  |
|`ePreferenceKeys.ePreferenceIdent`||  |
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`ePreferenceStatusRec`||  |
|`ePreferenceStatusRec.ePreferenceKeys`||  |
|`ePreferenceStatusRec.ePreferenceKeys.AcctKeys`||  |
|`ePreferenceStatusRec.ePreferenceKeys.AcctKeys.AcctId`||  |
|`ePreferenceStatusRec.ePreferenceKeys.AcctKeys.AcctType`||  |
|`ePreferenceStatusRec.ePreferenceKeys.ePreferenceIdent`||  |
|`ePreferenceStatusRec.ePreferenceStatus`||  |
|`ePreferenceStatusRec.ePreferenceStatus.ePreferenceStatusCode`|Valid<br>|  |
|`ePreferenceStatusRec.ePreferenceStatus.EffDt`||  |
<!-- type: tab-end -->
