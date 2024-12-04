// import { Children } from 'react';
import { getImageUrl } from './utils.js';
import './styles.css'

function MyProfile({myUser}){
  const imgSrc =getImageUrl(myUser.imageId)
  console.log(imgSrc)
  return (
    <section className="profile">
      <img
          className="avatar"
          src={imgSrc}
          alt={myUser.fullName}
          width={70}
          height={70}
        />
      <ul>
        <li>
          <b>Profession:</b> {myUser.profession}
        </li>
        <li>
          <b>Awards: {myUser.awards.length} </b>
          ({myUser.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {myUser.discovery}
        </li>
      </ul>
    </section>
  );
}



export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      

      <MyProfile myUser={{
        imageId: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'physicist and chemist',
        discovery: 'polonium (chemical element)',
        awards: [
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal']
      }} />

<MyProfile myUser={{
        imageId: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geochemist',
        discovery: 'a method for measuring carbon dioxide in seawater',
        awards: [
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ],
      }} />
     
    </div>
  );
}
