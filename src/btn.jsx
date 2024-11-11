
export default function Btn({col,click = null}){
    let styles = {
        background: col,
    }

    return <button className="rounded-full h-7 w-20 text-center 3" style={styles} onClick={click}>{col}</button>
}