import './Form.css'


export function Form(){
    return(
        <>
        <div className='Main_container'>

            <div className='content'>
                   <h1>BILLING CALCULATOR </h1>
                   <div className='effects' >
                        <form className='form'>
                            
                    <div className='form_child'>
                        <legend>Name</legend>
                        <input type="text" placeholder="John"></input>
                    </div>
                    <div className='form_child'><legend>Sim Agent:</legend><input type="text" placeholder="Airtel"></input></div>
                        <div className='form_child'><legend>Mobile No:</legend> <input type="text" placeholder="9567997xxxx"></input></div>
                        <div className='form_child'> <legend>Start Date:</legend><input type="date"></input></div>
                        <div className='form_child'> <legend>End Date:</legend><input type="date"></input></div>
                        <button className='submit'>Calculate</button>
                        </form>
                   </div>
            </div>

        </div>
        </>
    )
}