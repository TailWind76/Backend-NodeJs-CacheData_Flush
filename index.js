// Connecting to Redis
const redis = require('redis');
const client = redis.createClient();

// Function to Flush Cache by Key
const flushCacheByKey = (key) => {
  client.del(key, (err, response) => {
    if (err) throw err;
    console.log(`Cache with key ${key} has been flushed.`);
  });
};

// Using Cache Flush
// Call this function when you need to flush the cache for a specific key
const cacheKey = 'exampleCacheKey';
flushCacheByKey(cacheKey);
