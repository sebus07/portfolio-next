import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Footer from '@/components/Footer';
import Header from '@/components/Header';

// Importez les composants de votre carrousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="wrapper mb-8">
      <Header />
      <div className="flex flex-col items-center max-w-7xl mx-auto mt-8">
        <h1 className="text-5xl text-rose-950 m-5 ">Bienvenue sur mon portfolio</h1>
        <div className="flex-col m-3 mr-8 ml-8 bg-pink-50 rounded-lg p-5 text-center shadow-lg flex justify-center items-center">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/126136279?v=4" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p className=" rounded-lg p-5 text-center">  Je suis une personne dynamique, axée sur les résultats, prête à relever de nouveaux défis.
            J’ai une excellente aptitude à la communication avec les clients et à établir des relations de confiance.
            Je suis à l’aise aussi bien en travaillant de manière autonome qu’en équipe, et je suis constamment motivé à atteindre les objectifs fixés.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-center max-w-4xl" style={{ backgroundImage: "url('/images/photo1.jpg')" }}>
          <h2 className="text-center mb-4 text-rose-950">Mon CV téléchargeable ici</h2>
          <a href="/images/CV_sebastien_koenig.pdf" download className="mb-8">
            <img src="/images/logo/cv.png" alt="cv téléchargeable" width={300} height={500} />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center shadow-xl bg-pink-50 mb-8">
          <h3 className="text-3xl text-rose-950 pt-4">Projets WordPress</h3>
          <p className="text-2xl text-rose-950 mt-6 mb-8 text-center">Vous pouvez ouvrir chaque site en cliquant dessus. Tous les sites ont été créés sous WordPress avec du code personnalisé et non seulement à l'aide de WordPress</p>

          <Carousel className="m-8">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image src="/images/moi.png" alt="Slide 1" width={300} height={500} /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image src="/images/orange.png" alt="Slide 2" width={300} height={500} /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <Image src="/images/planty.png" alt="Slide 5" width={300} height={500} /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <Image src="/images/motaphoto.png" alt="Slide 3" width={300} height={500} /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <Image src="/images/vintage.png" alt="Slide 6" width={300} height={500} /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">  <Image src="/images/bruche.png" alt="Slide 4" width={300} height={500} /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:block">Previous</CarouselPrevious>
            <CarouselNext className="hidden md:block">Next</CarouselNext>
            <div className="flex justify-center md:justify-start">
              <CarouselPrevious className="block md:hidden bg-violet-">Previous</CarouselPrevious>
              <CarouselNext className="block md:hidden">Next</CarouselNext>
            </div>
          </Carousel>
        </div>
        <div className="">
          <div className="text-center text-rose-950 mt-9">
            <h3 className="mb-3 text-3xl ">COMPETENCE DANS LE DEVELOPPEMENT WEB</h3>
            <h4 className="text-2xl">Conception de sites web responsives pour différentes plateformes</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mb-8 mr-5 ml-5">
            <div className=" shadow-2xl border-4 border-black-500">
              <img src="/images/logo/github.png" alt="Photo 1" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">Plateforme essentielle pour le développement collaboratif et la gestion de versions.</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <img src="/images/logo/html5.png" alt="Photo 2" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">HTML structure le contenu web, utilisant des balises pour définir la hiérarchie des éléments.</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <img src="/images/logo/javascript.png" alt="Photo 3" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">JavaScript dynamise les pages web, offrant des fonctionnalités interactives et améliorant l’expérience utilisateur.</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <img src="/images/logo/php.png" alt="Photo 4" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">PHP est un langage de script côté serveur populaire pour le développement web dynamique.</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <img src="/images/logo/react.png" alt="Photo 4" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">JavaScript dynamise les pages web, offrant des fonctionnalités interactives et améliorant l’expérience utilisateur.</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <img src="/images/logo/symfony.png" alt="Photo 4" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">Symfony, un framework PHP, simplifie le développement web grâce à une architecture modulaire et robuste</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <img src="/images/logo/uikit.png" alt="Photo 4" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">framework front-end léger et modulaire pour le développement d'interfaces. Une collection complète de composants</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <img src="/images/logo/wordpress.png" alt="Photo 4" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2  ">WordPress facilite la création de sites web avec sa plateforme conviviale et ses fonctionnalités étendues pour la gestion de contenu.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}