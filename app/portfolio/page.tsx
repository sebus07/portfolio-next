
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'


// Importez les composants de votre carrousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

const portfolio = () => {
  return (
    <div>
      <Header />


      <div className='max-w-7xl mx-auto m-8 mb-8'>
        <div className="flex flex-col items-center justify-center shadow-xl bg-pink-50 m-8">
          <h3 className="text-3xl text-rose-950 pt-4">Projets WordPress</h3>
          <p className="text-2xl text-rose-950 mt-6 mb-8 text-center">Vous pouvez ouvrir chaque site en cliquant dessus. Tous les sites ont été créés sous WordPress avec du code personnalisé et non seulement à l'aide de WordPress</p>

          <Carousel className="m-8">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image src="/images/moi.png" alt="Slide 1" width={200} height={500} /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><Image src="/images/orange.png" alt="Slide 2" width={200} height={500} /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <Image src="/images/planty.png" alt="Slide 5" width={200} height={500} /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <Image src="/images/motaphoto.png" alt="Slide 3" width={200} height={500} /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> <Image src="/images/vintage.png" alt="Slide 6" width={200} height={500} /></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">  <Image src="/images/bruche.png" alt="Slide 4" width={200} height={500} /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:block">Previous</CarouselPrevious>
            <CarouselNext className="hidden md:block">Next</CarouselNext>
            <div className="flex justify-center md:justify-start">
              <CarouselPrevious className="block md:hidden bg-violet-">Previous</CarouselPrevious>
              <CarouselNext className="block md:hidden">Next</CarouselNext>
            </div>
          </Carousel>
        </div>


      </div>
      <div className='m-8'>
        <h2>Mes projet wordPress</h2>
      </div>
      <Footer />
    </div>
  )
}

export default portfolio