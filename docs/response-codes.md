# Response Codes

Fiserv Open Banking API returns standard HTTP status code along with the EFX status code.

## HTTP Status Codes

For every API request, one of the following HTTP status codes is returned with the response.

| HTTP Status Code          | Description   |
|-------------------|-----------|
| `200  OK `      | Successful request   |
| `201  Created `     | Successfully created a new resource     |
| `401  Unauthorized` | Invalid authentication credentials  |
| `422  Un-processable Entity`  | Server is unable to process the request due to semantic errors |
| `500  Internal Server Error ` | Server encountered an unexpected error while processing the request  |
| `503  Service Unavailable  `        | Service is temporarily unavailable due to overload or maintenance activity    |

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
                    <td style="background-color: #fff;" rowspan="3">`200 OK`</td>
                    <td>`1080`</td>
                    <td>Warning</td>
                    <td>Unchanged</td>
                </tr>
                <tr>
                    <td>`1120`</td>
                    <td>Info</td>
                    <td>No records match the selection criteria</td>
                </tr>
                <tr>
                    <td>`1140`</td>
                    <td>Warning</td>
                    <td>Details not available</td>
                </tr>
               </tbody>
               <tbody>
                <tr>
                    <td style="background-color: #fff;" rowspan="3">`200 OK`</td>
                    <td>`1080`</td>
                    <td>Warning</td>
                    <td>Unchanged</td>
                </tr>
                <tr>
                    <td>`1120`</td>
                    <td>Info</td>
                    <td>No records match the selection criteria</td>
                </tr>
                <tr>
                    <td>`1140`</td>
                    <td>Warning</td>
                    <td>Details not available</td>
                </tr>              
            </tbody>
        </table>
