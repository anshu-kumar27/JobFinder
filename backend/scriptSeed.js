const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Job = require('./model/jobsModel');
const jobsData = require('./data/Data.json');


dotenv.config();

const databaseConnection = async () => {
    dbUrl = process?.env?.MONGODBURL ?? "mongodb://localhost:27017/jobs";
    await mongoose
        .connect(dbUrl)
        .then((data) => {
            console.log(`db connected on : ${dbUrl}`);
        })
        .catch((error) => {
            console.log(`error while connecting the db ${error}`);
        });
};

const insertJobs = async () => {
    try {
        await databaseConnection();
        const formattedJobs = jobsData.map(job => ({
            jobId: Number(job?.["Job ID (Numeric)"]) || Math.floor(Math.random() * (10000000 - 100000) + 100000),
            title: job?.title ?? 'Untitled',
            company: job?.company ?? 'Unknown Company',
            location: job?.location ?? 'Unknown Location',
            jobLink: job?.job_link ?? '',
            employmentType: job?.employment_type ?? 'Not specified',
            experience: job?.experience ?? 'Not specified',
            source: job?.source ?? 'Unknown',
            country: job?.country ?? 'Unknown',
            postedDateTime: job?.postedDateTime?.$date ?? new Date(),
            companyImageUrl: typeof job?.companyImageUrl === 'string'? job.companyImageUrl : '',
            min_exp: job?.min_exp ?? 0,
            max_exp: job?.max_exp ?? 0
        }));

        await Job.deleteMany();
        await Job.insertMany(formattedJobs);
        console.log('Jobs inserted successfully');
        process.exit(0);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    };
}



insertJobs();
