import './Header.css'
import React,{useState} from 'react'
const Student = (props) => {
    return(
        <div>
      <h2 className="name"> {props.name}</h2>
      <p className="n-p">{props.nganh}</p>
        </div>
    )
}

const Skill = (props) => {
    return (
      
        <p>{props.Text}</p>
       
    
    
    );
  };
  function Update() {
    const [name, setName] = useState("UDPM");
    const handleChange = (event) => {
      const data = document.getElementById("txtname").value;
      setName(data);
    };
    const handleOnPress = (event) => { 
      /*
        charCode 13
        code"Enter"
        */
      if (event.charCode === 13) {
        const data = document.getElementById("txtname").value;
        setName(data);
      }
    };
    
      return ( 
          <div className="Header">
          {/* <img src={avatar} alt="avatar" width={150} height={150} /> */}
          <br />
          {/* <h1>{name}</h1> */}
         
          </div>
  
       );
  }
  
function Header() {
  const [name, setName] = useState("Nguyễn Viết Hồng Anh");
  const [nganhname, setNganhName] = useState("UDPM");
  const [img, setImg] = useState("https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/246298294_1044029493017726_7276660490416487238_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=dcd9mLXMKQwAX9agvdd&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAP2KyFSTUBrVxFXUYypWpXfdB-9lRu6eFv3t7EeQilqQ&oe=63BAFF67");

  const [user,setUser] = useState({});
  const onChangeInput = (e) =>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
  }
 
  const handleChange = (event) => {
    const data = document.getElementById("txtname").value;
    setName(data);
    const data2 = document.getElementById("txtNganhname").value;
    setNganhName(data2);
    const data3 = document.getElementById("src").value;
    setImg(data3);
  };
  
  const handleOnPress = (event) => { 
    /*
      charCode 13
      code"Enter"
      */
    if (event.charCode === 13) {
      const data = document.getElementById("txtname").value;
      setName(data);
      const data2 = document.getElementById("txtNganhname").value;
      setNganhName(data2);
      const data3 = document.getElementById("src").value;
    setImg(data3);
    
    }
  };
 
    return ( 
        
        <div className="Header">
         <div className="Update">
        <input
            type="tex"
            onKeyPress={handleOnPress}
          //   onChange={handleOnChangeInput}
            id="txtname"
            placeholder="nhập tên "
            value={user.name}

          />
          <input
            type="tex"
            onKeyPress={handleOnPress}
          //   onChange={handleOnChangeInput}
            id="txtNganhname"
            placeholder="nhập tên Ngành"
            value={user.nganh}
          />
          <input
            type="tex"
            onKeyPress={onChangeInput}
          //   onChange={handleOnChangeInput}
            id="src"
            placeholder="nhập link ảnh"
            value={user.src}

          />
        
           <button onClick={handleChange} type="button">
            change
          </button> 
        
        </div>
       
        <div className="left-section">
       
        <div className="profile">
          <div className="blue-box">
            <img
              src={img}
              className="profile-img"
              alt=""
            />
            <Student
                name = {name}
                nganh = {nganhname}
            />
            {/* <h2>
              {" "}
              {data.name}
              <br />
              <span> {data.nganh}</span>
            </h2>
             */}
            <div className="contact">
        <h2 className="ct">INFO</h2>

        <div className="contact-lv1">
          <div className="contact-lv2">
            <div className="icon">
              {/* <IoMdPin size="3.5rem" color="white" />{" "} */}
            </div>
            <p>
              <p className="p1">Address</p> <Skill Text ="17 Hà Huy Tập,Tân An ,BMT."/> 
            </p>
          </div>
        </div>

        <div className="contact-lv1">
          <div className="contact-lv2">
            <div className="icon">
              {/* <ImEnvelop size="3.5rem" color="white" /> */}
            </div>
            <p>
              {" "}
              <p className="p1">Email</p> <Skill Text= " anhnvhpk02081@fpt.edu.vn"/>
            </p>
          </div>
        </div>

        <div className="contact-lv1">
          <div className="contact-lv2">
            <div className="icon">
              {/* <ImHome size="3.5rem" color="white" /> */}
            </div>
            <p>
              {" "}
              <p className="p1">Work</p> <Skill Text = " FPT Polytechnic Tây Nguyên" />
            </p>
          </div>
        </div>

        <h2 className="ct">SOCIAL</h2>

        <div className="contact-lv1">
          <div className="contact-lv2 social">
            <div className="icon">
              {/* <FaFacebookSquare size="3.5rem" color="white" />{" "} */}
            </div>

            <>
              <p className="p1">Facebook</p>{" "}
              <a href="https://www.facebook.com/anp12002"><Skill Text = "Aanh Nguyễn" /> </a>
            </>
          </div>

          <div className="contact-lv2 social">
            <div className="icon">
              {/* <FaPhoneSquareAlt size="3.5rem" color="white" />{" "} */}
            </div>

            <p>
              <p className="p1">Zalo</p> <Skill Text= " 0935818820"/>
            </p>
          </div>
        </div>
      </div>
     
         </div>
        </div>
      </div>
      </div>
      
     );
}


export default Header;