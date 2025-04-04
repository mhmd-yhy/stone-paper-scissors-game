import { useEffect, useState } from "react";

const Logic = () => {
  const [yourChoose, setYourChoose] = useState("");
  const [compChoose, setCompChoose] = useState("");
  const [score, setScore] = useState({ you: 0, comp: 0 });
  const [alertMessage, setAlertMessage] = useState("ابدأ اللعب");

  const onChoose_You = (type) => {
    setYourChoose(type);
    setCompChoose(getRandomCompChoice());
  };

  const getRandomCompChoice = () => {
    const compArr = ["stone", "paper", "scissors"];
    let compIndex = Math.floor(Math.random() * compArr.length);
    return compArr[compIndex];
  };

  useEffect(() => {
    let result = onComp_Choose(yourChoose);
    if (result) {
      result === "ربحت" ? setScore({ ...score, you: score.you + 1 }) : result === "خسرت" ? setScore({ ...score, comp: score.comp + 1 }) : setScore({ ...score });
      setAlertMessage(result);
    }
    setTimeout(() => {
      setYourChoose("");
      setCompChoose("");
    }, 2000);
  }, [compChoose]);


  const onComp_Choose = (yourChoose) => {
    if (yourChoose === "stone") {
      if (compChoose === "stone") return "تعادل";
      if (compChoose === "paper") return "خسرت";
      if (compChoose === "scissors") return "ربحت";
    }
    if (yourChoose === "paper") {
      if (compChoose === "stone") return "ربحت";
      if (compChoose === "paper") return "تعادل";
      if (compChoose === "scissors") return "خسرت";
    }
    if (yourChoose === "scissors") {
      if (compChoose === "stone") return "خسرت";
      if (compChoose === "paper") return "ربحت";
      if (compChoose === "scissors") return "تعادل";
    }
  };

  return [compChoose, onChoose_You, score, alertMessage];
};

export default Logic;
