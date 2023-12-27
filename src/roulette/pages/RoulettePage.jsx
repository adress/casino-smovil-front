import { useState } from "react"
import { Navbar } from "../../components/Navbar"
import { useRouletteStore } from "../../hooks/useRouletteStore";
import { HistoryCard } from "../../components/HistoryCard";
import { RouletteCard } from "../../components/RouletteCard";

export const RoulettePage = () => {


  return (
    <>
      <Navbar />


      <div className="d-flex justify-content-center">

        <RouletteCard />
        <HistoryCard />


      </div>
    </>
  )
}
