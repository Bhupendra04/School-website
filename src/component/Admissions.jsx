import React from 'react'

function Admissions() {
  return (
    <>
        <div className="section">
            <h2>Admission Process and Criteria</h2>
            <p>
                Insert information about the admission process and criteria for prospective students.
            </p>
        </div>
        <div className="section">
            <h2>Download Admission Forms</h2>
            <p>
                Insert links or buttons to download admission forms here.
            </p>
            {/* Example link */}
            <a href="/path/to/downloadable-form.pdf" target="_blank" rel="noopener noreferrer">Download Admission Form</a>
        </div>
        <div className="section">
            <h2>Important Dates and Deadlines</h2>
            <p>
                Insert important dates and deadlines for admission here.
            </p>
            {/* Example list */}
            <ul>
                <li>Application Deadline: [Date]</li>
                <li>Entrance Exam Date: [Date]</li>
                <li>Interviews: [Dates]</li>
                {/* Add more important dates */}
            </ul>
        </div>
    </>
  )
}

export default Admissions
