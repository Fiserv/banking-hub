# Implementation Notes for ePreference Del
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
