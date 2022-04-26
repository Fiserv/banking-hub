# Implementation Notes for Del ePreference
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
|`ePreferenceKeys`||  |
|`ePreferenceKeys.AcctKeys`||  |
|`ePreferenceKeys.AcctKeys.AcctId`||  |
|`ePreferenceKeys.AcctKeys.AcctType`|DDA<br>SDA<br>LOAN<br>CDA|  |
|`ePreferenceKeys.ePreferenceIdent`||  |
#### Response Schema
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
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
