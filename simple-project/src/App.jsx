import './App.css'
import Button from './components/modules/Button';
import FirstComponent from './components/modules/FirstComponent';
import { Lego, Gole } from './components/modules/LegoAndGole';
import WhatIsJsx from './components/Chapter/WhatIsJsx';
import WhatIsReact from './components/Chapter/WhatIsReact';
import Chapter01 from './components/Chapter/Chapter01/Chpater01';
import Chapter02 from './components/Chapter/Chapter02/Chapter02';
import Chapter022 from './components/Chapter/Chapter02/Chapter02-2';

function App() {

  return( 
    <> {false && <WhatIsJsx/> &&
       <WhatIsReact/> &&
       <Button/> &&
       <Lego/> &&
       <Gole/> &&
       <FirstComponent/> && <Chapter01/> 
       && <Chapter02 />}
       <Chapter022/>
       
       
       </>
    

);



}

export default App
