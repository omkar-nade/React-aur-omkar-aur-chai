import React from 'react';
import './Table.css'

const Table = ({state, city}) => {
    console.log(state)
    console.log(city)
  const members = [
    {
        name: 'Jebas Ebenezar Raja',
        emailAddress: 'alakiya coducer.com',
        branchLocation: 'Al Artaweeiyah, Saudi Arabia',
        date: '12 Des 2022 - 17 Des 2022',
        shiftTiming: '9:00 AM - 6:00 PM',
        tour: '-',
        memberStatus: 'Active',
        ticketCount: 10,
        state: state,
        city: city
      },
    {
      name: 'Adams, John Quincy',
      emailAddress: 'adams@coducer.com',
      branchLocation: 'Al Artawesiyah, Saudi Arabia',
      date: '12 Des 2022 - 17 Des 2022',
      shiftTiming: '9:00 AM - 6:00 PM',
      tour: '-',
      memberStatus: 'Inactive',
      ticketCount: 2,
      state: state,
      city: city
    },
    // Add more member objects here
  ];

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Branch Location</th>
            <th>Date</th>
            <th>Shift Timing</th>
            <th>Tour</th>
            <th>Active</th>
            <th>Ticket Count</th>
            <th>State</th>
            <th>City</th>
            
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.name}>
              <td>{member.name}</td>
              <td>{member.emailAddress}</td>
              <td>{member.branchLocation}</td>
              <td>{member.date}</td>
              <td>{member.shiftTiming}</td>
              <td>{member.tour}</td>
              <td>{member.memberStatus}</td>
              <td>{member.ticketCount}</td>
              <td>{member.state}</td>
              <td>{member.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;