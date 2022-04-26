# Implementation Notes for Inq-ByAcct PartyAcctRel
This section provides the provider-specific Request and Response schema along with the implementation notes for the applicable fields.


<!-- 
type: sub-tab 
titles: Tab A, Tab B, Tab C 
-->

[Header 1](?path=docs/implementation-notes/testing/ImplNotes-links.md#header-one)  [Header 2](?path=docs/implementation-notes/testing/ImplNotes-links.md#header-two)

## Header one
The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> - To view the field descriptions and sample Requests and Responses, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`||  |
|`RecCtrlIn.MaxRecLimit`||If no value is specified for this field, then the maximum of 250 records are sent in the request.|
|`RecCtrlIn.Cursor`||  |
|`PartyAcctRelSel`||  |
|`PartyAcctRelSel.AcctKeys`||  |
|`PartyAcctRelSel.AcctKeys.AcctId`||  |
|`PartyAcctRelSel.AcctKeys.AcctType`|CDA<br>CRD<br>DDA<br>LOAN<br>CLOC<br>SDA<br>SDB<br>PORT<br> |  |


## Header two

The following tables list the provider-specific implemented fields for Request and Response messages along with the implementation notes for the applicable fields. 


<!-- theme: info -->
> #### Note
> 
> - To view the field descriptions and sample Requests and Responses, please refer the API Explorer section of this API
> - `Status` and `EFXHeader` aggregates are common for all APIs, therefore sub-fields of these aggregates are not listed in the below tables and same can be viewed in the API Explorer section of this API


# Request Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`RecCtrlIn`||  |
|`RecCtrlIn.MaxRecLimit`||If no value is specified for this field, then the maximum of 250 records are sent in the request.|
|`RecCtrlIn.Cursor`||  |
|`PartyAcctRelSel`||  |
|`PartyAcctRelSel.AcctKeys`||  |
|`PartyAcctRelSel.AcctKeys.AcctId`||  |
|`PartyAcctRelSel.AcctKeys.AcctType`|CDA<br>CRD<br>DDA<br>LOAN<br>CLOC<br>SDA<br>SDB<br>PORT<br> |  |

<!-- type: tab -->

# Tab B

<!-- type: tab -->

# Tab C 

<!-- type: tab-end -->

