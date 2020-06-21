import React from 'react';
import data from './data/data.json';
import profileIcon from './profile.png';


export default function Resume(props) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data=>console.log(data))

        let info=data.profile[props.location.data.id]
        console.log(info.career)
    return (
         <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <img src={profileIcon} alt="profile Icon" style={{width:"30%"}}/>
                        <h2>{info.basics.name}</h2>
                        <h4 className="text-secondary">{info.basics.role}</h4>
                        <a href={"tel:"+info.basics.phone}>
                            <h4>{info.basics.phone}</h4>
                        </a>
              <a href={"mailto:"+info.basics.email}>
                <h4>{info.basics.email}</h4>
              </a>
                    </div>
                </div>
            </div>

            {/* profile / right part */}

            <div className="col-lg-8 m-2">
                <div className="card shadow" >
                    <div className="card-body">
                        <h2>Career Object:</h2>
                        <hr />
                        <p>{info.career}</p>
                        <h2>Educational details:</h2>
                        <hr />
                        <h4>UG details:</h4>
                        <p>UG College: {info.mydata.name}</p>
                        <p>Percentage: {info.mydata.percentage}</p>
                        <p>YOP: {info.mydata.yop}</p>
                        <h4>Intermediate details:</h4>
                        <p>College: {info.mydata1.name}</p>
                        <p>Percentage: {info.mydata1.percentage}</p>
                        <p>YOP: {info.mydata1.yop}</p>
                        <h4>School details:</h4>
                        <p>School: {info.mydata2.name}</p>
                        <p>Percentage: {info.mydata2.percentage}</p>
                        <p>YOP: {info.mydata2.yop}</p>
                        <h2>Skills:</h2>
                        <hr />
                        <p>{info.skills.a}</p>
                        <p>{info.skills.b}</p>
                        <p>{info.skills.c}</p>
                        <p>{info.skills.d}</p>
                        <h2>Hobbies:</h2>
                        <hr />
                        <p>{info.hobbies.ho1}</p>
                        <p>{info.hobbies.ho2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}