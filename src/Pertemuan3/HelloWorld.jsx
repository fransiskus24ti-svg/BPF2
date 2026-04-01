export default function HelloWorld(){
    const propsUserCard = {
        nama: "Tuanzebe",
        nim: "652242",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <img src="img/wk.jpg" width="600"/>
            <h1>Oluwa Dec</h1>
            <p>wagwan general</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
            nama = "earl"
            nim = "2455301119"
            tanggal = "2002/12/14"/>
            <UserCard{...propsUserCard}/>
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small>Salam Dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}