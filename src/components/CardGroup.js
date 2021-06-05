import React from 'react';
import EmpCard from './EmpCard';
function CardGroup(props) {
  return (
  <div>
     {props.employees.map(({ name, location, dob, picture, phone, email }, i) => {
        return (
            <EmpCard 
              image={picture.large} 
              phone={phone} 
              dob={dob.date} 
              email={email} 
              zip={location.postcode} 
              state={location.state} 
              city={location.city} 
              streetnum={location.street.number} 
              street={location.street.name} 
              first={name.first} 
              last={name.last} 
              key={i} 
            />
         )
       })
     }
  </div>
  )
}
export default CardGroup;
