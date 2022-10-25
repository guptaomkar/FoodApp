import Child from "../child/Child";

function Parent(props) {

    let studentData=[
        {
            name:'Alex',
            id:101,
            age:21
        },
        {
            name:'Sam',
            id:102,
            age:22
        },
        {
            name:'Rock',
            id:103,
            age:25
        }
    ]

    return (
        <div>
            {studentData.map((item)=>{
              return <Child data={item}/>
            })};

        </div>

    );

}

export default Parent;