import Header from './components/Header';
import Container from './components/Container';
import Banner from './components/Banner';

import {useState} from 'react'
import ReactDOM from 'react-dom'

import AddCostModal from './modals/AddCostModal';
import { useSelector } from 'react-redux'
import Extra from './components/Extra';

function App() {
  const costs = useSelector(state=> state.costs)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = ()=>{
    setIsModalOpen(prev => !prev)
  }
  return (
    <div className="w-screen h-screen bg-tertiary top-0 left-0 absolute overflow-y-auto">
      <Extra>

      </Extra>

      {
      isModalOpen 
      && 
      ReactDOM.createPortal(<AddCostModal toggleModal={toggleModal}/>, document.getElementById('modal'))
      
      }
      


      <Header toggleModal={toggleModal}/>
      <Container>
        <Banner/>
        {costs.length > 0 &&
          costs.map(cost => (
            <div className='w-full bg-black/10 my-3 rounded-xl p-3 flex flex-wrap items-center content-center gap-5' key={cost.id}>
              <h1 className='p-4 bg-primary text-light font-bold text-xl rounded-xl'>${new Intl.NumberFormat().format(cost.cost)}</h1>
              <h1 className=' text-primary capitalize grow font-bold text-xl rounded-xl'>{cost.title}</h1>
              <h1>{cost.datetime}</h1>
            </div>
          ))
        }

      </Container>
    </div>
  );
}

export default App;
