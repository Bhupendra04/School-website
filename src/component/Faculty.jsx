import React from 'react'

function Faculty() {
    const facultyMembers = [
        {
          id: 1,
          name: 'John Doe',
          position: 'Principal',
          qualifications: 'Ph.D. in Education',
          experience: '20+ years in educational leadership',
          image: '/path/to/john-doe.jpg',
        },
        {
          id: 2,
          name: 'Jane Smith',
          position: 'Head of Mathematics Department',
          qualifications: 'M.Sc. in Mathematics',
          experience: '15+ years teaching mathematics',
          image: '/path/to/jane-smith.jpg',
        },
        // Add more faculty members as needed
      ];
  return (
    <>
      <div className="faculty-list">
      <header>
      <h1> Faculty</h1>
      </header>
      
      {facultyMembers.map(member => (
        <div key={member.id} className="faculty-member">
          <img src={member.image} alt={member.name} />
          <div className="details">
            <h3>{member.name}</h3>
            <p><strong>Position:</strong> {member.position}</p>
            <p><strong>Qualifications:</strong> {member.qualifications}</p>
            <p><strong>Experience:</strong> {member.experience}</p>
          </div>
        </div>
      ))}
    </div>

    </>
  )
}

export default Faculty
