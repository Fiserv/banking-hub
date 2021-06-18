# Release Notes

This section provides information about the changes to the Open Banking APIs or API Domain Name (e.g. Cards, Payments, etc.).

<details>
<summary>
  <span span style="color:blue"> Release 2021.01 <span style="font-size: 80%; color:#eee"> June 2021 </span> </span>
</summary>
<br>
  <table style="width: 100%;margin-left: 0;margin-right: auto;">
            <col />
            <col />
            <col />
            <col />
            <thead>
                <tr>
                    <th>API Domain</th>
                    <th>API</th>
                    <th>Type</th>
                    <th>Release Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="4">Cards</td>
                    <td rowspan="2">POST /cards</td>
                    <td>MAIN</td>
                    <td>
                        <ul>
                            <li>
                                <p>Updated the description of test.test1.test2  parameter to include {reason and impact of updating}</p>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>ENH</td>
                    <td>
                        <ul>
                            <li>
                                <p>Added following new parameters to allow {reason and impact of adding new parameters}</p>
                                <ul>
                                    <li>
                                        <p>test.testA.test</p>
                                    </li>
                                    <li>
                                        <p>	test.test.test</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>GET /cards/{accountID}</td>
                    <td>ENH</td>
                    <td>
                        <ul>
                            <li>
                                <p>Deleted the deprecated parameter test.test.test to {reason and impact of deletion}</p>
                            </li>
                            <li>
                                <p>Added TestEnum as a new enumeration value in test.testtest.test parameter. {reason and impact}</p>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>POST /cards/{accountID}</td>
                    <td>ENH</td>
                    <td>
                        <ul>
                            <li>
                                <p>New API added to retrieve the card information by account ID using POST operation.
{Additional description if needed}
</p>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
 </details>
 

