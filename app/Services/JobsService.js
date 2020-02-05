import Jobs from '../Models/Jobs.js'
let testingJobs = new Jobs()
class JobsService {
  constructor() {
    console.log("jobs service")
  }
}

const JOBSSERVICE = new JobsService()
export default JOBSSERVICE