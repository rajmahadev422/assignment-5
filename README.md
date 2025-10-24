# useFetch
[Frontend Link](https://effervescent-gingersnap-ab2b57.netlify.app/)

## How to Start
```
npm i 
npm run dev
```
##
d -> data,
l -> loading,
e -> error

## Hook Code

```js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [urlData, setUrlData] = useState({
    d: [],
    l: false,
    e: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setUrlData({ d: null, l: true, e: null });

      try {
        const response = await fetch(url);

        const products = await response.json();

        setUrlData({ d: [...products], l: false, e: null });
      } catch (err) {
        setUrlData({ d: null, l: false, e: err.message });
      }
    };
    fetchData();
  }, [url]);

  return urlData;
}

export default useFetch;
```
## Features
- return data
```
urlData = {
  d,
  l,
  e
}
```
