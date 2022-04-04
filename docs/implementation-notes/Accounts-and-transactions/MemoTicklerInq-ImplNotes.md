# Implementation Notes for Memo Tickler

This section provides the provider-specific request schema and implementation notes applicable for MemoTicklerInq API.


<!--
type: tab
titles: Premier
-->

## Premier - Implementation Notes

 <table cellspacing="0">
    <col />
    <col />
    <col />
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
            <td><code>RecCtrlOut</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>RecCtrlOut/SentRecCount</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>Maximum 99 memos and ticklers are supported.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel/MemoTicklerKeys</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>Provide memo/tickler number and account number associated with a memo/tickler to retrieve a memo/tickler record.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel/MemoTicklerKeys/AcctKeys</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel/MemoTicklerKeys/AcctKeys/AcctId</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel/MemoTicklerKeys/AcctKeys/AcctType</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel/MemoTicklerKeys/MemoTicklerUse</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>It is required to provide the addenda type to identify a memo/tickler item. Memo refers to miscellaneous addenda, whereas tickler refers to tickler addenda.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel/MemoTicklerKeys/MemoTicklerIdent</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>This field refers to addenda number and is required to identify the memo/tickler.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel/AcctKeys</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>This aggregate is used to retrieve all the memo or ticklers associated with an account.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel/AcctKeys/AcctId</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel/AcctKeys/AcctType</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerSel/MemoTicklerUse</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>It is required to select an item in this tag to get a memo or tickler record else, both memo and ticklers will be returned in response.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerKeys</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerKeys/AcctKeys</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerKeys/AcctKeys/AcctId</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerKeys/AcctKeys/AcctType</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerKeys/MemoTicklerUse</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>It is required to provide the addenda type to identify a memo/tickler item. Memo refers to miscellaneous addenda, whereas tickler refers to tickler addenda.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerKeys/MemoTicklerIdent</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>This field refers to addenda number and is required to identify the memo/tickler.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/MemoTicklerUse</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>It is required to provide the addenda type to identify a memo/tickler item. Memo refers to miscellaneous addenda, whereas tickler refers to tickler addenda.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/MemoTicklerText</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>0</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/MemoTicklerExtendedText</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>0</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/RelationshipMgr</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/RelationshipMgr/RelationshipMgrIdent</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>0</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/RelationshipMgr/RelationshipRole</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>0</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/RequiredViewInd</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>0</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/DeliveryInstruction</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/DeliveryInstruction/DeliveryMethod</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/DeliveryInstruction/DeliveryMedia</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>This field indicates the client-defined format used to generate an 8 1/2" x 11" or side-by-side notification form.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/ReportGroupCode</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>This tag referes to Miscellaneous Code for both memos and tickelers.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/RecurRule</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>0</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/RecurRule/RecurType</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>Additional yearly frequencies of every two years, every four years and every five years is supported.</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/RecurRule/RecurInterval</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/NextMemoTicklerDt</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>0</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerInfo/ExpDt</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>0</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerStatus</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerStatus/MemoTicklerStatusCode</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
        <tr>
            <td><code>MemoTicklerRec/MemoTicklerStatus/EffDt</code></td>
            <td>&#160;</td>
            <td>&#160;</td>
            <td>&#160;</td>
        </tr>
    </tbody>
</table>

---


<!--
type: tab-end -->