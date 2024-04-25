import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
import tekopp from "@/public/tekopp.jpg";
import { UkensHoydepunkt } from "../UkensHoydepunkt";
import { BliFrivilligCard } from "../BliFrivilligCard";
import { StoreHeader } from "../StoreHeader";
import test from "@/public/test.jpg";

export const HomePage = async () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LandingHeader />

            <main className="">
                <div className="flex-1  lg:-mt-10 p-2 px-6 md:px-20 lg:px-40 lg:pt-20">
                    <UkensHoydepunkt
                        image={tekopp}
                        text="Antikk kopp"
                        store="Fretex"
                        description="Denne uken er ukens høydepunkt en antikk kopp, som skinner i sin eldgamle prakt..."
                    />
                </div>
                <StoreHeader
                    image={test}
                    store="Fretex"
                    description="Butikken er en av de eldste aktørene i byen. Her finner du alt av klær og tilbehør, inkludert andre ting som servise og sysaker. Ta turen innom, så skal vi hjelpe deg."
                    vision="Fretex visjon"
                    text="Visjonen til Fretex er å skape en bærekraftig og
                inkluderende samfunn der ingen ting går til spille.
                Fretex har en visjon om å redusere avfall og fremme
                miljøbevissthet ved å gi nytt liv til brukte varer.
                Våres mål er ikke bare å tilby rimelige produkter til
                kunder, men også å støtte ulike veldedige formål og
                sosiale initiativer."
                />

                <BliFrivilligCard />
                <Button title="Se alle arrangementer" link="/" />
            </main>
        </div>
    );
};
