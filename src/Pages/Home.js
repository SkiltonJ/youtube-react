import { useContext, useState } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const {username} = useContext(AppContext);

  const { data: catData, isLoading } = useQuery(["uniqidHere"], () => {
    return fetch('https://catfact.ninja/fact')
      .then((result) => result.json())
      .then((data) => {
        return data
      })
  })

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return <h1> This is the Home Page and user is: {catData.fact} </h1>

}
