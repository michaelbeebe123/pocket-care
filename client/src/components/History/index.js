import React from "react";
import "./style.js"

class History extends Component {
    
    loadForm = () => {
        API.getForm()
          .then(res => 
              this.state.form.push(res.data)
          )
          .catch(err => console.log(err))
      }
    
      componentDidMount = () => {
        this.loadForm();
      };

}

// {this.state.jobs.length > 0 && this.state.jobs.map((job) => {
//     return (
//       <div className="card" value={job.job_posting_id} onClick={() => this.switchJob(job) }>
//         <div className="container-jobpostings">
//           <h4><b>{job.job_title}</b></h4>
//           <a className="list-group-item" href="#"><i className="fa fa-bookmark" aria-hidden="true"></i></a>
//           <p>{job.company_name}</p> <p>{job.city_state}</p>
//           <p>{job.job_description}</p>
//           {/* <footer className="card-footer">Keywords?:</footer> */}
//         </div>
//       </div>
//     )
//   })}