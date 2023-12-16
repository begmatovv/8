import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", "light");
  }, []);

  function setDarkMode() {
    document.querySelector("body").setAttribute("data-theme", "dark");
  }

  function setLightMode() {
    document.querySelector("body").setAttribute("data-theme", "light");
  }
  function handleChangeTheme(e) {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }
  return (
    <>
      <input type="checkbox" name="" id="" onChange={handleChangeTheme} />
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quod
        ullam ducimus libero consequuntur, quasi laboriosam quis facere
        excepturi. Excepturi quaerat illum doloremque fugit neque qui nemo
        voluptates asperiores sint? Praesentium et qui hic ipsam itaque eaque
        nisi molestias in vitae, aperiam voluptate atque soluta debitis, natus
        saepe dolores sunt recusandae sit repellat doloremque iure. Corporis,
        dolor a temporibus facere beatae perferendis aspernatur obcaecati nihil
        maiores commodi? Modi hic enim, ipsum tempore velit aliquid dolorum
        officia voluptate numquam nisi! Perspiciatis nobis doloremque distinctio
        optio, fugiat reiciendis dignissimos laboriosam, neque ea perferendis
        natus sequi maiores voluptate illum suscipit. Saepe, quo pariatur.
      </p>
    </>
  );
}

export default App;
