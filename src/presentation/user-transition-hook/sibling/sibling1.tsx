

type Props = {
    textBoxdata: (value: string) => void
}

export default function Sibling1({textBoxdata}: Props) {

    return (
        <div>
            Sibling1
            <input type="text"  onChange={(event)=>{
                textBoxdata(event.target.value)
            }}></input>
        </div>
    )
}