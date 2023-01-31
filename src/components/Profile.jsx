import "./Header.css";

const SkillPro = (props) => {
  return (
    <div>
<p>{props.pra}</p>
  <p>{props.text}</p>
    </div>

  
  );
};

function Profile() {
  return (
    <div className="right-section">
      <div className="profile-all">
        <div className="box-right">
          <div className="box-all">
            <div className="box-profile">
              <div className="icon">
                {/* <FaIdCard size="3.5rem" color="black" />{" "} */}
              </div>
              <div className="title-box-r">
                <h2>PROFILE</h2>
              </div>
            </div>
            <div className="pra">
            
              <SkillPro pra=" Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, nihil. consectetur adipisicing elit. Saepe esse at nostrum vitae quidem animi? " />
            </div>
          </div>

          <div className="box-all">
              <div className="box-profile">
                <div className="icon">
                  {/* <GiSpellBook size="3.5rem" color="black" />{" "} */}
                </div>
                <div className="title-box-r">
                  <h2>EDUCATION</h2>
                </div>
              </div>
              <div className="pra pra-2">
                <div className="pra-edu">
                  <p className="pra-edutext1">
                    <b>2017-2020</b> <br />
                    <b> ĐĂK LĂK</b>
                  </p>

                  <p className="pra-edutext2">
                    <b> <SkillPro  text = " Đinh Tiên Hoàng"/> </b>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div className="pra pra-2">
                  <div className="pra-edu">
                    <p className="pra-edutext1">
                      <b>2021-2023</b> <br />
                      <b>ĐĂK LĂK</b>
                    </p>

                    <p className="pra-edutext2">
                      <b><SkillPro  text = " FPT POLYTECHNIC"/></b>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-all">
              <div className="box-profile">
                <div className="icon">
                  {/* <GiSpellBook size="3.5rem" color="black" />{" "} */}
                </div>
                <div className="title-box-r">
                  <h2>SKILL & EXPERTIZE</h2>
                </div>
              </div>
              <div className="pra pra-2 edu">
                <div className="edu-box1 ">
                  <div className="pra-edu">
                    <div className="tt">
                      <b> <SkillPro  text = " Grapic Desgin"/></b>
                    </div>
                    <div id="progress"></div>
                  </div>

                  <div className="pra-edu">
                    <div className="tt">
                      <b> <SkillPro  text = " Web Desgin"/></b>
                    </div>
                    <div id="progress"></div>
                  </div>
                </div>
                <div className="edu-box2">
                  <div className="pra-edu">
                    <div className="tt">
                      <b><SkillPro  text = " HTML"/></b>
                    </div>
                    <div id="progress1"></div>
                  </div>

                  <div className="pra-edu">
                    <div className="tt">
                      <b> <SkillPro  text = " CSS"/></b>
                    </div>
                    <div id="progress2"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-all">
              <div className="box-profile">
                <div className="icon">
                  {/* <GiSpellBook size="3.5rem" color="black" />{" "} */}
                </div>
                <div className="title-box-r">
                  <h2>HOBBY & INTERNET</h2>
                </div>
              </div>
              <div className="pra pra-2 ">
                <div className="pra-edu">
                  {/* <MdOutlineDirectionsBike
                    size="5rem"
                    color="black"
                    className="icon-hobby"
                  />{" "}
                  <FaGamepad size="5rem" color="black" className="icon-hobby" />{" "}
                  <GiSpellBook
                    size="5rem"
                    color="black"
                    className="icon-hobby"
                  />{" "}
                  <TbKarate size="5rem" color="black" className="icon-hobby" />{" "}
                  <GiAirplaneDeparture
                    size="5rem"
                    color="black"
                    className="icon-hobby"
                  />{" "} */}
                </div>
              </div>

        </div>
      </div>
    </div>
    </div>

  );
}

export default Profile;
