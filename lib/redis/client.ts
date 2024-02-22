const { createClient } = require("redis");
import config from '../../config';

const client = createClient ({
  url : config.REDIS_ENDPOINT //|| env.REDIS_ENDPOINT,
});

const redis = async() => {
  if (client.status === 'ready') {
    return client;
  }

  client.on("error", function(err: Error) {
    throw err;
  });

  await client.connect();

  return client;
}

export default redis;