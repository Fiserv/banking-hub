# Implementation Notes for ePreference Inq
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
|`OvrdExceptionData`||  |
|`ePreferenceSel`||Records can be searched by using both ePreferenceSel/Acctkeys and ePreferencesel/ePreferenceKeys aggregates.  When both are used, EFX will search the records based on the ePreferenceSel/ePrefernceKeys aggregate if the ePreferenceIdent is provided in the request else Acctkeys aggregate (including the AcctType and AcctId) is used to retrieve the records.<br><br>Please note that ePreference Inquiry operation can return the account-level preference records only when searched using Acctkeys aggregate.Also ePreference Mod/ Del operations cannot be used to update or delete the account- level preference records, thus advised to use ESF Acct Inq and AcctMod services to retrieve/update the preference records.|
|`ePreferenceSel.ePreferenceKeys`||  |
|`ePreferenceSel.ePreferenceKeys.AcctKeys`||  |
|`ePreferenceSel.ePreferenceKeys.AcctKeys.AcctId`||  |
|`ePreferenceSel.ePreferenceKeys.AcctKeys.AcctType`|DDA<br>SDA<br>LOAN<br>CDA|  |
|`ePreferenceSel.ePreferenceKeys.ePreferenceIdent`||  |
|`ePreferenceSel.AcctKeys`||  |
|`ePreferenceSel.AcctKeys.AcctId`||  |
|`ePreferenceSel.AcctKeys.AcctType`|DDA<br>SDA<br>LOAN<br>CDA|  |
# Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`||  |
|`RecCtrlOut`||  |
|`RecCtrlOut.SentRecCount`||  |
|`ePreferenceRec`||  |
|`ePreferenceRec.ePreferenceKeys`||  |
|`ePreferenceRec.ePreferenceKeys.AcctKeys`||  |
|`ePreferenceRec.ePreferenceKeys.AcctKeys.AcctId`||  |
|`ePreferenceRec.ePreferenceKeys.AcctKeys.AcctType`|DDA<br>SDA<br>LOAN<br>CDA|  |
|`ePreferenceRec.ePreferenceKeys.ePreferenceIdent`||  |
|`ePreferenceRec.ePreferenceInfo`||  |
|`ePreferenceRec.ePreferenceInfo.DocGroupName`||The value for the DocGroup Name between the calling application and the core is passed without any transformation by the ESF. The allowed values for this field is determined by the FI at the time of on-boarding with the integration team. The core allows three digit value ranging from 001 to 999 for the document distribution group.<br><br>Please note Multiple mailing addenda functionality is not available for Loan account types. |
|`ePreferenceRec.ePreferenceInfo.CombinedStmtInd`|True<br>False|This field is marked true if the combined statement identifier matches the combine statement identifier on another DDA account, then this account will be included on the other DDA account's combined statement.<br><br>Please note "Blank" is a valid identifier|
|`ePreferenceRec.ePreferenceInfo.Pswd`||This field is used for accessing information in Connect3. If left blank, the CIS Default Connect3 Password Option in CIS General Specifications controls whether a default password is assigned automatically when a new portfolio name is established.|
|`ePreferenceRec.ePreferenceInfo.StmtPrepCode`||  |
|`ePreferenceRec.ePreferenceInfo.StmtTruncationOption`|| ImageOption is not used for SDA or CDA accounts in Premier's Multiple mailing addendas.|
|`ePreferenceRec.ePreferenceInfo.NoticeData`||  |
|`ePreferenceRec.ePreferenceInfo.NoticeData.NoticeType`|RegularNotice<br>ChargeBack<br>|  |
|`ePreferenceRec.ePreferenceInfo.NoticeData.NoticeOption`|NoNotice|This field is only used for additional ePreference records.<br><br>Please note EimOption is not available for CDA account type in  Multiple mailing addendas.|
|`ePreferenceRec.ePreferenceInfo.EmailLink`||  |
|`ePreferenceRec.ePreferenceInfo.EmailLink.Email`||  |
|`ePreferenceRec.ePreferenceInfo.EmailLink.Email.EmailType`|Business<br>Person<br>|  |
|`ePreferenceRec.ePreferenceInfo.EmailLink.Email.EmailAddr`||In the core, if the account has a Document Distribution code utilized for e-statements, the email that is used for the First Name (primary owner) of the account need to be provided.|
|`ePreferenceRec.ePreferenceInfo.EmailLink.Email.PreferredEmail`|True<br>False|  |
|`ePreferenceRec.ePreferenceInfo.EmailLink.UserKey`||  |
|`ePreferenceRec.ePreferenceStatus`||  |
|`ePreferenceRec.ePreferenceStatus.ePreferenceStatusCode`|Valid|  |
|`ePreferenceRec.ePreferenceStatus.EffDt`||  |
<!-- type: tab-end -->
