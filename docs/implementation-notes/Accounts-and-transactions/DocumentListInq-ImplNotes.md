# Implementation Notes for ListInq Document
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
|`RecCtrlIn.MaxRecLimit`||  |
|`DocumentListSel`||The aggregate specifies search criteria to retrieve documents. DocumentKeys or DocSelCriteria aggregate is used.|
|`DocumentListSel.DocSelCriteria`||  |
|`DocumentListSel.DocSelCriteria.DocSelType`|DocTypeId<br>DocTypeName<br>DocGroupId<br>DocGroupName<br>QueryId<br>QueryName|Documents can be searched by document Identifier, Type, Group or Query.|
|`DocumentListSel.DocSelCriteria.DocSelValue`||  |
|`DocumentListSel.DtRange`||  |
|`DocumentListSel.DtRange.StartDt`||Field refers to the start date from which the documents are to be fetched.<br>Date of the document should be within the DtRange specified.<br>If DtRange aggregate is used as search criteria, StartDt should be sent in YYYY-MM-DDThh:mm:ss.SSS format else, ESF returns an 'Internal System Error'.|
|`DocumentListSel.DtRange.EndDt`||Field refers to the end date up to which the documents are to be fetched. Date of the document should be within the DtRange specified.<br>If DtRange aggregate is used as search criteria, EndDt should be sent in YYYY-MM-DDThh:mm:ss.SSS format else, ESF returns an 'Internal System Error'.|
|`DocumentListSel.KeywordSel`||Used to retrieve documents using a keyword or logical combination of keywords as a condition.|
|`DocumentListSel.KeywordSel.Keyword`||  |
|`DocumentListSel.KeywordSel.KeywordValue`||  |
|`DocumentListSel.KeywordSel.Operand`|EQ<br>NOTEQ<br>GT<br>GTEQ<br>LT<br>LTEQ|  |
|`DocumentListSel.KeywordSel.AndorOr`|AND<br>OR|Value of this field is used to chain multiple condition nodes together. If value is not provided, by default, AND is used as connector.|
|`DocumentListSel.DocProperties`||  |
|`DocumentListSel.DocProperties.DocPropertyType`|ID<br>Name<br>Date<br>Class<br>Type|Used to specify the type of document property to be returned in response.|
|`DocumentListSel.DocProperties.IncDocPropertyInd`|true<br>false|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||  |
|`RecCtrlOut.RemainRecCount`||Field refers to the documents present in the director for the search criteria.|
|`DocumentListRec`||  |
|`DocumentListRec.DocumentKeys`||  |
|`DocumentListRec.DocumentKeys.SvcIdent`||  |
|`DocumentListRec.DocumentKeys.DocumentId`||DocumentId is returned in response for documents that match request constraints/conditions.|
|`DocumentListRec.DocumentListInfo`||  |
|`DocumentListRec.DocumentListInfo.DocName`||  |
|`DocumentListRec.DocumentListInfo.CreatedDt`||  |
|`DocumentListRec.DocumentListInfo.RevisionDt`||If the document is not revised, date in this field matches the CreatedDt.|
|`DocumentListRec.DocumentListInfo.RevisionId`||Field refers to the identifier of document revision, requested in the director system.|
|`DocumentListRec.DocumentListInfo.MaxRevisionId`||  |
|`DocumentListRec.DocumentListInfo.OriginalStoredDt`||  |
|`DocumentListRec.DocumentListInfo.DocGroupTypeName`||  |
|`DocumentListRec.DocumentListInfo.DocTypeName`||  |
|`DocumentListRec.DocumentListInfo.KeywordData`||  |
|`DocumentListRec.DocumentListInfo.KeywordData.Keyword`||Used to specify the name of the OnBase (Director) keyword.|
|`DocumentListRec.DocumentListInfo.KeywordData.KeywordValue`||  |
|`DocumentListRec.DocumentListInfo.KeywordData.KeywordId`||  |
|`DocumentListRec.DocumentListInfo.KeywordData.KeywordGroup`||If KeywordType is part of KeywordGroup, field indicates the ID of OnBase keyword type group to which keyword belongs. Value of this field is returned in response if Group= '0' is requested and keyword belongs to Keywordgroup. If Group = '1' then, field is optional.|
|`DocumentListRec.DocumentListInfo.KeywordData.KeywordGroupName`||Field is optional if Group = '1' is requested.|
|`DocumentListRec.DocumentListInfo.SearchableKeyword`||The aggregate returns the searchable keywords.|
|`DocumentListRec.DocumentListInfo.SearchableKeyword.Keyword`||Field refers to value of keyword used to search document.<br>Example (DocumentInquiry response):<br><Field Type="Data" Searchable="1">Check Amount</Field><br>Keyword in EFX is mapped as 'Check Amount'.<br>SearchFlag in EFX is mapped as 'true' |
|`DocumentListRec.DocumentListInfo.SearchableKeyword.SearchFlag`|true<br>false|Field refers to searchable keyword name for keyword present within document. Value for this field is returned if, value for Fields attribute is sent as '1' in RequestMetaData tag in request.|
|`DocumentListRec.DocumentListInfo.BatchNum`||  |
|`DocumentListRec.DocumentListInfo.TotalPageNum`||Field refers to the total number of pages in the document returned.|
|`DocumentListRec.DocumentStatus`||  |
|`DocumentListRec.DocumentStatus.DocumentStatusCode`|Valid|Document status code is 'Valid'.|
|`DocumentListRec.DocumentStatus.EffDt`||Field contains current server date.|
<!-- type: tab -->

The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn.MaxRecLimit`||  |
|`DocumentListSel`||The aggregate specifies search criteria to retrieve documents. DocumentKeys or DocSelCriteria aggregate is used.|
|`DocumentListSel.DocSelCriteria`||  |
|`DocumentListSel.DocSelCriteria.DocSelType`|DocTypeId<br>DocTypeName<br>DocGroupId<br>DocGroupName<br>QueryId<br>QueryName|Documents can be searched by document Identifier, Type, Group or Query.|
|`DocumentListSel.DocSelCriteria.DocSelValue`||  |
|`DocumentListSel.DtRange`||  |
|`DocumentListSel.DtRange.StartDt`||Field refers to the start date from which the documents are to be fetched.<br>Date of the document should be within the DtRange specified.<br>If DtRange aggregate is used as search criteria, StartDt should be sent in YYYY-MM-DDThh:mm:ss.SSS format else, ESF returns an 'Internal System Error'.|
|`DocumentListSel.DtRange.EndDt`||Field refers to the end date up to which the documents are to be fetched. Date of the document should be within the DtRange specified.<br>If DtRange aggregate is used as search criteria, EndDt should be sent in YYYY-MM-DDThh:mm:ss.SSS format else, ESF returns an 'Internal System Error'.|
|`DocumentListSel.KeywordSel`||Used to retrieve documents using a keyword or logical combination of keywords as a condition.|
|`DocumentListSel.KeywordSel.Keyword`||  |
|`DocumentListSel.KeywordSel.KeywordValue`||  |
|`DocumentListSel.KeywordSel.Operand`|EQ<br>NOTEQ<br>GT<br>GTEQ<br>LT<br>LTEQ|  |
|`DocumentListSel.KeywordSel.AndorOr`|AND<br>OR|Value of this field is used to chain multiple condition nodes together. If value is not provided, by default, AND is used as connector.|
|`DocumentListSel.DocProperties`||  |
|`DocumentListSel.DocProperties.DocPropertyType`|ID<br>Name<br>Date<br>Class<br>Type|Used to specify the type of document property to be returned in response.|
|`DocumentListSel.DocProperties.IncDocPropertyInd`|true<br>false|  |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||  |
|`RecCtrlOut.RemainRecCount`||Field refers to the documents present in the director for the search criteria.|
|`DocumentListRec`||  |
|`DocumentListRec.DocumentKeys`||  |
|`DocumentListRec.DocumentKeys.SvcIdent`||  |
|`DocumentListRec.DocumentKeys.DocumentId`||DocumentId is returned in response for documents that match request constraints/conditions.|
|`DocumentListRec.DocumentListInfo`||  |
|`DocumentListRec.DocumentListInfo.DocName`||  |
|`DocumentListRec.DocumentListInfo.CreatedDt`||  |
|`DocumentListRec.DocumentListInfo.RevisionDt`||If the document is not revised, date in this field matches the CreatedDt.|
|`DocumentListRec.DocumentListInfo.RevisionId`||Field refers to the identifier of document revision, requested in the director system.|
|`DocumentListRec.DocumentListInfo.MaxRevisionId`||  |
|`DocumentListRec.DocumentListInfo.OriginalStoredDt`||  |
|`DocumentListRec.DocumentListInfo.DocGroupTypeName`||  |
|`DocumentListRec.DocumentListInfo.DocTypeName`||  |
|`DocumentListRec.DocumentListInfo.KeywordData`||  |
|`DocumentListRec.DocumentListInfo.KeywordData.Keyword`||Used to specify the name of the OnBase (Director) keyword.|
|`DocumentListRec.DocumentListInfo.KeywordData.KeywordValue`||  |
|`DocumentListRec.DocumentListInfo.KeywordData.KeywordId`||  |
|`DocumentListRec.DocumentListInfo.KeywordData.KeywordGroup`||If KeywordType is part of KeywordGroup, field indicates the ID of OnBase keyword type group to which keyword belongs. Value of this field is returned in response if Group= '0' is requested and keyword belongs to Keywordgroup. If Group = '1' then, field is optional.|
|`DocumentListRec.DocumentListInfo.KeywordData.KeywordGroupName`||Field is optional if Group = '1' is requested.|
|`DocumentListRec.DocumentListInfo.SearchableKeyword`||The aggregate returns the searchable keywords.|
|`DocumentListRec.DocumentListInfo.SearchableKeyword.Keyword`||Field refers to value of keyword used to search document.<br>Example (DocumentInquiry response):<br><Field Type="Data" Searchable="1">Check Amount</Field><br>Keyword in EFX is mapped as 'Check Amount'.<br>SearchFlag in EFX is mapped as 'true' |
|`DocumentListRec.DocumentListInfo.SearchableKeyword.SearchFlag`|true<br>false|Field refers to searchable keyword name for keyword present within document. Value for this field is returned if, value for Fields attribute is sent as '1' in RequestMetaData tag in request.|
|`DocumentListRec.DocumentListInfo.BatchNum`||  |
|`DocumentListRec.DocumentListInfo.TotalPageNum`||Field refers to the total number of pages in the document returned.|
|`DocumentListRec.DocumentStatus`||  |
|`DocumentListRec.DocumentStatus.DocumentStatusCode`|Valid|Document status code is 'Valid'.|
|`DocumentListRec.DocumentStatus.EffDt`||Field contains current server date.|
<!-- type: tab-end -->
