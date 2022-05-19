# Implementation Notes for Get Transfer List
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
|`XferListSel`|||
|`XferListSel.AcctRef`|||
|`XferListSel.AcctRef.AcctKeys`|||
|`XferListSel.AcctRef.AcctKeys.AcctId`|||
|`XferListSel.AcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
#### Response Schema
|Field Name|Allowed Values|Implementation Note|
|----|----|----|
|`Status`|||
|`RecCtrlOut`||Service Provider does not support record control for transfer list inquiry. Up to 999 transfer records can be returned in the response. All transfer addendas available on the account will be returned in the response.|
|`RecCtrlOut.SentRecCount`|1-999||
|`XferListRec`|||
|`XferListRec.XferKeys`|||
|`XferListRec.XferKeys.AcctKeys`|||
|`XferListRec.XferKeys.AcctKeys.AcctId`|||
|`XferListRec.XferKeys.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferListRec.XferKeys.XferIdent`|1-999|This field refers to the addenda number.|
|`XferListRec.XferListInfo`|||
|`XferListRec.XferListInfo.FromAcctRef`|||
|`XferListRec.XferListInfo.FromAcctRef.AcctKeys`|||
|`XferListRec.XferListInfo.FromAcctRef.AcctKeys.AcctId`|||
|`XferListRec.XferListInfo.FromAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>CDA||
|`XferListRec.XferListInfo.ToAcctRef`|||
|`XferListRec.XferListInfo.ToAcctRef.AcctKeys`|||
|`XferListRec.XferListInfo.ToAcctRef.AcctKeys.AcctId`|||
|`XferListRec.XferListInfo.ToAcctRef.AcctKeys.AcctType`|DDA<br>SDA<br>EXT<br>LOAN<br>SDB<br>GLA<br>|EXT refers to an external account.|
|`XferListRec.XferListInfo.CurAmt`|||
|`XferListRec.XferListInfo.CurAmt.Amt`|||
|`XferListRec.XferListInfo.CurAmt.CurCode`|||
|`XferListRec.XferListInfo.CurAmt.CurCode.CurCodeType`|||
|`XferListRec.XferListInfo.CurAmt.CurCode.CurCodeTypeEnumDesc`|||
|`XferListRec.XferListInfo.CurAmt.CurCode.CurCodeValue`|Premier supports USD only.||
|`XferListRec.XferListInfo.StartDt`|||
|`XferListRec.XferListInfo.EndDt`|||
|`XferListRec.XferListInfo.RecurModel`|||
|`XferListRec.XferListInfo.RecurModel.RecurRule`|||
|`XferListRec.XferListInfo.RecurModel.RecurRule.RecurType`|Cycle<br>Monthly<br>Quarterly<br>Yearly<br>Weekly<br>TwiceMonthly<br>Once <br>InterestCycle<br>Maturity||
|`XferListRec.XferListInfo.RecurModel.RecurRule.RecurInterval`|||
|`XferListRec.XferListInfo.XferAmtCode`|Fixed<br>Variable<br>IntPlusDistribution<br>BalanceMinusDistribution||
|`XferListRec.XferListInfo.Nickname`|||
|`XferListRec.XferStatus`|||
|`XferListRec.XferStatus.XferStatusCode`|||
|`XferListRec.XferStatus.EffDt`|||
<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab -->


#### Coming soon!
We are working on developing content for this section. Stay tuned for more updates. 


<!-- type: tab-end -->
