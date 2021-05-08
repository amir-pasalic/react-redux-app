
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import SongDetail from './components/SongDetail';
import SongList from './components/SongList'; 


const App = () => {
    return( 
    
    <div>
        < AppHeader />  
        <div className='left'>
            < SongList /> 
        </div>
         <div className='right panel'>
            < SongDetail /> 
        </div>       
        < AppFooter />   
    </div>

    );
}

export default App;