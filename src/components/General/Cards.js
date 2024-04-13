import { useState } from "react";

const services=[{
  "title":"App",
  "image":"./card1.png",
  "content":"Transforming visionary concepts into vibrant digital solutions,shaping the future of app development with every line of code we craft!"
},
{
  "title":"Web",
  "image":"./card2.png",
  "content":"Developing a user-friendly interface to engage more possible customers."
},
{
  "title":"UI/UX",
  "image":"./card3.png",
  "content":"Magically designing logos, and other media to build the brand identity."
},
]

function Cards() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="main-box">
        {
          services.map((data,i)=>{
            return(<div key={i} class="service">
                <div class="circle" >
                  <img src={data?.image} class="servicelogo"/>
                </div>
                <div>
                  <p class="title">{data?.title} <span class="development">Development</span></p>
                  <p class="content2">{data?.content}</p>
                  </div>
                  <div class="Ellipse1" ></div>
            </div>)
          })
        }

      </div>

    </>
  );
}

export default Cards;

