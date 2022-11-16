import axios from "axios";
import { useEffect, useRef, useState } from "react";

function Users() {
  const [isLoading, setIsloading] = useState(true);
  const [userData, setUserData] = useState([]);

  const mount = useRef(true);

  useEffect(() => {
    // mount
    if (mount.current) {
      const url = "https://jsonplaceholder.typicode.com/users";
      axios(url).then((response) => {
        setIsloading(false);
        setUserData(response.data);
      });
    }
    // unmount
    return () => {
      mount.current = false;
    };
  }, []);

  if (isLoading) {
    return <>Loading ....</>;
  }
  // Logic
  if (userData && userData.length > 0) {
    return (
      <>
        {userData.map((el, key) => {
          return (
            <div key={key}>
              <span>Name: {el.name}</span> <br />
              <span>username: {el.username}</span> <br />
              <span>email: {el.email}</span>
              <br />
              ------------------------------
            </div>
          );
        })}
      </>
    );
  }

  return <> No data</>;
}

export default Users;
