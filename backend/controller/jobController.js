const ErrorHandler = require("../middleware/ErrorHandler");
const Job = require('./../model/jobsModel')

exports.fetchAllJobs = async(req,res,next)=>{
  
  try{
    const { limit = 10, page = 1, location } = req.query;
    
    const query = {};
    if (location) {
      const keywords = location.split(',').map(k => k.trim());
      
      query.$or = keywords.map(keyword => ({
        location: { $regex: keyword, $options: 'i' }
      }));
    }
    const job = await Job.find(query)
                      .skip((page-1) * Number(limit))
                      .limit(Number(limit))
                      .sort({postedDateTime:-1});

    res.status(200).json({job});

  }catch(error){
    console.log("error logging : ", error)
    return next(new ErrorHandler(`Error while fetching the jobs: ${error.message}`,400))
  }
}
