# Implementation Notes for Update Document
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: Director, Nautilus 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`DocumentKeys`||  |
|`DocumentKeys.DocumentId`||  |
|`DocumentInfo`||  |
|`DocumentInfo.KeywordData`||  |
|`DocumentInfo.KeywordData.Keyword`||  |
|`DocumentInfo.KeywordData.KeywordValue`||Field refers to the value to be added for an existing keyword. If no value is to be added then, this field is not required to be sent.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`DocumentStatusRec`||  |
|`DocumentStatusRec.DocumentKeys`||  |
|`DocumentStatusRec.DocumentKeys.DocumentId`||  |
|`DocumentStatusRec.DocumentStatus`||  |
|`DocumentStatusRec.DocumentStatus.DocumentStatusCode`|Valid|  |
|`DocumentStatusRec.DocumentStatus.EffDt`||  |
<!-- type: tab -->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`DocumentKeys`||  |
|`DocumentKeys.DocumentId`||  |
|`DocumentInfo`||  |
|`DocumentInfo.KeywordData`||  |
|`DocumentInfo.KeywordData.Keyword`||  |
|`DocumentInfo.KeywordData.KeywordValue`||Field refers to the value to be added for an existing keyword. If no value is to be added then, this field is not required to be sent.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`DocumentStatusRec`||  |
|`DocumentStatusRec.DocumentKeys`||  |
|`DocumentStatusRec.DocumentKeys.DocumentId`||  |
|`DocumentStatusRec.DocumentStatus`||  |
|`DocumentStatusRec.DocumentStatus.DocumentStatusCode`|Valid|  |
|`DocumentStatusRec.DocumentStatus.EffDt`||  |
<!-- type: tab-end -->

