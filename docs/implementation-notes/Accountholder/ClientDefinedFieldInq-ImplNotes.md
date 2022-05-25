# Implementation Notes for Get ClientDefinedField

This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.

<!-- 
type: tab 
titles: Premier, Signature, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> To view the field/aggregate descriptions and sample Requests and Responses, please refer the API Explorer section


#### Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`ClientDefinedFieldSel`|||
|`ClientDefinedFieldSel.AcctKeys`|||
|`ClientDefinedFieldSel.AcctKeys.AcctId`|||
|`ClientDefinedFieldSel.AcctKeys.AcctType`|CDA<br>DDA<br>SDA<br>LOAN<br>||
|`ClientDefinedFieldSel.PartyKeys`|||
|`ClientDefinedFieldSel.PartyKeys.PartyId`|| |
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`RecCtrlOut`|||
|`RecCtrlOut.SentRecCount`|||
|`ClientDefinedFieldRec`|||
|`ClientDefinedFieldRec.ClientDefinedFieldKeys`|||
|`ClientDefinedFieldRec.ClientDefinedFieldKeys.AcctKeys`|||
|`ClientDefinedFieldRec.ClientDefinedFieldKeys.AcctKeys.AcctId`|||
|`ClientDefinedFieldRec.ClientDefinedFieldKeys.AcctKeys.AcctType`|||
|`ClientDefinedFieldRec.ClientDefinedFieldKeys.PartyKeys`|||
|`ClientDefinedFieldRec.ClientDefinedFieldKeys.PartyKeys.PartyId`|| |
|`ClientDefinedFieldRec.ClientDefinedFieldInfo`|||
|`ClientDefinedFieldRec.ClientDefinedFieldInfo.ClientDefinedData`||Client defined Data related to the party and account is being pulled by the service:<br>For SDA/CDA/DDA (only Application) - 000<br>For Loan and Party - 050 |
|`ClientDefinedFieldRec.ClientDefinedFieldInfo.ClientDefinedData.DataIdent`||Metadata|
|`ClientDefinedFieldRec.ClientDefinedFieldInfo.ClientDefinedData.DataType`|Alpha<br>Currency<br>CurrencySymbol<br>Date<br>Numeric<br>NumericSymbol<br>Rate<br>RateSymbol|Metadata|
|`ClientDefinedFieldRec.ClientDefinedFieldInfo.ClientDefinedData.Value`||Values are user-defined.|
|`ClientDefinedFieldRec.ClientDefinedFieldInfo.ClientDefinedData.DataLength`||Metadata<br> |
|`ClientDefinedFieldRec.ClientDefinedFieldInfo.ClientDefinedData.ExpDt`|| |
|`ClientDefinedFieldRec.ClientDefinedFieldInfo.ClientDefinedData.Desc`||Metadata, label that appear for this field.|
|`ClientDefinedFieldRec.ClientDefinedFieldInfo.ClientDefinedData.RequiredFlag`||Flag for Metadata.<br>True = data required<br>False = data not required<br>|
|`ClientDefinedFieldRec.ClientDefinedFieldInfo.ClientDefinedData.SearchFlag`|true<br>false||
|`ClientDefinedFieldRec.ClientDefinedFieldStatus`|||
|`ClientDefinedFieldRec.ClientDefinedFieldStatus.ClientDefinedFieldStatusCode`|Valid| |
|`ClientDefinedFieldRec.ClientDefinedFieldStatus.EffDt`|||
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
