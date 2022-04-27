# Implementation Notes for Add Document
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
|`DocumentInfo`||  |
|`DocumentInfo.DiskGroup`||  |
|`DocumentInfo.DocType`||Field indicates identifier of document type to which the new document to be created belongs.|
|`DocumentInfo.DocTypeName`||Field indicates name of the document type to which the new document to be created belongs.<br>Either DocType (Document Type ID) or DocTypeName (Doc Type Name) should be sent in the request by consumer application. If both fields are provided in the request, ESF will consider only DocTypeName and ignore DocType.|
|`DocumentInfo.KeywordData`||  |
|`DocumentInfo.KeywordData.Keyword`||  |
|`DocumentInfo.KeywordData.KeywordValue`||Field refers to the value to be added for an existing keyword. If no value is to be added then, this field is not required to be sent.|
|`DocumentInfo.PageData`||  |
|`DocumentInfo.PageData.PageNum`||  |
|`DocumentInfo.PageData.PageFormat`|Default<br>PDF<br>TXT<br>TIFF<br>DOC<br>PNG<br>JPG<br>BMP|  |
|`DocumentInfo.PageData.PageValue`||  |
|`DocumentInfo.PageData.PageValue.BinData`||Field refers to Base64 encoded page data.|
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
|`DocumentInfo`||  |
|`DocumentInfo.DiskGroup`||  |
|`DocumentInfo.DocType`||Field indicates identifier of document type to which the new document to be created belongs.|
|`DocumentInfo.DocTypeName`||Field indicates name of the document type to which the new document to be created belongs.<br>Either DocType (Document Type ID) or DocTypeName (Doc Type Name) should be sent in the request by consumer application. If both fields are provided in the request, ESF will consider only DocTypeName and ignore DocType.|
|`DocumentInfo.KeywordData`||  |
|`DocumentInfo.KeywordData.Keyword`||  |
|`DocumentInfo.KeywordData.KeywordValue`||Field refers to the value to be added for an existing keyword. If no value is to be added then, this field is not required to be sent.|
|`DocumentInfo.PageData`||  |
|`DocumentInfo.PageData.PageNum`||  |
|`DocumentInfo.PageData.PageFormat`|Default<br>PDF<br>TXT<br>TIFF<br>DOC<br>PNG<br>JPG<br>BMP|  |
|`DocumentInfo.PageData.PageValue`||  |
|`DocumentInfo.PageData.PageValue.BinData`||Field refers to Base64 encoded page data.|
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
