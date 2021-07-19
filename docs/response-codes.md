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
|HTTP Status Code|EFX Status Code|EFX Severity|EFX Status Description|
|--- |--- |--- |--- |
|`200 OK`|`1080`|Warning|Unchanged|
||`1120`|Info|No records match the selection criteria|
||`1140`|Warning|Details not available|
|`201 Created`|`0`|Info|Success|
||`50`|Warning|General warning|
