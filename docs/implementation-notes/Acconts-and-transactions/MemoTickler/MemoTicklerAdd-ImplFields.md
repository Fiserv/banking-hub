# Implementation Notes for Memo Tickler

This section provides the provider-specific request schema and implementation notes applicable for MemoTicklerAdd API.


<!--
type: tab
titles: Premier
-->

## Premier - Implementation Notes

 The following table lists the provider-specific fields and implementation notes for the applicable fields. To view the field descriptions, please refer the API Explorer section of this API.

<table cellspacing="0">
    <col  />
    <col />
    <col  />
    <col />
    <tbody>
        <tr>
            <td>Field Name</td>
            <td>Core Usage</td>
            <td>Core Field Length</td>
            <td>Implementation Note</td>
        </tr>
        <tr>
            <td><code>Status</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.AcctKeys</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.AcctKeys.AcctId</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.AcctKeys.AcctType</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.MemoTicklerUse</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.MemoTicklerText</code></td>
            <td>&#160;</td>
            <td>Tickler: 40 Char
Tickler (Loan): 60 Char
Memo: 60 Char</td>
            <td>For Ticklers, one description line (40 Char) is accepted.  For Loan account type, 60 Char is accepted.

For Memos, 5 description lines (60 Char) are accepted by the Service.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.MemoTicklerExtendedText</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>For Ticklers, additional message line of 60 Char is accepted by the Service.
This message prints in addition to a standard message from the notification format specifications.

</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.RelationshipMgr</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.RelationshipMgr.RelationshipMgrIdent</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.RelationshipMgr.RelationshipRole</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.RequiredViewInd</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.DeliveryInstruction</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.DeliveryInstruction.DeliveryMethod</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>Item appears as a notice printed during nightly processing.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.DeliveryInstruction.DeliveryMedia</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>This field indicates the client-defined format used to generate an 8 1/2" x 11" or side-by-side notification form.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.ReportGroupCode</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>This tag refers to Miscellaneous Code for both memos and ticklers.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.RecurRule</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.RecurRule.RecurType</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.RecurRule.RecurInterval</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.NextMemoTicklerDt</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>If the tickler frequency is monthly or greater, next tickler date will be automatically advanced, whereas for one-time/blank frequency the date should be manually advanced whenever the tickler is reported. </td>
        </tr>
        <tr>
            <td><code>MemoTicklerInfo.ExpDt</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerStatusRec</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerStatusRec.MemoTicklerKeys</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerStatusRec.MemoTicklerKeys.AcctKeys</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerStatusRec.MemoTicklerKeys.AcctKeys.AcctId</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerStatusRec.MemoTicklerKeys.AcctKeys.AcctType</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerStatusRec.MemoTicklerKeys.MemoTicklerUse</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerStatusRec.MemoTicklerKeys.MemoTicklerIdent</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerStatusRec.MemoTicklerStatus</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerStatusRec.MemoTicklerStatus.MemoTicklerStatusCode</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerStatusRec.MemoTicklerStatus.EffDt</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
    </tbody>
</table>

---


 <!--
type: tab-end -->