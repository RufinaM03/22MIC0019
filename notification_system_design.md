# Stage 3

## Query Given

```sql
SELECT * FROM notifications
WHERE studentID = 1042 AND isRead = false
ORDER BY createdAt ASC;
```

Is the Query Right?

Yes, the query is correct. It retrieves all the unread notifications of a student and orders them by time.

Why does it take so long.

The notifications table has roughly 5 million rows. Without the right indexes the database can scan many rows before it finds matching data . Sorting takes time as well.

Improvements

Instead of scanning the whole table, indexing can be used.

```sql
CREATE INDEX idx_notification
ON notifications(studentID, isRead, createdAt);
```

This enables the database to quickly filter unread notifications for a student.

Are You Adding Indexes on All Columns?

No. Creating indexes on every column is not a good idea because:

it increases the storage
insert/update operations become slower some indexes might never be used

Add indexes only to important columns that are frequently searched.

Placement Notifications Query for last 7days

```sql
SELECT DISTINCT studentID
FROM notifications
WHERE notificationType = 'Placement'
AND createdAt >= NOW() - INTERVAL 7 DAY;
```

Stage 4 Problem

If we fetch notifications for every page load for every student, the database gets overloaded and response time is slower.

Possible solutions:

1. Page Numbering

Load the notifications in smaller chunks, such as 10 or 20 at a time, instead of loading them all.

2. Cache

Cache frequently accessed notifications in Redis to optimize DB queries.

WebSocket 3.

Use WebSockets for real-time updates instead of calling APIs repeatedly.

4. Database Indexing

Indexes can make queries on fields that are searched often faster.

Trade Offs
Pagination saves load . Requires multiple API calls .
Caching speeds things up, but takes more memory.
Websockets are more complex to implement but allow for real time updates.
