 import store from "../../../core/shared/redux-store/redux-store"


type Props = {
    textBoxdata: (value: string) => void
}

export default function Sibling1() {

    return (
        <div>
            Sibling1
            <input type="text"  onChange={(event)=>{
                const action ={type:'txtdata', data:event.target.value}
                store.dispatch(action)
            }}></input>
        </div>
    )
}