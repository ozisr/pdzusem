import React from 'react';
import Image from 'next/image';

const Megaliti = () => {
  return (
    <>
      <p>
        Megaliti na Žusmu so skupine velikih kamnov, ki so razporejene v krožnih ali podolgovatih formacijah na obrobnih in vrhnjih delih Žusma. Pred več kot 15 leti je nenavadno umeščenost kamnov v prostor med nabiranjem gob opazila Andreja Križan Lipnik. Po pomoč se je obrnila na patra Karla Gržana, ki je ugotovil, da megaliti skupaj z okoliškimi zgodovinsko pomembnimi območji, kot so grad in cerkve, tvorijo preslikavo ozvezdja Kačenosca na zemeljsko površje. 
      </p>
      <br></br>
      <p>
        Leta 2018 je skupina štirih raziskovalcev, imenovana "Megaliti Žusma", začela podrobneje preučevati te kamnite formacije. Njihove raziskave so pokazale, da megaliti obiskovalcem ponujajo čiščenje, zdravljenje, zaščito in uravnavanje notranjih duševnih procesov. Od takrat Žusem obiskujejo številni radovedneži, raziskovalci in posamezniki, ki v območju megalitov iščejo ozdravitev ali duhovno izkušnjo. 
      </p>
      <br></br>
      <p>
        Obiskovalci pogosto začnejo svoj obisk z opazovanjem sončnega vzhoda na Žusmu, nato pa se odpravijo na voden ogled petih lokacij megalitov. V okviru Društva Izviri Dobrina, kjer deluje sekcija Megaliti Žusma, prirejajo različne dejavnosti za skupine, povezane s praznovanji prastarih praznikov, kot so solsticiji in ekvinokciji. Tako na primer ob pomladanskem enakonočju izvajajo ženski in moški krog, med poletnim sončnim obratom pa prirejajo dogodke, posvečene družinam, z naslovom "Občutim megalite Žusma". 
      </p>
      <br></br>
      <p>
        Za tiste, ki jih zanima podrobnejša zgodovina in pomen megalitov na Žusmu, je na voljo knjiga "Nove zgodbe Žusma" avtorice Andreje Križan Lipnik. Knjiga je na voljo v Turistično-informacijskem centru (TIC) Šentjur ali po naročilu. 
      </p>
      <p>
      <br></br>
        Obisk megalitov na Žusmu je tako priložnost za doživljanje narave, raziskovanje starodavnih struktur in iskanje notranjega ravnovesja skozi darove, ki jih ponujajo ti skrivnostni kamni.
      </p>
      <div className="figures">
        <figure>
          <Image
          src="/images/vsebina/knjiga.jpg"
          alt="Knjiga Nove zgodbe Žusma avtorice Andreje Križan Lipnik"
          width={300}
          height={400}
          className="m-auto h-[400px] object-contain"
          />
          <figcaption className="caption">Slika: Knjiga Nove zgodbe Žusma</figcaption>
        </figure>
        <figure>
          <Image
          src="/images/vsebina/kacenosec.png"
          alt="Keplerjeva slika supernove na Kačenosčevi nogi"
          width={300}
          height={400}
          className="m-auto h-[400px] object-contain"
          />
          <figcaption className="caption">Slika: Ozvezdje kačenosca</figcaption>
        </figure>
      </div>
    </>
  )
};

export default Megaliti;