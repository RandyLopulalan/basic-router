import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const getApi = "https://jsonplaceholder.typicode.com/users";

const GetApi = ({setUsername}) => {

  const [users, setUsers] = useState([]);
  
  const toProfile = useNavigate()

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
            <article key={id} onClick={() => toProfile(`/profile/${id}`, setUsername(prev => prev = name))}>
              <h3>{name}</h3>
              <h3>{email}</h3>
            </article>         
        );
      })}
    </div>
  );
};

export default GetApi;
