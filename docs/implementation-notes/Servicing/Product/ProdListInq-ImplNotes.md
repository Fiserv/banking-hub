# Implementation Notes for Get ProductList
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
|`ProductListSel`|| |
|`ProductListSel.AcctType`|DDA<br>SDA<br>CDA<br>LOAN<br>CRD<br>SDB| |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|| |
|`RecCtrlOut`|| |
|`RecCtrlOut.SentRecCount`|| |
|`ProductListRec`|| |
|`ProductListRec.ProductKeys`|| |
|`ProductListRec.ProductKeys.AcctType`|DDA<br>SDA<br>CDA<br>LOAN<br>CRD<br>SDB| |
|`ProductListRec.ProductKeys.ProductIdent`|| |
|`ProductListRec.ProductListInfo`|| |
|`ProductListRec.ProductListInfo.AcctType`|DDA<br>SDA<br>CDA<br>LOAN<br>CRD<br>SDB| |
|`ProductListRec.ProductListInfo.ProductIdent`|| |
|`ProductListRec.ProductListInfo.Desc`|| |
|`ProductListRec.ProductListInfo.ProductDtlStatus`|| |
|`ProductListRec.ProductListInfo.OfferStartDt`|| |
|`ProductListRec.ProductListInfo.OfferEndDt`|| |
|`ProductListRec.ProductStatus`|| |
|`ProductListRec.ProductStatus.ProductStatusCode`|Valid| |
|`ProductListRec.ProductStatus.EffDt`|| |
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
