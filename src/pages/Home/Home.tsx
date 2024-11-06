import { Header } from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import { Skillset } from "../../components/Skillset/Skillset";


export const Home = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <Skillset />
        </div>
    );
}