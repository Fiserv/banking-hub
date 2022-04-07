# Implementation Notes for ClientFieldSpec Inq
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
|`ClientFieldSpecSel`|||
|`ClientFieldSpecSel.DataApplType`|CDA<br>DDA<br>LOAN<br>Party<br>SDA<br>||
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|| |
|`RecCtrlOut`|||
|`RecCtrlOut.SentRecCount`|||
|`ClientFieldSpecRec`|||
|`ClientFieldSpecRec.ClientFieldSpecKeys`|||
|`ClientFieldSpecRec.ClientFieldSpecKeys.DataApplType`|CDA<br>DDA<br>LOAN<br>Party<br>SDA<br>||
|`ClientFieldSpecRec.ClientFieldSpecKeys.DataClassType`|||
|`ClientFieldSpecRec.ClientFieldSpecKeys.ClientFieldSpecId`|||
|`ClientFieldSpecRec.ClientFieldSpecInfo`|||
|`ClientFieldSpecRec.ClientFieldSpecInfo.DataGroupType`|||
|`ClientFieldSpecRec.ClientFieldSpecInfo.DataType`|Alpha<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol||
|`ClientFieldSpecRec.ClientFieldSpecInfo.DataLength`|||
|`ClientFieldSpecRec.ClientFieldSpecInfo.LastUpdateDt`|||
|`ClientFieldSpecRec.ClientFieldSpecInfo.Desc`|||
|`ClientFieldSpecRec.ClientFieldSpecInfo.RequiredFlag`|||
|`ClientFieldSpecRec.ClientFieldSpecInfo.SearchFlag`|||
|`ClientFieldSpecRec.ClientFieldSpecStatus`|||
|`ClientFieldSpecRec.ClientFieldSpecStatus.ClientFieldSpecStatusCode`|||
|`ClientFieldSpecRec.ClientFieldSpecStatus.EffDt`|||
<!-- type: tab-end -->
