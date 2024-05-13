# Release Notes

<!-- 
type: tab 
titles: Premier, Precision
-->

## April 12, 2024

### What's New
| API Name | Description |
| --- | ----------- |
| Resources| Added [Postman collection](https://github.com/Fiserv/banking-hub/files/14896028/Banking.Hub.-.Precision-.Trial.Plan.Postman.Collection.postman_collection.zip) for better linking of API elements together for easy editing, sharing, testing, and reuse. |
| API Explorer | The following API endpoints are newly added.<br> [Add Address](Google.com) <br> [Get Address](Google.com) <br> [UpdateAddress](Google.com) <br>  [Delete Address](Google.com) <br> [Get Beneficiary](Google.com) <br> [Add Party Account Relationship](Google.com)|

### Enhancements
| API Name | Description |
| --- | ----------- |
| [Add Document](https://google.com "View Link")| Added the new enum values **DOC** and **XLSX** in the *DocumentInfo/PageData/PageFormat* field as new page formats. This will support more page formats while adding as a document. <br><br>**Impacted Field**: <br> `PageData/PageFormats` |
| [Update Stop Item](https://google.com "View Link")|  Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>**Impacted Fields**: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType` |
|[Update Stop Item](https://google.com "View Link") | Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>**Impacted Fields**: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType`|
| [Update Stop Item](https://google.com "View Link")|  For better API performance, you can extend enumeration values for the field *StopItemReasonCode*. You can define these values using the *ClientDefined_StopChkReasonCode_Rule*. <br><br>**Impacted Field(s)**: <br> `StopChkKeys/AcctKeys/AcctType`  <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType` </li> <br> <br> Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>**Impacted Field(s)**: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType` </li> <br> <br> Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>**Impacted Field(s)**: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType` </li> <br> <br> Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>**Impacted Field(s)**: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType` </li> <br> <br> Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>**Impacted Field(s)**: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType` </li> <br> <br> Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>**Impacted Field(s)**: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType`|

### Fixed
| API Name | Description |
| --- | ----------- |
| [Get Memo Tickeler](https://google.com "View Link") | Previously, the response message failed to retrieve multiple memo ticklers associated with an account or party record. We resolved this issue so that users can retrieve all the memo ticklers successfully |
| [Add Escrow](https://google.com "View Link") | Previously, the escrow expiry date was sent in an incorrect format as "MMddyyyy.juliandate". We updated the date format as "MM/DD/YYYY" <br>**Impacted Field:** <br>`EscrowInfo/EscrowExpDt`|

## April 25, 2024

### What's New
| API Name | Description |
| --- | ----------- |
| Resources| Added [Postman collection](https://github.com/Fiserv/banking-hub/files/14896028/Banking.Hub.-.Precision-.Trial.Plan.Postman.Collection.postman_collection.zip) for better linking of API elements together for easy editing, sharing, testing, and reuse. |
| API Explorer | The following API endpoints are newly added.<br> [Add Address](Google.com) <br> [Get Address](Google.com) <br> [UpdateAddress](Google.com) <br>  [Delete Address](Google.com) <br> [Get Beneficiary](Google.com) <br> [Add Party Account Relationship](Google.com)|

### Fixed
| API Name | Description |
| --- | ----------- |
| [Get Memo Tickeler](https://google.com "View Link") | Previously, the response message failed to retrieve multiple memo ticklers associated with an account or party record. We resolved this issue so that users can retrieve all the memo ticklers successfully |
| [Add Escrow](https://google.com "View Link") | Previously, the escrow expiry date was sent in an incorrect format as "MMddyyyy.juliandate". We updated the date format as "MM/DD/YYYY" <br>**Impacted Field:** <br>`EscrowInfo/EscrowExpDt`|
</details>

<!-- type: tab -->

## May 01, 2024

### What's New
| API Name | Description |
| --- | ----------- |
| Resources| Added [Postman collection](https://github.com/Fiserv/banking-hub/files/14896028/Banking.Hub.-.Precision-.Trial.Plan.Postman.Collection.postman_collection.zip) for better linking of API elements together for easy editing, sharing, testing, and reuse. |
| API Explorer | The following API endpoints are newly added.<br> [Add Address](Google.com) <br> [Get Address](Google.com) <br> [UpdateAddress](Google.com) <br>  [Delete Address](Google.com) <br> [Get Beneficiary](Google.com) <br> [Add Party Account Relationship](Google.com)|

### Fixed
| API Name | Description |
| --- | ----------- |
| API Name | Description |
| --- | ----------- |
| [Get Memo Tickeler](https://google.com "View Link") | Previously, the response message failed to retrieve multiple memo ticklers associated with an account or party record. We resolved this issue so that users can retrieve all the memo ticklers successfully |
| [Add Escrow](https://google.com "View Link") | Previously, the escrow expiry date was sent in an incorrect format as "MMddyyyy.juliandate". We updated the date format as "MM/DD/YYYY" <br>**Impacted Field:** <br>`EscrowInfo/EscrowExpDt`|

### Enhancements
| API Name | Description |
| --- | ----------- |
| [Add Document](https://google.com "View Link")| Added the new enum values **DOC** and **XLSX** in the *DocumentInfo/PageData/PageFormat* field as new page formats. This will support more page formats while adding as a document. <br><br>**Impacted Field**: <br> `PageData/PageFormats` |
| [Update Stop Item](https://google.com "View Link")|  Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>**Impacted Fields**: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType` |
|[Update Stop Item](https://google.com "View Link") | Removed enumeration values for CMA- Cash Management Account to improve the API performance. <br><br>**Impacted Fields**: <br> `StopChkKeys/AcctKeys/AcctType` <br> `StopChkStatusRec/StopChkKeys/AcctKeys/AcctType`|


<!-- type: tab -->
