import React from 'react';
import Image from 'next/image';

const Simbolika = () => {
  return (
    <>
      <p className="text-textColor dark:text-darkOnSurface">
        Stolp ljubezni je več kot le razgledna točka – je simbol ljubezni, povezovanja in skupnostne zavesti. Navdih za njegovo ime izhaja iz bližnje cerkve sv. Valentina, ki že stoletja varuje zaljubljene, kar stolpu daje posebno romantično noto.
        Projekt ima pomemben kulturni in družbeni pomen, saj: 
      </p>
      <p className="text-textColor dark:text-darkOnSurface">
        <strong>- Povdarja moč skupnosti:</strong> Žusemski planinci in krajani, ki smo se že leta 2007 začeli ukvarjati z idejo o stolpu, smo s skupnimi močmi, donacijami in prostovolnim delom zgradili ta simboličen objekt. Pri projektu so in še sodelujejo tako krajani, člani PD Žusem, podporniki kot tudi strokovnjaki in obrtniki iz regije.
      </p>
      <p className="text-textColor dark:text-darkOnSurface">
      <strong>- Krepi družbeno sodelovanje:</strong> Ob otvoritvi 26. aprila 2015 se je zbralo več kot 1500 obiskovalcev, med katerimi so bili tako lokalni prebivalci kot predstavniki občinskih oblasti, kar kaže na močan družbeni ponos in podporo projektu. Ob vsakoletnih tradicionalnih prireditvah pa služi kot mesto zborovanja.
      </p>
      <p className="text-textColor dark:text-darkOnSurface">
      <strong>- Predstavlja romantično oazo:</strong> Poleg arhitekturne dovršenosti stolp nosi tudi čustveni naboj – na vrhu je nameščen zvon želja, kjer pari zazvonijo v upanju na srečno skupno prihodnost, s čimer Stolp ljubezni postane priljubljeno mesto za romantične trenutke.
      </p>
      <figure>
          <Image
          src="/images/vsebina/zvon.JPG"
          alt="Bližnja fotografija zvona na stolpu s hribovjem v ozadju"
          width={300}
          height={300}
          className="m-auto"/>
          <figcaption className="caption">Slika: Zvon želja </figcaption>
      </figure>
    </>
  )
};

export default Simbolika;