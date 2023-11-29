#!/usr/bin/node
/**
 * Connect to redis server via redis client
 */
import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    client.PUBLISH('holberton school channel', message);
  }, time);
}

publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
