# Implementation Notes for Inq Document
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
|`RecCtrlIn`||  |
|`RecCtrlIn.MaxRecLimit`||  |
|`DocumentSel`||Used to specify the search criteria to retrieve the documents (DocumentKeys or DocSelCriteria aggregate is used).|
|`DocumentSel.DocumentKeys`||  |
|`DocumentSel.DocumentKeys.DocumentId`||***Conditionally Required**<br>ESF DocumentListInq can be used to fetch the DocumentId (for the DocumentType).|
|`DocumentSel.DocSelCriteria`||  |
|`DocumentSel.DocSelCriteria.DocSelType`|DocTypeId<br>DocTypeName<br>DocGroupId<br>DocGroupName<br>QueryId<br>QueryName|If DocumentId is not used for search, document can be retrieved using Document Type, Group or Query.|
|`DocumentSel.DocSelCriteria.DocSelValue`||  |
|`DocumentSel.DtRange`||  |
|`DocumentSel.DtRange.StartDt`||Field refers to the start date from which the documents are to be fetched. Date of the document should be within the DtRange specified.<br>If DtRange aggregate is used as search criteria, StartDt should be sent in YYYY-MM-DDThh:mm:ss.SSS format else, ESF returns an 'Internal System Error'.|
|`DocumentSel.DtRange.EndDt`||Field refers to the end date up to which the documents are to be fetched. Date of the document should be within the DtRange specified.<br>If DtRange aggregate is used as search criteria, EndDt should be sent in YYYY-MM-DDThh:mm:ss.SSS format else, ESF returns an 'Internal System Error'.|
|`DocumentSel.UseXferKeywordInd`|true<br>false|  |
|`DocumentSel.KeywordSel`||Used to retrieve documents using a keyword or logical combination of keywords as a condition.|
|`DocumentSel.KeywordSel.Keyword`||  |
|`DocumentSel.KeywordSel.KeywordValue`||  |
|`DocumentSel.KeywordSel.Operand`|EQ<br>NOTEQ<br>GT<br>GTEQ<br>LT<br>LTEQ|  |
|`DocumentSel.KeywordSel.AndorOr`|AND<br>OR|Value of this field is used to chain multiple condition nodes together. If value is not provided, by default, AND is used as connector.|
|`DocumentSel.DocProperties`||  |
|`DocumentSel.DocProperties.DocPropertyType`|ID<br>Name<br>Date<br>Class<br>Type|Used to specify the type of document property to be returned in response.|
|`DocumentSel.DocProperties.IncDocPropertyInd`|true<br>false|  |
|`DocumentSel.KeywordMultireplace`||  |
|`DocumentSel.KeywordsRequested`||  |
|`DocumentSel.KeywordsRequested.Keyword`||  |
|`DocumentSel.PageFormat`|TXT<br>PDF<br>TIFF<br>JPG<br>BMP<br>PNG<br>|Field is used to indicate the format of requested document in core system.<br>Values indicate following:<br>- TXT: textual documents<br>- PDF: statements<br>- JPG: check images and pictorial statements<br>- BMP: digital images<br>- PNG/TIFF: high-quality/large-size web documents|
|`DocumentSel.PageNumRange`||  |
|`DocumentSel.PageNumRange.StartPageNum`||Field refers to the starting page of the page range that is requested. Any value less than 1 is by default, considered as 1|
|`DocumentSel.PageNumRange.EndPageNum`||Field refers to the ending page of the page range that is requested. If value larger than documents last page is provided in the request, then director defaults the value to the last page of the document.|
|`DocumentSel.PageNum`||  |
|`DocumentSel.IncAllPagesInd`|true<br>false|If the value is true, then this field is used to request multiple pages in single document link in the response. Works as wildcard '*' for PageNum field.|
|`DocumentSel.MetaData`||If MetaData is not provided in the EFX selection request, all metadata will be retrieved in the response. If this aggregate is used, only the values selected are provided.|
|`DocumentSel.MetaData.Value`|Fields<br>PageTotal|  |
|`DocumentSel.MetaData.IncValueInd`|true<br>false|PageTotal' type of metadata returns total number of pages in document and document size (in bytes) in the response.<br>'Fields' type of metadata returns searchable keyword types for the document in response.|
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||  |
|`RecCtrlOut.RemainRecCount`||Field refers to the documents present in the director for the search criteria.|
|`RecCtrlOut.Cursor`||Value of this field is returned as '0' and not used by the operation so, should not be sent in the request.|
|`DocumentRec`||The aggregate contains one or multiple documents in response based on search criteria.|
|`DocumentRec.DocumentKeys`||  |
|`DocumentRec.DocumentKeys.DocumentId`||If document is found in director that matched request constraints/conditions, then DocumentId is returned in response.|
|`DocumentRec.DocumentInfo`||  |
|`DocumentRec.DocumentInfo.DocName`||  |
|`DocumentRec.DocumentInfo.CreatedDt`||  |
|`DocumentRec.DocumentInfo.RevisionDt`||If the document is not revised, date in this field matches the CreatedDt.|
|`DocumentRec.DocumentInfo.RevisionId`||Field refers to the identifier of document revision, requested in the director system.|
|`DocumentRec.DocumentInfo.MaxRevisionId`||  |
|`DocumentRec.DocumentInfo.OriginalStoredDt`||  |
|`DocumentRec.DocumentInfo.DocGroupTypeName`||  |
|`DocumentRec.DocumentInfo.DocTypeName`||  |
|`DocumentRec.DocumentInfo.KeywordData`||  |
|`DocumentRec.DocumentInfo.KeywordData.Keyword`||Field is used to specify the name of the OnBase (Director) keyword.|
|`DocumentRec.DocumentInfo.KeywordData.KeywordValue`||  |
|`DocumentRec.DocumentInfo.KeywordData.KeywordId`||  |
|`DocumentRec.DocumentInfo.KeywordData.KeywordGroup`||If KeywordType is part of KeywordGroup, field indicates the ID of OnBase keyword type group to which keyword belongs. Value of this field is returned in response if Group= '0' is requested and keyword belongs to Keywordgroup. If Group = '1' then, field is optional.|
|`DocumentRec.DocumentInfo.KeywordData.KeywordGroupName`||Field is optional if Group = '1' is requested.|
|`DocumentRec.DocumentInfo.SearchableKeyword`||The aggregate returns the searchable keywords.|
|`DocumentRec.DocumentInfo.SearchableKeyword.Keyword`||Field refers to value of keyword used to search document.<br>Example (DocumentInquiry response):<br><Field Type="Data" Searchable="1">Check Amount</Field><br>Keyword in EFX is mapped as 'Check Amount'.<br>SearchFlag in EFX is mapped as 'true' |
|`DocumentRec.DocumentInfo.SearchableKeyword.SearchFlag`|true<br>false|Field refers to searchable keyword name for keyword present within document. Value for this field is returned if, value for Fields attribute is sent as '1' in RequestMetaData tag in request.|
|`DocumentRec.DocumentInfo.BatchNum`||  |
|`DocumentRec.DocumentInfo.TotalPageNum`||  |
|`DocumentRec.DocumentInfo.PageData`||  |
|`DocumentRec.DocumentInfo.PageData.PageNum`||Page number for first page is '1'.|
|`DocumentRec.DocumentInfo.PageData.PageFormat`|TXT<br>PDF<br>TIFF<br>JPG<br>BMP<br>PNG<br>|  |
|`DocumentRec.DocumentInfo.PageData.PageValue`||  |
|`DocumentRec.DocumentInfo.PageData.PageValue.ContentType`|Base64|Only Base64 content is supported.|
|`DocumentRec.DocumentInfo.PageData.PageValue.BinLength`||  |
|`DocumentRec.DocumentInfo.PageData.PageValue.BinData`||Field contains binary link/URL in <href> format for the document. Field does not have readable content of document but contains Base64 encoded data.<br>For example,  <xop:Include xmlns:xop="http://www.w3.org/2004/08/xop/include" href="cid:1.a749565624ea33151af6af775763f59efcd19ab4ec1e0f55@apache.org"/>|
|`DocumentRec.DocumentStatus`||  |
|`DocumentRec.DocumentStatus.DocumentStatusCode`|Valid|Status code of document is 'Valid'.|
|`DocumentRec.DocumentStatus.EffDt`||  |
<!-- type: tab-end -->
