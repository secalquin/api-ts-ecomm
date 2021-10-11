import redis from "redis";
const { promisify } = require("util");

const RedisConfig = {
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
  REDIS_PORT: process.env.REDIS_PORT || "6379",
  REDIS_USERNAME: process.env.REDIS_USERNAME || "",
  REDIS_PASSWORD: process.env.REDIS_PASSWORD || "",
  REDIS_DB: process.env.REDIS_DB || "redis_example",
};

const { REDIS_HOST, REDIS_PORT, REDIS_USERNAME, REDIS_PASSWORD, REDIS_DB } =
  RedisConfig;

const client = redis.createClient({
  host: REDIS_HOST,
  port: parseInt(REDIS_PORT),
  //password: REDIS_PASSWORD,
});

//client.on("connect", () => {
//  console.log("Connected to redis");
//});

export { client };
