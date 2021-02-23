import React, { useState } from 'react'
import './Cards.css'
import Card from "react-tinder-card";

function Cards() {
  const [people, setPeople] = useState([
    {
      name: 'Steve Jobs',
      url: 'http://anthillonline.com/wp-content/uploads/2016/03/steve-jobs.jpg'
    },
    {
      name: 'Albert Einstein',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/1024px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg'
    },
    {
      name: "Nikola Tesla",
      url: 'https://images.theconversation.com/files/200600/original/file-20180102-26163-d9wlms.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=507&fit=crop&dpr=2'
    },
    {
      name: "Michelle Obama",
      url: 'https://addicted2success.com/wp-content/uploads/2019/04/30-Inspirational-Quotes-by-Michelle-Obama-That-Will-Lift-Everyone-Up.png'
    },
    {
      name: 'Katherine Johnson',
      url: 'https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/1-1966-l-06717_2.jpeg?itok=TVHKinJ6'
    }
  ])

  const swiped = (direction, nameToDelete) => {
    console.log('removing:' + nameToDelete)

  }

  const outOfFrame = (name) => {
    console.log(name + 'left the screen')
  }



  return (
    <div className='cards'>

      <div className="cards__Container">
        {people.map((person) => (
          <Card
            className="cards__swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="cards__individualCard"
            >
              <h3>{person.name}</h3>
            </div>
          </Card>
        ))}
      </div>

    </div>
  )
}

export default Cards
