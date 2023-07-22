Usage:

npm i usefetch_simple_hook

import { useFetchHook } from 'usefetch_simple_hook';

const {data, loading, error, doFetch} = useFetchHook();

for the first render call hook:

useEffect(() => {
doFetch(Your_URL);
}, []);

to call a hook by pressing the button:

const handleClick = () => {
doFetch(Your_URL);
}
