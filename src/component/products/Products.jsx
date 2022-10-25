import Items from "../items/Items";
function Products(props) {
    let itemData = [
        {
            image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/08/Masala-Dosa1.jpg',
            name: 'Dhosa',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
            price: 'RS.150'

        },
        {
            image: 'https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg',
            name: 'Samosa with chai',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
            price: 'Rs.80'

        },
        {
            image: 'https://opt.toiimg.com/recuperator/img/toi/m-59862336/59862336.jpg&width=500&resizemode=4',
            name: 'Roti & Bhaji',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
            price: 'Rs.200'

        },
        {
            image: 'https://images.news18.com/ibnlive/uploads/2021/11/dhokla.jpg',
            name: 'Dhokla',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
            price: 'Rs.80'

        },
        {
            image: 'https://s3.ap-south-1.amazonaws.com/media.ibc24.in/wp-content/uploads/2022/08/biryani.jpg',
            name: 'Biryani',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
            price: 'Rs.250'

        }


    ]

    return (

        <div className="gallery">
            {itemData.map((items) => {
                return <Items data={items} />
            })}
        </div>
    )



}

export default Products;