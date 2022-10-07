import React from 'react';


const Hello = () => {
//     return (
//         <div className='dummyclass'>
//             <h1>Hello ppl</h1>
//             </div>
//     )
// }

return React.createElement('div' ,{className:'hi'}, React.createElement('h1',{color:'blue'}, 'Hello pppl'));
}

export default Hello;