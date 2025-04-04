import { useEffect, useState, useCallback } from "react";

const Logic = () => {
  const [yourChoose, setYourChoose] = useState("");
  const [compChoose, setCompChoose] = useState("");
  const [score, setScore] = useState({ you: 0, comp: 0 });
  const [alertMessage, setAlertMessage] = useState("ابدأ اللعب");

  const onChoose_You = (type) => {
    if (!compChoose) {
      setYourChoose(type);
      setCompChoose(getRandomCompChoice());
    }
  };

  const getRandomCompChoice = () => {
    const compArr = ["stone", "paper", "scissors"];
    const compIndex = Math.floor(Math.random() * compArr.length);
    return compArr[compIndex];
  };

  const onComp_Choose = useCallback((yourChoose, compChoose) => {
    if (yourChoose === compChoose) return "تعادل";
    if (
      (yourChoose === "stone" && compChoose === "scissors") ||
      (yourChoose === "paper" && compChoose === "stone") ||
      (yourChoose === "scissors" && compChoose === "paper")
    ) {
      return "ربحت";
    }
    return "خسرت";
  }, []);

  useEffect(() => {
    if (yourChoose && compChoose) {
      const result = onComp_Choose(yourChoose, compChoose);
      if (result) {
        if (result === "ربحت") {
          setScore((prevScore) => ({ ...prevScore, you: prevScore.you + 1 }));
        } else if (result === "خسرت") {
          setScore((prevScore) => ({ ...prevScore, comp: prevScore.comp + 1 }));
        }
        setAlertMessage(result);
      }

      const timeoutId = setTimeout(() => {
        setYourChoose("");
        setCompChoose("");
        setAlertMessage("ابدأ اللعب");
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [yourChoose, compChoose, onComp_Choose]);

  const onReset_Game = () => {
    setScore({ you: 0, comp: 0 });
    setYourChoose("");
    setCompChoose("");
    setAlertMessage("ابدأ اللعب");
  };

  return [compChoose, onChoose_You, score, alertMessage, onReset_Game];
};

export default Logic;