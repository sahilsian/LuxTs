import './App.css'
import useSystem from "./hooks/useSystem.ts";
import {useEffect} from "react";
import Router from "./core/system/route/router.tsx";
import withListeners from "./withListeners.tsx";

const HUB_CONNECTION_URL = "http://localhost:5073/hub";

function App() {
    const {status, createConnection} = useSystem();

    useEffect(() => {
        if (status === "idle") {
            createConnection(HUB_CONNECTION_URL);
        }
    }, [status, createConnection]);

    return <Router/>
}

export default withListeners(App)
