

import React, { useState } from "react";
import Header from "./Header";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Hồng Anh",
    nganh: "UDPM",
  });
  const [user1, setUser1] = useState({});
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const info = () => {
    setUser1(user);
    console.log("data", user1);
  };
  return (
    <div>
      <div>
        <h2>Thông tin</h2>
        <input
          type='text'
          name='name'
          required
          placeholder='name'
          value={user.name}
          onChange={onChangeInput}
        />
        <input
          type='text'
          name='sdt'
          required
          placeholder='sdt'
          value={user.sdt}
          onChange={onChangeInput}
        />
        <div className='row'>
          <button onClick={info}>Thay đổi</button>
        </div>
      </div>
      <Profile data={user1} />
    </div>
  );
};

export default Header;