# URL Shortener Service

On a high level, a URL shortener is able to generate a unique short URL. The server persists the short URLs in a data store and is able to redirect clients to the original long URL against the short URL.

### API

`POST api/v1/data/shorten?longUrl=xxx`: return shortUrl

`GET api/v1/shortUrl`: return longUrl for HTTP redirection (302 redirect to enable analytics)

### URL Generation Method

To create shortened URLS, we will use UUIDs with base62 encoding. This approach is simpler than the approach using hash functions, as we do not have to account for collisions.

### Database

We will store short/long URL pairs together with creation timestamp and last_visited timestamp into DynamoDB. A NoSQL datastore is chosen, because it is non-relational data where we do not require joins, so we can benefit from a dynamic schema and easy horizontal scaling. Also we need utilize caching.

### Security

We make use of rate limiting, to prevent a malicious user from consuming too much of our system's capacity.

### Analytics

HTTP headers of the URL redirection request are used to collect data for analytics. The IP address of the client identifies the location.

The server will put a message on the message queue, while an archive service will execute a batch operation to move messages from the message queue to an analytics database, e.g. Amazon Redshift.

For simplicity, we will collect only the number of clicks over a certain timeframe, and the country of the user.

### Database Cleanup

A dedicated cleanup service is executed during non-peak hours to remove expired URLs. Otherwise, the system falls back on a lazy removal approach, where when the client hits an expired URL, it gets deleted.

### Monitoring

Monitoring is necessary to identify system failures. We implement it by installing an agent on each of the servers, which collect and aggregate metrics and publish them to a central monitoring service. Dashboards are configured to visualize the data.

We can collect the following metrics:

- CPU load, memory, disk I/O
- queries per second, cache hit ratio
- latency, failure rate

For example, we can use datadog, a popular log aggregation and monitoring service.
