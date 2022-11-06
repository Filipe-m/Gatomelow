import Data from '../DataBase/Products.json'
import { Link } from 'react-router-dom'

function Related() {
  let arr = []
  const sort = number => {
    while(arr.length < number){
      var r = Math.floor(Math.random() * 11) ;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
    console.log(arr)
  }
  sort(4)


  const toTop = () => window.scrollTo(0, 0)

  const data1 = Data[arr[0]]
  const data2 = Data[arr[1]]
  const data3 = Data[arr[2]]
  const data4 = Data[arr[3]]

  return (
    <div className=" md:w-[80%] font-ProductName grid w-[90%] md:flex md:justify-around  gap-6 mx-auto grid-cols-2 text-secundary-color">
      <Link className="w-40% md:w-40 grid place-items-center" onClick={toTop}  to={`/Gatomelow/Produto/${data1['id']}`}>
        <img className="w-32 rounded-md md:w-full" src={data1['image']} alt={data1['name']} />
        <h2 className="text-center text-sm h-10 line-clamp-2 overflow-hidden">
          {data1['name']}
        </h2>
        <h2 className="text-center font-bold">R${data1['price']}</h2>
        <h3 className="text-md text-center mt-2 text-sm">
          <span className="font-bold">4</span>x de{' '}
          <span className="font-bold">
            R$
            {(parseFloat(data1['price']) / 4).toLocaleString('pt-BR', {
              maximumSignificantDigits: 3
            })}
          </span>
        </h3>
      </Link>
      <Link className="w-40% md:w-40 grid place-items-center" onClick={toTop}  to={`/Gatomelow/Produto/${data2['id']}`}>
        <img className="w-32 rounded-md md:w-full" src={data2['image']} alt={data2['name']} />
        <h2 className="text-center text-sm h-10 line-clamp-2 overflow-hidden">
          {data2['name']}
        </h2>
        <h2 className="text-center font-bold">R${data2['price']}</h2>
        <h3 className="text-md text-center mt-2 text-sm">
          <span className="font-bold">4</span>x de{' '}
          <span className="font-bold">
            R$
            {(parseFloat(data2['price']) / 4).toLocaleString('pt-BR', {
              maximumSignificantDigits: 3
            })}
          </span>
        </h3>
      </Link>
      <Link className="w-40% md:w-40 grid place-items-center" onClick={toTop}  to={`/Gatomelow/Produto/${data3['id']}`}>
        <img className="w-32 rounded-md md:w-full" src={data3['image']} alt={data3['name']} />
        <h2 className="text-center text-sm h-10 line-clamp-2 overflow-hidden">
          {data3['name']}
        </h2>
        <h2 className="text-center font-bold">R${data3['price']}</h2>
        <h3 className="text-md text-center mt-2 text-sm">
          <span className="font-bold">4</span>x de{' '}
          <span className="font-bold">
            R$
            {(parseFloat(data3['price']) / 4).toLocaleString('pt-BR', {
              maximumSignificantDigits: 3
            })}
          </span>
        </h3>
      </Link>
      <Link className="w-40% md:w-40 grid place-items-center" onClick={toTop}  to={`/Gatomelow/Produto/${data4['id']}`}>
        <img className="w-32 rounded-md md:w-full" src={data4['image']} alt={data4['name']} />
        <h2 className="text-center text-sm h-10 line-clamp-2 overflow-hidden">
          {data4['name']}
        </h2>
        <h2 className="text-center font-bold">R${data4['price']}</h2>
        <h3 className="text-md text-center mt-2 text-sm">
          <span className="font-bold">4</span>x de{' '}
          <span className="font-bold">
            R$
            {(parseFloat(data4['price']) / 4).toLocaleString('pt-BR', {
              maximumSignificantDigits: 3
            })}
          </span>
        </h3>
      </Link>
    </div>
  )
}

export default Related
