import Visor from './visor';

function Main() {
  return (
   <div  style={container}>
    <h1>Plan de Ortodoncia Invisible</h1>
    <Visor/>
   </div>
        
    
  );
}

const container = {
    flexGrow: 1,
    backgroundColor: '#f1f5f9',
    //width: '500px',
    //margin: '0 auto',
    padding: '2px',
    overflow: 'hidden',

};

export default Main;