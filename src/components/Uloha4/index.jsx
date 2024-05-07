/*
Zadání 1: Pomocí události `change` a vlastnosti `event.target.value` vypisujte do konzole, co postupně uživatel do inputu píše ve formátu
  console.log('Uživatel napsal: ' + DOPLŇ_TEXT_OD_UŽIVATELE).
Zadání 2: Pokud uživatel z textového políčka vše smaže, vypište „Uživatel nenapsal nic“.
*/

export const Uloha4 = () => {
  const textOdUzivatele = (event) => {
    if (event.target.value === "") {
      console.log("Uživatel nenapsal nic");
    }

    console.log(`Uživatel napsal: ${event.target.value}`);
  };

  return <input onChange={textOdUzivatele} />;
};
