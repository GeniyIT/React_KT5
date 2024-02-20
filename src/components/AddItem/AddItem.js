

function AddItem(props) {

    const {newItem} = props

    return (
        <div>
            <button onClick={() => newItem()}>Добавить счетчик</button>
        </div>
    )
}

export default AddItem