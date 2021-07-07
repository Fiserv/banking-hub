# Response Codes

Fiserv Open Banking API returns standard HTTP status code along with the EFX status code.

## HTTP Status Codes

For every API request, one of the following HTTP status code returns in the response.

| HTTP Status Code          | Description   |
|-------------------|-----------|
| `200  OK `      | Successful request   |
| `201  Created `     | Successfully created a new resource     |
| `401  Unauthorized` | Invalid authentication credentials  |
| `422  Un-processable Entity`  | Server is unable to process the request due to semantic errors |
| `500  Internal Server Error ` | Server encountered an unexpected error while processing the request  |
| `503  Service Unavailable  `        | Service is temporarily unavailable due to overloaded or maintenance activity    |

## EFX Status Codes

The following table lists EFX status codes and their descriptions related to the HTTP status codes:
        <table style="width: 100%;">
            <col />
            <col />
            <col />
            <col />
            <thead>
                <tr>
                    <th> HTTP Status Code </th>
                    <th> EFX Status Code </th>
                    <th> EFX Severity</th>
                    <th> EFX Status Description</t>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="background-color: #fff;" rowspan="2"><code>200 OK</code></td>
                    <td><code>1080</code></td>
                    <td>Warning</td>
                    <td>Unchanged</td>
                </tr>
                <tr>
                    <td><code>1120</code></td>
                    <td>Info
</td>
                    <td>No records match the selection criteria
</td>
                </tr>
                <tr>
                    <td style="background-color: #fff;" rowspan="2"><code>201 Created
                    </code></td>
                    <td><code>0</code></td>
                    <td>Info</td>
                    <td>Success</td>
                </tr>
                <tr>
                    <td><code>50</code></td>
                    <td>Warning</td>
                    <td>General warning</td>
                </tr>
                <tr>
                    <td rowspan="4"><code>401 Unauthorized</code></td>
                    <td><code>1700</code></td>
                    <td>Error</td>
                    <td>Security violation</td>
                </tr>
                <tr>
                    <td><code>1740</code></td>
                    <td>Error</td>
                    <td>Authentication failed</td>
                </tr>
                <tr>
                    <td><code>1970</code></td>
                    <td>Error</td>
                    <td>General data error</td>
                </tr>
                <tr>
                    <td><code>2380</code></td>
                    <td>Error</td>
                    <td>Unauthorized account</td>
                </tr>
                <tr>
                    <td style="background-color: #fff;" rowspan="31"><code>422 Un-processable Entity</code></td>
                    <td><code>50</code></td>
                    <td>
                        <p>Warning</p>
                    </td>
                    <td>General warning</td>
                </tr>
                <tr>
                    <td><code>200</code></td>
                    <td>Error</td>
                    <td>General data error</td>
                </tr>
                <tr>
                    <td><code>1020</code></td>
                    <td>Error</td>
                    <td>Required Element Not Included
</td>
                </tr>
                <tr>
                    <td><code>1030</code></td>
                    <td>Error</td>
                    <td>Value out of range</td>
                </tr>
                <tr>
                    <td><code>1045</code></td>
                    <td>Error</td>
                    <td>Request denied</td>
                </tr>
                <tr>
                    <td><code>1070</code></td>
                    <td>Error</td>
                    <td>Invalid Format
</td>
                </tr>
                <tr>
                    <td><code>1080</code></td>
                    <td>Error</td>
                    <td>Invalid field size</td>
                </tr>
                <tr>
                    <td><code>1090</code></td>
                    <td>Error</td>
                    <td>Invalid value</td>
                </tr>
                <tr>
                    <td><code>1121</code></td>
                    <td>Error</td>
                    <td>No records found</td>
                </tr>
                <tr>
                    <td><code>1421</code></td>
                    <td>Error</td>
                    <td>Invalid party reference</td>
                </tr>
                <tr>
                    <td><code>1500</code></td>
                    <td>Error</td>
                    <td>Invalid address</td>
                </tr>
                <tr>
                    <td><code>1726</code></td>
                    <td>Error</td>
                    <td>Error occurred due to included override exceptions in AdditionalStatus field</td>
                </tr>
                <tr>
                    <td><code>2020</code></td>
                    <td>Error</td>
                    <td>Amount too small</td>
                </tr>
                <tr>
                    <td><code>2030</code></td>
                    <td>Error</td>
                    <td>Amount too large</td>
                </tr>
                <tr>
                    <td><code>2050</code></td>
                    <td>Error</td>
                    <td>Invalid amount value</td>
                </tr>
                <tr>
                    <td><code>2120</code></td>
                    <td>Error</td>
                    <td>Invalid date-time range</td>
                </tr>
                <tr>
                    <td><code>2140</code></td>
                    <td>Error</td>
                    <td>Date-time value is less than the accepted limit</td>
                </tr>
                <tr>
                    <td><code>2150</code></td>
                    <td>Error</td>
                    <td>Date-time value is greater than the accepted limit</td>
                </tr>
                <tr>
                    <td><code>2350</code></td>
                    <td>Error</td>
                    <td>Account closed</td>
                </tr>
                <tr>
                    <td><code>2360</code></td>
                    <td>Error</td>
                    <td>Restricted access</td>
                </tr>
                <tr>
                    <td><code>2365</code></td>
                    <td>Error</td>
                    <td>Request denied due to Account Status</td>
                </tr>
                <tr>
                    <td><code>2380</code></td>
                    <td>Error</td>
                    <td>Unauthorized account</td>
                </tr>
                <tr>
                    <td><code>2441</code></td>
                    <td>Error</td>
                    <td>Invalid account type to process the transaction</td>
                </tr>
                <tr>
                    <td><code>2610</code></td>
                    <td>Error</td>
                    <td>Request is too late - check has been paid</td>
                </tr>
                <tr>
                    <td><code>2940</code></td>
                    <td>Error</td>
                    <td>Insufficient funds</td>
                </tr>
                <tr>
                    <td><code>3060</code></td>
                    <td>Error</td>
                    <td>Usage limit exceeded</td>
                </tr>
                <tr>
                    <td><code>3080</code></td>
                    <td>Error</td>
                    <td>Withdrawal limit exceeded</td>
                </tr>
                <tr>
                    <td><code>3960</code></td>
                    <td>Error</td>
                    <td>Stop payment match</td>
                </tr>
                <tr>
                    <td><code>6335</code></td>
                    <td>Warning</td>
                    <td>Original transaction has been reversed</td>
                </tr>
                <tr>
                    <td><code>6350</code></td>
                    <td>Error</td>
                    <td>Posting session cannot be back-dated.</td>
                </tr>
                <tr>
                    <td><code>6410</code></td>
                    <td>Error</td>
                    <td>Duplicate value</td>
                </tr>
                <tr>
                    <td style="background-color: #fff;" rowspan="19"><code>500 Internal Server Error</code></td>
                    <td><code>10</code></td>
                    <td>Error</td>
                    <td>Additional action needed</td>
                </tr>
                <tr>
                    <td><code>50</code></td>
                    <td>Warning</td>
                    <td>General warning</td>
                </tr>
                <tr>
                    <td><code>100</code></td>
                    <td>Error</td>
                    <td>General error</td>
                </tr>
                <tr>
                    <td><code>200</code></td>
                    <td>Error</td>
                    <td>General data error</td>
                </tr>
                <tr>
                    <td><code>300</code></td>
                    <td>Error</td>
                    <td>System not available</td>
                </tr>
                <tr>
                    <td><code>400</code></td>
                    <td>Error</td>
                    <td>Unavailable function</td>
                </tr>
                <tr>
                    <td><code>700</code></td>
                    <td>Error</td>
                    <td>Unsupported function</td>
                </tr>
                <tr>
                    <td><code>810</code></td>
                    <td>Error</td>
                    <td>Message cannot be reversed</td>
                </tr>
                <tr>
                    <td><code>999</code></td>
                    <td>Error</td>
                    <td>Unspecified error</td>
                </tr>
                <tr>
                    <td><code>1020</code></td>
                    <td>Error</td>
                    <td>Required element not included</td>
                </tr>
                <tr>
                    <td><code>1060</code></td>
                    <td>Error</td>
                    <td>Element cannot be modified</td>
                </tr>
                <tr>
                    <td><code>1070</code></td>
                    <td>Error</td>
                    <td>Invalid format</td>
                </tr>
                <tr>
                    <td><code>1090</code></td>
                    <td>Error</td>
                    <td>Invalid value</td>
                </tr>
                <tr>
                    <td><code>1220</code></td>
                    <td>Error</td>
                    <td>invalid identifier</td>
                </tr>
                <tr>
                    <td><code>2380</code></td>
                    <td>Error</td>
                    <td>Unauthorized account</td>
                </tr>
                <tr>
                    <td><code>3060</code></td>
                    <td>Error</td>
                    <td>Usage limit exceeded</td>
                </tr>
                <tr>
                    <td><code>6000</code></td>
                    <td>Error</td>
                    <td>Terminal not configured</td>
                </tr>
                <tr>
                    <td><code>6100</code></td>
                    <td>Error</td>
                    <td>Message not permitted from terminal</td>
                </tr>
                <tr>
                    <td><code>6130</code></td>
                    <td>Error</td>
                    <td>Function not available to user</td>
                </tr>
                <tr>
                    <td><code>503 Service Unavailable</code></td>
                    <td><code>300</code></td>
                    <td>Error</td>
                    <td>System not available</td>
                </tr>
            </tbody>
        </table>
