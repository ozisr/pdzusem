import React from 'react';
import Image from 'next/image';

const Okolica = () => {
  return (
    <>
      <p className="text-textColor dark:text-darkOnSurface">
        Lokacija Stolpa ljubezni predstavlja pravo oazo miru, narave in kulturne dediščine, ki obiskovalcem nudi veliko več kot le čudovit razgled.
      </p>
      <br></br>
      <p className="text-textColor dark:text-darkOnSurface">
        <strong>Panoramski razgled:</strong> Stolp stoji na vrhu Žusma, 669 m nadmorske višine, in ob jasnem vremenu ponuja razgled, ki sega vse od Zasavskega hribovja, Pohorja, preko Kamniško-Savinjskih Alp do Triglava, ter čez meje v Hrvaško.
      </p>
      <p className="text-textColor dark:text-darkOnSurface">
        <strong>Dostopnost:</strong> Do stolpa je mogoče priti peš ali s kolesom iz različnih izhodišč, poti pa so urejene tako, da so primerne za družine z otroki in starejše obiskovalce, kot tudi za zahtevnejše ljubitelje hribov. Izberite pot primerno lastnim zmožnostim!
      </p>
      <p className="text-textColor dark:text-darkOnSurface">
        <strong>Kulturna dediščina:</strong> V neposredni bližini stolpa se nahajata <a className="link" target="_blank" rel="noopener" title="nekaj podatkov o cerkvi Sv. Valentina" href="https://www.turizem-sentjur.com/Sakralni-objekti/Cerkev-sv.-Valentina-na-Zusmu/">cerkev sv. Valentina</a> in <a className="link" target="_blank" rel="noopener" title="nekaj podatkov o cerkvi Sv.Jakoba" href="https://www.turizem-sentjur.com/Sakralni-objekti/Cerkev-sv.-Jakoba-na-Zusmu/">cerkev sv. Jakoba</a>. V bližini lahko od daleč občudujemo mogočne razvaline gradu Žusem, ki pričajo o bogati zgodovini tega območja. Sprehodimo se lahko po krožni <a className="link" target="_blank" rel="noopener" title="zemljevid doživljajske grajske učne poti" href="https://www.turizem-sentjur.com/f/pics/Pohodnistvo/Sentjur_Tour_pohodnistvo_dozivetje_grajska_ucna_pot_Zusem_Kozjansko_za_druzine_b.jpg">doživljajski Grajski učni poti</a>, ki nas v 9km popelje do štirih doživljajskih igrišč. V Loki pri Žusmu si v <a className="link" target="_blank" rel="noopener" title="nekaj podatkov o cerkvici Sv. Leopolda" href="https://www.turizem-sentjur.com/Sakralni-objekti/Cerkev-sv.-Leopolda-v-Loki-pri-Zusmu/">cerkvici sv. Leopolda</a> lahko ogledate stalno razstavo Pokrajinskega muzeja Celje o glažutarstvu v teh krajih. V podzemlju sosednjega hriba, Babne Gore, si je mogoče ogledati zemljanko - <a className="link" target="_blank" rel="noopener" title="Snekaj podatkov o Rafovem rovu" href="https://visitsmarje.si/destinacije/rafov-rov/">Rafov rov</a>. Možen je voden ogled celotnega rova z različnimi sobanami.
      </p>
      <figure>
          <Image
          src="/images/vsebina/rafov_rov.jpg"
          alt="Notranjost zemljanke Rafov rov, ena izmed soban"
          width={400}
          height={400}
          className="m-auto"/>
          <figcaption className="caption">Slika: Rafov rov</figcaption>
      </figure>
      <p className="text-textColor dark:text-darkOnSurface"> 
        <strong>Dodatne aktivnosti:</strong> Ob obisku so lahko obiskovalci deležni tudi manjših adrenalinskih aktivnosti, kot je zipline za najmlajše, in lahko uživajo v različnih pohodniških poteh, ki se vijejo skozi slikovito naravo. Bolj pogumni se lahko odločijo za skok z jadralnim padalom, saj je na vzhodnem vrhu urejeno vzletišče za padalce. Tisti z bolj pustolovskim duhom, se lahko podajo na lov za razbojnikom Guzajem v <a className="link" href="https://www.pustolovscina-kozjansko.si/" target="_blank" rel="noopener" title="Pustolovščina Kozjansko">sobi pobega na prostem</a>. Okrepčate se lahko ob vznožju pri <a className="link" href="https://zurej.si/" target="_blank" rel="noopener" title="Spletna stran turistične kmetije Žurej">turistični kmetiji Žurej</a>, kjer lahko tudi prenočite, ali pa si izposodite električno kolo. Ob vikendih si privoščite najboljšo pico v gostilni s tradicijo <a className="link" href="https://restaurantguru.com/Okrepcevalnica-Pizzerija-Lizika-Elizabeta-Coklc-sp-Grobelce/menu" target="_blank" rel="noopener" title="Meni okrepčevalnice in pizzerije Lizika">"Lizika" Čoklc</a>, ali pa si privoščite kavo ob slikovitem <a className="link" href="https://ramna.si/" target="_blank" rel="noopener" title="Spletna stran kavarne in slaščičarne Ramna">Slivniškem jezeru</a>. Tu se lahko tudi zapeljete s čolnom ali supate, najbolj pa je cenjeno med športnimi ribiči. To območje je zaradi svojega razgibanega reliefa, prepredenosti s cestami in redkega prometa izvrsten poligon za ljubitelje cestnega kolesarstva, saj ponuja veliko vzponov z različnimi nakloni in dolžinami.
      </p>
      <figure>
          <Image
          src="/images/vsebina/slivnisko.jpg"
          alt="Ptičji pogled na Slivniško jezero iz vzhodne strani, s kozjanskim hribovjem v ozadju"
          width={400}
          height={400}
          className="m-auto"/>
          <figcaption className="caption">Slika: Slivniško jezero</figcaption>
      </figure>
    </>
  )
};

export default Okolica;