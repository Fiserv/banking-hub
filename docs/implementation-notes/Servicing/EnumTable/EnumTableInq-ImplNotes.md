# Implementation Notes for EnumTable Add
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.


<!-- 
type: tab 
titles: Premier 
-->

<!-- 
type: tab 
titles: By Party, By DataDesc, By RelSpec, 
-->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Notes
> 
> -	To view the descriptions of fields listed in the below tables, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`|||
|`RecCtrlIn.MaxRecLimit`|||
|`RecCtrlIn.Cursor`|||
|`EnumTableSel`|||
|`EnumTableSel.EnumTableKeys`|ABC<br>PQR||
|`EnumTableSel.EnumTableKeys.EnumTableIdent`|Region<br>Branch|"Region" refers to a Branch Region, also known as Originating Branch.<br>"Branch" refers to Accounting Branch/Group also known as Responsible Branch.  |
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`RecCtrlOut`|||
|`RecCtrlOut.SentRecCount`|||
|`RecCtrlOut.Cursor`|||
|`EnumTableRec`|||
|`EnumTableRec.EnumTableKeys`|||
|`EnumTableRec.EnumTableKeys.EnumTableIdent`|Region<br>Branch||
|`EnumTableRec.EnumTableInfo`|||
|`EnumTableRec.EnumTableInfo.EnumTableData`|||
|`EnumTableRec.EnumTableStatus`|||
|`EnumTableRec.EnumTableStatus.EnumTableStatusCode`|Valid||
|`EnumTableRec.EnumTableStatus.EffDt`|||
<!-- type: tab -->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Notes
> 
> -	To view the descriptions of fields listed in the below tables, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`EnumTableSel`|||
|`EnumTableSel.EnumTableKeys`|||
|`EnumTableSel.EnumTableKeys.BranchIdent`||If no branch is input, Premier searches using the default branch name.|
|`EnumTableSel.EnumTableKeys.DataApplType`|ALL<br>CDA<br>CRD<br>DDA<br>LOAN<br>LOC<br>Party<br>SDA<br>SDB<br>DDL|Required only if the BranchIdent value is sent in the request.|
|`EnumTableSel.EnumTableKeys.EnumTableIdent`||"Region" refers to a Branch Region, also known as Originating Branch.<br>"Branch" refers to Accounting Branch/Group also known as Responsible Branch.  |
|`EnumTableSel.EnumFilter`||N/A|
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`RecCtrlOut`|||
|`RecCtrlOut.SentRecCount`|||
|`EnumTableRec`|||
|`EnumTableRec.EnumTableKeys`|||
|`EnumTableRec.EnumTableKeys.BranchIdent`|||
|`EnumTableRec.EnumTableKeys.DataApplType`|||
|`EnumTableRec.EnumTableKeys.EnumTableIdent`|||
|`EnumTableRec.EnumTableInfo`|||
|`EnumTableRec.EnumTableInfo.EnumTableData`|||
|`EnumTableRec.EnumTableStatus`|||
|`EnumTableRec.EnumTableStatus.EnumTableStatusCode`|Valid||
|`EnumTableRec.EnumTableStatus.EffDt`|||
<!-- type: tab -->


The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Notes
> 
> -	To view the descriptions of fields listed in the below tables, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`EnumTableSel`|||
|`EnumTableSel.EnumTableKeys`|||
|`EnumTableSel.EnumTableKeys.EnumTableIdent`||"Region" refers to a Branch Region, also known as Originating Branch.<br>"Branch" refers to Accounting Branch/Group also known as Responsible Branch.  |
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`RecCtrlOut`|||
|`RecCtrlOut.SentRecCount`|||
|`EnumTableRec`|||
|`EnumTableRec.EnumTableKeys`|||
|`EnumTableRec.EnumTableKeys.EnumTableIdent`|||
|`EnumTableRec.EnumTableInfo`|||
|`EnumTableRec.EnumTableInfo.EnumTableData`|||
|`EnumTableRec.EnumTableInfo.EnumTableData.EnumValue`|||
|`EnumTableRec.EnumTableInfo.EnumTableData.EnumValueDesc`|||
|`EnumTableRec.EnumTableStatus`|||
|`EnumTableRec.EnumTableStatus.EnumTableStatusCode`|Valid||
|`EnumTableRec.EnumTableStatus.EffDt`|||
<!-- type: tab-end -->

<!-- type: tab-end -->
