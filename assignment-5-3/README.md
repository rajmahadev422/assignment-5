# useFetch
[Frontend Link]()

## How to Start
```
npm i 
npm run dev
```
## Hook Code

```js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [urlData, setUrlData] = useState({
    data: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setUrlData({ data: null, loading: true, error: null });

      try {
        const response = await fetch(url);

        const products = await response.json();

        setUrlData({ data: [...products], loading: false, error: null });
      } catch (err) {
        setUrlData({ data: null, loading: false, error: err.message });
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
  data,
  loading,
  error
}
```