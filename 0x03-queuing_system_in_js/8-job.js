#!/usr/bin/node
/**
 * Writing the job creation function
 */
function createPushNotificationsJobs(jobs, queue) {
  if (!(jobs instanceof Array)) {
    throw new Error('Jobs is not an array');
  }
  for (let job of jobs) {
    job = queue.create('push_notification_code_3', job);
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
}

module.exports = createPushNotificationsJobs;
