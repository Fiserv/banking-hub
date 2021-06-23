# Release Notes

This section provides information about the changes to the Open Banking APIs.

<details>
<summary>
  <span span style="color: #ff6600; font-size: 150%; font-weight: bold;"> Release 2021.01 <span style="font-size: 80%; color:#666"> June 2021 </span> </span>
</summary>
<br>
  
 > Please note that information listed in below table is just a placeholder and very soon we will update this information.
  
  
  <table style="width: 100%;margin-left: 0;margin-right: auto;">
            <col />
            <col />
            <col />
            <thead>
                <tr>
                    <th>API</th>
                    <th>Type</th>
                    <th>Release Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="3" style="font-weight: bold; color: #444;">Domain: Cards</td>
                </tr>
                <tr>
                  <td>POST /cards  <br> <br> <span style="font-size: 80%; color: #666;">Add Card</span></td>
                    <td>MAINT</td>
                    <td>
                        <ul>
                            <li>
                                <p>Updated the description of test.test1.test2  parameter to include {reason and impact of updating}</p>
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>POST /cards <br> <br> <span style="font-size: 80%; color: #666;">Add Card</span></td>
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
                    <td>GET /cards/{accountID}  <br> <br> <span style="font-size: 80%; color: #666;">Get Card</span></td>
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
                    <td>POST /cards/{accountID}  <br> <br> <span style="font-size: 80%; color: #666;">Add Card by Account ID</span></td>
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
 

