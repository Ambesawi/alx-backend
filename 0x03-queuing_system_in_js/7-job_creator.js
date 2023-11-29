#!/usr/bin/node
/**
 * Track progress and errors with Kue: Create the Job creator
 */
import { createQueue } from 'kue';

const queue = createQueue();

const jobs = [
  {
    phoneNumber: '4153518780',
    message: 'This is the code 1234 to verify your account',
  },
  {
    phoneNumber: '4153518781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4153518743',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4153538781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4153118782',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4153718781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4159518782',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4158718781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4153818782',
    message: 'This is the code 4321 to verify your account',
  },
  {
    phoneNumber: '4154318781',
    message: 'This is the code 4562 to verify your account',
  },
  {
    phoneNumber: '4151218782',
    message: 'This is the code 4321 to verify your account',
  },
];

for (let job of jobs) {
  job = queue.create('push_notification_code_2', job);
  job
    .on('complete', (result) => { /* eslint-disable-line no-unused-vars */
      console.log(`Notification job ${job.id} completed`);
    })
    .on('failed', (err) => { /* eslint-disable-line no-unused-vars */
      console.log(`Notification job ${job.id} failed: ${err.message || err.toString()}`);
    })
    .on('progress', (progress, data) => { /* eslint-disable-line no-unused-vars */
      console.log(`Notification job ${job.id} ${progress}% complete`);
    })
    .save((err) => { /* eslint-disable-line no-unused-vars */
      console.log(`Notification job created: ${job.id}`);
    });
}
