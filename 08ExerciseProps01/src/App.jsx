import { Children } from 'react';
import './styles.css'

import { getImageUrl } from './utils.js';

function MyProfile({fullName, children}){
  return (
    <section className="profile">
      <h2>{fullName}</h2>
      {children}
    </section>
  );
}

function ProfileDetails({designation, awardsSize, allAwards, discoveryInfo}){
  return (
    
    <div>
      <ul>

          <li>
            <b>Profession: </b> 
            {designation}
          </li>
          <li>
            <b>Awards: {awardsSize} </b> 
            {allAwards}
          </li>
          <li>
            <b>Discovered: </b>
            {discoveryInfo}
          </li>
      </ul>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      

      <MyProfile fullName="Maria Skłodowska-Curie">
      <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
          <ProfileDetails  designation="physicist and chemist" awardsSize={4} allAwards={`(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)` } discoveryInfo={`polonium (chemical element)`}/>
        </MyProfile>
        <MyProfile fullName="Katsuko Saruhashi">
          <img
            className="avatar"
            src={getImageUrl('YfeOqp2')}
            alt="Katsuko Saruhashi"
            width={70}
            height={70}
          />
          <ProfileDetails  designation="geochemist" awardsSize={2} allAwards={`(Miyake Prize for geochemistry, Tanaka Prize)` } discoveryInfo={`a method for measuring carbon dioxide in seawater`}/>
        </MyProfile>
     
    </div>
  );
}
