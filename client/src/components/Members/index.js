import axios from "axios";
import React, { useState, useEffect } from "react";

import MemberList from "../MemberList";
import SearchbarMember from "../SearchBarMember";
import SearchbarMemberLocation from "../SearchbarMemberLocation";

import "./styles.scss";

const Members = () => {
  const [member, setMember] = useState([]);
  const [searchMembers, setSearchMembers] = useState("");
  const [searchCity, setSearchCity] = useState("");
  let token = localStorage.getItem("token");
  console.log({ token });
  console.log(searchMembers);
  console.log(searchCity);

  const getDataFromApi = async () => {
    if (!searchMembers && !searchCity) {
      axios
        .get(`http://localhost:3000/membres/`, {
          headers: {
            authorization: token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          setMember(response.data).catch((error) => {
            console.log(error);
          });
        });
    } else {
      axios
        .get(
          `http://localhost:3000/membres/search?username=${searchMembers}&city=${searchCity}`,
          {
            headers: {
              authorization: token,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setMember(response.data).catch((error) => {
            console.log(error);
          });
        });
    }
  };

  useEffect(() => {
    getDataFromApi(searchMembers, searchCity);
  }, [searchMembers, searchCity]);

  return (
    <div className="members">
      <div className="members-searchbar">
        <SearchbarMember
          searchMembers={searchMembers}
          setSearchMembers={setSearchMembers}
        />
        <SearchbarMemberLocation
          searchCity={searchCity}
          setSearchCity={setSearchCity}
        />
      </div>

      <MemberList member={member} />
    </div>
  );
};

export default Members;
