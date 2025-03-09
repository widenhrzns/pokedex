import { DivComponent } from "../../common/div-component";
import "./header.css";

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.element.innerHTML = "";
    this.element.classList.add("header");
    this.element.innerHTML = `
      <div class="logo">
        <img src="./static/icons/pokeball.svg" alt="Иконка покебола" />
      </div>
      <div class="menu">
        <a class="menu__item" href="#">
          <img src="./static/icons/search.svg" alt="Иконка поиска" />
          Покепоиск
        </a>
        <a class="menu__item" href="#favourites">
          <img src="./static/icons/pokemon-gotcha.svg" alt="Иконка покебола" />
          Пойманные
          <div class="menu__counter">${this.appState.favorites.length}</div>
        </a>
      </div>
    `;
    return this.element;
  }
}
