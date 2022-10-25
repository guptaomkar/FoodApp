function Child(props) {
    return (
        <div>
            <h1 className="name">Name: {props.data.name} </h1>
            <h3 className="id">Id: {props.data.id}</h3>
            <h3 className="age">Age: {props.data.age}</h3>
        </div>

    )
}

export default Child;