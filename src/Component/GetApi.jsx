import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const getApi = "https://jsonplaceholder.typicode.com/users";

const GetApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(getApi).then((res) => {
      const result = res.data;
      setUsers(result);
    }, []);
  });

  return (
    <div className="list_users">
      {users.map(({ id, name, email }) => {
        return (
          <Link to={`/profile/${name}`}>
            <article key={id}>
              <h3>{name}</h3>
              <h3>{email}</h3>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default GetApi;
