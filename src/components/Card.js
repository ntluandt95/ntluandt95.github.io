import React from 'react'


const Card = ({name,img,github}) => {
    return (
        <div>
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">{name}</h4>
                    </div>
                    <div>
                        <img src={img} alt="Girl in a jacket" height='80%' width='100%'/>
                        
                        
                        <a href={github} class="btn btn-block btn-lg ">Github</a>
                    </div>
                </div>
               
            </div>
    )
}

export default Card
