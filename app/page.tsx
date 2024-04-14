import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



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

          <p className="rounded-lg p-5 text-center">Je suis une personne dynamique, axée sur les résultats, prête à relever de nouveaux défis.
            J&apos;ai une excellente aptitude à la communication avec les clients et à établir des relations de confiance.
            Je suis à l&apos;aise aussi bien en travaillant de manière autonome qu&apos;en équipe, et je suis constamment motivé à atteindre les objectifs fixés.
          </p>

        </div>
        <div className="flex flex-col items-center justify-center w-full h-screen bg-cover bg-center max-w-4xl" style={{ backgroundImage: "url('/images/photo1.jpg')" }}>
          <h2 className="text-center mb-4 text-rose-950">Mon CV téléchargeable ici</h2>
          <a href="/images/CV_sebastien_koenig.pdf" download className="mb-8">
            <Image src="/images/logo/cv.png" alt="cv téléchargeable" width={300} height={500} />
          </a>
        </div>

        <div className="">
          <div className="text-center text-rose-950 mt-9">
            <h3 className="mb-3 text-3xl ">COMPETENCE DANS LE DEVELOPPEMENT WEB</h3>
            <h4 className="text-2xl">Conception de sites web responsives pour différentes plateformes</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mb-8 mr-5 ml-5">
            <div className=" shadow-2xl border-4 border-black-500">
              <Image src="/images/logo/github.png" alt="Photo 1" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">Plateforme essentielle pour le développement collaboratif et la gestion de versions.</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <Image src="/images/logo/html5.png" alt="Photo 2" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">HTML structure le contenu web, utilisant des balises pour définir la hiérarchie des éléments.</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <Image src="/images/logo/javascript.png" alt="Photo 3" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">JavaScript dynamise les pages web, offrant des fonctionnalités interactives et améliorant l’expérience utilisateur.</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <Image src="/images/logo/php.png" alt="Photo 4" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">PHP est un langage de script côté serveur populaire pour le développement web dynamique.</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <Image src="/images/logo/react.png" alt="Photo 4" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">JavaScript dynamise les pages web, offrant des fonctionnalités interactives et améliorant l’expérience utilisateur.</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <Image src="/images/logo/symfony.png" alt="Photo 4" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">Symfony, un framework PHP, simplifie le développement web grâce à une architecture modulaire et robuste</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <Image src="/images/logo/uikit.png" alt="Photo 4" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2 ">framework front-end léger et modulaire pour le développement d&apos;interfaces. Une collection complète de composants</p>
            </div>
            <div className="shadow-2xl border-4 border-black-500">
              <Image src="/images/logo/wordpress.png" alt="Photo 4" className="w-full" />
              <p className="text-center mt-5 m-2 border-t-2  ">WordPress facilite la création de sites web avec sa plateforme conviviale et ses fonctionnalités étendues pour la gestion de contenu.</p>
            </div>
          </div>
          <div className="mr-8 ml-8 ">
            <h1 className='text-xl font-bold bg-gray-500 text-center'>Petit questions réponses</h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Quel est votre lieu de résidence actuel ?</AccordionTrigger>
                <AccordionContent>
                  Je réside à Strasbourg.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>Quel est votre parcours professionnel ?</AccordionTrigger>
                <AccordionContent>
                  J&apos;ai eu une variété d&apos;emplois, y compris être à mon compte à plusieurs reprises, notamment dans le domaine de la pâtisserie et du commerce en ligne de produits culturels et informatiques. J&apos;ai également travaillé comme chauffeur-livreur, concierge dans la fonction publique, magasinier-cariste et distributeur de journaux.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger>Quelle est votre nouvelle orientation professionnelle ?</AccordionTrigger>
                <AccordionContent>
                  Je suis en reconversion dans le développement. J&apos;ai suivi une formation en PHP Symfony et je suis actuellement chez OpenClassrooms pour une formation de 9 mois en développement web et WordPress avancé.
                </AccordionContent>
              </AccordionItem>
            </Accordion>      <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger>Quelles technologies utilisez-vous pour votre projet actuel ?</AccordionTrigger>
                <AccordionContent>
                  Ce site a été développé en React avec Next.js, en utilisant TypeScript.
                </AccordionContent>
              </AccordionItem>
            </Accordion>      <Accordion type="single" collapsible>
              <AccordionItem value="item-5">
                <AccordionTrigger>Quel est votre objectif académique ?</AccordionTrigger>
                <AccordionContent>
                  J&apos;aspire à obtenir un diplôme de niveau V en développement web.
                </AccordionContent>
              </AccordionItem>
            </Accordion>      <Accordion type="single" collapsible>
              <AccordionItem value="item-6">
                <AccordionTrigger>Quelles sont vos aspirations professionnelles à long terme ?</AccordionTrigger>
                <AccordionContent>
                  À long terme, j&apos;aimerais travailler dans une entreprise innovante où je pourrais contribuer à des projets significatifs et continuer à développer mes compétences.
                </AccordionContent>
              </AccordionItem>
            </Accordion>      <Accordion type="single" collapsible>
              <AccordionItem value="item-7">
                <AccordionTrigger>Comment avez-vous trouvé votre transition vers le développement web ?</AccordionTrigger>
                <AccordionContent>
                  La transition a été passionnante et enrichissante. J&apos;apprécie particulièrement la créativité et les défis que cela implique.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-8">
                <AccordionTrigger>Quels sont vos domaines d&apos;intérêt dans le développement web ?</AccordionTrigger>
                <AccordionContent>
                  J&apos;ai un intérêt particulier pour la conception d&apos;interfaces utilisateur conviviales et l&apos;optimisation des performances des sites web.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-9">
                <AccordionTrigger>Qu&apos;est-ce qui vous motive dans le développement web ?</AccordionTrigger>
                <AccordionContent>
                  Ce qui me motive, c&apos;est la possibilité de créer des produits numériques qui apportent de la valeur aux utilisateurs et qui contribuent à rendre le web plus accessible et plus convivial.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible >
              <AccordionItem value="item-10">
                <AccordionTrigger>Comment voyez-vous votre évolution dans le domaine du développement web ?</AccordionTrigger>
                <AccordionContent>
                  Je suis confiant dans ma capacité à continuer à apprendre et à m&apos;adapter aux évolutions rapides de l&apos;industrie du développement web. Je suis déterminé à rester à jour avec les nouvelles technologies et à continuer à perfectionner mes compétences.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-8 mb8"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}