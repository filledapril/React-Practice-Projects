import spinner from './spinner.gif'
const Loader = () => {
  return (
    <div className='loader'>
        <img src={spinner} alt="loading.." />
        <h1>Just a second...</h1>
        <p>Code by Filledapril</p>
    </div>
  )
}

export default Loader