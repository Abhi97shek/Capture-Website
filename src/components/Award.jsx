import React from 'react';
import styled from 'styled-components';

const Award = ({title,description}) => {
  return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className='line'></div>
              <p>{description}</p>
         </AwardStyle>
)};


const AwardStyle = styled.div`
      padding: 5rem;
      h3{
        font-size:1.5rem;
      }
      .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
        border-radius: 20px;
      }
      p{
        padding:2rem 0rem;
      }


`;
export default Award;
