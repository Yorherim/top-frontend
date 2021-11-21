import type { NextPage } from "next";
import { Htag } from "../components/Htag";

const Home: NextPage = () => {
    return (
        <div>
            <Htag tag="h1">Текст</Htag>
        </div>
    );
};

export default Home;
