import React, { useState, useEffect } from "react";
import styled from "styled-components";


export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
  }, []);


  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {/* {currentUserImage && currentUserImage && ( */}
        <Container>
          <div className="brand">
            <h1>Chatify</h1>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="username">
              <h2>User : {currentUserName}</h2>
            </div>
          </div>
        </Container>
      {/* )} */}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 9% 1%;
  overflow: hidden;
  background-color: #272727;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    h1 {
      color: rgb(50, 168, 137);
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;

    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: rgb(50, 168, 137);
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #272727;
      min-height: 3rem;
      cursor: pointer;
      width: 90%;
      border: 2px solid rgb(50, 168, 137);
      border-radius: 1rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: rgb(50, 168, 137);
    }
  

  .current-user {
    background-color: rgb(50, 168, 137);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    border-radius: 1rem;
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
`;
