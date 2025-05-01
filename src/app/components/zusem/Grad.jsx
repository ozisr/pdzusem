import React from 'react';
import Image from 'next/image';

const Grad = () => {
  return (
    <>
      <hr></hr>
      <p className="text-center text-secondary dark:text-darkOnPrimary">
        <strong>Pozor! Grad Žusem je aktivna ruševina, zato je gibanje v njegovi bližini močno odsvetovano in na lastno odgovornost!</strong>
      </p>
      <hr></hr>
      <br></br>

      <p className="text-textColor dark:text-darkOnSurface">
        Grad Žusem je ena izmed pomembnih srednjeveških utrdb na Kozjanskem, katere zgodovina sega v 12. stoletje. Nahaja se na nadmorski višini približno 509 metrov, kar mu je v preteklosti omogočalo odličen nadzor nad okoliško pokrajino in strateško pomembne poti. Danes so ohranjene predvsem ruševine, a že te ostanke je mogoče zlahka prepoznati kot sledi nekdaj mogočne utrdbe, ki je igrala ključno vlogo v obrambi območja. 
      </p>
      <figure>
          <Image
          src="/images/vsebina/grad_rusevine.jpg"
          alt="Bele ruševine gradu, ki izstopajo iz okoliškega gozda v barvah jeseni"
          width={400}
          height={400}
          className="m-auto"/>
          <figcaption className="caption">Slika: Ruševine gradu danes </figcaption>
      </figure>
      <br></br>
      <p className="text-textColor dark:text-darkOnSurface">
        <strong>Zgodovinski razvoj gradu</strong>
      </p>
      <p className="text-textColor dark:text-darkOnSurface">
        Grad Žusem je bil zgrajen v času, ko so na meje Posotelja pritiskali Madžari. Krški škofje so skušali zaščititi svoje ozemlje in so za namene obrambe pred morebitnimi napadi v tem območju zgradili več gradov, tudi Žusem in Žamerk. V 12. stoletju, je grad služil kot vojaška utrdba, ki je nadzorovala pomembne prometne poti in lokalne krajevne centre. Zaradi svoje lege je imel grad strateški pomen, saj je s tem varoval celotno regijo in omogočal nadzor nad okoliškimi območji. Iz pisnih virov je razvidno, da je grad v 14. stoletju obsegal le stolpasto jedro, ki se mu je pred letom 1437 pridružilo tudi stanovanjsko poslopje. Viri omenjajo, da je imela grajska kapela križni obok iz klesanega kamna, kar da sklepati, da je bila gotska. Ob gradu sta stala konjski hlev in pristava, leta 1624 tudi opekarna; pod gradom je bil ribnik, ki se omenja že 1496. 5. maja 1635 so grad oplenili uporni kmetje, leta 1695 pa je pogorel. Glažutarski podjetnik Leopold Fieglmüller ga je iz davčnih razlogov leta 1871 razkril in pet let pozneje deloma porušil.
      </p>
      <figure>
          <Image
          src="/images/vsebina/maketa.jpg"
          alt="Detajlna maketa gradu Žusem, ki prikazuje grad kakor je izgledal v svojem največjem obsegu"
          width={400}
          height={400}
          className="m-auto"/>
          <figcaption className="caption">Slika: Maketa gradu, ki jo je izdelal dr. Igor Sapač</figcaption>
      </figure>
      <br></br>
      <p className="text-textColor dark:text-darkOnSurface">
        <strong>Arhitekturne značilnosti in ruševine</strong>
      </p>
      <p className="text-textColor dark:text-darkOnSurface">
        Danes je grad Žusem razvalina, ki priča o značilnostih srednjeveške gradnje. Ostanki obzidij, stolpov in drugih gradbenih elementov nudijo vpogled v obrambno arhitekturo tistega časa. Grad je bil sprva zgrajen z namenom zaščite, kar se kaže v močnih zidovih in strateško postavljenih stolpih, ki so omogočali dober pregled nad okolico. Kljub temu, da sta čas in narava vzela naza večino prvotne zgradbe, so ostanki še danes viden del lokalne kulturne dediščine in služijo kot opomnik na bogato preteklost.
      </p>
      <p className="text-textColor dark:text-darkOnSurface">
        Grad Žusem je več kot le ostanek srednjeveške utrdbe – je simbol zgodovinske moči, obrambnega umeščanja in kulturne dediščine Kozjanskega hribovja. Njegove ruševine nas opominjajo na čas, ko so bili gradovi ključni gradniki lokalne varnosti in stabilnosti. Danes grad pritegne obiskovalce z bogato zgodovino, arhitekturnimi ostanki in edinstvenim pogledom na preteklost, kar ga uvršča med pomembne točke za spoznavanje zgodovine regije.
      </p>
      <br></br>
      <p className="text-textColor dark:text-darkOnSurface">
        Vpetost gradu in graščakov v življenja vsakdanjih ljudi se izkazuje skozi mnogo zgodb in legend, ki so se pripovedovala iz roda v rod. V 90ih jih je zbral in uredil Daniel Artiček. Izdal jih je v knjigi <a className="link" href="https://books.google.si/books/about/Legende_grofije_%C5%BEusemske.html?id=nwHaAAAAMAAJ&redir_esc=y" target="_blank" rel="noopener" title="Informacije o knjižni izdaji na spletni strani Google books">Legende grofije Žusemske</a>. Odstirajo nam delček naše krajevne zgodovine, ki niti ni tako silno oddaljena. V legendah so pretežno opisani dogodki iz dela in življenja navadnega človeka, tlačana, bajtarja, kmeta, nekaj pa tudi o grajski gospodi z gradu Žusem. Pogosto srečujemo pripovedi o vinu in vinogradništvu, ki so za te kraje še posebej značilni.
      </p>

      <div className="figures">
        <figure>
          <Image
          src="/images/vsebina/grad1.jpg"
          alt="Litografija gradu, ki jo je izdelal Jozef Franz Kaiser leta 1830"
          width={400}
          height={400}
          className="m-auto h-[300px] object-contain"/>
          <figcaption className="caption">Slika: Litografija gradu iz leta 1830</figcaption>
        </figure>
        <figure>
          <Image
          src="/images/vsebina/grad2.jpg"
          alt="Litografija gradu avtorja G.M. Vischers iz knjige Topographia Ducatus Stiriae"
          width={400}
          height={400}
          className="m-auto h-[300px] object-contain"/>
          <figcaption className="caption">Slika: Litografija iz topografije Štajerske iz leta 1681</figcaption>
        </figure>
      </div>
    </>
  )
};

export default Grad;