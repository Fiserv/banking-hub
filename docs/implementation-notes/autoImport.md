# Implementation Note for EnumTable Add
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.
<!-- 
type: tab 
titles: PRM, PRC, DNA,  
-->
# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`|||
|`RecCtrlIn.MaxRecLimit`|||
|`RecCtrlIn.Cursor`|||
|`EnumTableSel`|||
|`EnumTableSel.EnumTableKeys`|ABC<br>PQR||
|`EnumTableSel.EnumTableKeys.EnumTableIdent`|Region<br>Branch|**Required**<br><br>"Region" refers to a Branch Region, also known as Originating Branch. <br> "Branch" refers to Accounting Branch/Group also known as Responsible Branch.  |
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
# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`EnumTableSel`|||
|`EnumTableSel.EnumTableKeys`|||
|`EnumTableSel.EnumTableKeys.BranchIdent`||If no branch is input,  Premier will search using the default branch.|
|`EnumTableSel.EnumTableKeys.DataApplType`|ALL<br>CDA<br>CRD<br>DDA<br>LOAN<br>LOC<br>Party<br>SDA<br>SDB<br>DDL|Valid required only if BranchIdent is sent.|
|`EnumTableSel.EnumTableKeys.EnumTableIdent`||Refers to the name of the Premier Data Description Specification.|
|`EnumTableSel.EnumFilter`||Used to filter the values returned in the enumeration table response|
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
# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`EnumTableSel`|||
|`EnumTableSel.EnumTableKeys`|||
|`EnumTableSel.EnumTableKeys.EnumTableIdent`||Table Name.|
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
