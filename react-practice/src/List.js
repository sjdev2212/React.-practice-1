import React from 'react'

export const List = ({people}) => {
    return (
        <div>
        {people.map((person) => {
           const  { id, name , age, image} = person
            return (
                <article key={id}>
                <img className='image'  src={image} alt={name} />
                <div className='data'>
                <h3>{name}</h3>
                <p>{age}</p>
                </div>
                </article>
                
            )

        })}
        </div>
    )
}

