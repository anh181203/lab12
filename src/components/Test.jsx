import React from "react";
import "./Header.css";
// import { ImPhone, ImHome3, ImMail4 } from "react-icons/im";
export default function Test({ data }) {
  console.log("datatess", data);

  return (
    <div className='container'>
      <div className='main'>
        <div className='left'>
          <div className='profileText'>
            <div className='imgBx'>
            src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/246298294_1044029493017726_7276660490416487238_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dcd9mLXMKQwAX9agvdd&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAP2KyFSTUBrVxFXUYypWpXfdB-9lRu6eFv3t7EeQilqQ&oe=63BAFF67"
            </div>

            <h2>
              {" "}
              {data.name}
              <br />
              <span>web Developer</span>
            </h2>
          </div>

          <div className='contactInfo'>
            <h3 className='title'> Contact Info</h3>
            <ul>
              <li>
                <span className='icon'>
                  {" "}
                  {/* <ImPhone /> */}
                </span>
                <span className='text'> {data.sdt}</span>
              </li>
              <li>
                <span className='icon'>
                  {/* <ImMail4 /> */}
                </span>
                <span className='text'> toantruong.071002@gmail.com</span>
              </li>{" "}
              <li>
                <span className='icon'>
                  {/* <ImHome3 /> */}
                </span>
                <span className='text'> Tân Tiến, Krông Păk, Đăk LăK</span>
              </li>
            </ul>
          </div>

          <div className=' education'>
            <h3 className='title'> EDUCATION</h3>
            <ul>
              <li>
                <h5>2020-2023</h5>
                <h4>software application</h4>
                <h4>fpt polytechnic college</h4>
              </li>
            </ul>
          </div>

          <div className=' language'>
            <h3 className='title'> Languages</h3>
            <ul>
              <li>
                <span>English</span>
                <span className='percent'></span>
              </li>
              <li>
                <span>Vietnamese</span>
                <span className='percent'></span>
              </li>
            </ul>
          </div>
        </div>

        <div className='right'>
          <div className='about'>
            <h2 className='title2'>Profile</h2>
            <h4 className='title3'>
              Experienced in working with reactjs on several projects, able to
              design Database with mysql and mongoose, design server with nodejs
              on a small scale, good teamwork ability, along with supporting
              tools such as: git Có kinh nghiệm làm việc với reactjs trong một
              vài dự án, có khả năng thiết kế Database với mysql và mongoose,
              thiết kế sever bằng nodejs ở quy mô nhỏ, khả năng làm việc nhóm
              khá tốt, cùng với các công cụ hổ trợ như git
            </h4>
          </div>

          <div className='about'>
            <h2 className='title2'>Experience</h2>
            <div className='box'>
              <div className='company'>
                <h5>2022 - Present</h5>
                <h5> digital company Lê Sa</h5>
              </div>
              <div className='text'>
                <h4>Junior Developer sever </h4>
                <p>
                  Experienced in working with reactjs on several projects, able
                  to design Database with mysql and mongoose, design server with
                  nodejs on a small scale, good teamwork ability, along with
                  supporting tools such as
                </p>
              </div>
            </div>

            <div className='box'>
              <div className='company'>
                <h5>2021 - 2022</h5>
                <h5> digital company Lê Sa</h5>
              </div>
              <div className='text'>
                <h4>Junior Developer UI-UX </h4>
                <p>
                  Experienced in working with reactjs on several projects, able
                  to design Database with mysql and mongoose, design server with
                  nodejs on a small scale, good teamwork ability, along with
                  supporting tools such as
                </p>
              </div>
            </div>

            <div className='box'>
              <div className='company'>
                <h5>2019 - 2020</h5>
                <h5> digital company Lê Sa</h5>
              </div>
              <div className='text'>
                <h4>Junior Developer Database </h4>
                <p>
                  Experienced in working with reactjs on several projects, able
                  to design Database with mysql and mongoose, design server with
                  nodejs on a small scale, good teamwork ability, along with
                  supporting tools such as
                </p>
              </div>
            </div>

            <div className=' skill'>
              <h2 className='title2'> Proessional skill</h2>
              <div className='box'>
                <h4>html</h4>
                <div className='percent'></div>
              </div>
              <div className='box'>
                <h4>css</h4>
                <div className='percent'></div>
              </div>
              <div className='box'>
                <h4>javascrip</h4>
                <div className='percent'></div>
              </div>
              <div className='box'>
                <h4>git</h4>
                <div className='percent'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}