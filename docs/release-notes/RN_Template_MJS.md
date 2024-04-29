# Release Notes

<!-- 
type: tab 
titles: Premier, Precision, Signature, Cleartouch, Finxact, DNA 
-->

## April 12, 2024

### What's New
- Added [Postman collection for Precision](https://github.com/Fiserv/banking-hub/files/14896028/Banking.Hub.-.Precision-.Trial.Plan.Postman.Collection.postman_collection.zip) core.
- The following API endpoints are newly added.

  [Add Address](Google.com)

  [Get Address](Google.com)

  [UpdateAddress](Google.com)

  [Delete Address](Google.com)

  [Get Beneficiary](Google.com)

  [Add Party Account Relationship](Google.com)

### Enhancements
With this release, the following enhancements are made. 
| API Name | Description |
| --- | ----------- |
| [Get Transaction Account - Deposits](https://google.com "View Link") | Updated the "AcctTrnRec/AcctTrnInfo/Desc" field that returns the second line of the truncated description in the response.This will benefit you to have a more clear vision of the API.|

| [Add Transfer ](https://google.com "View Link") | Fixed an issue occurring while updating the gender status to "Unknown". <br><br>Impacted Field: <br> `PersonPartyInfo/Gender` | 
|[Test Name of any long API](https://google.com "View Link")|Fixed an issue occurring while updating the race status to "Other", "NativeAmerican" or "NativeAlaskan" <br><br>Impacted Field:<br>`PersonPartyInfo/Race`|

### Fixed
| API Name | Description |
| --- | ----------- |
| [Update Party](https://google.com "View Link") | Fixed an issue occurring while updating the marital status to "NotApplicable" <br><br> Impacted field:<br> `PersonPartyInfo/MaritalStat` |
|[Update Party](https://google.com "View Link")|Fixed the issues occurring while updating the following: <br> <li> marital status to "NotApplicable"</li> <li> Gender status to "Unknown"</li> <li> Race status to "Other", "NativeAmerican" or "NativeAlaskan" </li> <br>Impacted Fields:<br>`PersonPartyInfo/MaritalStat`<br>`PersonPartyInfo/Gender`<br>`PersonPartyInfo/Race`|
