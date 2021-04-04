import JSX from "../../helpers/createHTML";
import { headerModel } from "../../models/header";
import {updateBlock} from "../../presentation/updateBlock";

export const Header: any = () => {
    let name = headerModel.name;
    const changeName = (e: Event) => {
        // @ts-ignore
        name = e.target.value;
    }
    const changeConfig = () => {
        headerModel.name = name;

        // todo: Когда нужно обновить компонент, вызывается updateBlock
        updateBlock(headerModel.id, Header)
    }
    return (
        <div className="asd" id={headerModel.id}>
            <input type="text" oninput={changeName} value={headerModel.name}/>
            <button type='button' onclick={changeConfig}> CHANGE NAME</button>
            Hello {headerModel.name}
        </div>
    );
}

