```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let cleanup = false;
    try {
        console.log('Effect running, count:', count);
      return () => {
        cleanup = true;
        console.log('Cleanup function running');
      };
    } catch (error) {
      console.error('Error in useEffect cleanup:', error);
      cleanup = true;
    }
    return () =>{
        if(!cleanup){
            console.log('Cleanup function not running');
        }
    }
  }, [count]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```