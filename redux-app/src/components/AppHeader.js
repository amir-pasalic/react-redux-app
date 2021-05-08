import logo from '../assets/paragon.png' 

const AppHeader = () => {
    return (
    <header>
        <div className='left'>
             <img src={ logo } alt= 'logo' />
        </div>
        <div className='left'>
           <h2>
             React-Redux-App 
           </h2>  
        </div>
       
        </header>
          );
}
export default AppHeader;