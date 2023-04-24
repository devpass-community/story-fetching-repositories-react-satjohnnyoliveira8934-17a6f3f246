import React, { useState } from "react";
import { ListGroup, Button, Spinner } from "react-bootstrap";
import "./styles.css";

const List = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepositories = async () => {
    setIsLoading(true); // ativa o Spinner

    try {
      const response = await fetch("https://api.github.com/users/devpass-tech/repos");
      const data = await response.json();
      setRepositories(data);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="list">
      <div className="container">
        <h2 className="title">Devpass Repositories</h2>

        {isLoading ?
          (<Spinner />) :
          (
            <ListGroup className="repositoriesList">

              {<ListGroup.Item key={repo.id}>{repo.name}</ListGroup.Item>
}

            </ListGroup>)}
        <Button data-testid="button" className="button" variant="primary" onClick={() => fetchRepositories()}>Fetch repositories</Button>
      </div>
    </div>
  );
};

export default List;
