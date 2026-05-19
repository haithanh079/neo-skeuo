import { mount } from "svelte";
import App from "./App.svelte";
import "@neo-skeuo/web-css/index.css";

mount(App, { target: document.getElementById("app")! });
