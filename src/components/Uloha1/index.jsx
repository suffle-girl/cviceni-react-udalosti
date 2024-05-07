/*
Zadání: Po kliku na tlačítko zobrazte alert s textem „Ahoj“.
*/

export const Uloha1 = () => {
  const podzrav = () => {
    alert("Ahoj!");
  };

  return <button onClick={podzrav}>Ukaž bublinu</button>;
};
